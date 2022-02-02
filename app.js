console.log('Début du traitement');

const BTN = document.querySelector('.btn1');
BTN.addEventListener('click',presentation);


function presentation() {
    BTN.classList.toggle('active');
}