// Form Blur Event Listeners
const btn = document.querySelector('.btn');
btn.addEventListener('click', submitFunction);
//document.getElementById('phone').addEventListener('blur', validatePhone);

function submitFunction() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const ip = document.getElementById('ip');
    const regex = '/'+document.getElementById('regex')+'/';
    const regexing = document.getElementById('regexin');

    const re = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    const re2 = /^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/gmi;
    const re3 = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/gm;

    if(!re.test(username.value)) {
        window.alert(username.value + "No es valido");
    } else {
        window.alert(username.value + "Es valido");
    }

    if(!re2.test(ip.value)) {
        window.alert(ip.value + " No es valido");
    } else {
        window.alert(ip.value + " Es valido");
    }

    if(!re3.test(email.value)) {
        window.alert(email.value + " No es valido");
    } else {
        window.alert(email.value + " Es valido");
    }
    if(!regex.test(regexin.value)) {
        window.alert(email.value + " No es valido");
    } else {
        window.alert(email.value + " Es valido");
    }
}
