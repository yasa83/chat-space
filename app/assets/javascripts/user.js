$(function() {
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      $('#user-search-result').empty();
      if (users.length !== 0){
        users.forEach(function(user){
          appendUser(user)
        });
      }
      else{
        $('#user-search-result').empty();
        appendNoUser("一致するユーザーはいません")
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    });
  });
});
