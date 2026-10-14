console.log("Hello111");
console.log(window.innerWidth)


const driverList = document.getElementById("driver-list");
const teamList = document.getElementById("team-list");


// Array used to store all the neccesary values for the standings page
const driverInfo = [
    {
        name: "Kimi Antonelli",
        sName: "ANT",
        team: "Mercedes",
        points: 340
    },
    {
        name: "George Russell",
        sName: "RUS",
        team: "Mercedes",
        points: 238
    },
      {
        name: "Lewis Hamilton",
        sName: "HAM",
        team: "Ferrari",
        points: 229
    },
    {
        name: "Max Verstappen",
        sName: "VER",
        team: "Red Bull",
        points: 221
    },
    {
        name: "Charles Leclerc",
        sName: "LEC",
        team: "Ferrari",
        points: 215
    },
      {
        name: "Lando Norris",
        sName: "NOR",
        team: "McLaren",
        points: 201
    },
    {
        name: "Oscar Piastri",
        sName: "PIA",
        team: "McLaren",
        points: 138
    },
    {
        name: "Isack Hadjar",
        sName: "HAD",
        team: "Red Bull",
        points: 97
    },
      {
        name: "Liam Lawson",
        sName: "LAW",
        team: "Racing Bulls",
        points: 75
    },
      {
        name: "Pierre Gasly",
        sName: "GAS",
        team: "Alpine",
        points: 41
    },
      {
        name: "Arvid Lindblad",
        sName: "LIN",
        team: "Racing Bulls",
        points: 38
    },
    {
        name: "Franco Colapinto",
        sName: "COL",
        team: "Alpine",
        points: 27
    },
    {
        name: "Oliver Bearman",
        sName: "BEA",
        team: "Haas F1 Team",
        points: 23
    },
      {
        name: "Nico Hulkenberg",
        sName: "HUL",
        team: "Audi",
        points: 13
    },
    {
        name: "Gabriel Bortoleto",
        sName: "BOR",
        team: "Audi",
        points: 10
    },
    {
        name: "Esteban Ocon",
        sName: "OCO",
        team: "Haas F1 Team",
        points: 7
    },
      {
        name: "Fernando Alonso",
        sName: "ALO",
        team: "Aston Martin",
        points: 7
    },
    {
        name: "Carlos Sainz",
        sName: "SAI",
        team: "Williams",
        points: 7
    },
    {
        name: "Alexander Albon",
        sName: "ALB",
        team: "Williams",
        points: 5
    },
      {
        name: "Yuki Tsunoda",
        sName: "TSU",
        team: "Racing Bulls",
        points: 1
    },
    {
        name: "Lance Stroll",
        sName: "STR",
        team: "Aston Martin",
        points: 0
    },
    {
        name: "Sergio Perez",
        sName: "PER",
        team: "Cadillac",
        points: 0
    },
     {
        name: "Valtteri Bottas",
        sName: "BOT",
        team: "Cadillac",
        points: 0
    }
];

const teams = [
    { name: "Mercedes", points: 578 },
    { name: "Ferrari", points: 444 },
    { name: "McLaren", points: 339 },
    { name: "Red Bull", points: 332 },
    { name: "Racing Bulls", points: 100 },
    { name: "Alpine", points: 68 },
    { name: "Haas F1 Team", points: 30 },
    { name: "Audi", points: 23 },
    { name: "Williams", points: 12 },
    { name: "Aston Martin", points: 7 },
    { name: "Cadillac", points: 0 }
];
    

// Gave an error so the teams table wouldn't load, this ignores the driverslist if its null.
if(driverList == null){
    
// For-loop which generates and updates the standings table for the constructors' standings
    for (let i = 0; i < teams.length; i++) {
        const team = teams[i];
        console.log("hellodad")
        const row = document.createElement("tr");

        row.innerHTML = `
           <td>${i + 1}</td>
           <td>${team.name}</td>
           <td>${team.points}</td>
        `;

        teamList.appendChild(row);
  
  }
}else{
    // For-loop which generates and updates the standings table for the drivers' standings
for (let i = 0; i < driverInfo.length; i++) {
    const driver = driverInfo[i];

    
    const row = document.createElement("tr");


    if(window.screen.width <= 600){
        row.innerHTML = `
        <td>${i + 1}</td>
        <td>${driver.sName}</td>
        <td>${driver.team}</td>
        <td>${driver.points}</td>
    `;
    }else{
        row.innerHTML = `
        <td>${i + 1}</td>
        <td>${driver.name}</td>
        <td>${driver.team}</td>
        <td>${driver.points}</td>
    `;
    }

    driverList.appendChild(row);
}
}

