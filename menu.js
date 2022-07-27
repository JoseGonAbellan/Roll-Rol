const button = document.querySelector(".hamburguerButton");
const slider = document.querySelector(".slider");
const buttonSlider = document.querySelector(".buttonSlider");

const handleSlider = (e) => {
  e.stopPropagation();
  console.log(slider.classList.value);
  if (
    slider.classList.value === "hidden slider" ||
    slider.classList.value === "slider hidden"
  ) {
    slider.classList.remove("hidden");
    slider.classList.add("open");
  } else {
    slider.classList.remove("open");
    slider.classList.add("hidden");
  }
};

button.addEventListener("click", handleSlider);
buttonSlider.addEventListener("click", handleSlider);

document.addEventListener("click", function (e) {
  const clic = e.target;
  if (slider.classList.value === "slider open" && clic != slider) {
    slider.classList.remove("open");
    slider.classList.add("hidden");
  }
});

window.onload = function () {
  document.onmousemove = function (e) {
    var x = -(e.clientX / 10);
    var y = -(e.clientY / 10);
    this.body.style.backgroundPosition = x + "px " + y + "px";
  };
};
