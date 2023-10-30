<script>
    import { firstSelection, secondSelection } from '../../stores/gameState'
    export let card;

    let selected = false;
    let paired = false;

    function handleClick() {
        selected = true;
        if (!$firstSelection) {
            firstSelection.set(card)
            console.log('1st: ' + $firstSelection.src)
        }
        else {
            secondSelection.set(card)
            console.log('2nd: ' + $secondSelection.src)

            if ($firstSelection === $secondSelection) {
                console.log('MATCH')
                firstSelection.set()
                secondSelection.set()
            } else {
                console.log('NO MATCH, RESET')
                firstSelection.set()
                secondSelection.set()
                setTimeout(() => {
                    selected = false;
                }, 1000)
            }
        }
    }
</script>

<button disabled={paired} on:click={handleClick} class="w-24 h-24 bg-blue-500 rounded-md {selected ? 'border-2 border-green-400' : ''} ">
    {#if selected}
        {card.src}
    {/if}
</button>