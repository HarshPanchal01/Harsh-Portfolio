<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	const { children } = $props();

	let theme = $state('dark');

	onMount(() => {
		// Check for saved theme preference or default to dark
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			theme = savedTheme;
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			theme = 'dark';
		} else {
			theme = 'light';
		}
		document.documentElement.setAttribute('data-theme', theme);
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}
</script>

<svelte:head>
	<title>Harsh Panchal - Developer & CS Student</title>
	<meta name="description" content="Harsh Panchal is a developer and computer science student at Ontario Tech University, passionate about software engineering, cloud platforms, automation, and tech for creatives." />
	<link rel="icon" type="image/svg+xml" href="/assets/elephant.svg" />
</svelte:head>

<div class="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
	<!-- Header with theme toggle -->
	<header class="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/95 backdrop-blur-sm">
		<div class="container mx-auto flex items-center justify-between px-6 py-4 max-w-6xl">
			<a href="#top" class="text-xl font-bold text-[var(--text-accent)] hover:text-[var(--accent-cyan)] transition-colors">
				harsh@portfolio:~$
			</a>
			<nav class="flex items-center gap-6">
				<a href="#experience" class="text-sm hover:text-[var(--text-accent)] transition-colors">experience</a>
				<a href="#projects" class="text-sm hover:text-[var(--text-accent)] transition-colors">projects</a>
				<button
					onclick={toggleTheme}
					class="p-2 rounded-md border border-[var(--border-color)] hover:border-[var(--text-accent)] transition-colors"
					aria-label="Toggle theme"
				>
					{#if theme === 'dark'}
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
						</svg>
					{:else}
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
						</svg>
					{/if}
				</button>
			</nav>
		</div>
	</header>

	<main class="pt-20">
		{@render children?.()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-[var(--border-color)] py-8 mt-16">
		<div class="container mx-auto px-6 text-center text-sm text-[var(--text-secondary)] max-w-6xl">
			<p>© {new Date().getFullYear()} Made with 🫶 by Harsh Panchal</p>
		</div>
	</footer>
</div>
