const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

    const loop = setInterval(() => {

       const pipePosition = pipe.offsetLeft;
       const marioPosition = +getComputedStyle(mario).bottom.replace('px', '');

       console.log(marioPosition);

       if(pipePosition <= 69 && pipePosition > 0 && marioPosition < 91){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = "./Images/gameOver.png";
        mario.style.width = '60px';
        mario.style.marginLeft = '10px';

        clearInterval(loop);
       }

    }, 10);
}


document.addEventListener("keydown", jump)