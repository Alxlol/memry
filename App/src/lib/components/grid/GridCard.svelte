<script>
    export let card;
    export let flipped = false;
    export let handleChoice;
    let handleClick = () => {
        handleChoice(card)
    }

</script>

<button on:click={handleClick} class="w-24 h-24 bg-blue-500 rounded-md ">
    {#if flipped}
        {card.src}
    {/if}
</button>