<script lang="ts">
	import { onMount } from 'svelte';

	let displayText = $state('');
	let cursorVisible = $state(true);
	const fullText = "Hi, I'm Harsh 👋";

	onMount(() => {
		let index = 0;
		const typingInterval = setInterval(() => {
			if (index < fullText.length) {
				displayText = fullText.slice(0, index + 1);
				index++;
			} else {
				clearInterval(typingInterval);
			}
		}, 100);

		const cursorInterval = setInterval(() => {
			cursorVisible = !cursorVisible;
		}, 500);

		return () => {
			clearInterval(typingInterval);
			clearInterval(cursorInterval);
		};
	});

	const experiences = [
		{
			company: 'Sun Life',
			role: 'Site Reliability Analyst Intern',
			period: 'Sept 2025 – Present',
			logo: '/assets/sunlife.png',
			url: 'https://www.sunlife.com'
		},
		{
			company: 'Ontario Health',
			role: 'Data Engineer Intern',
			period: 'May 2024 – Aug 2024',
			logo: '/assets/ontariohealth.jpeg',
			url: 'https://www.ontario.ca/page/ministry-health'
		},
		{
			company: 'Manulife',
			role: 'Platform Reliability Engineer Intern',
			period: 'Sept 2023 – Apr 2024',
			logo: '/assets/manulife.jpeg',
			url: 'https://www.manulife.com'
		},
		{
			company: 'Eclipse Creations',
			role: 'Full Stack Developer Intern',
			period: 'May 2023 - Aug 2023',
			logo: '/assets/eclipsecreations.jpg',
			url: 'https://www.linkedin.com/company/eclipse-creations01'
		}
	];

	const projects = [
		{
			name: 'JobFinder',
			description: 'Automated job search with Python and SerpApi to scrape Google Jobs, scheduled with GitHub Actions.',
			image: '/assets/jobfinder.png',
			url: 'https://jobfinderautomation.xyz',
			bgColor: '#e6c764'
		},
		{
			name: 'HelloChef',
			description: 'Interactive cooking-safety lessons and challenges built with Flutter, backed by Supabase and SQLite.',
			image: '/assets/hellochef.png',
			url: 'https://github.com/harishkiru/HelloChef',
			bgColor: 'rgb(37, 173, 87)'
		}
	];

	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://www.github.com/HarshPanchal01',
			icon: '/assets/github.svg'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/HarshPanchal01',
			icon: '/assets/linkedin.svg'
		},
		{
			name: 'Email',
			url: 'mailto:harshpanchalv@gmail.com',
			icon: '/assets/email.svg'
		}
	];
</script>

<div class="container mx-auto px-6 py-12 max-w-6xl">
	<!-- Hero Section -->
	<section id="top" class="mb-24">
		<div class="max-w-4xl">
			<h1 class="text-5xl md:text-6xl font-bold mb-6 text-[var(--text-accent)]">
				<span class="terminal-text">{displayText}</span>
				{#if cursorVisible}
					<span class="inline-block w-3 h-12 bg-[var(--text-accent)] ml-1 blink"></span>
				{/if}
			</h1>
			<div class="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
				<p>
					Thanks for visiting my site! I'm currently in my final year studying Computer Science at Ontario Tech University, 
					looking to further my software engineering experience with a focus in <span class="text-[var(--accent-cyan)] font-semibold">software engineering</span>, 
					<span class="text-[var(--accent-cyan)] font-semibold">cloud platforms</span>, and <span class="text-[var(--accent-cyan)] font-semibold">automation</span>. 
					As an avid problem solver and builder, programming is my favorite way to bring ideas to life.
				</p>
				<p>
					Besides programming, I enjoy learning about history, and discovering different cultures. I also love taking hikes and exploring nature.
				</p>
			</div>
			
			<!-- CTA Buttons -->
			<div class="flex flex-wrap gap-4 mt-8">
				<a 
					href="/assets/Harsh_Panchal_Resume_2025.pdf" 
					target="_blank" 
					rel="noopener"
					class="px-6 py-3 bg-[var(--text-accent)] text-[var(--bg-primary)] rounded-md font-semibold hover:opacity-90 transition-opacity border-2 border-[var(--text-accent)]"
				>
					Download Resume
				</a>
			</div>

			<!-- Social Links -->
			<div class="flex gap-4 mt-8">
				{#each socialLinks as link}
					<a 
						href={link.url} 
						target="_blank" 
						rel="noopener" 
						aria-label={link.name}
						class="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--text-accent)] transition-colors bg-[var(--bg-secondary)]"
					>
						<img src={link.icon} alt={link.name} class="w-6 h-6" />
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- Experience Timeline Section -->
	<section id="experience" class="mb-24">
		<div class="mb-12">
			<h2 class="text-4xl font-bold mb-4 text-[var(--text-primary)]">
				<span class="text-[var(--accent-green)]"># </span>Experience Timeline
			</h2>
			<p class="text-[var(--text-secondary)]">
				I focus on reliability, data integrity, and cloud tooling across enterprise environments.
			</p>
		</div>
		
		<div class="relative">
			<!-- Timeline line -->
			<div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border-color)]"></div>
			
			<!-- Timeline items -->
			<div class="space-y-12">
				{#each experiences as exp, i}
					<div class={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
						<!-- Timeline dot -->
						<div class="absolute left-0 md:left-1/2 w-4 h-4 bg-[var(--text-accent)] rounded-full -ml-[7px] md:-ml-2 z-10"></div>
						
						<!-- Content -->
						<div class={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
							<a 
								href={exp.url} 
								target="_blank" 
								rel="noopener"
								class="block p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] hover:border-[var(--text-accent)] transition-colors"
							>
								<div class="flex items-center gap-4 mb-3 {i % 2 === 0 ? 'md:flex-row-reverse' : ''}">
									<div class="w-14 h-14 rounded-lg overflow-hidden bg-white flex-shrink-0">
										<img src={exp.logo} alt="{exp.company} logo" class="w-full h-full object-cover" />
									</div>
									<div class="flex-1">
										<h3 class="text-xl font-bold text-[var(--text-primary)]">{exp.company}</h3>
										<p class="text-[var(--text-accent)]">{exp.role}</p>
									</div>
								</div>
								<p class="text-sm text-[var(--text-secondary)] font-mono">{exp.period}</p>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="mb-24">
		<div class="mb-12">
			<h2 class="text-4xl font-bold mb-4 text-[var(--text-primary)]">
				<span class="text-[var(--accent-green)]"># </span>Featured Projects
			</h2>
			<p class="text-[var(--text-secondary)]">
				Side projects where I explore mobile development, automation, and cloud platforms.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 gap-6">
			{#each projects as project}
				<a 
					href={project.url} 
					target="_blank" 
					rel="noopener"
					class="group bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] overflow-hidden hover:border-[var(--text-accent)] transition-all hover:shadow-lg"
				>
					<div class="aspect-video flex items-center justify-center p-8" style="background-color: {project.bgColor};">
						<img src={project.image} alt="{project.name} logo" class="max-h-full max-w-[50%] object-contain" />
					</div>
					<div class="p-6">
						<h3 class="text-2xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--text-accent)] transition-colors">
							{project.name}
						</h3>
						<p class="text-[var(--text-secondary)]">{project.description}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>

