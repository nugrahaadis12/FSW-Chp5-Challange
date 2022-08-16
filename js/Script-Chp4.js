const playerRock = document.getElementById("playerRock")
const playerPaper = document.getElementById("playerPaper")
const playerScissors = document.getElementById("playerScissors")

const comRock = document.getElementById("comRock");
const comPaper = document.getElementById("comPaper");
const comScissors = document.getElementById("comScissors");

const hasilText = document.getElementById("hasilText")

const allGambarRPS = document.querySelectorAll('img')

const pemilih = {
    Rock: { name: 'Rock', defeat: 'Scissors' },
    Paper: { name: 'Paper', defeat: 'Rock' },
    Scissors: { name: 'Scissors', defeat: 'Paper' }
}


let comPilihan = ''
let playerScoreNumber = 0
let comScoreNumber = 0

function updateHasil(playerPilihan) {
    console.log(playerPilihan, comPilihan)
    const milih = pemilih[playerPilihan]
    if (playerPilihan === comPilihan) {
        hasilText.textContent = "DRAW"
        hasilText.style.color = "white"
        hasilText.style.backgroundColor = "#035B0C"
        hasilText.style.transform = "rotate(-28.87deg)"
        hasilText.style.padding = "75px"
        hasilText.style.marginRight = "25px"
        hasilText.style.marginLeft = "25px"
        hasilText.style.borderRadius = "10px"
    }
    else if (milih.defeat.indexOf(comPilihan) > -1) {
        hasilText.textContent = "PLAYER 1 WIN"
        hasilText.style.color = "white"
        hasilText.style.backgroundColor = "#4C9654"
        hasilText.style.transform = "rotate(-28.87deg)"
        hasilText.style.padding = "35px"
        hasilText.style.marginRight = "25px"
        hasilText.style.marginLeft = "25px"
        hasilText.style.borderRadius = "10px"
        playerScoreNumber++

    }
    else {
        hasilText.textContent = "COM WIN"
        hasilText.style.color = "white"
        hasilText.style.backgroundColor = "#4C9654"
        hasilText.style.transform = "rotate(-28.87deg)"
        hasilText.style.padding = "35px"
        hasilText.style.marginRight = "51.5px"
        hasilText.style.marginLeft = "51.5px"
        hasilText.style.borderRadius = "10px"
        comScoreNumber++
    }
}

function comRandomPilihan() {
    const comPilihanNumber = Math.random()

    if (comPilihanNumber < 0.3) {
        comPilihan = 'Rock';
    }
    else if (comPilihan <= 0.7) {
        comPilihan = 'Paper';
    }
    else {
        comPilihan = 'Scissors'
    }
    tampilanComPilihan(comPilihan)
}

function tampilanComPilihan(comPilihan) {

    switch (comPilihan) {
        case 'Rock':
            comRock.classList.add('selectedStyle')
            break
        case 'Paper':
            comPaper.classList.add('selectedStyle')
            break
        case 'Scissors':
            comScissors.classList.add('selectedStyle')
            break
        default:
            break
    }
}

function resetPilihan() {
    allGambarRPS.forEach((img) => {
        img.classList.remove('selectedStyle')
    })
}

function milih(playerPilihan) {
    resetPilihan()

    switch (playerPilihan) {
        case 'Rock':
            playerRock.classList.add('selectedStyle')
            break
        case 'Paper':
            playerPaper.classList.add('selectedStyle')
            break
        case 'Scissors':
            playerScissors.classList.add('selectedStyle')
            break
        default:
            break
    }
    comRandomPilihan()
    updateHasil(playerPilihan)
}