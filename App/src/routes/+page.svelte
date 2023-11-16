<script>
    import { goto } from '$app/navigation';

    function onClickPlay() {
        goto('/play');
    }
</script>

<button on:click={onClickPlay} class="bg-green-400 p-8 px-12 rounded-lg shadow-lg text-5xl font-bold">
    PLAY
</button>