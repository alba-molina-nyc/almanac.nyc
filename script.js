// Variables and Constants

let resourceData;

const BASE_URL = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json';

// Cached Element References



// Event Listeners

// Functions

function getResourceData() {
    $.ajax(`${BASE_URL}`)
    .then(function(data) {
        resourceData = data;
        render();
    }, function(error) {
        console.log(error);
    });
}

function render() {
    console.log(resourceData)
}

// function getData() {
//     $.ajax(`${BASE_URL}`)
//     .then(function(data){
//         resourceData = data;
//         alert("Retrieved " + data.length + " records from the dataset!");
//         console.log(data);
//     }, function(error) {
//         alert("Error could not retrieve data");
//         console.log(error);
//     });
// }

