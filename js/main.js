// Get the fact ids
let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

// Get the number that is input
let numberInput = document.querySelector('#numberInput');
// put an event listener on the number input
numberInput.addEventListener('input', getFactFetch);

// Fetch number fact using Ajax or XHR
function getFactAjax(){
    let number = numberInput.value;
    if(number != ''){
        let xhr = new XMLHttpRequest();
        // create a GET request to the numbers api site for the input number
        xhr.open('GET', 'http://numbersapi.com/' + number);

        xhr.onload = function(){
            if(this.status == 200){
                fact.style.display = 'block';
                factText.innerText = this.responseText;
            }
        }

        xhr.send();
    }
}

// Using the fetch api
function getFactFetch(){
    let number = numberInput.value;

    if( number != ''){
        fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data => {
            fact.style.display = 'block';
            factText.innerText = data;
        })
        .catch(err => console.log(err));
    }
}