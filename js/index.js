'used strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email')
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        if (!name.value.trim()) {
            nameError.textContent = 'This field is required';
            errorInputs();
            isValid = false;
        } else if(!isValidName(name.value.trim())) {
            nameError.textContent = 'Invalid email';
            isValid = false;
        } else {
            nameError.textContent = '';
        };

        if (!email.value.trim()) {
            emailError.textContent = 'This field is required';
            errorInputs();
            isValid = false;
        } else if(!isValidEmail(email.value.trim())) { 
            emailError.textContent = 'Invalid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        };

        if (!phone.value.trim()) {
            phoneError.textContent = 'This field is required';
            errorInputs();
            isValid = false;
        } else if(!isValidPhone(phone.value.trim())) {
            phoneError.textContent = 'Invalid phone';
            isValid = false;
        } else {
            phoneError.textContent = '';
        };

        if (!message.value.trim()) {
            messageError.textContent = 'This field is required';
            errorInputs();
            isValid = false;
        } else if(!isValidMessage(!message.value.trim())) {
            messageError.textContent = 'Message must be at least 10 characters and valid';
            isValid = false;
        } else {
            messageError.textContent = '';
        };
    });

    const errorInputs = () => {
        name.style.border = '1px solid red';
        email.style.border = '1px solid red';
        phone.style.border = '1px solid red';    
        message.style.border = '1px solid red';
    };

    const resetErrors = () => {
        name.style.border = ''; 
        nameError.textContent = '';
        email.style.border = ''; 
        emailError.textContent = ''; 
        phone.style.border = ''; 
        phoneError.textContent = ''; 
        message.style.border = ''; 
        messageError.textContent = ''; 
    };

    name.addEventListener('change', resetErrors);
    email.addEventListener('change', resetErrors);
    phone.addEventListener('change', resetErrors);
    message.addEventListener('change', resetErrors);

    function isValidName(name) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name);
    };

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    function isValidPhone(phone) {
        const phoneRegex = /^\+?[0-9]{7,15}$/;
        return phoneRegex.test(tel);
    }

    function isValidMessage(msg) {
        const messageRegex = /^[\s\S]{10,}$/;
        return messageRegex.test(msg);
    }

});