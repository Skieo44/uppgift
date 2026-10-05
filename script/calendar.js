console.log("hello");

const drivers = [
  ["VER", "Max Verstappen"],
  ["ANT", "Kimi Antonelli"],
  ["HAM", "Lewis Hamilton"],
  ["LEC", "Charles Leclerc"],
  ["HAD", "Isack Hadjar"],
  ["PIA", "Oscar Piastri"],
  ["LAW", "Liam Lawson"],
  ["ALO", "Fernando Alonso"],
  ["NOR", "Lando Norris"],
  ["LIN", "Nicholas Latifi"],
  ["HUL", "Nico Hulkenberg"],
  ["STR", "Lance Stroll"]
];

const sessions = [
  {
    name: "Practice 1",
    time: "09:00 - 10:30"
  },
  {
    name: "Practice 2",
    time: "11:00 - 12:30"
  },
  {
    name: "Qualifying",
    time: "13:00 - 14:30"
  }
];

const races = [
{
    round: 1,
    country: "Australia",
    flag: "🇦🇺",
    date: "06 - 08 MAR",
    circuit: "Albert Park",
    name: "Australian Grand Prix",

    results: [
        {
            pos:1,
            driver: "RUS",
            team:"Mercedes",
            time: "1:24:34.123",
            points: 25
        },
        {
            pos:2,
            driver: "ANT",
            team: "Mercedes",
            time: "1:24:35.456",
            points: 18
        },
        {
            pos:3,
            driver: "LEC",
            team: "Ferrari",
            time: "1:24:36.789",
            points: 15
        }
    ]
},

    {
    round: 2,
    country: "China",
    flag: "�🇳",
    date: "20 - 22 MAR",
    circuit: "Shanghai International Circuit",
    name: "Chinese Grand Prix",

    results: [
        {
            pos:1, 
        }
    ]
}
];


const calendar = document.getElementById("calendar");

function createRaceCard(race) {
    let results = "";

    for (let i = 0; i < race.results.length; i++) {
        results += `
        <div class="result">
            ${race.results[i].drivers}
        </div>
        `;
    }  
}
