<script>
	import { generateGrid } from './Grid'
    import GridButton from './GridButton.svelte'

    const grid = generateGrid();
    console.log(grid)
</script>

<div class="grid gap-2 grid-cols-4">
    {#each grid as ID }
        <GridButton {ID} />
    {/each}
</div>


