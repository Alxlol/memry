<script>
	import GridCard from "./GridCard.svelte";

    let content = 
    [
        { 'src': 'cat' },
        { 'src': 'dog' },
        { 'src': 'car' },
        { 'src': 'house' },
        { 'src': 'tv' },
        { 'src': 'sofa' },
        { 'src': 'window' },
        { 'src': 'chair' },   
    ]

    let cards = [...content, ...content]
        .sort(() => Math.random() - 0.5)

</script>

<div class="grid gap-2 grid-cols-4">
    {#each cards as card}
        <GridCard {card} />
    {/each}
</div>