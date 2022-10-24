var totalScorePlayer, playGame;

var manPosition = document.querySelector("#man");
var bomb1 = document.querySelector(".bomb1");
var bomb2 = document.querySelector(".bomb2");
var bomb3 = document.querySelector(".bomb3");

var style = getComputedStyle(manPosition);

newStart();

function newStart(){
    totalScorePlayer = [0];
    playGame = true;
    document.querySelector("#man").style.left = "0px";
    document.querySelector("#man").style.top = "0px";

    document.querySelector(".bomb1").style.display = "normal";
    document.querySelector(".bomb2").style.display = "normal";
    document.querySelector(".bomb3").style.display = "normal";
}

document.getElementById("totalScorePlayer").textContent = 0;




document.body.addEventListener("keydown",myFunction);

function myFunction(event){
    if(playGame){
        if(event.key === "ArrowRight"){
            var oldLeft = parseInt(style.left);
            var newLeft = oldLeft + 60;
            manPosition.style.left = newLeft + "px";
        }

        else if(event.key === "ArrowLeft"){
            var oldLeft = parseInt(style.left);
            var newLeft = oldLeft - 60;
            manPosition.style.left = newLeft + "px";
        }

        else if(event.key === "ArrowUp"){
            var oldTop = parseInt(style.top);
            var newTop = oldTop - 63;
            manPosition.style.top = newTop + "px";
        }

        else if(event.key === "ArrowDown"){
            var oldTop = parseInt(style.top);
            var newTop = oldTop + 63;
            manPosition.style.top = newTop + "px";
        }

        var  totalScorePlayer = Number(totalScorePlayer);

        if(manPosition.style.top == "315px"){
            if(manPosition.style.left == "420px"){
                totalScorePlayer = totalScorePlayer + 1;
                bomb1.style.display = "none";
                document.getElementById("totalScorePlayer").textContent = totalScorePlayer;
            }
        }

        else if(manPosition.style.top == "189px"){
            if(manPosition.style.left == "300px"){
                totalScorePlayer = totalScorePlayer + 1;
                bomb2.style.display = "none";
                document.getElementById("totalScorePlayer").textContent = totalScorePlayer;
            }
        }

        if(manPosition.style.left == "180px"){
            if(manPosition.style.top == "189px"){
                totalScorePlayer = totalScorePlayer + 1;
                bomb3.style.display = "none";
                document.getElementById("totalScorePlayer").textContent = totalScorePlayer;
            }
        }

        if(manPosition.style.left == "480px" && manPosition.style.top == "0px"){
                totalScorePlayer = totalScorePlayer + " Konec hry";
                bomb3.style.display = "none";
                playGame = false;
                document.getElementById("totalScorePlayer").textContent = totalScorePlayer;
        }
        

        if(manPosition.style.left == "600px"){
            manPosition.style.left = "540px";
        }

        else if(manPosition.style.left == "-60px"){
            manPosition.style.left = "0px";
        }

        else if(manPosition.style.top == "441px"){
            manPosition.style.top = "378px";
        }

        else if(manPosition.style.top == "-63px"){
            manPosition.style.top = "0px";
        };
    };    

};

document.querySelector(".Game").addEventListener("click", function writeToConsole() {
    // console.log("Hello World");
    newStart();
});






