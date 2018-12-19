$(function() {
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    // .done(function(users){

    // })
    // .fail(function(user){
    //   alert('メッセージか画像を入力してください。');
    // });
  });
});
