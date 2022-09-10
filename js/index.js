const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
const restart = document.querySelector('.reset');

function jump(){
    mario.classList.add('jump');

    setInterval(()=>{
        mario.classList.remove('jump')
    }, 700);
}

let dotScore = 0;
game()

function game(){
    const loop = setInterval(()=>{
        const pipePostion = pipe.offsetLeft;
        const marioPostion = +window.getComputedStyle(mario).bottom.replace('px','');
        
        if(pipePostion <= 120 && pipePostion > 0 && marioPostion < 80){
            pipe.style.animation='none'
            pipe.style.left = `${pipePostion}px`
            
            mario.src = 'https://raw.githubusercontent.com/Legatario/mario/master/Imagem/game-over.png'
            mario.style.animation='none'
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'
            mario.style.bottom = `${marioPostion}px`
            
            clearInterval(loop);
        }if(pipePostion <= 10 && pipePostion > 0 && marioPostion > 80){
            dotScore += 500
            score.innerHTML = dotScore
        }
    }, 10)

}

// document.addEventListener('keydown', jump);

restart.addEventListener('click',()=>{
    document.location.reload(true);
    
})