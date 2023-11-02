//= require js/uswds.min.js

function setFontSize(size) {
  let htmlElement = window.document.getElementsByTagName('html')[0];
  htmlElement.setAttribute('style', 'font-size:' + size + '%;')
}

function changeFontSize(id, size) {
  const button = window.document.getElementById(id)

  button.addEventListener("click", () => {
    window.localStorage.setItem("fontSize", size);
    setFontSize(size)
  });
}

(function () {
  if (window.document) {
    changeFontSize('font-100-button', 100)
    changeFontSize('font-120-button', 120)
  }

  if (window.localStorage) {
    let fontSize = window.localStorage.getItem("fontSize");

    if (fontSize) {
      setFontSize(fontSize)
    }
  }
})()
