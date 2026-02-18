"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Particle {
  tx: number;
  ty: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  /** 0 = steam, 1 = cup, 2 = plate */
  region: number;
  phase: number;
  drift: number;
}

const PARTICLE_COUNT = 1600;
const MOUSE_RADIUS = 180;
const PUSH_STRENGTH = 3;
const SPRING = 0.038;
const DAMPING = 0.92;

/** Coordinate space for particle targets */
const COORD_SPACE = 300;
/** Image is drawn smaller than the coord space so particles have room to drift */
const DRAW_SIZE = 220;

function sampleImagePoints(img: HTMLImageElement, count: number): Particle[] {
  const offscreen = document.createElement("canvas");
  offscreen.width = COORD_SPACE;
  offscreen.height = COORD_SPACE;
  const ctx = offscreen.getContext("2d")!;

  // Draw image centered and smaller so particles have padding for drift
  const aspect = img.width / img.height;
  let dw: number, dh: number;
  if (aspect > 1) {
    dw = DRAW_SIZE;
    dh = DRAW_SIZE / aspect;
  } else {
    dh = DRAW_SIZE;
    dw = DRAW_SIZE * aspect;
  }
  const dx = (COORD_SPACE - dw) / 2;
  const dy = (COORD_SPACE - dh) / 2;
  ctx.drawImage(img, dx, dy, dw, dh);

  const imageData = ctx.getImageData(0, 0, COORD_SPACE, COORD_SPACE);
  const data = imageData.data;

  const filled: { x: number; y: number }[] = [];
  for (let y = 0; y < COORD_SPACE; y += 2) {
    for (let x = 0; x < COORD_SPACE; x += 2) {
      const idx = (y * COORD_SPACE + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];
      if (a < 50) continue;
      if (r > 235 && g > 235 && b > 235) continue;
      filled.push({ x: x - COORD_SPACE / 2, y: y - COORD_SPACE / 2 });
    }
  }

  if (filled.length === 0) return [];

  // Find the bounding box to classify y-regions relative to image content
  let minY = Infinity,
    maxY = -Infinity;
  for (const p of filled) {
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }
  const span = maxY - minY;
  // Steam: top ~42% (wavy tendrils), Cup: next ~42% (bowl body + rim lines), Plate: bottom ~16% (bottom wave)
  const steamEnd = minY + span * 0.415;
  const cupEnd = minY + span * 0.815;

  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const src = filled[Math.floor(Math.random() * filled.length)];
    // Classify region by y position
    let region: number;
    if (src.y < steamEnd)
      region = 0; // steam
    else if (src.y < cupEnd)
      region = 1; // cup
    else region = 2; // plate

    particles.push({
      tx: src.x + (Math.random() - 0.5) * 2,
      ty: src.y + (Math.random() - 0.5) * 2,
      x: (Math.random() - 0.5) * COORD_SPACE * 1.5,
      y: (Math.random() - 0.5) * COORD_SPACE * 1.5,
      vx: 0,
      vy: 0,
      size: 1.2 + Math.random() * 0.8,
      region,
      phase: Math.random() * Math.PI * 2,
      drift: 2.5 + Math.random() * 3,
    });
  }
  return particles;
}

export function ParticleJava() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef(300);
  const { resolvedTheme } = useTheme();
  const [canvasSize, setCanvasSize] = useState(300);

  /* Observe the wrapper size and update canvas dimensions */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const updateSize = () => {
      const s = Math.min(wrapper.clientWidth, wrapper.clientHeight, 380);
      sizeRef.current = s;
      setCanvasSize(s);
    };

    const ro = new ResizeObserver(updateSize);
    ro.observe(wrapper);
    updateSize();
    return () => ro.disconnect();
  }, []);

  /* Main animation effect */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = sizeRef.current;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Load the reference image and sample points
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/assets/java.png";

    img.onload = () => {
      if (particlesRef.current.length === 0) {
        particlesRef.current = sampleImagePoints(img, PARTICLE_COUNT);
      }
      startAnimation();
    };

    type RGB = [number, number, number];
    /** Returns [steam, cup, plate] colors for the current theme */
    function getRegionColors(theme: string | undefined): RGB[] {
      if (theme === "dark") {
        return [
          [100, 220, 120], // steam  → green
          [100, 160, 255], // cup    → blue
          [180, 100, 255], // plate  → purple
        ];
      }
      return [
        [230, 60, 80], // steam  → red
        [60, 120, 230], // cup    → blue
        [160, 60, 210], // plate  → purple
      ];
    }

    let time = 0;

    function startAnimation() {
      function animate() {
        if (!ctx || !canvas) return;
        const curSize = sizeRef.current;
        const scale = curSize / COORD_SPACE;
        const cx = curSize / 2;
        const cy = curSize / 2;

        // Re-sync canvas resolution if size changed
        if (canvas.width !== Math.round(curSize * dpr)) {
          canvas.width = curSize * dpr;
          canvas.height = curSize * dpr;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        time += 0.018;
        const colors = getRegionColors(resolvedTheme);
        ctx.clearRect(0, 0, curSize, curSize);

        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Ambient drift
          const noiseX = Math.sin(time * 1.3 + p.phase) * p.drift;
          const noiseY = Math.cos(time * 1.1 + p.phase * 1.7) * p.drift;

          // Spring toward target + noise offset
          p.vx += (p.tx + noiseX - p.x) * SPRING;
          p.vy += (p.ty + noiseY - p.y) * SPRING;

          // Mouse repulsion (in screen coords)
          if (mouse.active) {
            const sx = cx + p.x * scale;
            const sy = cy + p.y * scale;
            const mdx = sx - mouse.x;
            const mdy = sy - mouse.y;
            const dist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (dist < MOUSE_RADIUS && dist > 0) {
              const force = (1 - dist / MOUSE_RADIUS) * PUSH_STRENGTH;
              p.vx += ((mdx / dist) * force) / scale;
              p.vy += ((mdy / dist) * force) / scale;
            }
          }

          p.vx *= DAMPING;
          p.vy *= DAMPING;
          p.x += p.vx;
          p.y += p.vy;

          // Draw particle, scaling from sample-space to canvas-space
          const sx = cx + p.x * scale;
          const sy = cy + p.y * scale;
          const r0 = p.size * scale;
          const [r, g, b] = colors[p.region];

          ctx.beginPath();
          ctx.arc(sx, sy, r0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},0.85)`;
          ctx.fill();

          if (i % 5 === 0) {
            ctx.beginPath();
            ctx.arc(sx, sy, r0 * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},0.06)`;
            ctx.fill();
          }
        }

        rafRef.current = requestAnimationFrame(animate);
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [resolvedTheme, canvasSize]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999, active: false };
  }, []);

  return (
    <div ref={wrapperRef} className="h-full w-full">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cursor-crosshair"
        style={{ width: canvasSize, height: canvasSize }}
        aria-label="Interactive particle Java logo"
      />
    </div>
  );
}
