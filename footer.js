// JavaScript to include footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('body').insertAdjacentHTML('beforeend', data);
  });
