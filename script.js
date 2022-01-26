let map = document.getElementById("map")
let pirate = document.getElementById("pirate")
let podskazka = document.getElementById("podskazka")
let treasureX = Math.random() * 490
let treasureY = Math.random() * 490
let steps = 0
let newbutton = document.getElementById("newbutton")
let sokrovishe = document.getElementById("treasure")
console.log(treasureX, treasureY)
map.onclick = function (event) {
    steps = steps + 1
    console.log(steps);
    // console.log(event.offsetX,event)
    // еvent.offsetX-это координата мышки по X
    let pirateX = event.offsetX - 25
    let pirateY = event.offsetY - 25
    let X = treasureX - pirateX
    let Y = treasureY - pirateY
    let distance = Math.sqrt(X * X + Y * Y)

    pirate.style.left = pirateX + "px"
    pirate.style.top = pirateY + "px"
    // console.log(distance);
    if (distance < 20) {
        if (steps < 10) {
            podskazka.innerHTML = "победа!За " + steps + " шагов, ты самый быстрый пират"
        }

        else {
            podskazka.innerHTML = "победа! За " + steps + " шагов!"
        }
sokrovishe.style.opacity=1
sokrovishe.style.transform="scale(9) rotate(1800deg)"

    }



    else if (distance < 20) {
        podskazka.innerHTML = "кипящая лава!"
    }
    else if (distance < 50) {
        podskazka.innerHTML = "батарея"
    }
    else if (distance < 80) {
        podskazka.innerHTML = "комнатная температура"
    }
    else if (distance < 120) {
        podskazka.innerHTML = "осень"
    }
    else if (distance < 180) {
        podskazka.innerHTML = "мороженое"
    }
    else if (distance < 250) {
        podskazka.innerHTML = "кола на морозе"
    }
    else {
        podskazka.innerHTML = "ледниковый период"
    }


}
newbutton.onclick = function () {
    podskazka.innerHTML = 'удачи, пират!'
    pirate.style.top = 0
    pirate.style.left = "60px"
    sokrovishe.style.opacity=0
    sokrovishe.style.transform="scale(1)"
    treasureX=Math.random() * 490 
    treasureY=Math.random() * 490
steps=0 
    


}