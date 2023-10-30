<script>
    let content = 
    [
        { 'src': 'cat' },
        { 'src': 'dog' },
        { 'src': 'car' },
        { 'src': 'house' },
        { 'src': 'tv' },
        { 'src': 'sofa' },
        { 'src': 'window' },
        { 'src': 'chair' },   
    ]

    let cards = [...content, ...content]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))


    console.log(cards)
</script>