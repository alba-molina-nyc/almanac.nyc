// Variables and Constants
const BASE_URL = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json';

// Cached Element References



// Event Listeners

// Functions

function getData() {
    $.ajax(`${BASE_URL}`)
    .then(function(data){
        alert("Retrieved " + data.length + " records from the dataset!");
        console.log(data);
    }, function(error) {
        alert("Error could not retrieve data");
        console.log(error);
    });

}



// $.ajax({
//     url: "https://data.cityofnewyork.us/resource/pqg4-dm6b.json",
//     type: "GET",
//     data: {
//       "$limit" : 5000,
//       "$$app_token" : "WTGqxDQfQdZayWp451rtfa2w9"
//     }
// }).done(function(data) {
//   alert("Retrieved " + data.length + " records from the dataset!");
//   console.log(data);
// });