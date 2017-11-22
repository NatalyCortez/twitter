window.addEventListener('load', function() {
  var tweetarea = document.getElementById('tweetarea');
  var buttonTweet = document.getElementById('button');
  var countDinamic = document.getElementById('count');
  var massage = document.getElementById('message');
  var MAXCHARACTER = 140;

  tweetarea.addEventListener("keyup",function(event){
    if (event.target.value.trin().length); {
    var total = MAXCHARACTER - event.target.value.trin().length;
      tweetarea.disable = false;
      console.log(event.target.value.trin());
    } else {
      tweetarea.diasble = true;
      countDinamic.textContent = MAXCHARACTER;
      console.log("Caja vacía");
    }
console.log(event.target.value.trin());
console.log(target.value.trin().length);
    }
});

buttonTweet
