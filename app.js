const quote = document.getElementById('advice');
const btn = document.getElementById('btn');
const order = document.getElementById('order');

function get() {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        order.innerText = data.slip.id;
        quote.innerText ='"' + data.slip.advice + '"';
    })
}

const spinner = document.querySelector('.spinner');



btn.addEventListener('click', () => {
    spinner.style.display = 'grid';
    quote.style.display = 'none';
    order.style.display = 'none';
    get();
    setTimeout(() => {
        spinner.style.display = 'none';
        quote.style.display = 'grid';
        order.style.display = 'block';
    }, 1500)
})