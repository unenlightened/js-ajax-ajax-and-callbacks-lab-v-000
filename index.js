$(document).ready(function (){
});

function searchRepositories(){
  let term = $("#searchTerms").value
  let url = `https:/api.github.com/search/repositories/?=${term}`
  $.get(url, function(response) {
    $("#results").html(response)
  })

  console.log(term)
}
