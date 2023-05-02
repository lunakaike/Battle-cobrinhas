window.onload = function(){

    let grade = document.getElementById('grade');
    const score = document.querySelector("#score");

    const button_start = document.getElementById('button_start');
    const menu  = document.getElementById('menu');
    const button_extra  = document.getElementById('button_extra');
    const extra  = document.getElementById('extra');
    const button_close_extra = document.getElementById('button_close_extra');

    const rainbow_type_tempo_input  = document.querySelector('#rainbow_type_tempo_input');
    const rainbow_type_tempo  =  document.querySelector("#rainbow_type_tempo[type=checkbox]");
    const div_rainbow_type_tempo  =  document.querySelector("#div_rainbow_type_tempo");
    const rainbow_type_tempo_input_example  =  document.querySelector("#rainbow_type_tempo_input_example");
    const rainbow_cobra  =  document.querySelector("#rainbow_cobra");
    const rainbow_grade =  document.querySelector("#rainbow_grade");
    const rainbow_maca =  document.querySelector("#rainbow_maca");
    const rainbow_type_ponto =  document.querySelector("#rainbow_type_ponto[type=checkbox]");
    const div_rainbow_options = document.getElementById('div_rainbow_options');

    //============= ELEMENTOS HTML ==========//

    let ctx = grade.getContext("2d");//grade

    const vel = 1;//velocidade

    let vx = vy = 0; //velocidade
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

    let rtp = false // sigla para "rainbow_type_ponto"

    //============= CONDIÇÔES ==========//

    button_start.addEventListener('click', function() {
        
        start = true
        button_start.focus = false
        menu.style.opacity = '0'
        menu.style.zIndex = '-3'
        console.log("você entrou no modo normal")

        score.style.opacity = 1
        score.style.zIndex = 1

        if (rtt == true) {
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

    //============= MENU ==========//

    button_close_extra.addEventListener('click', function() {
        
        button_extra.focus = false
        menu.style.opacity = '1'
        menu.style.zIndex = '1'
        extra.style.zIndex = '-9'
        extra.style.opacity= '0'

    })

    rainbow_type_tempo.addEventListener('click', function () {
        if (rainbow_type_tempo.checked) {

            rtt = true
            div_rainbow_type_tempo.style.position = 'relative'
            div_rainbow_type_tempo.style.zIndex = '1'
            div_rainbow_type_tempo.style.opacity = '1'
            div_rainbow_options.style.position = 'relative'
            div_rainbow_options.style.zIndex = '1'
            div_rainbow_options.style.opacity = '1' 

        }else{

            rtt = false
            div_rainbow_type_tempo.style.position = 'absolute'
            div_rainbow_type_tempo.style.zIndex = '-9'
            div_rainbow_type_tempo.style.opacity = '0'

            if (rtt == false && rtp == false) {

            div_rainbow_options.style.position = 'absolute'
            div_rainbow_options.style.zIndex = '-9'
            div_rainbow_options.style.opacity = '0'

        }

    }})

    rainbow_type_ponto.addEventListener('click', function () {
        if (rainbow_type_ponto.checked) {

            rtp = true
            div_rainbow_options.style.position = 'relative'
            div_rainbow_options.style.zIndex = '1'
            div_rainbow_options.style.opacity = '1'

        }else{

            rtp = false
            if (rtt == false && rtp == false) {
            div_rainbow_options.style.position = 'absolute'
            div_rainbow_options.style.zIndex = '-9'
            div_rainbow_options.style.opacity = '0'

        }
    }})

    rainbow_type_tempo_input.addEventListener('input', function () {
        rtv = rainbow_type_tempo_input.value
        rainbow_type_tempo_input_example.textContent = `${rtv}s`
        if (rtv < 1) {
            rainbow_type_tempo_input_example.textContent += ` CUIDADO`
        }
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

        score.textContent = `pontos: 5`
        
    }

    function rainbow_mod() {
        if (rtt == true || rtp == true) {

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
    
                redg = Math.random()*150;
                greeng = Math.random()*250;
                blueg = Math.random()*250;
               
           }
            
        }
            
        }

    function game(){

        if (start == true) {

            px += vx;
            py += vy;

        if (px < 0) {
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

        ctx.fillStyle = `rgb(${redg}, ${greeng}, ${blueg})`;//grade
        ctx.fillRect(0,0, grade.width, grade.height);

        ctx.fillStyle = `rgb(${redm}, ${greenm}, ${bluem})`;//maça
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

        while (ax < 0 || ax >= qpx || ay < 0 || ay >= qpy) {                       
                ax = Math.round(Math.random()*qpx-1);              
                ay = Math.round(Math.random()*qpy-1);
            
        }

        if (ax == px && ay == py){
            tamanhodorapo++;
            ax = Math.round(Math.random()*qpx-1);
            ay = Math.round(Math.random()*qpy-1);

            score.textContent = `pontos: ${tamanhodorapo}` 

            console.log(ax)
            console.log(ay)

            if (rtp == true) {
                rainbow_mod()
            }
        }

    }
            
        }
        

    function keyPush(event){

        switch (event.keyCode) {
            case 37: // esquerda

                if (vx !== vel) {
                    vx = -vel;
                    vy = 0;
                }

                break;

            case 38: // cima

                if (vy !== vel) {
                    vx = 0;
                    vy = -vel;
                }

                break;

            case 39: // direita

                if (vx !== -vel) {
                    vx = vel;
                    vy = 0;
                }

                break;

            case 40: // baixo

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