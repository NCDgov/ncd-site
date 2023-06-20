//= require js/uswds.min.js

function changeFontSize(id, size) {
  const button = window.document.getElementById(id)

  button.addEventListener("click", () => {
    let htmlElement = window.document.getElementsByTagName('html')[0];
    htmlElement.setAttribute('style', 'font-size:' + size + '%;')
  });
}

(function () {
  if (window.document) {
    changeFontSize('font-100-button', 100)
    changeFontSize('font-120-button', 120)
  }
})()
