
const displayImage = () => {
var elem = document.querySelectorAll(".displayImg");
elem.forEach((e) => {
    const imgUrl = e.getAttribute("data-img");

  e.addEventListener("mouseenter", () => {
    document.querySelector(".floating_img").style.display = "block";
    document.querySelector('.floating_img').style.backgroundImage = `url(${imgUrl})`;
  });
  e.addEventListener("mouseleave", () => {
    document.querySelector(".floating_img").style.display = "none";
  });
});
};


displayImage();
