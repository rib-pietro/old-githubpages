// let functionDummy = () => {
//     console.log('me chamaram');
// };

// functionDummy();

// let linkLogo = document.querySelector('a');

// linkLogo.onclick = (mensagem) => {
//     console.log(mensagem);
// };
document.body.onscroll = () => {
    let nav = document.querySelector('header nav');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    } else {
        nav.style.backgroundColor = '#ffffff00';
    }
}

document.body.onscroll();