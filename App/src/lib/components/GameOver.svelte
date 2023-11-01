<script>
	import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    let animate = false;
    onMount(() => {
        setTimeout(() => {
            animate = true;
        }, 200)
    })
</script>

{#if animate}
    
<div transition:fade={{ delay: 300, duration: 800 }} class="absolute bg-slate-700 w-screen flex flex-col justify-center items-center h-32">
    <p class="text-4xl font-bold">Well done!</p>
    <button>Play again</button>
</div>
{/if}