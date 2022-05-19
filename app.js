// Form Blur Event Listeners
document.getElementById('username').addEventListener('blur', validateName);
document.getElementById('ip').addEventListener('blur', validateIP);
document.getElementById('email').addEventListener('blur', validateEmail);
element.addEventListener("submit", submitFunction);
//document.getElementById('phone').addEventListener('blur', validatePhone);

/*function validateName() {
    const username = document.getElementById('username');
    const re = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    
    if(!re.test(username.value)) {
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

    if(!re.test(ip.value)) {
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
*/
function submitFunction() {
    const username = document.getElementById('username');
    const ip = document.getElementById('ip');
    const email = document.getElementById('email');
    //const phone = document.getElementById('phone');
    const re = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    const re2 = /^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/gmi;
    const re3 = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/gm;
    //const re4 = /^\d{10}$/;
    if(!re.test(username.value)) {
        window.alert("Kgaste");
        //name.classList.add('is-invalid');
    } else {
        window.alert("NO Kgaste");
        //name.classList.remove('is-invalid');
    }
    if(!re2.test(ip.value)) {
        //zip.classList.add('is-invalid');
        window.alert("Kgaste");
    } else {
        window.alert("NO Kgaste");
        //zip.classList.remove('is-invalid');
        //zip.classList.add('is-valid');
    }
    if(!re3.test(email.value)) {
        //email.classList.add('is-invalid');
        window.alert("Kgaste");
    } else {
        window.alert("NO Kgaste");
        //email.classList.remove('is-invalid');
        //email.classList.add('is-valid');
    }
    /*if(!re4.test(phone.value)) {
        //phone.classList.add('is-invalid');
        window.alert("Kgaste");
    } else {
        window.alert("NO Kgaste");
        //phone.classList.remove('is-invalid');
        //phone.classList.add('is-valid');
    }*/
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
