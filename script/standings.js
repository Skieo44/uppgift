console.log("Hello111");


const driverList = document.getElementById("driver-list");
const teamList = document.getElementById("team-list");




const teams = [
    {
        tName: "Mercedes",
        tPoints: 578
    },
     {
        tName: "Ferrari",
        tPoints: 444
    },
     {
        tName: "McLaren",
        tPoints: 339
    },
     {
        tName: "Redbull",
        tPoints: 332
    },
     {
        tName: "Racing Bulls",
        tPoints: 100
    },
     {
        tName: "Alpine",
        tPoints: 68
    },
     {
        tName: "Haas F1 Team",
        tPoints: 30
    },
     {
        tName: "Audi",
        tPoints: 23
    },
     {
        tName: "Williams",
        tPoints: 12
    },
     {
        tName: "Aston Martin",
        tPoints: 7
    },
     {
        tName: "Cadillac",
        tPoints: 0
    },
];

const drivers = [
    {
        name: "Kimi Antonelli",
        sName: "ANT",
        team: "Mercedes",
        points: 381
    },
    {
        name: "George Russell",
        sName: "RUS",
        team: "Mercedes",
        points: 366
    },
      {
        name: "Lewis Hamilton",
        sName: "HAM",
        team: "Ferrari",
        points: 390
    },
    {
        name: "Max Verstappen",
        sName: "VER",
        team: "Red Bull",
        points: 381
    },
    {
        name: "Charles Leclerc",
        sName: "LEC",
        team: "Ferrari",
        points: 366
    },
      {
        name: "Lando Norris",
        sName: "NOR",
        team: "McLaren",
        points: 390
    },
    {
        name: "Oscar Piastri",
        sName: "PIA",
        team: "McLaren",
        points: 381
    },
    {
        name: "Isack Hadjar",
        sName: "HAD",
        team: "Redbull",
        points: 366
    },
      {
        name: "Liam Lawson",
        sName: "LAW",
        team: "Racing Bulls",
        points: 390
    },
      {
        name: "Pierre Gasly",
        sName: "GAS",
        team: "Alpine",
        points: 390
    },
      {
        name: "Arvid Lindblad",
        sName: "LIN",
        team: "Racing Bulls",
        points: 390
    },
    {
        name: "Franco Colapinto",
        sName: "COL",
        team: "Alpine",
        points: 381
    },
    {
        name: "Oliver Bearman",
        sName: "BEA",
        team: "Haas F1 Team",
        points: 366
    },
      {
        name: "Nico Hulkenberg",
        sName: "HUL",
        team: "Audi",
        points: 390
    },
    {
        name: "Gabriel Bortoleto",
        sName: "BOR",
        team: "Audi",
        points: 381
    },
    {
        name: "Esteban Ocon",
        sName: "OCO",
        team: "Haas F1 Team",
        points: 366
    },
      {
        name: "Fernando Alonso",
        sName: "ALO",
        team: "Aston Martin",
        points: 390
    },
    {
        name: "Carlos Sainz",
        sName: "SAI",
        team: "Williams",
        points: 381
    },
    {
        name: "Alexander Albon",
        sName: "ALB",
        team: "Williams",
        points: 366
    },
      {
        name: "Yuki Tsunoda",
        sName: "TSU",
        team: "Racing Bulls",
        points: 390
    },
    {
        name: "Lance Stroll",
        sName: "STR",
        team: "Aston Martin",
        points: 366
    },
    {
        name: "Sergio Perez",
        sName: "PER",
        team: "Cadillac",
        points: 381
    },
     {
        name: "Valtteri Bottas",
        sName: "BOT",
        team: "Cadillac",
        points: 366
    },
];




for (let i = 0; i < drivers.length; i++) {
    const driver = drivers[i];

    const listItem = document.createElement("li");
    listItem.classList.add("driver-row");

    listItem.innerHTML = `
       
        <div class="short-name">
            <span class="short-name" >${driver.sName}</span>
        </div>
        <div class="driver-info">
            <span class="driver-name">${driver.name}</span>
            <span class="team">${driver.team}</span>
        </div>

        <span class="points">${driver.points} PTS</span>
    `;

    driverList.appendChild(listItem);
}

for(let i = 0; i < teams.length; i++) {
    const team = teams[i];

    const listItem = document.createElement("li");
    listItem.classList.add("team-row");

    listItem.innerHTML = `
       

        <div class="team-info">
            <span class="team-name">${team.tName}</span>
        </div>

        <span class="points">${team.tPoints} PTS</span>
    `;

    teamList.appendChild(listItem);
    
    console.log("hoo pineapple");
}

const button = document.getElementById("drpbtn").addEventListener("click", test);

function test(){
    alert("hello");
}
