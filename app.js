// Form Blur Event Listeners
document.getElementById('username').addEventListener('blur', validateName);
document.getElementById('ip').addEventListener('blur', validateIP);
document.getElementById('email').addEventListener('blur', validateEmail);
//document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('username');
    const re = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    
    if(!re.test(name.value)) {
        window.alert("Kgaste");
        //name.classList.add('is-invalid');
    } else {
        window.alert("NO Kgaste");
        //name.classList.remove('is-invalid');
    }
}
function validateIP() {
    const ip = document.getElementById('ip');
    const re = /^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/gmi;

    if(!re.test(zip.value)) {
        //zip.classList.add('is-invalid');
        window.alert("Kgaste");
    } else {
        window.alert("NO Kgaste");
        //zip.classList.remove('is-invalid');
        //zip.classList.add('is-valid');
    }
}
function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/gm;

    if(!re.test(email.value)) {
        window.alert("Kgaste");
        //email.classList.add('is-invalid');
    } else {
        window.alert("NO Kgaste");
        //email.classList.remove('is-invalid');
        //email.classList.add('is-valid');
    }
}
/*function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[.-]?\d{3}[.-]?\d{3}[.-]?\d{4}$/;

    if(!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
    }
}*/
