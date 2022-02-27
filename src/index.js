const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

const loadBreeds = document.addEventListener('DOMContentLoaded', () => {
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      for (dog in data.message) {
        const li = document.createElement('li');
        li.innerText = dog;
        document.getElementById('dog-breeds').appendChild(li);
      }

      const list = document.querySelectorAll('li');
      list.forEach((dog) =>
        dog.addEventListener('click', (e) => {
          e.target.style = 'color: red';
        })
      );
    });
});

const loadPics = document.addEventListener('DOMContentLoaded', () => {
  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((url) => {
        const newImg = document.createElement('img');
        newImg.src = url;
        document.getElementById('dog-breeds').appendChild(newImg);
      });
    });
});

const filterBreeds = document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#breed-dropdown').addEventListener('change', (e) => {
    const result = e.target.value;
    const list = document.querySelectorAll('li');
    list.forEach((breed) => {
      if (breed.innerText.startsWith(result)) {
        breed.style = 'display:list-item';
      } else {
        breed.style = 'display: none';
      }
    });
  });
});
