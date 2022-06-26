const Game = document.getElementById("DiceGame")
const tPg = document.getElementById("Title")
const tPgBtn = document.getElementById("TitleButton")
let Score = 0
let currentRoll = 0
let Btn = document.getElementById("DieButton")
let ScoreDsply = document.getElementById("ScoreDisplay")
let Primary = document.getElementById("Main")
let DieDsply = document.getElementById("Die_Display")


Primary.style.display = "none"
// ^ This should ensure that the main screen is not displayed at the start

tPgBtn.addEventListener("click", () => {
    tPg.style.display = "none"
    Primary.style.display = "flex"
})
// ^ The title page button should allow the player to begin the game so that the player can begin rolling the die

const Die = [
    "",
    "./imgs/dice_face_1.png",
    "./imgs/dice_face_2.png",
    "./imgs/dice_face_3.png",
    "./imgs/dice_face_4.png",
    "./imgs/dice_face_5.jpg",
    "./imgs/dice_face_6.png"
]

// ^ This Array store's the dice images and is used to diplay these image when their appropriate values are met

DieDsply.style.display = "none"

// ^ This should hide the dice faces until the game begins

Btn.addEventListener("click", () => {
    const loss = () => {
        Primary.style.display = "none"
        tPg.style.display = "flex"
        alert("You've Lost")
        Score = 0
    }

    // ^ This is the function of which should occur when the player loses by rolling a 1

    const win = () => {
        Primary.style.display = "none"
        tPg.style.display = "flex"
        alert(`You've won! Score: ${Score}`)
        Score = 0
    }

    // ^ This is the function of which should occur when the player wins the game by scoring 21 or above

currentRoll = Math.ceil(Math.random() * 6)
DieDsply.style.display = "flex"
DieDsply.src = Die[currentRoll]
console.log(currentRoll)
Score += currentRoll
ScoreDsply.innerHTML = "<p>" + `${currentRoll} was rolled, your score is now ${Score}` + "</p>"
if(currentRoll == 1) {
    DieDsply.src = Die[currentRoll]
    ScoreDsply.innerHTML = "<p>" + "Rules: You lose if you roll a 1. <br>You win if your score reaches or surpasses 21." + "</p>"
    loss()
    Score = 0
    currentRoll = 0
    
    
} else {
    if(Score >= 21) {
        ScoreDsply.innerHTML = "<p>" + `Previous GameScore : ${Score}<br>Previous winning roll :` + "</p>"
        win()
        currentRoll = 0
        Score = 0
    } else {
        currentRoll = 0
    }
}
}
)

// ^ The remainder of this code should handle the main dice game functionality



