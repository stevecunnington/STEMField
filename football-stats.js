// Define an array of football matches with relevant statistics
let footballMatches = [  {    homeTeam: "Team A",    awayTeam: "Team B",    homeGoals: 2,    awayGoals: 1,    possession: 55,    shots: 10,    fouls: 12,    corners: 3  },  {    homeTeam: "Team C",    awayTeam: "Team D",    homeGoals: 0,    awayGoals: 2,    possession: 48,    shots: 8,    fouls: 16,    corners: 2  },  // Add more matches as needed];

// Calculate the average possession for all matches
function calculateAveragePossession(matches) {
  let totalPossession = 0;
  for (let i = 0; i < matches.length; i++) {
    totalPossession += matches[i].possession;
  }
  let averagePossession = totalPossession / matches.length;
  return averagePossession.toFixed(2);
}

// Calculate the total number of goals for all matches
function calculateTotalGoals(matches) {
  let totalGoals = 0;
  for (let i = 0; i < matches.length; i++) {
    totalGoals += matches[i].homeGoals + matches[i].awayGoals;
  }
  return totalGoals;
}

// Display the statistics for all matches
function displayMatches(matches) {
  let matchTable = document.getElementById("matchTable");
  for (let i = 0; i < matches.length; i++) {
    let row = matchTable.insertRow(-1);
    let homeTeamCell = row.insertCell(0);
    let awayTeamCell = row.insertCell(1);
    let homeGoalsCell = row.insertCell(2);
    let awayGoalsCell = row.insertCell(3);
    let possessionCell = row.insertCell(4);
    let shotsCell = row.insertCell(5);
    let foulsCell = row.insertCell(6);
    let cornersCell = row.insertCell(7);
    homeTeamCell.innerHTML = matches[i].homeTeam;
    awayTeamCell.innerHTML = matches[i].awayTeam;
    homeGoalsCell.innerHTML = matches[i].homeGoals;
    awayGoalsCell.innerHTML = matches[i].awayGoals;
    possessionCell.innerHTML = matches[i].possession;
    shotsCell.innerHTML = matches[i].shots;
    foulsCell.innerHTML = matches[i].fouls;
    cornersCell.innerHTML = matches[i].corners;
  }
}

// Call the functions to display the statistics on the webpage
document.getElementById("averagePossession").innerHTML = calculateAveragePossession(footballMatches);
document.getElementById("totalGoals").innerHTML = calculateTotalGoals(footballMatches);
displayMatches(footballMatches);
