$(function(){
  function buildHTML(message){
    var html = `<div class="chat-main__body--message">
                  <div class="chat-main__body--message-name">
                    ${message.user_name}
                  </div>
                  <div class="chat-main__body--message-date">
                     ${message.created_at}
                  </div>
                  <div class="chat-main__body--message-text">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    <image class: 'lower-message__image' src='${message.image}'>
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    var always = function(){$('.form__submit').prop("disabled", false)};
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
      $('.chat-main__bottom--form--textbox, #message_image').val('');
      $('.chat-main__body--message').animate({scrollTop: $('.chat-main__body--message').get(0).scrollHeight}, 'slow');
      always();
    })
    .fail(function(message){
      alert('メッセージか画像を入力してください。');
      always();
    });
  });
});
