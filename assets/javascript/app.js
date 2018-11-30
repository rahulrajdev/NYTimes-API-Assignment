

// displayMovieInfo function re-renders the HTML to display the appropriate content
function searchArticles() {

  var searchTerm = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {