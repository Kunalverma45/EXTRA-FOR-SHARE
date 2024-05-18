window.onload = function() {
  setTimeout(function() {
      document.getElementById("redirecting").style.display = "none";
      document.getElementById("content").style.display = "block";
  }, 3500);
};

const video = document.getElementById("background-video");
video.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
});
video.play();
