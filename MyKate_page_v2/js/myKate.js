
const initialisedTime = Date.now()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fadeIn(element) {
    element.style.visibility = 'visible';

    // Adjust fade-in duration as needed
    const fadeDuration = 300; // 500 milliseconds (0.5 seconds)

    const interval = setInterval(() => {
        element.style.opacity = parseFloat(element.style.opacity) + 0.02;

        if (element.style.opacity >= 1) {
            clearInterval(interval);
        }
    }, 10); // Adjust interval for smoother transition
}

function unhide(unhideClass) {
    const el = document.querySelector('.' + unhideClass);
    fadeIn(el);
}
function hide(unhideClass) {
    document.querySelector('.' + unhideClass).style.visibility = 'hidden';
    document.querySelector('.' + unhideClass).style.opacity = 0;
}



function init() {
    let fieldText = document.querySelector('.mk_div_connect');
    fieldText.innerHTML = '';
    hide('mk_deelnemen_vraag');
    hide('mk_deelnemen_antwoord');
    hide('mk_mykatelogo');
    hide('mk_div_screen');
    hide('mk_div_kate');

}

function startTyping() {
    let fieldText = document.querySelector('.mk_div_connect');
    let timer = 0;
    document.getElementById('typing').play();
    "Security On".split('').forEach((letter) => {
        timer += Math.random()*250;
        sleep(timer).then(() => {
            fieldText.innerHTML += letter;
        });
    });
    const btn = document.querySelector('.mk_user_button');
    sleep(2000).then(() => { btn.style.backgroundColor='black'; });
    sleep(2200).then(() => { btn.style.backgroundColor='#0097dc'; });
    sleep(3500).then(() => { unhide('mk_div_kate')});
}

const chronJob = () => {
    setTimeout(() => {
      if (Date.now() - initialisedTime >= 120000) {
        window.location.replace("../index.html");
      } else {
        chronJob();
      }
    }, 5000);
  };

init();
sleep(1300).then(() => { unhide('mk_deelnemen_vraag') });
sleep(2500).then(() => { unhide('mk_deelnemen_antwoord') });
sleep(3000).then(() => { unhide('mk_mykatelogo') });
sleep(4500).then(() => { unhide('mk_div_screen') });
sleep(5500).then(() => { startTyping() });

chronJob()
