function getHTMLForBundesligaTable(data) {
    console.log(data); // Überprüfe die Daten in der Konsole

    let html = "<table border='1'><tr><td>Platz</td><td>Verein</td><td>Punkte</td></tr>";

    // Überprüfe, ob die erwarteten Daten vorhanden sind
    if (Array.isArray(data)) {
        data.forEach(match => {
            if (match.Team1 && match.Team1.TeamName && match.MatchResults && match.MatchResults.length > 0) {
                const points = match.MatchResults[0].PointsTeam1 || '-';
                const teamName = match.Team1.TeamName || '-';
                html += `<tr><td>${points}</td><td>${teamName}</td><td>${match.Team1.ShortName || '-'}</td></tr>`;
            } else {
                console.error('Unerwartetes Datenformat für ein Match:', match);
            }
        });
    } else {
        console.error('Unerwartetes Datenformat:', data);
    }

    html += "</table>";
    document.getElementById("content").innerHTML = html;
}
