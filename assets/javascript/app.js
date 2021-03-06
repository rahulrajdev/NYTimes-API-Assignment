$(document).ready(function(){



$("#search-button").on("click", function(){
  event.preventDefault(); 

  // Creating an AJAX call for the specific article search term
 var apiKey = "dcefdbf518e9494aa9bb2ec0d87c9bbf";

  var beginDate = $("#startYear").val().trim();
    
  var endDate = $("#endYear").val().trim();
    
  var numResults = "5";

  var searchTerm = $("searchTerm").val();
  
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
    // var pages = result.response.docs;
    

    for (let i = 0; i < result.response.docs.length; i++) {
      var url = result.response.docs[i].web_url
      $("#article-container").prepend(url);
      console.log(url);
    }


  }).fail(function(err) {
    throw err;
  });

})
});