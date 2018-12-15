$(function(){
  function buildHTML(message){
    var message_content = message.content ? message.content : ""
    var message_image = message.image["url"] ? message.image["url"] : ""
    var html = `<div class="chat-main__body--message">
                  <div class="chat-main__body--message-name">
                    ${message.user_name}
                  </div>
                  <div class="chat-main__body--message-date">
                     ${message.created_at}
                  </div>
                  <div class="chat-main__body--message-text">
                    <p class="lower-message__content">
                      ${message_content}
                    </p>
                    <image class: 'lower-message__image' src='${message_image}'>
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.chat-main__body').append(html);

      $('.chat-main__bottom--form--textbox').val('');
      $('#message_image').val('')
      $('.chat-main__body--message').animate({scrollTop: $('.chat-main__body--message').get(0).scrollHeight}, 'slow');
      $('.form__submit').prop("disabled", false);
    })
    .fail(function(message){
      alert('メッセージか画像を入力してください。');
      $('.form__submit').prop("disabled", false);
    });
  });
});
