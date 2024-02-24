function calculateStats() {
    var hits = parseInt(document.getElementById("hits").value);
    var atBats = parseInt(document.getElementById("atBats").value);

    var battingAverage = hits / atBats;
    var onBasePercentage = (hits + 3) / (atBats + 4); // Adjusted for simplicity
    var sluggingPercentage = hits / atBats; // Simplified, assuming all hits are singles

    document.getElementById("results").innerHTML = `
        <h3>Results:</h3>
        <p>Batting Average: ${battingAverage.toFixed(3)}</p>
        <p>On-Base Percentage: ${onBasePercentage.toFixed(3)}</p>
        <p>Slugging Percentage: ${sluggingPercentage.toFixed(3)}</p>
    `;
}
