window.onload = function(){

    let grade = document.getElementById('grade');

    const button_start = document.getElementById('button_start');
    const menu  = document.getElementById('menu');
    const button_extra  = document.getElementById('button_extra');
    const extra  = document.getElementById('extra');

    const rainbow_type_tempo_input  = document.getElementById('rainbow_type_tempo_input');
    const rainbow_type_tempo_example  = document.getElementById('rainbow_type_tempo_example');
    const rainbow_type_tempo  =  document.querySelector("#rainbow_type_tempo[type=checkbox]");
    const div_rainbow_type_tempo  =  document.querySelector("#div_rainbow_type_tempo");

    //============= ELEMENTOS HTML ==========//

    let ctx = grade.getContext("2d");//grade

    const vel = 1;//velocidade

    let vx = vy = 0; //posição da grade
    let px = 15; //posição da cobra(x)
    let py = 10; //posição da cobra(y)
    let tp = 30; //tamanho da peça 
    let qpx = 30; //quantidade de peças(x) 
    let qpy = 20; //quantidade de peças(y) 
    let ax = ay = 15; //posição da maça

    let rabo = []; //o objeto rabo
    let tamanhodorapo = 5; //tamanho do rabo

    let red = Math.random()*250;
    let green = Math.random()*250;
    let blue = Math.random()*250;

    //============= ELEMENTOS ==========//

    document.addEventListener("keydown", keyPush);
    setInterval(game, 80);

    //============= EVENTOS DINAMICOS ==========//

    let start = false
    let rtt = false // sigla para "rainbow_type_tempo"

    //============= CONDIÇÔES ==========//

    button_start.addEventListener('click', function() {
        
        start = true
        button_start.focus = false
        menu.style.opacity = '0'
        menu.style.zIndex = '-3'
        console.log(start)

    })

    button_extra.addEventListener('click', function() {
        
        button_extra.focus = false
        menu.style.opacity = '0'
        menu.style.zIndex = '-3'
        extra.style.zIndex = '1'
        extra.style.opacity= '1'
        console.log(extra)

    })

    //============= MENU ==========//

    rainbow_type_tempo.addEventListener('click', function () {
        if (rainbow_type_tempo.checked) {

            rtt = true
            div_rainbow_type_tempo.style.position = 'relative'
            div_rainbow_type_tempo.style.zIndex = '1'
            div_rainbow_type_tempo.style.opacity = '1' 

        }else{

            rtt = false
            div_rainbow_type_tempo.style.position = 'absolute'
            div_rainbow_type_tempo.style.zIndex = '-9'
            div_rainbow_type_tempo.style.opacity = '0'

        }
    })

    //============= SISTEMA DO EXTRA ==========//

    function gameover() {

        tamanhodorapo = 5

        px = 15
        py = 10

        vy = 0
        vx = 0
        
    }

    function game(){

        if (start == true) {

            px += vx;
            py += vy;

        if (px <0) {
            gameover()
        }

        if (px > qpx-1) {
            gameover()
        }

        if (py < 0) {
            gameover()
        }

        if (py > qpy-1) {
            gameover()
        }

        ctx.fillStyle = "black";
        ctx.fillRect(0,0, grade.width, grade.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax*tp, ay*tp, tp,tp);

        ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        for (let i = 0; i < rabo.length; i++) {
            ctx.fillRect(rabo[i].x*tp, rabo[i].y*tp, tp-1,tp-1);
            if (rabo[i].x == px && rabo[i].y == py)
            {
                gameover()
            }
        }

        rabo.push({x:px,y:py })
        while (rabo.length > tamanhodorapo) {
            rabo.shift();
        }

        if (ax == px && ay == py){
            tamanhodorapo++;
            console.log(ax)
            console.log(ay)
            ax = Math.floor(Math.random()*qpx-1);
            ay = Math.floor(Math.random()*qpy-1);

            if (ax >= qpx-1) {
                
                ax = Math.floor(Math.random()*qpx-1);

            }

            if (ay >= qpy-1) {
                
                ay = Math.floor(Math.random()*qpy-1);

            }

            if (ax <= 0) {
                
                ax = Math.floor(Math.random()*qpx-1);

            }

            if (ay <= 0) {
                
                ay = Math.floor(Math.random()*qpy-1);

            }
        }

    }
            
        }
        

    function keyPush(event){

        switch (event.keyCode) {
            case 37: // Left

                if (vx !== vel) {
                    vx = -vel;
                    vy = 0;
                }

                break;

            case 38: // up

                if (vy !== vel) {
                    vx = 0;
                    vy = -vel;
                }

                break;

            case 39: // right

                if (vx !== -vel) {
                    vx = vel;
                    vy = 0;
                }

                break;

            case 40: // down

                if (vy !== -vel) {
                    vx = 0;
                    vy = vel;
                }

                break;          
            default:
                
                break;
        }


    }

}