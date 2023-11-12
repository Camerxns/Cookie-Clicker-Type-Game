let clickCounter = 0;
let autoClickCounter = 0;
let autoClickInterval;
let cookie_clicked = document.getElementById('cookie');
let counter_number = document.getElementById('counter');
let autoclicker = document.getElementById('autoclicker')

cookie_clicked.addEventListener('click', function(){
    clickCounter++;
    counter_number.textContent = clickCounter;
});

autoclicker.addEventListener('click', function(){
    autoClickCounter++;
    console.log(autoClickCounter);

    clearInterval(autoClickInterval);

    if (autoClickCounter < 5){
        autoClickInterval = setInterval(autoClick, 5000);
    }
    else if (autoClickCounter >= 5 && autoClickCounter < 10){
        autoClickInterval = setInterval(autoClick, 2000);
    }
    else if (autoClickCounter >= 10){
        autoClickInterval = setInterval(autoClick, 1000);
    }
});

function autoClick(){
    clickCounter++;
    counter_number.textContent = clickCounter;
}
