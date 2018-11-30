

// displayMovieInfo function re-renders the HTML to display the appropriate content
function searchArticles() {

  var searchTerm = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";

  // Creating an AJAX call for the specific article search term
    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {