// Write your JS here.
window.addEventListener('DOMContentLoaded', () => {

    addEventListener('click', () => {
        setTimeout(() => {
            popUpRandomMole();
        }, 0);
    });
    
    function popUpRandomMole() {
        let moles = document.querySelectorAll('.wgs__mole-head');
        let index = Math.floor(Math.random() * Math.floor(moles.length));
        let mole = moles[index];

        mole.classList.remove('wgs__mole-head--hidden');

        setTimeout(() => {
            hideMole();
        }, 1000);
    }

    function hideMole() {
        mole.classList.add('wgs__mole-head--hidden')
        setTimeout(() => {
            popUpRandomMole();
         }, 1000)
    }

    hideMole();

});