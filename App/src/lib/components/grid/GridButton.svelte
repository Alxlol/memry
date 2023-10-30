<script>
    export let visible = true;
    export let index;

    function onClick() {
        visible = !visible;
    }
</script>

<button on:click={onClick} class="w-20 h-20 bg-blue-500">
    {#if visible}
        {index}
    {/if}
</button>