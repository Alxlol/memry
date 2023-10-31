<script>
    export let card;
    export let flipped = false;
    export let handleSelection;
    let handleClick = () => {
        handleSelection(card)
    }

</script>

<button disabled={flipped} on:click={handleClick} class="w-24 h-24 bg-blue-500 rounded-md {flipped ? 'border-2 border-green-400' : ''} ">
    {#if flipped}
        {card.src}
    {/if}
</button>