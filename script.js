let btns = document.querySelectorAll("button")
let output = document.querySelector(".output")
let winner = document.querySelector(".winner")

// btns[0].addEventListener("click", performToss)
// btns[1].addEventListener("click", performToss)
// [btns[0], btns[1]]

for(let t of btns){
    // console.log(t)   // t is the button
    // t.innerText
    t.addEventListener("click", () => performToss(t.innerText.trim()))
}


let userScore = 0
let computerScore = 0
function performToss(clickedButtonText){
    // console.log("Toss Performed", clickedButtonText)
    let userToss = clickedButtonText

    let tossArr = ["Head", "Tail"]

    let randomIndex = parseInt(Math.random() * tossArr.length)   // 0,1
    let randomToss = tossArr[randomIndex]

    if(userToss === randomToss){
        userScore++
        winner.innerHTML = `User won as he selected ${userToss}`
    }
    else{
        computerScore++
        winner.innerHTML = `Computer won as user selected ${userToss}`
    }

    output.innerHTML = `<p>UserScore: ${userScore} <br> computerScore: ${computerScore}</p>`

}