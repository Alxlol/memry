<script>

    export let visible = true;
    export let ID;

    function onClick() {
        
    }
</script>

<button on:click={onClick} class="w-20 h-20 bg-blue-500">
    {#if visible}
        {ID}
    {/if}
</button>