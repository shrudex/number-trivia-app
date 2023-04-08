const inputField = document.querySelector('.input');
const getFactButton = document.querySelector('#get-fact');
const getRandomFactButton = document.querySelector('#get-random');

let inputValue = 49;
getFactButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    inputValue = inputField.value; 
    console.log(inputValue);
    getNumberTrivia(inputValue);
    inputField.placeholder="";
    
});

getRandomFactButton.addEventListener('click', () => {
    inputValue = Math.floor(Math.random() * 1000); 
    console.log(inputValue); 
    getNumberTrivia(inputValue);
    inputField.value=inputValue;
    inputField.placeholder="";
  });

function getNumberTrivia(inputValue) {
    const url = `http://numbersapi.com/${inputValue}/trivia`;
    const paragraphTag = document.getElementById('trivia');
    const numberDisplay = document.querySelector('h2');
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        trivia.textContent = data;
        numberDisplay.textContent = inputValue;
        console.log(data); // Do something with the returned trivia fact
      })
      .catch(error => {
        inputField.value='';
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  
  
