<script>
    import { goto } from '$app/navigation';

    function onClickPlay() {
        goto('/play');
    }
</script>

<button on:click={onClickPlay} class="bg-green-400 p-4 px-8 rounded-lg shadow-lg">
    PLAY
</button>