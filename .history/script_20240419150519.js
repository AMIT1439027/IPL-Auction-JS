/*
Project: IPL Auction - Javascript
Author:Amit Kumar



*/

// Step 1- Global variables
let timeInterval;
let currentTimer = 10;// 1 minute
let playerIndex = -1;

// step 2 basic players rendering 

//  Players object with players info

const players = [
    {
        name:"virat kohli",
        country: "India",
        category: "Batsman",
        basePrice: 100
    },
    {
        name: "Brett Lee",
        country: "Australia",
        category: "Bowler",
        basePrice: 150
      },
      {
        name: "Moeen Ali",
        country: "England",
        category: "All-Rounder",
        basePrice: 200
      }
];

// function to render players

function renderPlayers(){
    const playersList = document.getElementById("playersList");
    playersList.innerHTML = "";

    players.forEach(  (players, index) =>{
        
    } )
}

