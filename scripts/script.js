var players = [];

function addPlayerAndCalculate() {
    var name = document.getElementById("name").value;
    var position = document.getElementById("position").value;
    var hits = parseInt(document.getElementById("hits").value);
    var atBats = parseInt(document.getElementById("atBats").value);
    
    var player = {
        name: name,
        position: position,
        hits: hits,
        atBats: atBats
    };
    
    players.push(player);
    
    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
    document.getElementById("hits").value = "";
    document.getElementById("atBats").value = "";

    calculateStats();
}

function calculateStats() {
    players.sort((a, b) => (b.hits / b.atBats) - (a.hits / a.atBats));

    var table = "<h3>Results:</h3><table>";
    table += "<tr><th>Name</th><th>Position</th><th>Batting Average</th></tr>";
    players.forEach(player => {
        var battingAverage = player.hits / player.atBats;
        table += `<tr><td>${player.name}</td><td>${player.position}</td><td>${battingAverage.toFixed(3)}</td></tr>`;
    });
    table += "</table>";

    document.getElementById("results").innerHTML = table;
}
