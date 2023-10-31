<script>
	import GridCard from "./GridCard.svelte";
    import { firstSelection, secondSelection, cards, resetTurn } from '../../stores/gameState'

    let gameOver = false;
    const handleSelection = (card) => {
        $firstSelection ? secondSelection.set(card) : firstSelection.set(card)
    }

    $: if ($firstSelection && $secondSelection) {
        if ($firstSelection.src === $secondSelection.src) {
            cards.update((cards) => cards.map(card => {
                if (card.src === $firstSelection.src) {
                    return { ...card, matched: true }
                } else {
                    return card
                }
            }))

            resetTurn() 
            gameOver = checkForGameOver()
            

        } else {
            setTimeout(() => resetTurn(), 1000)
        }

    }

    function checkForGameOver() {
        for (let index = 0; index < $cards.length - 1; index++) {
            console.log($cards[index])
            if ($cards[index].matched === false) {
                return false
            } 
        }
        return true;
    }
</script>

<div class="grid gap-2 grid-cols-4">
    {#each $cards as card}
        <GridCard 
        {card}
        flipped={card === $firstSelection || card === $secondSelection || card.matched}
        {handleSelection} />
    {/each}
</div>
{#if gameOver}
    <p>GAME OVER</p>
{/if}