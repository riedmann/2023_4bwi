function insertRow(data) {
  let output = "";

  console.log(data);
  data.forEach((team, index) => {
    console.log(team.teamName);
    let row = `<div class="bg-rowdetail grid grid-cols-6 pl-4 pr-4 pt-4 pb-4 mb-1">
        <div class="grid col-span-4 grid-cols-6 "><div>${index + 1}</div> 
        <div class="col-span-5 flex gap-2"><img class="w-10 h-10" src="${
          team.teamIconUrl
        }"/>
        ${team.teamName}</div> </div> 
      <div class="grid grid-cols-7"> <div>${team.won}</div>
      <div>${team.draw}</div><div>${team.lost}</div>      <div></div>
      <div>${team.goals} </div><div>${team.opponentGoals}</div>      
      <div>${team.goalDiff}</div></div>
      <div class="flex justify-center">${team.points}</div></div>`;
    output += row;
  });

  document.getElementById("container").innerHTML = output;
}

function loadData() {
  fetch("https://api.openligadb.de/getbltable/öbl1/2023").then((result) =>
    result.json().then((data) => {
      insertRow(data);
    })
  );
}

loadData();
