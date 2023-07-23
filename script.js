// Get Random Code from API
const random_quote_api = "http://api.quotable.io/random"

// Declare Constant
const displayQuote = document.getElementById("quoteDisplay")
const inputQuote = document.getElementById("quoteInput")
const timeCount = document.getElementById("timer")


function getRandomQuote() {
    return fetch(random_quote_api)
        .then(response => response.json())
        .then(data => data.content)
}
// // getRandomQuote()


async function renderNewQuote() {
    const quote = await getRandomQuote()
    displayQuote.innerHTML = '';
    quote.split('').forEach((character) => {
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        displayQuote.appendChild(characterSpan);
    })
    // startTime()

    timeCount.innerText = 0;
}


inputQuote.addEventListener("input", () => {
    const displayQuoteArray = document.querySelectorAll("span")
    const inputQuoteArray = inputQuote.value.split('')

    let correct = true
    displayQuoteArray.forEach((element, index) => {
        if (inputQuoteArray[index] == null) {
            element.classList.remove('correct')
            element.classList.remove('incorrect')
            correct = false
        } else if (inputQuoteArray[index] === element.innerText) {
            element.classList.add('correct')
            element.classList.remove('incorrect')
        } else {
            element.classList.remove('correct')
            element.classList.add('incorrect')
            correct = false
        }
    })

    if (correct) {
        renderNewQuote()
        inputQuote.value = '';

    }
})


timeCount.innerText = 0


function startTime(){
    setInterval(increaseTimeCount, 1000);
    // clearInterval(startTime)

}
function increaseTimeCount(){
    return timeCount.innerText++;
}
// startTime()

renderNewQuote()


