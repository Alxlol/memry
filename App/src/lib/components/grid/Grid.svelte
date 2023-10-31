<script>
	import GridCard from "./GridCard.svelte";
    import { gridCards } from './GridCards'
    import { firstSelection, secondSelection } from '../../stores/gameState'
    
    let cards = [...gridCards, ...gridCards]
        .sort(() => Math.random() - 0.5)
    console.log(cards)

    const handleChoice = (card) => {
        console.log(card)
    }
</script>

<div class="grid gap-2 grid-cols-4">
    {#each cards as card}
        <GridCard 
        {card}
        flipped={card === $firstSelection || card === $secondSelection}
        {handleChoice} 
        
        />
    {/each}
</div>