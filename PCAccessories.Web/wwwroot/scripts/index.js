if ($(window).width() > 770) {
  const left = document.getElementById("blockleft");
  const right = document.getElementById("blockright");
  const img = document.getElementsByTagName("img");

  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  left.style.display = "none";
  right.style.display = "none";
  img[0].style.animation = "opacityBG 2s";
  img[0].style.display = "block";
  window.addEventListener("scroll", () => {
    let pageScroll = this.pageYOffset;
    if (pageScroll > 500) {
      img[1].style.display = "block";
      img[1].style.animation = "opacityBG 2s";
      right.style.display = "block";
      right.style.animation = "block-from-right 1.5s";
    }
    if (pageScroll > 700) {
      img[2].style.display = "block";
      img[2].style.animation = "opacityBG 2s ease-in-out";
      left.style.display = "block";
      left.style.animation = "block-from-left 1.5s ease-in-out";
    }
  });
}
else {
  const left = document.getElementById("blockleft");
  const right = document.getElementById("blockright");
  const img = document.getElementsByTagName("img");

  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }

  left.style.display = "none";
  right.style.display = "none";

  window.addEventListener("scroll", () => {
    let pageScroll = this.pageYOffset;
    if (pageScroll > 500) {
      right.style.display = "block";
      right.style.animation = "block-from-top 1.5s";
    }
    if (pageScroll > 700) {
      left.style.display = "block";
      left.style.animation = "block-from-top 1.5s ease-in-out";
    }
  });
}
