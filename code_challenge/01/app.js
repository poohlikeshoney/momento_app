const body = document.body;
const BIG = 'big'
const MEDIUM = 'medium'
const SMALL = 'small'

function handleResize() {
  let width = window.innerWidth;
  if (width > 1000) {
    // body.style.backgroundColor = "yellow";
    body.classList.add(BIG);
    body.classList.remove(MEDIUM);
  } else if (width <= 1000 && width > 700) {
    // body.style.backgroundColor = "blue";
    body.classList.add(MEDIUM);
    body.classList.remove(BIG, SMALL);
  } else {
    // body.style.backgroundColor = "red";
    body.classList.add(SMALL);
    body.classList.remove(MEDIUM, BIG);
  }
}
window.addEventListener("resize", handleResize);
