window.onload = function(){

    let grade = document.getElementById('grade');

    const button_start = document.getElementById('button_start');
    const menu  = document.getElementById('menu');
    const button_extra  = document.getElementById('button_extra');
    const extra  = document.getElementById('extra');
    const tst = document.getElementById('tst');

    const rainbow_type_tempo_input  = document.querySelector('#rainbow_type_tempo_input');
    const rainbow_type_tempo  =  document.querySelector("#rainbow_type_tempo[type=checkbox]");
    const div_rainbow_type_tempo  =  document.querySelector("#div_rainbow_type_tempo");
    const rainbow_type_tempo_input_example  =  document.querySelector("#rainbow_type_tempo_input_example");
    const rainbow_cobra  =  document.querySelector("#rainbow_cobra");
    const rainbow_grade =  document.querySelector("#rainbow_grade");
    const rainbow_maca =  document.querySelector("#rainbow_maca");

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

    //============= ELEMENTOS ==========//

    document.addEventListener("keydown", keyPush);
    setInterval(game, 80);

    //============= EVENTOS DINAMICOS ==========//

    redc = Math.random()*150;
    greenc = Math.random()*250;
    bluec = Math.random()*250;

    redm = 250;
    greenm = 0;
    bluem = 0;

    redg = 23;
    greeng = 23;
    blueg = 23;

    let start = false
    let rtt = false // sigla para "rainbow_type_tempo"
    let rtv = 0 // sigla para "rainbow_input_value"
    let rag = false // sigla para "rainbow_grade"
    let rac = false // sigla para "rainbow_cobra"
    let ram = false // sigla para "rainbow_maça"

    //============= CONDIÇÔES ==========//

    button_start.addEventListener('click', function() {
        
        start = true
        button_start.focus = false
        menu.style.opacity = '0'
        menu.style.zIndex = '-3'
        console.log(start)
        if (rtt = true) {
            setInterval(rainbow_mod, rtv*1000)
        }

    })

    button_extra.addEventListener('click', function() {
        
        button_extra.focus = false
        menu.style.opacity = '0'
        menu.style.zIndex = '-3'
        extra.style.zIndex = '1'
        extra.style.opacity= '1'

    })

    tst.addEventListener('click', function() {
        
        button_extra.focus = false
        menu.style.opacity = '1'
        menu.style.zIndex = '1'
        extra.style.zIndex = '-9'
        extra.style.opacity= '0'
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

    rainbow_type_tempo_input.addEventListener('input', function () {
        rtv = rainbow_type_tempo_input.value
        rainbow_type_tempo_input_example.textContent = `${rtv}s`
    })

    rainbow_grade.addEventListener('input', function () {
        if (rainbow_grade.checked) {
            rag = true 
        }else{
            rag = false
        }
    })

    rainbow_cobra.addEventListener('input', function () {
        if (rainbow_cobra.checked) {
            rac = true 
        }else{
            rac = false
        }
    })
    
    rainbow_maca.addEventListener('input', function () {
        if (rainbow_maca.checked) {
            ram = true
        }else{
            ram = false
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

    function rainbow_mod() {
        if (rtt == true) {

            if (rac == true) {

                redc = Math.random()*250;
                greenc = Math.random()*250;
                bluec = Math.random()*250;
               
           }
    
           if (ram == true) {
    
                redm = Math.random()*250;
                greenm = Math.random()*250;
                bluem = Math.random()*250;
               
           }
    
           if (rag == true) {
    
                redg = Math.random()*250;
                greeng = Math.random()*250;
                blueg = Math.random()*250;
               
           }
            
        }
            
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

        ctx.fillStyle = `rgb(${redg}, ${greeng}, ${blueg})`;//;//grade
        ctx.fillRect(0,0, grade.width, grade.height);

        ctx.fillStyle = `rgb(${redm}, ${greenm}, ${bluem})`;//;//maça
        ctx.fillRect(ax*tp, ay*tp, tp,tp);

        ctx.fillStyle = `rgb(${redc}, ${greenc}, ${bluec})`;//cobra
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