<script>
	import GridCard from "./GridCard.svelte";
    import { gridCards } from './GridCards'
    
    let cards = [...gridCards, ...gridCards]
        .sort(() => Math.random() - 0.5)
    console.log(cards)
</script>

<div class="grid gap-2 grid-cols-4">
    {#each cards as card}
        <GridCard {card} />
    {/each}
</div>