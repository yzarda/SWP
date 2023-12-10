let defaultFilter = 0;
const loadData = () => {
    teamInformation = sessionStorage.getItem("teamInformation");
    activeTeamInFilter = sessionStorage.getItem("activeTeam");
    if (teamInformation == null){
        let teamNameLinks = getLinkForTeam();
        sessionStorage.setItem("teamInformation", "https://api.openligadb.de/getmatchdata/%C3%B6bl1/"+year+"/"+teamNameLinks[defaultFilter]+"");
        teamInformation = sessionStorage.getItem("teamInformation");
    }
    if(activeTeamInFilter == null){
        sessionStorage.setItem("activeTeam", defaultFilter);
    }

    fetch(teamInformation).then((result)=>{
        result.json().then((data)=>{
            fillTable(data);
            console.log("fillTable");
            setCssForImage();
        })
    })
    
}

const loadTeams = (resolve) => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then((result)=>{
        result.json().then((data2)=>{
            fillFilter(data2);
            resolve();
        })
    })
}



const fillTable = (data) => {
    let html = ""; 
    data.forEach(element => {
        let pointsTeam1='';
        let pointsTeam2='';
        if(element.matchResults.length > 0){
            pointsTeam1=element.matchResults[1].pointsTeam1;
            pointsTeam2=element.matchResults[1].pointsTeam2;
        }
        //console.log(element.matchResults[1].pointsTeam1);
        html += "<div class='match'>     <div class='team1'> <div class='teamIcon1'><img src='"+element.team1.teamIconUrl+"'/></div> <div class='teamName1'>"+element.team1.teamName+"</div> <div class='score1'>"+pointsTeam1+"</div> </div>    <div class='bindestrich'> <h1>-</h1> </div>      <div class='team2'> <div class='score2'>"+pointsTeam2+"</div> <div class='teamName2'>"+element.team2.teamName+"</div> <div class='teamIcon2'><img src='"+element.team2.teamIconUrl+"'/></div> </div>       </div>";
    });
    document.getElementById("output").innerHTML = html;
}


const teams = [];
const fillFilter = (data2) => {
    i=0;
    let html2 = ""; 
    data2.forEach(element => {
        teams[i] = element;
        i++;
    });
    teams.sort((x,y) => x.teamName.localeCompare(y.teamName));
    
    let id = 0;
    teams.forEach(element => {
        html2 += "<img id='team"+id+"' src='"+element.teamIconUrl+"' onclick='selectDataSet("+id+")'/>"
        id++;
    });

   
}




let year = new Date().getFullYear();
function selectDataSet(id){
    let teamNameLinks = getLinkForTeam();
    
    sessionStorage.setItem("teamInformation", "https://api.openligadb.de/getmatchdata/%C3%B6bl1/"+year+"/"+teamNameLinks[id]+"");
    sessionStorage.setItem("oldTeam", sessionStorage.getItem("activeTeam"));
    sessionStorage.setItem("activeTeam", id);
            
    loadData();
}

const getLinkForTeam = () =>{
    let i = 0
    const teamNameLinks = []
    teams.forEach(element => {
        teamNameLinks[i] = element.teamName.replaceAll(" ", "%20");
        i++
    });
    return teamNameLinks;
}

const setCssForImage = () =>{
    const teamCssActive ="team"+sessionStorage.getItem("activeTeam");
    const teamCssOld ="team"+sessionStorage.getItem("oldTeam");
    
    
    document.getElementById(teamCssActive).style.transform = 'scale(1.2)';
    
    if(sessionStorage.getItem("oldTeam")!=null && sessionStorage.getItem("oldTeam")!=sessionStorage.getItem("activeTeam")){
        document.getElementById(teamCssOld).style.transform = '';
    }    
}



let p = new Promise((resolve, reject) =>{
    loadTeams(resolve);
})


p.then(() => {
    loadData();
}).catch(()=>{
    console.log("Error");
})