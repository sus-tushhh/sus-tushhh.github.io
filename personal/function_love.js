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
        b.style.left = `${randint(20,70)}%`;
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

function isMobile() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return true;
      }else{
        return false;
      }
}

function load(){
    var body = document.getElementById('body');
    if(isMobile() == true){
        body.innerHTML = "Mobile phones (iPhone, Android) are not supported";
    }
}

function set_text(){
    const searchParams = new URLSearchParams(window.location.search);
    var h = document.getElementById("text")
    if(searchParams.has('t')){
        h.innerHTML = searchParams.get('t')
    }

}