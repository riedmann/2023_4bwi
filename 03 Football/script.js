function loadTable() {
  fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) =>
    res.json().then((result) => {
      insertTable(result);
    })
  );
}

function insertTable(data) {
  console.log("data", data);
  const element = document.getElementById("table");

  let output = "";
  data.forEach((team) => {
    output += '<div class="flex gap-4 p-2 border w-fit mt-2 rounded-xl">';
    output += " <div>" + team.draw + "</div>";
    output += ' <div><img width="20px" src="' + team.teamIconUrl + '"/></div>';

    output += " <div>" + team.teamName + "</div>";
    output += "</div>";
  });

  element.innerHTML = output;

  //     <div>Logo</div>
  //     <div>FC Bayern</div>
  //     <div>16</div>
  //   </div>
}

const data = loadTable();
