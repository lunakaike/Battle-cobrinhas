window.onload = function(){

    //============= ELEMENTOS HTML ==========//

    //const  = document.querySelector("#");
    let grade = document.querySelector("#grade_multiplayer");

    const button_start = document.querySelector("#start");
    const menu = document.querySelector("#menu");

    const button_selector_1 = document.querySelector("#button_selector_1");
    const button_selector_2 = document.querySelector("#button_selector_2");
    const button_selector_3 = document.querySelector("#button_selector_3");
    const button_selector_4 = document.querySelector("#button_selector_4");

    const selector_player_1 = document.querySelector("#selector_player_1");
    const selector_player_2 = document.querySelector("#selector_player_2");
    const selector_player_3 = document.querySelector("#selector_player_3");
    const selector_player_4 = document.querySelector("#selector_player_4");

    const canvas_player_1 = document.querySelector("#canvas_player_1");
    const canvas_player_2 = document.querySelector("#canvas_player_2");
    const canvas_player_3 = document.querySelector("#canvas_player_3");
    const canvas_player_4 = document.querySelector("#canvas_player_4");

    const div_color_1 = document.querySelector("#div_color_1");
    const div_color_2 = document.querySelector("#div_color_2");
    const div_color_3 = document.querySelector("#div_color_3");
    const div_color_4 = document.querySelector("#div_color_4");

    const blue_1 = document.querySelector("#blue_1");
    const green_1 = document.querySelector("#green_1");
    const red_1 = document.querySelector("#red_1");
    const blue_2 = document.querySelector("#blue_2");
    const green_2 = document.querySelector("#green_2");
    const red_2 = document.querySelector("#red_2");
    const blue_3 = document.querySelector("#blue_3");
    const green_3 = document.querySelector("#green_3");
    const red_3 = document.querySelector("#red_3");
    const blue_4 = document.querySelector("#blue_4");
    const green_4 = document.querySelector("#green_4");
    const red_4 = document.querySelector("#red_4");

    //============= CANVAS ==========//

    let ctx_1 = canvas_player_1.getContext("2d");//grade
    let ctx_2 = canvas_player_2.getContext("2d");//grade
    let ctx_3 = canvas_player_3.getContext("2d");//grade
    let ctx_4 = canvas_player_4.getContext("2d");//grade
    let ctx = grade.getContext("2d");//grade

    const vel = 1;//velocidade

    //============= PLAYER 1 ==========//

    let vx = vy = 0; //velocidade
    let px = 1; //posição da cobra(x)
    let py = 1; //posição da cobra(y)

    let rabo = []; //o objeto rabo
    let tamanhodorapo = 5; //tamanho do rabo

    //============= PLAYER 2 ==========//

    let vx2 = vy2 = 0; //velocidade
    let px2 = 1; //posição da cobra(x)
    let py2 = 28; //posição da cobra(y)

    let rabo2 = []; //o objeto rabo
    let tamanhodorapo2 = 5; //tamanho do rabo

    //============= PLAYER 3 ==========//

    let vx3 = vy3 = 0; //velocidade
    let px3 = 1; //posição da cobra(x)
    let py3 = 18; //posição da cobra(y)

    let rabo3 = []; //o objeto rabo
    let tamanhodorapo3 = 5; //tamanho do rabo

    //============= PLAYER 4 ==========//

    let vx4 = vy4 = 0; //velocidade
    let px4 = 28; //posição da cobra(x)
    let py4 = 18; //posição da cobra(y)

    let rabo4 = []; //o objeto rabo
    let tamanhodorapo4 = 5; //tamanho do rabo

    //============= GRADE ==========//

    let tp = 30; //tamanho da peça 
    let qpx = 30; //quantidade de peças(x) 
    let qpy = 20; //quantidade de peças(y) 
    let ax = 14; //posição da maça(x)
    let ay = 9; //posição da maça(y) 
    
    //============= ELEMENTOS ==========//

    document.addEventListener("keydown", keyPush);
    setInterval(game, 80);

    //============= EVENTOS DINAMICOS ==========//

    let start = false

    //============= CONDIÇÔES ==========//

    let player_1 = false
    let player_2 = false
    let player_3 = false
    let player_4 = false

    //============= MENU ==========//

    button_start.addEventListener('click', function() {
        start = true
        menu.style.position = "absolute"
        menu.style.left = "-1000%"
    })

    //============= SISTEMA DE ENTRADA DOS PLAYERS ==========//

    button_selector_1.addEventListener('click', function(){

        let py = .7
        let px = 5
        let tp = 20

        player_1 = true
        button_selector_1.style.left = "-1000%"
        selector_player_1.style.left = "-1000%"
        canvas_player_1.style.border = "solid 3px black"
        div_color_1.style.opacity = 1

        //==================== DESENHANDO OBJETOS ======================//

        ctx_1.fillStyle = `#fff`
        ctx_1.fillRect(0, 0, canvas_player_1.width, canvas_player_1.height)

        ctx_1.fillStyle = `rgb(${red_1.value}, ${green_1.value}, ${blue_1.value})`
        ctx_1.fillRect(px*tp, py*tp, tp*4, tp*4)
        
        ctx_1.fillStyle = `#000`
        ctx_1.fillRect(px*tp+4, py*tp+4, tp, tp)
        ctx_1.fillRect(px*tp+54, py*tp+4, tp, tp)

        function colors(){
            ctx_1.fillStyle = `rgb(${red_1.value}, ${green_1.value}, ${blue_1.value})`
            ctx_1.fillRect(px*tp, py*tp, tp*4, tp*4)
                
            ctx_1.fillStyle = `#000`
            ctx_1.fillRect(px*tp+4, py*tp+4, tp, tp)
            ctx_1.fillRect(px*tp+54, py*tp+4, tp, tp)
        }

            red_1.addEventListener(`input`, colors)
            green_1.addEventListener(`input`, colors)
            blue_1.addEventListener(`input`, colors)
    })

    button_selector_2.addEventListener('click', function(){

        let py = .7
        let px = 5
        let tp = 20

        player_2 = true
        button_selector_2.style.left = "-1000%"
        selector_player_2.style.left = "-1000%"
        div_color_2.style.opacity = "1"

        //==================== DESENHANDO OBJETOS ======================//

        ctx_2.fillStyle = `#fff`
        ctx_2.fillRect(0, 0, canvas_player_2.width, canvas_player_2.height)

        ctx_2.fillStyle = `rgb(${red_2.value}, ${green_2.value}, ${blue_2.value})`
        ctx_2.fillRect(px*tp, py*tp, tp*4, tp*4)

        ctx_2.fillStyle = `#000`
        ctx_2.fillRect(px*tp+4, py*tp+4, tp, tp)
        ctx_2.fillRect(px*tp+54, py*tp+4, tp, tp)

        function colors(){
            ctx_2.fillStyle = `rgb(${red_2.value}, ${green_2.value}, ${blue_2.value})`
            ctx_2.fillRect(px*tp, py*tp, tp*4, tp*4)
                
            ctx_2.fillStyle = `#000`
            ctx_2.fillRect(px*tp+4, py*tp+4, tp, tp)
            ctx_2.fillRect(px*tp+54, py*tp+4, tp, tp)
        }

            red_2.addEventListener(`input`, colors)
            green_2.addEventListener(`input`, colors)
            blue_2.addEventListener(`input`, colors)
    })

    button_selector_3.addEventListener('click', function(){

        let py = .7
        let px = 5
        let tp = 20

        player_3 = true
        button_selector_3.style.left = "-1000%"
        selector_player_3.style.left = "-1000%"
        div_color_3.style.opacity = "1"

        //==================== DESENHANDO OBJETOS ======================//

        ctx_3.fillStyle = `#fff`
        ctx_3.fillRect(0, 0, canvas_player_3.width, canvas_player_3.height)

        ctx_3.fillStyle = `rgb(${red_3.value}, ${green_3.value}, ${blue_3.value})`
        ctx_3.fillRect(px*tp, py*tp, tp*4, tp*4)

        ctx_3.fillStyle = `#000`
        ctx_3.fillRect(px*tp+4, py*tp+4, tp, tp)
        ctx_3.fillRect(px*tp+54, py*tp+4, tp, tp)

        function colors(){
            ctx_3.fillStyle = `rgb(${red_3.value}, ${green_3.value}, ${blue_3.value})`
            ctx_3.fillRect(px*tp, py*tp, tp*4, tp*4)
                
            ctx_3.fillStyle = `#000`
            ctx_3.fillRect(px*tp+4, py*tp+4, tp, tp)
            ctx_3.fillRect(px*tp+54, py*tp+4, tp, tp)
        }

            red_3.addEventListener(`input`, colors)
            green_3.addEventListener(`input`, colors)
            blue_3.addEventListener(`input`, colors)
    })

    button_selector_4.addEventListener('click', function(){
        
        let py = .7
        let px = 5
        let tp = 20

        player_4 = true
        button_selector_4.style.left = "-1000%"
        selector_player_4.style.left = "-1000%"
        div_color_4.style.opacity = "1"

        //==================== DESENHANDO OBJETOS ======================//

        ctx_4.fillStyle = `#fff`
        ctx_4.fillRect(0, 0, canvas_player_4.width, canvas_player_4.height)

        ctx_4.fillStyle = `rgb(${red_4.value}, ${green_4.value}, ${blue_4.value})`
        ctx_4.fillRect(px*tp, py*tp, tp*4, tp*4)

        ctx_4.fillStyle = `#000`
        ctx_4.fillRect(px*tp+4, py*tp+4, tp, tp)
        ctx_4.fillRect(px*tp+54, py*tp+4, tp, tp)

        function colors(){
            ctx_4.fillStyle = `rgb(${red_4.value}, ${green_4.value}, ${blue_4.value})`
            ctx_4.fillRect(px*tp, py*tp, tp*4, tp*4)
                
            ctx_4.fillStyle = `#000`
            ctx_4.fillRect(px*tp+4, py*tp+4, tp, tp)
            ctx_4.fillRect(px*tp+54, py*tp+4, tp, tp)
        }

            red_4.addEventListener(`input`, colors)
            green_4.addEventListener(`input`, colors)
            blue_4.addEventListener(`input`, colors)
    })

    //============= SISTEMA DE ENTRADA DOS PLAYERS ==========//

    function gameover() {

        tamanhodorapo = 5

        px = 1
        py = 1

        vy = 0
        vx = 0
        
    }

    function gameover2() {

        tamanhodorapo2 = 5

        px2 = 28
        py2 = 1

        vy2 = 0
        vx2 = 0
        
    }

    function gameover3() {

        tamanhodorapo3 = 5

        px3 = 1
        py3 = 18

        vy3 = 0
        vx3 = 0
        
    }

    function gameover4() {

        tamanhodorapo4 = 5

        px4 = 28
        py4 = 18

        vy4 = 0
        vx4 = 0

        console.log("player 4 morreu")
        
    }

    function game(){

        if (start){

        {// deshenhando o basico
            ctx.fillStyle = `rgb(23, 23, 23)`;//grade
            ctx.fillRect(0,0, grade.width, grade.height);

            ctx.fillStyle = `rgb(255, 0, 0)`;//maça
            ctx.fillRect(ax*tp, ay*tp, tp,tp);

            while (ax < 0 || ax >= qpx || ay < 0 || ay >= qpy) {                       
            ax = Math.round(Math.random()*qpx-1);              
            ay = Math.round(Math.random()*qpy-1);
        }}   

    //==================== player 1 =====================//

        if (start && player_1) {

            {//o basico do personagem
            px += vx;
            py += vy;

        if (px < 0) {
            gameover()
        }

        if (px > qpx) {
            gameover()
        }

        if (py < 0) {
            gameover()
        }

        if (py > qpy) {
            gameover()
        }}

        ctx.fillStyle = `rgb(${red_1.value}, ${green_1.value}, ${blue_1.value})`;//cobra

        for (let i = 0; i < rabo.length; i++) {
            ctx.fillRect(rabo[i].x*tp, rabo[i].y*tp, tp-1,tp-1);

            if (rabo[i].x == px && rabo[i].y == py && player_1)
            {
                gameover()
            }

            if (rabo[i].x == px2 && rabo[i].y == py2 && player_2) {
                gameover2()
            }

            if (rabo[i].x == px3 && rabo[i].y == py3 && player_3) {
                gameover3()
            }

            if (rabo[i].x == px4 && rabo[i].y == py4 && player_4) {
                gameover4()
            }
        }

        rabo.push({x:px,y:py })
        while (rabo.length > tamanhodorapo) {
            rabo.shift();
        }

        if (ax == px && ay == py && player_1){
            tamanhodorapo++;
            ax = Math.round(Math.random()*qpx-1);
            ay = Math.round(Math.random()*qpy-1);

            console.log(ax)
            console.log(ay)
        }
    }

    //==================== player 2 =====================//

        if (start && player_2) {

            {//o basico do personagem
            px2 += vx2;
            py2 += vy2;

        if (px2 < 0) {
            gameover2()
        }

        if (px2 > qpx-1) {
            gameover2()
        }

        if (py2 < 0) {
            gameover2()
        }

        if (py2 > qpy-1) {
            gameover2()
        }}

        ctx.fillStyle = `rgb(${red_2.value}, ${green_2.value}, ${blue_2.value})`

        for (let i = 0; i < rabo2.length; i++) {
            ctx.fillRect(rabo2[i].x*tp, rabo2[i].y*tp, tp-1,tp-1);

            if (rabo2[i].x == px && rabo2[i].y == py && player_1)
                {
                    gameover();
                }

            if (rabo2[i].x == px2 && rabo2[i].y == py2 && player_2)
                {
                    gameover2()
                }

                if (rabo2[i].x == px3 && rabo2[i].y == py3 && player_3) {
                    gameover3()
                }

                if (rabo2[i].x == px4 && rabo2[i].y == py4 && player_4) {
                    gameover4()
                }
        }

        rabo2.push({x:px2 ,y:py2})
        while (rabo2.length > tamanhodorapo2) {
            rabo2.shift();
        }

        if (ax == px2 && ay == py2 && player_2){
            tamanhodorapo2++;
            ax = Math.round(Math.random()*qpx-1);
            ay = Math.round(Math.random()*qpy-1);

            console.log(ax)
            console.log(ay)
        }}

    //==================== player 3 =====================//

        if (start && player_3) {

            {//o basico do personagem
            px3 += vx3;
            py3 += vy3;

        if (px3 < 0) {
            gameover3()
        }

        if (px3 > qpx-1) {
            gameover3()
        }

        if (py3 < 0) {
            gameover3()
        }

        if (py3 > qpy-1) {
            gameover3()
        }}

        ctx.fillStyle = `rgb(${red_3.value}, ${green_3.value}, ${blue_3.value})`

        for (let i = 0; i < rabo3.length; i++) {
            ctx.fillRect(rabo3[i].x*tp, rabo3[i].y*tp, tp-1,tp-1);

            if (rabo3[i].x == px && rabo3[i].y == py && player_1)
                {
                    gameover();
                }

            if (rabo3[i].x == px2 && rabo3[i].y == py2 && player_2)
                {
                    gameover2()
                }

            if (rabo3[i].x == px3 && rabo3[i].y == py3 && player_3) 
                {
                    gameover3()
            }

            if (rabo3[i].x == px4 && rabo3[i].y == py4 && player_4) 
                {
                    gameover4()
            }
        }

        rabo3.push({x:px3 ,y:py3})
        while (rabo3.length > tamanhodorapo3) {
            rabo3.shift();
        }

        if (ax == px3 && ay == py3 && player_3){
            tamanhodorapo3++;
            ax = Math.round(Math.random()*qpx-1);
            ay = Math.round(Math.random()*qpy-1);

            console.log(ax)
            console.log(ay)
        }}

    //==================== player 4 =====================//

        if (start && player_4) {

            {//o basico do personagem
            px4 += vx4;
            py4 += vy4;

        if (px4 < 0) {
            gameover4()
        }

        if (px4 > qpx-1) {
            gameover4()
        }

        if (py4 < 0) {
            gameover4()
        }

        if (py4 > qpy-1) {
            gameover4()
        }}

        ctx.fillStyle = `rgb(${red_4.value}, ${green_4.value}, ${blue_4.value})`

        for (let i = 0; i < rabo4.length; i++) {
            ctx.fillRect(rabo4[i].x*tp, rabo4[i].y*tp, tp-1,tp-1);

            if (rabo4[i].x == px && rabo4[i].y == py && player_1)
                {
                    gameover();
                }

            if (rabo4[i].x == px2 && rabo4[i].y == py2 && player_2)
                {
                    gameover2()
                }

                if (rabo4[i].x == px3 && rabo4[i].y == py3 && player_3) {
                    gameover3()
                }

                if (rabo4[i].x == px4 && rabo4[i].y == py4 && player_4) {
                    gameover4()
                }
        }

        rabo4.push({x:px4 ,y:py4})
        while (rabo4.length > tamanhodorapo4) {
            rabo4.shift();
        }

        if (ax == px4 && ay == py4 && player_4){
            tamanhodorapo4++;
            ax = Math.round(Math.random()*qpx-1);
            ay = Math.round(Math.random()*qpy-1);

            console.log(ax)
            console.log(ay)
        }}

    }}
        

    function keyPush(event){

        switch (event.keyCode) {


            case 37: // player 1-esquerda//

                if (vx !== vel && player_1) {
                    vx = -vel;
                    vy = 0;
                }

                break;

            case 38: // player 1-cima

                if (vy !== vel && player_1) {
                    vx = 0;
                    vy = -vel;
                }

                break;

            case 39: // player 1-direita

                if (vx !== -vel && player_1) {
                    vx = vel;
                    vy = 0;
                }

                break;

            case 40: // player 1-baixo//

                if (vy !== -vel && player_1) {
                    vx = 0;
                    vy = vel;
                }

                break;
                


            case 87: // player 2-cima//

                if (vy2 !== vel && player_2) {
                    vx2 = 0;
                    vy2 = -vel;
                }

                break;

            case 68: // player 2-direita

                if (vx2 !== -vel  && player_2) {
                    vx2 = vel;
                    vy2 = 0;
                }

                break;

            case 65: // player 2-esquerda

                if (vx2 !== vel && player_2) {
                        vx2 = -vel;
                        vy2 = 0;
                }

                break;

            case 83: // player 2-baixo//

                if (vy2 !== -vel && player_2) {
                    vx2 = 0;
                    vy2 = vel;
                }

                break;

            case 73: // player 3-cima//

                if (vy3 !== vel && player_3) {
                    vx3 = 0;
                    vy3 = -vel;
                }

                break;

            case 76: // player 3-direita

                if (vx3 !== -vel  && player_3) {
                    vx3 = vel;
                    vy3 = 0;
                }

                break;

            case 74: // player 3-esquerda

                    if (vx3 !== vel && player_3) {
                        vx3 = -vel;
                        vy3 = 0;
                    }

                break;

            case 75: // player 3-baixo//

                if (vy3 !== -vel && player_3) {
                    vx3 = 0;
                    vy3 = vel;
                }

                break;


            
            case 104: // player 4-cima//

                if (vy4 !== vel && player_4) {
                    vx4 = 0;
                    vy4 = -vel;
                }

                break;

            case 102: // player 4-direita

                if (vx4 !== -vel  && player_4) {
                    vx4 = vel;
                    vy4 = 0;
                }

                break;

            case 100: // player 4-esquerda

                    if (vx4 !== vel && player_4) {
                        vx4 = -vel;
                        vy4 = 0;
                    }

                break;

            case 101: // player 4-baixo//

                if (vy4 !== -vel && player_4) {
                    vx4 = 0;
                    vy4 = vel;
                }

                break;

                default:
    }}

}