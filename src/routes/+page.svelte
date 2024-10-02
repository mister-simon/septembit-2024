<script>
	import { bits } from '$lib/bits';
</script>

<main>
	<h1>Septembit 2024 - mister_simon</h1>
	<div class="bits">
		{#each bits as bit}
			<figure>
				<img src={bit.img} alt={bit.name} class="bit" />
				<figcaption>
					<h2><span>{String(bit.day).padStart(2, '0')}</span> - {bit.name}</h2>
					<p class="prompt">{bit.prompt} - {bit.size}x{bit.size}px</p>
					<p class="description">{bit.description}</p>
				</figcaption>
			</figure>
		{/each}
	</div>
</main>

<style>
	main {
		padding-inline: clamp(1rem, 5vw, 3rem);
		padding-block: 10vh;
	}
	h1,
	h2,
	.prompt {
		text-align: center;
	}
	h1 {
		margin-block-end: 8rem;
		font-size: clamp(4rem, 5vw, 8rem);
	}
	h2 {
		font-size: clamp(2rem, 3vw, 4rem);

		span {
			color: var(--c3);
		}
	}
	.description {
		word-break: break-word;
	}
	.prompt {
		font-size: clamp(1.5rem, 2.5vw, 3rem);
		color: var(--c3);
	}
	.bits {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 40ch), 1fr));
		gap: 5vw;
		font-size: clamp(1.5rem, 1.5vw, 2rem);
	}
	figure {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-height: 90svh;

		figcaption {
			display: grid;
			gap: 1rem;
			margin-block-end: auto;
		}
	}
	.bit {
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		border: solid 0.75vw var(--c2);
	}
</style>
