# Septembit 2024 - mister_simon

A svelte 5 project to showcase my Septembit 2024 work.

## Developing

```bash
pnpm run dev
```

## Make it your own

After forking the repo and cloning it down to edit:

- Copy your septembit files to `src/lib/bits`. Files should be exported at 100% in gif format. Files are numbered from 01 to 30 followed by a dash. E.g. `08-blah_blah.gif`.
- If you don't want to export as gif, then edit the import glob in [`bits.js`](https://github.com/mister-simon/septembit-2024/blob/aee34d119b2cbb1c8c45ee1f2a13e47e69b1e115/src/lib/bits.js#L2). I used gif to easily allow for animation.
- Update the completed template file at `src/lib/Septembit2024.gif` with your own.
- Update the [bits export](https://github.com/mister-simon/septembit-2024/blob/aee34d119b2cbb1c8c45ee1f2a13e47e69b1e115/src/lib/bits.js#L33). The current format is "Prompt", "Name", "Description", "Note", "Size". "Note" is optional, and can comtain HTML, and is specifically used to jump a reader to related bits for combine and evolve. "Size" is an optional integer, and defaults to 32. Each entry will be linked to a numbered image file.
- Update [the colours in `src/css/app.css`](https://github.com/mister-simon/septembit-2024/blob/aee34d119b2cbb1c8c45ee1f2a13e47e69b1e115/src/lib/css/app.css#L61). You can swap the names of the colour variables to re-theme the page.
- If your completed template has been heavily customised, the jump links overlaid on the page won't be accurate. So you'll need to [restyle the `.complete` css](https://github.com/mister-simon/septembit-2024/blob/aee34d119b2cbb1c8c45ee1f2a13e47e69b1e115/src/routes/%2Bpage.svelte#L181) in the following step.
- Update the content of the page `src/routes/+page.svelte` however you like. Swapping in your own username. Add links. Add and remove features. Restyle sections. Go wild.
- Finally, generate a favicon (I used https://favicon.io/favicon-converter/) and drop the files into the `static` folder. You can also add a `favicon.gif` of one of your 32px works. Changes to favicon loading can be made via `src/app.html`.
- Final note: I'm hosting using vercel. If you aren't going to use vercel then look up how to swap sveltekit adapters for your chosen hosting method.

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.
