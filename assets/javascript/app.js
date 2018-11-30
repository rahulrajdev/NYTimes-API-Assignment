



// variables





function searchArticles() {
    
  // Creating an AJAX call for the specific article search term
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?$.param({dcefdbf518e9494aa9bb2ec0d87c9bbf" + "?q=" + searchTerm + "?begin_date=" + beginDate + "?end_date=" + endDate + "?page=" + numResults + "})";
  
  var beginDate = "20100115"; 
    
  var endDate = "20180115";
    
  var numResults = "8";
    
  var searchTerm = "healthcare";

  $.ajax({
    url: queryURL, 
    method: 'GET',
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    throw err;
  });

}

//function call
searchArticles();


// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "dcefdbf518e9494aa9bb2ec0d87c9bbf",
//   'q': "Manafort",
//   'begin_date': "20100115",
//   'end_date': "20180115",
//   'page': 5
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });
