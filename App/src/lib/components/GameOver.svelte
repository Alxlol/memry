<script>
    import { fade } from 'svelte/transition';
</script>


<div transition:fade={{ delay: 300, duration: 800 }} class="absolute bg-slate-700 w-screen flex gap-4 flex-col justify-center items-center py-10">
    <p class="text-4xl font-bold">Well done!</p>
    <button on:click={() => location.reload()} class="bg-green-400 p-2 px-4 rounded-lg shadow-lg">Play again</button>
</div>
