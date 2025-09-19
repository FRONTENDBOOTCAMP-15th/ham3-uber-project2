import "./style.css";

const arrowBtn = document.querySelector("button"); // 버튼 자체를 선택
const arrowSvg = document.getElementById("arrow-svg"); // SVG만 선택

arrowBtn.addEventListener("click", () => {
  // SVG에만 'rotate-180' 클래스를 토글합니다.
  arrowSvg.classList.toggle("rotate-180");
});
