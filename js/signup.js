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
    for (i = 0; i <)

}

