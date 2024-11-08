const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById("score_points"),
  },
  cardSprites: {
    avatar: document.getElementById("card-image"),
    name: document.getElementById("card-name"),
    type: document.getElementById("card-type"),
  },
  fieldCards: {
    player: document.getElementById("player-field-card"),
    computer: document.getElementById("computer-field-card"),
  },
  actions: {
    button: document.getElementById("next-duel"),
  },
};

const  playerSides ={
    player1: "player-field-card",
    computer: "computer-field-card"
}

const pathImages = ".src/assets/icons/";
const cardData = [
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type: "paper",
        img: `${pathImages}dragon.png`,
        winOf: [1],
        loseOf: [2],
    },
    {
        id:1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        winOf: [2],
        loseOf: [0],
    },
    {
        id:2,
        name: "Exodia",
        type: "Sciossors",
        img: `${pathImages}Exodia.png`,
        winOf: [0],
        loseOf: [1],
    },
]

async function getRandomCardId() {
    const randomIndex = Mat.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function createCardImage(randomIdCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("heigth", "100px");
    cardImage.setAttribute("src", `${pathImages}card-back.png`);
    cardImage.setAttribute("data.id", randomIdCard)
    cardImage.classList.add("card")

    if(fieldSide === playerSides.player1){
        cardImage.addEventListener("click", ()=> {
            setCardsField(cardImage.getAttribute("data-id"));
        } )
    }

    cardImage
}

async function drawCards(cardNumbers, fieldSide) {
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage)
    }
}



function init() {
    drawCards(5, "playerSides.player1")
    drawCards(5, "playerSides.computer")

}
init();