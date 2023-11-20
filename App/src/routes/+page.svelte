<script>
    import { goto } from '$app/navigation';
    function onClickPlay() {
        goto('/play');
    }
</script>

<div class="text-center mb-10">
    <p class="text-6xl font-bold">MEMRY</p>
    <p class="italic text-lg">by Alexander Friberg</p>
</div>
<button on:click={onClickPlay} class="bg-green-400 p-8 px-12 rounded-lg shadow-lg text-5xl font-bold">
    PLAY
</button>