$(function(){
  function buildHTML(message) {
    var message_image = ""
    if(message.image){
      var message_image = `<img class: 'lower-message__image' src='${message.image}'>`
    }
    var html = `<div class="chat-main__body--message"  data-message-id="${message.id}">
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
                    ${message_image}
                  </div>
                </div>`
      return html;
  }
  var Interval = setInterval(function(){
      if (location.href.match(/\/groups\/\d+\/messages/)){
          lastMessageId = $(".chat-main__body--message:last").data("message-id") || 0
          $.ajax({
           type: "GET",
           url: location.href,
           data: {lastMessageId: lastMessageId},
           dataType: "json"
         })
         .done(function(json){
           if (json.length != 0){
              json.messages.forEach(function(autoMessage){
               var html = buildHTML(autoMessage);
               $('.chat-main__body').append(html);
               $('.chat-main__body--message').animate({scrollTop: $('.chat-main__body--message').get(0).scrollHeight}, 'slow');
             })
           }
         })
      }
    }, 5000);
});
