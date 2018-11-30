
//API call function
function searchArticles() {
    
  // Creating an AJAX call for the specific article search term
 var apiKey = "dcefdbf518e9494aa9bb2ec0d87c9bbf";

  var beginDate = "20100115"; 
    
  var endDate = "20180115";
    
  var numResults = "8";
    
  var searchTerm = "healthcare";
  
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + $.param({
     "api-key" : apiKey,  
      "q": searchTerm,
     "begin_date" : beginDate, 
     "end_date" : endDate, 
     "page":  numResults 
    });
  


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