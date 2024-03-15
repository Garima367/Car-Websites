function check() {
    if (name1.value == "") {
        name1.style.border = '2px solid red';
        namerr.style.visibility = 'visible';
        return false;
    }
    if (phone.value == "") {
        phone.style.border = '2px solid red';
        phonerr.style.visibility = 'visible';
        return false;
    }
    if (email.value == "") {
        email.style.border = '2px solid red';
        emailerr.style.visibility = 'visible';
        return false;
    }

    if (pass.value == "") {
        pass.style.border = '2px solid red';
        passerr.style.visibility = 'visible';
        return false;
    }
    if (cpass.value == "") {
        cpass.style.border = '2px solid red';
        cpasserr.style.visibility = 'visible';
        return false;
    }
    if (cpass.value != pass.value) {
        cpass.style.border = '2px solid red';
        cpasserr.style.visibility = 'visible';
        return false;
    }
}





