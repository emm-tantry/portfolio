let btn = document.querySelector('.mouse-cursor-gradient-tracking');
btn.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX;
  let y = e.clientY;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}
