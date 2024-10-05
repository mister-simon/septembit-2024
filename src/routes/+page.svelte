<script>
	import Septembit from '$lib/Septembit2024.gif';
	import { bits } from '$lib/bits';
</script>

<svelte:head>
	<title>Septembit 2024 - mister_simon</title>
</svelte:head>

<main>
	<h1>Septembit 2024 - mister_simon</h1>

	<div class="intro">
		<blockquote class="content">
			<h2 class="text-lg">30 days, 30 unique prompts</h2>
			<p>
				&ldquo;In this 5th year of Septembit... We're gonna be a <strong>MONSTER MAKER</strong>,
				inspired by your favourite monster collecting games and character design fundamentals, but
				feel free to interpret the prompts as you wish, get creative, it doesn't have to be literal!
			</p>
			<p>
				The first 27 days are in a 32px size, the last 3 days are in a 96px size, with <strong
					>EVOLVE</strong
				>,
				<strong>COMBINE</strong> and <strong>MYTHICAL</strong>.
			</p>
			<p>
				<strong>EVOLVE</strong> one of your Monsters, <strong>COMBINE</strong> 2 of your Monsters,
				then show us a <strong>MYTHICAL</strong> Monster.
			</p>
			<p>
				This year there is an additional <strong>COLOUR CHALLENGE</strong>, Add up to 2 more colours
				to the palette to complete your look!&rdquo;
			</p>
			<p>
				<cite
					><a href="https://linktr.ee/saultoons" rel="noopener" target="_blank">- @saultoons</a
					></cite
				>
			</p>
		</blockquote>
	</div>

	<figure>
		<img
			src={Septembit}
			alt="Completed Septembit Template. Titled Monster Maker Septembit 2024 above a grid for the 30 days of prompts. The bottom of the template shows @saultoons, #septembit, a space for the colour palette, and mister_simon."
		/>
	</figure>

	<div class="bits">
		{#each bits as bit}
			<figure id={`bit-${bit.id}`}>
				<img src={bit.img} alt={bit.name} class="bit" />
				<figcaption class="content">
					<h2><span>{bit.id}</span> - {bit.name}</h2>
					<p class="prompt">{bit.prompt} - {bit.size}x{bit.size}px</p>
					{#if bit.note}
						<p class="note">{@html bit.note}</p>
					{/if}
					<p class="description">{bit.description}</p>
				</figcaption>
			</figure>
		{/each}
	</div>
</main>
<footer>
	<a
		href="https://github.com/mister-simon/septembit-2024"
		target="_blank"
		rel="noopener noreferrer"
	>
		This Site on Github
	</a>
	<p><small>&copy; mister_simon 2024</small></p>
</footer>

<style>
	main {
		--border: 0.75vw;
		font-size: clamp(2rem, 1.5vw, 3rem);
		padding-inline: clamp(1rem, 5vw, 3rem);
		padding-block: 10vh;
		display: grid;
		row-gap: 8rem;
	}
	footer {
		color: var(--c4);
		font-size: clamp(1rem, 1.25vw, 2rem);
		padding-inline: clamp(1rem, 5vw, 3rem);
		text-align: center;
	}
	h1,
	h2,
	.prompt {
		text-align: center;
		line-height: 1;
		font-family: var(--f2);
	}
	blockquote {
		border-left: solid var(--border) var(--c4);
		padding-left: clamp(0.5rem, 2.5vw, 1.5rem);

		p:has(cite) {
			margin-inline-start: auto;
		}
	}
	strong {
		font-size: 1.5em;
		line-height: 1;
		font-family: var(--f2);
	}
	h1 {
		font-size: clamp(4rem, 5vw, 8rem);
	}
	.text-lg {
		font-size: clamp(2.5rem, 4vw, 6rem);
	}
	h2 {
		font-size: clamp(2rem, 3vw, 4rem);

		span {
			color: var(--c3);
		}
	}
	a {
		font-size: 1.5em;
		line-height: 1;
		font-family: var(--f2);
		color: var(--c4);
	}
	.intro {
		display: grid;
		width: fit-content;
		margin-inline: auto;
	}
	.description {
		word-break: break-word;
	}
	.prompt {
		font-size: clamp(1.5rem, 2.5vw, 3rem);
		color: var(--c3);
	}
	.note {
		color: var(--c4);
		font-size: 0.75em;
		text-align: center;

		:global(a) {
			color: var(--c4);
		}
	}
	.content {
		display: grid;
		gap: 1.5rem;
		max-width: 60ch;
	}
	.bits {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 35ch), 1fr));
		gap: 5vw;
	}
	figure {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-height: 90svh;

		figcaption {
			margin-block-end: auto;
		}
	}
	.bit {
		width: 100%;
		height: auto;
		border: solid var(--border) var(--c2);
		aspect-ratio: 1;
	}
</style>
