function hide(){
    let x = document.getElementById('choice-no');
    const y = document.getElementById('answer-yes');
    const z = document.getElementById('title');
    y.innerHTML = '<h1>double klik gambar nya deh</h1>';
    z.style.display = 'none';
    if(x.style.display === 'none'){
        // x.style.display = 'block';
    }
    else{
        x.style.display = 'none';
    }
};

// https://codepen.io/ieatwebsites/pen/KKBvywP

const button = document.querySelector('#img');
const canvas = document.querySelector('#choice-yes');
const y = document.getElementById('answer-yes');

const jsConfetti = new JSConfetti();

button.addEventListener('dblclick', () => {
    y.innerHTML = '<h1>YESSSSS</h1>';
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    }).then(() => jsConfetti.addConfetti())
})

document.getElementById('choice-yes').addEventListener('click', hide);