function randint(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let list = ["Are you sure❓", "Am I not good for u❓"]

function teleport_random(){
    var b = document.getElementById('no');
    if(b.innerHTML == "No, I don't love you 😓" || b.innerHTML == list[0]){
        b.innerHTML = list[0];
    }
    else{
        b.style.position = "absolute";
        b.style.bottom = `${randint(0,60)}%`;
        b.style.left = `${randint(20,80)}%`;
    }
}

function no_click(){
    var b = document.getElementById('no');
    if(b.innerHTML == list[1]){
        teleport_random()
    }
    else{
        b.innerHTML = list[1];
    }
}