<script>
    import { firstSelection, secondSelection } from '../../stores/gameState'
    //
    export let card;
    export let flipped = false;
    export let handleSelection;
    //
    let disabled = false;
    let handleClick = () => {
        handleSelection(card)
    }

    //Disabled all cards when both selections have been done
    $: if ($firstSelection && $secondSelection) {
        disabled = true
        setTimeout(() => {
            disabled = false;
        }, 1000)
    }
</script>

<button disabled={flipped || disabled} on:click={handleClick} class="w-24 h-24 bg-blue-500 rounded-md {flipped ? 'border-2 border-green-400' : ''} ">
    {#if flipped}
        {card.src}
    {/if}
</button>