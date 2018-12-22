$(function(){
  function buildHTML(message) {
    var message_image = message.image ? message.image : ""
    var html = `<div class="chat-main__body--message" data-message-id="${message.id}">
                  <div class="chat-main__body--message-name">
                    ${message.name}
                  </div>
                  <div class="chat-main__body--message-date">
                     ${message.date}
                  </div>
                  <div class="chat-main__body--message-text">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    <image class: 'lower-message__image' src='${message_image}'>
                  </div>
                </div>`
    return html;
  }

  var interval = setInterval(function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    $.ajax({
      url: location.href.json,
    })
    .done(function(json) {
      var id = $('chat-main__body--message').data('messageId');
      var insertHTML = '';
      json.messages.forEach(function(message) {
        if (message.id > id ) {
          insertHTML += buildHTML(message);
        }
      });
      $('.chat-main__body').append(insertHTML);
    })
    .fail(function(json) {
      alert('自動更新に失敗しました');
    });
  } else {
    clearInterval(interval);
   }} , 5 * 1000 );


});
