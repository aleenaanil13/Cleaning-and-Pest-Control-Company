// JavaScript to include header
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('body').insertAdjacentHTML('afterbegin', data);
  });
