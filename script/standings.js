console.log("Hello111");

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
        team: "Mercedes",
        points: 381
    },
    {
        name: "George Russell",
        team: "Mercedes",
        points: 366
    },
      {
        name: "Lewis Hamilton",
        team: "Ferrari",
        points: 390
    },
    {
        name: "Max Verstappen",
        team: "Red Bull",
        points: 381
    },
    {
        name: "Charles Leclerc",
        team: "Ferrari",
        points: 366
    },
      {
        name: "Lando Norris",
        team: "McLaren",
        points: 390
    },
    {
        name: "Oscar Piastri",
        team: "McLaren",
        points: 381
    },
    {
        name: "Isack Hadjar",
        team: "Redbull",
        points: 366
    },
      {
        name: "Liam Lawson",
        team: "Racing Bulls",
        points: 390
    },
      {
        name: "Pierre Gasly",
        team: "Alpine",
        points: 390
    },
      {
        name: "Arvid Lindblad",
        team: "Racing Bulls",
        points: 390
    },
    {
        name: "Franco Colapinto",
        team: "Alpine",
        points: 381
    },
    {
        name: "Oliver Bearman",
        team: "Haas F1 Team",
        points: 366
    },
      {
        name: "Nico Hulkenberg",
        team: "Audi",
        points: 390
    },
    {
        name: "Gabriel Bortoleto",
        team: "Audi",
        points: 381
    },
    {
        name: "Esteban Ocon",
        team: "Haas F1 Team",
        points: 366
    },
      {
        name: "Fernando Alonso",
        team: "Aston Martin",
        points: 390
    },
    {
        name: "Carlos Sainz",
        team: "Williams",
        points: 381
    },
    {
        name: "Alexander Albon",
        team: "Williams",
        points: 366
    },
      {
        name: "Yuki Tsunoda",
        team: "Racing Bulls",
        points: 390
    },
    {
        name: "Lance Stroll",
        team: "Aston Martin",
        points: 366
    },
    {
        name: "Sergio Perez",
        team: "Cadillac",
        points: 381
    },
     {
        name: "Valtteri Bottas",
        team: "Cadillac",
        points: 366
    },
];

const driverList = document.getElementById("driver-list");
const teamList = document.getElementById("team-list");

for (let i = 0; i < drivers.length; i++) {
    const driver = drivers[i];

    const listItem = document.createElement("li");
    listItem.classList.add("driver-row");

    listItem.innerHTML = `
       

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

