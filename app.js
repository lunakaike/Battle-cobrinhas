
window.onload = function(){
 
    let grade = document.getElementById('grade');
    let ctx = grade.getContext("2d");
    let button_start = document.getElementById('button_start');
    let button_settings = document.getElementById('button_settings');
    let button_multiplayer = document.getElementById('button_multiplayer');
    let button_extra = document.getElementById('button_extra');
    let button_credits = document.getElementById('button_credits');
    let menu  = document.getElementById('menu');

    document.addEventListener("keydown", keyPush);

    //^======== PEGANDO OBJETOS-HTML     ========^//

    const velc = -1;// Velocidade para cima
    const vele = -1;// Velocidade para esquerda
    const velb = 1;// Velocidade para baixo
    const veld = 1;// Velocidade para direita

    //^======== VELOCIDADES ========^//

    let vx = vy = 0; //posição x e y da grade
    let px = 20; //posição x da cabeça da cobra
    let py = 10; //posição y da cabeça da cobra
    let tp = 30; //tamanho da peças
    let qp = 40; //quantidade de peças
    let ax = 10; //posição x da maça
    let ay = 10; //posição y da maça

    //^======== POSIÇÕES ========^//

    start = 'no'

    //^======== CONDIÇÕES ========^//

    button_start.addEventListener('click', function() {
        
        start = 'yes'
        start.disabled = true
        menu.style.opacity = '0'
        console.log(start)

    })

    button_settings.addEventListener('click', function() {
        
        alert(`esse botão ainda não estar funcionando`)

    })

    button_multiplayer.addEventListener('click', function() {
        
        alert(`esse botão ainda não estar funcionando`)

    })

    button_extra.addEventListener('click', function() {
        
        alert(`esse botão ainda não estar funcionando`)

    })

    button_credits.addEventListener('click', function() {
        
        alert(`esse botão ainda não estar funcionando`)

    })
    
    //^======== EVENTOS ========^//

    function gameover() {

        vx = vy = 0;
        tamanhorabo = 5;

        px = 20
        py = 10
        
    }

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
        if (px > qp-4) { //parede da direita
            gameover();
        }
        if (py < 0) { //parede de cima
            gameover();
        }
        if (py > qp/2) { //parede de baixo
            gameover();
        }

    //^======== EFEITO DAS PAREDES ========^//

        ctx.fillStyle = "black";
        ctx.fillRect(0,0, grade.width, grade.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax*tp, ay*tp, tp,tp);

        ctx.fillStyle = "rgb(44, 77, 77)";

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

    //^======== MECANICA DO RABO========^//

        if (ax == px && ay == py){
            tamanhorabo++;
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);
        }

        if (ax > 35) {
            ax = Math.floor(Math.random()*qp/2);
        }

        if (ay < 0, ay > 19) {
            ay = Math.floor(Math.random()*qp/2);
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