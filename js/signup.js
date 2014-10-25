/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict"

document.addEventListener('DOMContentLoaded', onReady);

function onReady() {
    var stateSelector = document.getElementById('stateSelector');
    var i;
    var option;
    for (i = 0; i < usStates.length; i++) {
        option = document.createElement('option');
        option.innerHTML = usStates[i].name;
        option.value = usStates[i].code;
        stateSelector.appendChild(option);
    }

    var selectList = document.getElementById('occupation');
    selectList.addEventListener('change', function() {
        if (selectList.value === "other") {
            document.getElementById('occupationOther').style.display = 'block';
        }
        else {
            document.getElementById('occupationOther').style.display = 'none';
            document.getElementById('occupationOther').value = '';
        }
    });

    var exitButton = document.getElementById('exitButton');
    exitButton.addEventListener('click', function() {
        if (window.confirm("Are you sure you want to leave?")) {
            window.location = 'http://google.com';
        }
    });

    var signup = document.getElementById(signup);
    signup.addEventListener('submit', onSubmit);
}

function onSubmit(eventObject) {
    var fields = ['firstName', 'lastName', 'address1', 'city', 'state'];
    var i;
    var formValid = true;
    for (i = 0; i < 5; i++) {
        formValid &= validateName(signup.elements[fields[idx]]);
    }
    if (signup.elements['occupation'].value == 'other') {
        formValid &= validateName(signup.elements['occupationOther']);
    }
    formValid &= validateBirthdate(signup.elements['birthdate']);
    formValid &= validateZip(signup.elements['zip']);
    if (!formValid) {
        if(eventObject.preventDefault) {
            eventObject.preventDefault();
        }
        eventObject.returnValue = false;
        return false;
    }
    return formValid;
}

function validateZip(field) {
    var zipRegExp = new RegExp('^\\d{5}$');
    if (!zipRegExp.test(field.value)) {
        field.className = 'form-control invalid';
        field.placeholder = 'Please enter a 5 digit zip code';
        return false;
    }
    else {
        field.className = 'form-control';
        return true;
    }
}

function validateName(field) {

}

function validateBirthdate(field) {
    var bdMessage = document.getElementById('birthdateMessage');
    if (field.value) {
        var today = new Date();
        var birthDate = new Date(field.value);
    var dayDifference = today.getDate() - birthDate.getUTCDate();
    var monthDifference = today.getMonth() - birthDate.getUTCMonth();
    var yearDifference = today.getFullYear() - birthDate.getUTCFullYear();
    if (monthDifference < 0 || (0 === monthDifference && dayDifference < 0)) {
        yearDifference--;
    }
        field.className = 'form-control';
        if (yearDifference < 13) {
            bdMessage.innerHTML = "Sorry you must at least 13 years old in order to sign up."
            return false;
        }
        else {
            bdMessage.innerHTML = '';
            return true;
        }
    }
    else {
        bdMessage.innerHTML = "Please tell me when you were born."
        field.className = 'form-control invalid';
        return false;
    }
}

