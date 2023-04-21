
window.onload = function(){
 
    const grade = document.getElementById('grade');
    const ctx = grade.getContext("2d");
    const button_start = document.getElementById('button_start');
    const button_settings = document.getElementById('button_settings');
    const button_multiplayer = document.getElementById('button_multiplayer');
    const button_extra = document.getElementById('button_extra');
    const button_credits = document.getElementById('button_credits');
    const menu  = document.getElementById('menu');

    document.addEventListener("keydown", keyPush);

    //^======== PEGANDO OBJETOS-HTML     ========^//

    const velc = -1;// Velocidade para cima
    const vele = -1;// Velocidade para esquerda
    const velb = 1;// Velocidade para baixo
    const veld = 1;// Velocidade para direita

    //^======== VELOCIDADES ========^//

    let vx = vy = 0; //posição x e y da grade
    let px = 15; //posição x da cabeça da cobra
    let py = 10; //posição y da cabeça da cobra
    let tp = 30; //tamanho da peças
    let qpx = 30; //quantidade de peças no raio x
    let qpy = 20; //quantidade de peças no raio y
    let ax = 10; //posição x da maça
    let ay = 10; //posição y da maça

    //^======== POSIÇÕES ========^//

    start = 'no'

    //^======== CONDIÇÕES ========^//

    button_start.addEventListener('click', function() {
        
        start = 'yes'
        button_start.disabled = true
        button_start.disabled = false
        menu.style.opacity = '0'
        menu.style.zIndex = '-3'
        console.log(start)

    })

    button_settings.addEventListener('click', function() {
        
        alert(`esse botão ainda não estar funcionando`)
        button_settings.disabled = true
        button_settings.disabled = false

    })

    button_multiplayer.addEventListener('click', function() {
        
        alert(`esse botão ainda não estar funcionando`)
        button_multiplayer.disabled = true
        button_multiplayer.disabled = false

    })

    button_extra.addEventListener('click', function() {
        
        alert(`esse botão ainda não estar funcionando`)
        button_extra.disabled = true
        button_extra.disabled = false

    })

    button_credits.addEventListener('click', function() {
        
        alert(`esse botão ainda não estar funcionando`)
        button_credits.disabled = true
        button_credits.disabled = false

    })
    
    //^======== EVENTOS ========^//

    function gameover() {

        vx = vy = 0;
        tamanhorabo = 5;

        px = 15
        py = 10
        
    }

    //^======== FUNÇÕES ========^//

    let rabo = [];
    let tamanhorabo = 5;

    //^======== RABO ========^//

        setInterval(game, 80);

    //^======== ATUALIZANDO O JOGO / VELOCIDADE DA COBRA ========^//

    function game(){

        if (start == 'yes') {

        px += vx;
        py += vy;

        if (px < 0) { //parede da esquerda
            gameover();
        }

        if (px > qpx-1) { //parede da direita
            gameover();
        }

        if (py < 0) { //parede de cima
            gameover();
        }

        if (py > qpy-1) { //parede de baixo
            gameover();
        }

    //^======== EFEITO DAS PAREDES ========^//

        ctx.fillStyle = "black";//tela
        ctx.fillRect(0,0, grade.width, grade.height);

        ctx.fillStyle = "red";//maça
        ctx.fillRect(ax*tp, ay*tp, tp,tp);

        ctx.fillStyle = "rgb(83, 90, 120)";//cobra

    //^======== DESENHANDO OS OBJETOS ========^//

        for (let i = 0; i < rabo.length; i++) {
            ctx.fillRect(rabo[i].x*tp, rabo[i].y*tp, tp -1, tp -1);
            if (rabo[i].x == px && rabo[i].y == py)
            {
                gameover();
            }
        }        

    //^======== GAME OVER ========^//

        rabo.push({x:px,y:py })
        while (rabo.length > tamanhorabo) {
            rabo.shift();
        }

    //^====== MECANICA DO RABO ========^//


        if (ax == px && ay == py){
            tamanhorabo++;
            ax = Math.floor(Math.random()*qpx-1);
            ay = Math.floor(Math.random()*qpy-1);
        }

        if (ax > qpx-1) {
            ax = Math.floor(Math.random()*qpx-1);
        }

        if (ay > qpy-1) {
            ay = Math.floor(Math.random()*qpy-1);
        }

        for (let i = 0; i < rabo.length; i++) {
            if (rabo[i].x == ax && rabo[i].y == ay)
            {
                
                    ax = Math.floor(Math.random()*qpx-1);
                    ay = Math.floor(Math.random()*qpy-1);

            }
        } 

    //^======== MECANICA DA MAÇA ========^//

    }
            
        }

    function keyPush(event){

        switch (event.keyCode) {
            case 40: // baixo
            if (vy !== velc) {
                vx = 0;
                vy = velb;
            }
                break;
            case 38: // cima
            if (vy !== velb) {
                vx = 0;
                vy = velc;
            }
                break;
            case 39: // direita
            if (vx !== vele) {
                vx = veld;
                vy = 0;
            }
                break;
            case 37: // esquerda
            if (vx !== veld) {
                vx = vele;
                vy = 0;
            }
                break;          
            default:
                
                break;

        //^======== CONTROLES ========^//

        }



    }

}