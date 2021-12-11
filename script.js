// Variables and Constants

// Cached Element References



// Event Listeners

// Functions



$.ajax({
    url: "https://data.cityofnewyork.us/resource/pqg4-dm6b.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "WTGqxDQfQdZayWp451rtfa2w9"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});