document.addEventListener("keydown", function (event){

    let audio = new Audio()
    if(event.key == "A") {
        audio.src = "./A.mp3";
        return audio.play();
    } else if(event.key == "S") {
        let audio = new Audio("./S.mp3");
        return audio.play();
    } else if(event.key == "D") {
        let audio = new Audio("./D.mp3");
        return audio.play();
    } else if(event.key == "F") {
        let audio = new Audio("./F.mp3");
        return audio.play();
    } else if(event.key == "G") {
        let audio = new Audio("./G.mp3");
        return audio.play();
    }  else if(event.key == "H") {
        let audio = new Audio("./H.mp3");
        return audio.play();
    } else if(event.key == "J") {
        let audio = new Audio("./J.mp3");
        return audio.play();
    } else if(event.key == "W") {
        let audio = new Audio("./W.mp3");
        return audio.play();
    } else if(event.key == "E") {
        let audio = new Audio("./E.mp3");
        return audio.play();
    } else if(event.key == "T") {
        let audio = new Audio("./T.mp3");
        return audio.play();
    } else if(event.key == "Y") {
        let audio = new Audio("./Y.mp3");
        return audio.play();
    } else if(event.key == "U") {
        let audio = new Audio("./U.mp3");
        return audio.play();
    } else {
        return console.log("Out of range key pressed.");
    }
})