// grab each block
const h1El = document.getElementById("type-h1");
const pEl  = document.getElementById("type-p");

// save original text
const h1Text = h1El.textContent.trim();
const pText  = pEl.textContent.trim();

// clear them out to start
h1El.textContent = "";
pEl.textContent = "";

// settings
let speed = 40;

// type in H1 first
function typeH1(i = 0) {
  if (i < h1Text.length) {
    h1El.textContent += h1Text.charAt(i);
    setTimeout(() => typeH1(i + 1), speed);
  } else {
    // after the H1 finishes, type the paragraph
    typeP();
  }
}

// type in the paragraph
function typeP(i = 0) {
  if (i < pText.length) {
    pEl.textContent += pText.charAt(i);
    setTimeout(() => typeP(i + 1), speed);
  }
}

// start typing
typeH1();

