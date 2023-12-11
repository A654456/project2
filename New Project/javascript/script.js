const searchButton = document.querySelector('#search-button');
    const table = document.querySelector('table');

    searchButton.addEventListener('click', () => {
      table.style.display = 'block';
    });