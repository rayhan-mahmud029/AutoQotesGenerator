const getQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => setQuote(data.quote))
} 


const setQuote = data  => {
    const element = document.getElementById('quote-area');
    element.innerText = data;
}

