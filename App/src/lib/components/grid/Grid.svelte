<script>
	import GridCard from "./GridCard.svelte";
    import { cards } from './GridCards'
    import { firstSelection, secondSelection } from '../../stores/gameState'
    
    const handleChoice = (card) => {
        $firstSelection ? secondSelection.set(card) : firstSelection.set(card)
        if ($firstSelection && $secondSelection) {
          if ($firstSelection.src === $secondSelection.src) {
            console.log('match');
          }  else console.log('nomatch');
          
          setTimeout(() => resetTurn(), 2000)
        }
    }

    function resetTurn() {
        secondSelection.set(null)
        firstSelection.set(null)
    }
</script>

<div class="grid gap-2 grid-cols-4">
    {#each cards as card}
        <GridCard 
        {card}
        flipped={card === $firstSelection || card === $secondSelection}
        {handleChoice} />
    {/each}
</div>