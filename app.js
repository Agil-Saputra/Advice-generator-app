const quote = document.getElementById('advice');
const btn = document.getElementById('btn');
const order = document.getElementById('order');

btn.addEventListener('click', get)

function get() {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        order.innerText = data.slip.id;
        quote.innerText ='"' + data.slip.advice + '"';
    })
}