document.body.addEventListener('keydown', (event) => {

    const player = document.querySelector("#player")
   
    if(event.key === "ArrowUp"){
        player.src ="https://static.lacapsule.academy/practice/mario/mario-back-1.png"
        player.style.top = player.offsetTop - 10 + "px"
    }
    if(event.key === "ArrowDown"){
        player.src ="https://static.lacapsule.academy/practice/mario/mario-front-1.png"
        player.style.top = player.offsetTop + 10 + "px"

    }
    if(event.key === "ArrowLeft"){
        player.src ="https://static.lacapsule.academy/practice/mario/mario-left-1.png"
        player.style.left = player.offsetLeft - 10 + "px"
    }
    if(event.key === "ArrowRight"){
        player.src ="https://static.lacapsule.academy/practice/mario/mario-right-1.png"
        player.style.left = player.offsetLeft + 10 + "px"
    }
})
