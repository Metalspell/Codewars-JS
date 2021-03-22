// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];

// your function should return the following array:

// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]

function findSenior(list) {
  let result = [];
  let ageArr = [];

  for (let i = 0; i < list.length; i++) {
    ageArr.push(list[i].age);
  }

  let max = 0;
  let midArr = [];
  let counter = 0;
  for (let j = 0; j < ageArr.length; j++) {
    if (ageArr[j] >= max) {
      max = ageArr[j];
    }
  }
  for (let k = 0; k < ageArr.length; k++) {
    if (max == ageArr[k]) {
      result.push(list[k])
    }
  }
  return result;
}

console.log(
  findSenior([
    {
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: "Python"
    },
    {
      firstName: "Noa",
      lastName: "A.",
      country: "Israel",
      continent: "Asia",
      age: 40,
      language: "Ruby"
    },
    {
      firstName: "Lukas",
      lastName: "R.",
      country: "Austria",
      continent: "Europe",
      age: 89,
      language: "C"
    },
    {
      firstName: "Noel",
      lastName: "O.",
      country: "Albania",
      continent: "Europe",
      age: 23,
      language: "Python"
    },
    {
      firstName: "Alexander",
      lastName: "F.",
      country: "Russia",
      continent: "Europe",
      age: 89,
      language: "Java"
    },
    {
      firstName: "Ellen",
      lastName: "E.",
      country: "Finland",
      continent: "Europe",
      age: 55,
      language: "Ruby"
    },
    {
      firstName: "Jakub",
      lastName: "I.",
      country: "Slovakia",
      continent: "Europe",
      age: 28,
      language: "Java"
    },
    {
      firstName: "Oliver",
      lastName: "P.",
      country: "Wales",
      continent: "Europe",
      age: 29,
      language: "JavaScript"
    },
    {
      firstName: "Mamadou",
      lastName: "E.",
      country: "Mali",
      continent: "Africa",
      age: 22,
      language: "Python"
    },
    {
      firstName: "Manuel",
      lastName: "C.",
      country: "Equatorial Guinea",
      continent: "Africa",
      age: 22,
      language: "Ruby"
    },
    {
      firstName: "Madison",
      lastName: "U.",
      country: "United States",
      continent: "Americas",
      age: 32,
      language: "Ruby"
    },
    {
      firstName: "Jakub",
      lastName: "Z.",
      country: "Czech Republic",
      continent: "Europe",
      age: 42,
      language: "Java"
    },
    {
      firstName: "Agustin",
      lastName: "V.",
      country: "Uruguay",
      continent: "Americas",
      age: 89,
      language: "JavaScript"
    },
    {
      firstName: "Nikau",
      lastName: "R.",
      country: "New Zealand",
      continent: "Oceania",
      age: 39,
      language: "Ruby"
    },
    {
      firstName: "Luke",
      lastName: "V.",
      country: "Malta",
      continent: "Europe",
      age: 29,
      language: "PHP"
    },
    {
      firstName: "Sofia",
      lastName: "W.",
      country: "Moldova",
      continent: "Europe",
      age: 29,
      language: "Ruby"
    },
    {
      firstName: "Oliver",
      lastName: "Q.",
      country: "Australia",
      continent: "Oceania",
      age: 19,
      language: "PHP"
    },
    {
      firstName: "Fatemeh",
      lastName: "Z.",
      country: "Iran",
      continent: "Asia",
      age: 29,
      language: "Java"
    },
    {
      firstName: "Sofia",
      lastName: "P.",
      country: "Italy",
      continent: "Europe",
      age: 41,
      language: "Clojure"
    },
    {
      firstName: "Maria",
      lastName: "Y.",
      country: "Cyprus",
      continent: "Europe",
      age: 30,
      language: "Java"
    },
    {
      firstName: "Odval",
      lastName: "F.",
      country: "Mongolia",
      continent: "Asia",
      age: 38,
      language: "Python"
    },
    {
      firstName: "Emily",
      lastName: "N.",
      country: "Ireland",
      continent: "Europe",
      age: 38,
      language: "Ruby"
    },
    {
      firstName: "Agustín",
      lastName: "M.",
      country: "Chile",
      continent: "Americas",
      age: 37,
      language: "C"
    },
    {
      firstName: "Thomas",
      lastName: "L.",
      country: "Canada",
      continent: "Americas",
      age: 38,
      language: "Java"
    },
    {
      firstName: "Seoyeon",
      lastName: "J.",
      country: "South Korea",
      continent: "Asia",
      age: 29,
      language: "Ruby"
    },
    {
      firstName: "Yusuf",
      lastName: "N.",
      country: "Turkey",
      continent: "Europe",
      age: 22,
      language: "Python"
    },
    {
      firstName: "Hanna",
      lastName: "L.",
      country: "Hungary",
      continent: "Europe",
      age: 29,
      language: "JavaScript"
    },
    {
      firstName: "Piotr",
      lastName: "B.",
      country: "Poland",
      continent: "Europe",
      age: 30,
      language: "JavaScript"
    },
    {
      firstName: "Mariami",
      lastName: "G.",
      country: "Georgia",
      continent: "Europe",
      age: 29,
      language: "Python"
    },
    {
      firstName: "Mia",
      lastName: "H.",
      country: "Germany",
      continent: "Europe",
      age: 39,
      language: "Ruby"
    },
    {
      firstName: "Mark",
      lastName: "G.",
      country: "Scotland",
      continent: "Europe",
      age: 22,
      language: "JavaScript"
    },
    {
      firstName: "Marija",
      lastName: "U.",
      country: "Republic of Macedonia",
      continent: "Europe",
      age: 42,
      language: "JavaScript"
    },
    {
      firstName: "Sou",
      lastName: "B.",
      country: "Japan",
      continent: "Asia",
      age: 43,
      language: "PHP"
    },
    {
      firstName: "Sebastian",
      lastName: "W.",
      country: "Venezuela",
      continent: "Americas",
      age: 28,
      language: "Python"
    },
    {
      firstName: "Nor",
      lastName: "E.",
      country: "Malaysia",
      continent: "Asia",
      age: 21,
      language: "Clojure"
    },
    {
      firstName: "Fatima",
      lastName: "H.",
      country: "Pakistan",
      continent: "Asia",
      age: 28,
      language: "JavaScript"
    },
    {
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 32,
      language: "JavaScript"
    },
    {
      firstName: "Sofija",
      lastName: "Q.",
      country: "Latvia",
      continent: "Europe",
      age: 29,
      language: "Ruby"
    },
    {
      firstName: "Althea",
      lastName: "I.",
      country: "Philippines",
      continent: "Asia",
      age: 31,
      language: "Python"
    },
    {
      firstName: "Sara",
      lastName: "Y.",
      country: "Montenegro",
      continent: "Europe",
      age: 89,
      language: "C"
    },
    {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java"
    },
    {
      firstName: "Laia",
      lastName: "P.",
      country: "Andorra",
      continent: "Europe",
      age: 55,
      language: "Ruby"
    },
    {
      firstName: "Joao",
      lastName: "D.",
      country: "Portugal",
      continent: "Europe",
      age: 35,
      language: "JavaScript"
    },
    {
      firstName: "Emma",
      lastName: "B.",
      country: "Norway",
      continent: "Europe",
      age: 89,
      language: "Clojure"
    },
    {
      firstName: "Emily",
      lastName: "A.",
      country: "Northern Ireland",
      continent: "Europe",
      age: 32,
      language: "JavaScript"
    },
    {
      firstName: "Gabriel",
      lastName: "T.",
      country: "Luxembourg",
      continent: "Europe",
      age: 28,
      language: "Java"
    },
    {
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 21,
      language: "C"
    },
    {
      firstName: "Andrei",
      lastName: "E.",
      country: "Romania",
      continent: "Europe",
      age: 19,
      language: "C"
    },
    {
      firstName: "Fatima",
      lastName: "A.",
      country: "Algeria",
      continent: "Africa",
      age: 25,
      language: "JavaScript"
    },
    {
      firstName: "William",
      lastName: "L.",
      country: "Sweden",
      continent: "Europe",
      age: 32,
      language: "Java"
    }
  ])
);
