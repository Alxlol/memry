<script>
	import GridCard from "./GridCard.svelte";
    import { firstSelection, secondSelection, cards, resetTurn } from '../../stores/gameState'
	import GameOver from "../GameOver.svelte";

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
            setTimeout(() => {
                resetTurn()
            }, 1000 )
        }

    }

    function checkForGameOver() {
        for (let index = 0; index < $cards.length - 1; index++) {
            if ($cards[index].matched === false) {
                return false
            } 
        }
        return true;
    }

    
</script>

<svelte:head>
    //Preload all card images
    {#each $cards as card}
      <link rel="preload" as="image" href={card.src} />
    {/each}
</svelte:head>

<div class="grid gap-2 grid-cols-4">
    {#each $cards as card}
        <GridCard 
        {card}
        flipped={card === $firstSelection || card === $secondSelection || card.matched}
        {handleSelection} />
    {/each}
</div>
{#if gameOver}
    <GameOver />
{/if}