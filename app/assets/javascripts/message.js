$(function(){
  alert("a")
  $('.new_message').on('submit', function(e){
    console.log('pushed submit button');
     e.preventDefault();
  });
});

