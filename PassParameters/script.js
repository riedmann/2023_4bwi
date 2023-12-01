const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res)=>res.json().then((data)=>{
   let team = data.find((team) =>  (team.teamInfoId == id));
   console.log(team);
}))
