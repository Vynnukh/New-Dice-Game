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

tPgBtn.addEventListener("click", () => {
    tPg.style.display = "none"
    Primary.style.display = "flex"
})

const Die = [
    "",
    "./imgs/dice_face_1.png",
    "./imgs/dice_face_2.png",
    "./imgs/dice_face_3.png",
    "./imgs/dice_face_4.png",
    "./imgs/dice_face_5.jpg",
    "./imgs/dice_face_6.png"
]

DieDsply.style.display = "none"

Btn.addEventListener("click", () => {
    const loss = () => {
        Primary.style.display = "none"
        tPg.style.display = "flex"
        alert("You've Lost")
        Score = 0
    }

    const win = () => {
        Primary.style.display = "none"
        tPg.style.display = "flex"
        alert("You've won!")
        Score = 0
    }

currentRoll = Math.ceil(Math.random() * 6)
DieDsply.style.display = "flex"
DieDsply.src = Die[currentRoll]
console.log(currentRoll)
Score += currentRoll
ScoreDsply.innerHTML = "<p>" + `${currentRoll} was rolled, your score is now ${Score}` + "</p>"
if(currentRoll == 1) {
    DieDsply.src = Die[currentRoll]
    loss()
} else {
    if(Score >= 21) {
        win()
        currentRoll = 0
        Score = 0
    } else {
        currentRoll = 0
    }
}
}
)



