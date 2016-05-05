$(document).ready(function(){
	var $btn = $('.btn'),
    $quote = $('.quote'),
    $author = $('.author');

	$btn.click(function(e){
	  e.preventDefault();
	  $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en',function(quote){
	    console.log(quote);
	  });
	});
});