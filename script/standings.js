console.log("Hello111");


const driverList = document.getElementById("driver-list");
const teamList = document.getElementById("team-list");


// Array used to store all the neccesary values for the standings page
const drivers = [
    {
        name: "Kimi Antonelli",
        sName: "ANT",
        team: "Mercedes",
        tPoints: 578,
        points: 381
    },
    {
        name: "George Russell",
        sName: "RUS",
        team: "Mercedes",
        tPoints: 578,
        points: 366
    },
      {
        name: "Lewis Hamilton",
        sName: "HAM",
        team: "Ferrari",
        tPoints: 444,
        points: 390
    },
    {
        name: "Max Verstappen",
        sName: "VER",
        team: "Red Bull",
        tPoints: 332,
        points: 381
    },
    {
        name: "Charles Leclerc",
        sName: "LEC",
        team: "Ferrari",
        tPoints: 444,
        points: 366
    },
      {
        name: "Lando Norris",
        sName: "NOR",
        team: "McLaren",
        tPoints: 339,
        points: 390
    },
    {
        name: "Oscar Piastri",
        sName: "PIA",
        team: "McLaren",
        tPoints: 339,
        points: 381
    },
    {
        name: "Isack Hadjar",
        sName: "HAD",
        team: "Red Bull",
        tPoints: 332,
        points: 366
    },
      {
        name: "Liam Lawson",
        sName: "LAW",
        team: "Racing Bulls",
        tPoints: 100,
        points: 390
    },
      {
        name: "Pierre Gasly",
        sName: "GAS",
        team: "Alpine",
        tPoints: 68,
        points: 390
    },
      {
        name: "Arvid Lindblad",
        sName: "LIN",
        team: "Racing Bulls",
        tPoints: 100,
        points: 390
    },
    {
        name: "Franco Colapinto",
        sName: "COL",
        team: "Alpine",
        tPoints: 68,
        points: 381
    },
    {
        name: "Oliver Bearman",
        sName: "BEA",
        team: "Haas F1 Team",
        tPoints: 30,
        points: 366
    },
      {
        name: "Nico Hulkenberg",
        sName: "HUL",
        team: "Audi",
        tPoints: 23,
        points: 390
    },
    {
        name: "Gabriel Bortoleto",
        sName: "BOR",
        team: "Audi",
        tPoints: 23,
        points: 381
    },
    {
        name: "Esteban Ocon",
        sName: "OCO",
        team: "Haas F1 Team",
        tPoints: 30,
        points: 366
    },
      {
        name: "Fernando Alonso",
        sName: "ALO",
        team: "Aston Martin",
        tPoints: 7,
        points: 390
    },
    {
        name: "Carlos Sainz",
        sName: "SAI",
        team: "Williams",
        tPoints: 12,
        points: 381
    },
    {
        name: "Alexander Albon",
        sName: "ALB",
        team: "Williams",
        tPoints: 12,
        points: 366
    },
      {
        name: "Yuki Tsunoda",
        sName: "TSU",
        team: "Racing Bulls",
        tPoints: 100,
        points: 390
    },
    {
        name: "Lance Stroll",
        sName: "STR",
        team: "Aston Martin",
        tPoints: 7,
        points: 366
    },
    {
        name: "Sergio Perez",
        sName: "PER",
        team: "Cadillac",
        tPoints: 0,
        points: 381
    },
     {
        name: "Valtteri Bottas",
        sName: "BOT",
        team: "Cadillac",
        tPoints: 0,
        points: 366
    }
];



// For-loop which generates and updates the standings table for the drivers' standings
for (let i = 0; i < drivers.length; i++) {
    const driver = drivers[i];

    
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${i + 1}</td>
        <td>${driver.name}</td>
        <td>${driver.team}</td>
        <td>${driver.points}</td>
    `;

    driverList.appendChild(row);
}

// For-loop which generates and updates the standings table for the constructors' standings
    for (let i = 0; i < teams.length; i++) {
        const team = drivers[i];
        const teamDriver = drivers.find(driver => driver.team === team.tName);

        const listItem = document.createElement("li");
        listItem.classList.add("team-row");

        listItem.innerHTML = `
            <div class="team-info">
                <span class="team-name">${team.tName}</span>
            </div>

            <span class="points">${teamDriver.tPoints} PTS</span>
        `;

        teamList.appendChild(listItem);
    }

const button = document.getElementById("drpbtn").addEventListener("click", test);

function test(){
    alert("hello");
}
