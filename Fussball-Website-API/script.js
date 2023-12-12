const colorPalette = ["#26670A", "#2C780C", "#35910F", "#2E7D0C"];

const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            fillTable(data);
        })
    })
}

const loadGamesData = () => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result) => {
        result.json().then((data) => {
            fillUpcomingEvents(data);
        })
    })
}


const fillTable = (data) => {
    const table = document.querySelector("#output");
    let html = ``;
    data.forEach((element, index) => {
        html += `<div class="team-info" style="background-color: #ffffff;">
            <div class="team-name">${element.teamName}</div>
            <img class="team-icon" src="${element.teamIconUrl}" alt="${element.teamName} Logo">
            <div class="team-points"><span>${element.points}</span> ${element.points == 1 ? "PT" : "PTS"}</div>
            <div class="team-game-stats">
                <div><span>${element.matches}</span> Spiele</div>
                <div><span>${element.goals}</span> Tore</div>
                <div><span>${element.opponentGoals}</span> Kassierte Tore</div>
                <div><span>${element.won}</span> Gewonnen</div>
                <div><span>${element.draw}</span> Draws</div>
                <div><span>${element.lost}</span> Verloren</div>
            </div>
        </div>`;
    });

    table.innerHTML = html;
}



const fillUpcomingEvents = (data) => {
    const eventsTable = document.querySelector("#events");
    const currentTime = new Date();

    let upcomingGamesContent = ""
    let recentGamesContent = "";
    let amountOfUpcomingGames = 2;
    let amountOfRecentGames = 2;
    let upcomingGamesArray = [];
    let recentGamesArray = [];

    data.forEach(element => {
        if (element.matchIsFinished === true) {
            recentGamesArray.push(element);
        } else {
            upcomingGamesArray.push(element);
        }
    })

   
   

    
    eventsTable.innerHTML = html;
}

loadData();
loadGamesData();