window.addEventListener('load', function() {
  var text = document.getElementById('insert-posts');
  var buttonTweet = document.getElementById('button');
  var list = document.getElementById('container-posts');
  var boxRight = document.getElementById('box-right');

  buttonTweet.addEventListener('click', function(event) {
    if (text.value) {
      buttonTweet.setAttribute('class', 'active');
      var li = document.createElement('li');
      var post = document.createElement('p');

      post.textContent = text.value;
      post.setAttribute('class', 'post');
      li.appendChild(post);
      list.appendChild(li);
      text.value = '';
    }
  })
  /*boxRight.addEventListener('keydown', autosize);*/
});
