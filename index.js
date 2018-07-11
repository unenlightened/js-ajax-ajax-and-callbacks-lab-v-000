$(document).ready(function (){
});

function searchRepositories(){
  let query = $("#searchTerms").val()
  let url = `https:/api.github.com/search/repositories/?q=${query}`
  $.get(url, function(response) {
    $("#results").html(response)
  })

  console.log(term)
}
