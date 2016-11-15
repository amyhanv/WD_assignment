var img = document.querySelector('img'),
  a = document.querySelector('a');

var play = function() {
  // Create the iframe.
  var iframe = document.createElement('iframe');
  iframe.src = decodeURIComponent(img.dataset['src']);
  iframe.frameBorder = "0";

  img.parentElement.replaceChild(iframe, img);
  a.parentElement.removeChild(a);

  // Create the player.
  var player = new playerjs.Player(iframe);

  // Autoplay the video when it's ready.
  player.on('ready', function() {
    player.play();
  });
};

img.addEventListener('click', play);
a.addEventListener('click', play);