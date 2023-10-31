<script>
    export let card;
    export let flipped = false;

</script>

<button class="w-24 h-24 bg-blue-500 rounded-md ">
    {#if flipped}
        {card.src}
    {/if}
</button>