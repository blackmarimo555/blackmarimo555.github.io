'use strict';
{
    const $settei = document.getElementById('ee');
    const settei = $settei.children;

    let s = 0;
    let totalGame = 0;
    let medal = 0;
    let big = 0;
    let reg = 0;
    let mascat = 0;

    function reset(){
        s=0;
        totalGame=0;
        medal=0;
        big=0;
        reg=0;
        mascat=0;
    }
    const ko = [
        //BIG REG チェリーBIG チェリーREG ぶどう チェリー リプ 中チェ
        [163,98,45,54,10321,1721,8978,20],
        [165,124,47,56,10419,1723,8978,20],
        [171,132,49,60,10485,1780,8978,20],
        [176,160,52,64,10519,1840,8978,20],
        [186,168,54,68,10604,1840,8978,20],
        [196,196,56,76,10797,1842,8978,20],
        
    ];
    //設定が選択されたら設定選択ボタンを消す
    function load(){
        document.getElementById('settei').classList.add('hidden');
        document.getElementById('tag').classList.remove('hidden');
    }


    for(let i = 0; i < settei.length; i++){
        settei[i].addEventListener('click',()=>{
            s = (i + 1);
            if(s === 7){
                s = Math.floor(Math.random() * 6 + 1);
            }
            load();
        });
    }
    function gameData(){
        document.getElementById('gameData1').textContent = 
        `totalgame:${totalGame} BIG:${big} REG:${reg} ボーナス合算:1/${Math.floor(totalGame/(big+reg))}`;
        document.getElementById('gameData2').textContent = 
        `差枚数:${medal} BIG確率:1/${Math.floor(totalGame/big)} REG確率:1/${Math.floor(totalGame/reg)} ブドウ確率:1/${(totalGame/mascat).toFixed(3)}`;
    }

    function game1(){
        medal -= 3;
        totalGame++;
        const getNo = Math.floor(Math.random() * 65536);
        if(getNo < ko[s-1][0]){
            big++;
            medal += 311;
            document.getElementById('resolt').textContent = '単独BIG';
            // console.log('単独BIG');
        }else if(getNo < ko[s-1][0]+ko[s-1][1]){
            reg++;
            medal+=103;
            document.getElementById('resolt').textContent = '単独REG';
            // console.log('単独REG');
        }else if(getNo < ko[s-1][0]+ko[s-1][1]+ko[s-1][2]){
            big++;
            medal+=2;
            medal+=311;
            document.getElementById('resolt').textContent = 'チェリーBIG';
            // console.log('チェリーBIG');
        }else if(getNo < ko[s-1][0]+ko[s-1][1]+ko[s-1][2]+ko[s-1][3]){
            reg++;
            medal+=2;
            medal+=103;
            document.getElementById('resolt').textContent = 'チェリーREG';
            // console.log('チェリーREG');
        }else if(getNo < ko[s-1][0]+ko[s-1][1]+ko[s-1][2]+ko[s-1][3]+ko[s-1][4]){
            mascat++;
            medal+=7;
            document.getElementById('resolt').textContent = 'ぶどう';
            // console.log('ぶどう');
        }else if(getNo < ko[s-1][0]+ko[s-1][1]+ko[s-1][2]+ko[s-1][3]+ko[s-1][4]+ko[s-1][5]){
            medal+=2;
            document.getElementById('resolt').textContent = 'チェリー';
            // console.log('チェリー');  
        }else if(getNo < ko[s-1][0]+ko[s-1][1]+ko[s-1][2]+ko[s-1][3]+ko[s-1][4]+ko[s-1][5]+ko[s-1][6]){
            medal+=3;
            document.getElementById('resolt').textContent = 'リプ';
            // console.log('リプレイ');
        }else if(getNo < ko[s-1][0]+ko[s-1][1]+ko[s-1][2]+ko[s-1][3]+ko[s-1][4]+ko[s-1][5]+ko[s-1][6]+ko[s-1][7]){
            medal+=1;
            medal+=311;
            big++;
            document.getElementById('resolt').textContent = '中チェBIG';
            // console.log('中チェBIG');
        }else{
            document.getElementById('resolt').textContent = 'はずれ';
            // console.log('はずれ');
        }
    }
    function game10(){
        let i = 0;
        while(i<10){
            game1();
            gameData();
            i++;
        }
    }
    function game100(){
        let i = 0;
        while(i<100){
            game1();
            gameData();
            i++;
        }
    }
    function game2000(){
        let i = 0;
        while(i<2000){
            game1();
            gameData();
            i++;
        }
    }
    function game4000(){
        let i = 0;
        while(i<4000){
            game1();
            gameData();
            i++;
        }
    }
    function game8000(){
        let i = 0;
        while(i<8000){
            game1();
            gameData();
            i++;
        }
    }
    function sCheck(){
        // console.log(s);
        const p = document.createElement('p');
        p.textContent = `設定は${s}です`
        document.body.appendChild(p);
        setTimeout(()=>{p.remove()},1000);
    }
    document.getElementById('game1').addEventListener('click',()=>{
        game1();        
    });
    document.getElementById('game10').addEventListener('click',()=>{
        game10();        
    });
    document.getElementById('game100').addEventListener('click',()=>{
        game100();        
    });
    document.getElementById('game2000').addEventListener('click',()=>{
        game2000();        
    });
    document.getElementById('game4000').addEventListener('click',()=>{
        game4000();        
    });
    document.getElementById('game8000').addEventListener('click',()=>{
        game8000();        
    });
    document.getElementById('sCheck').addEventListener('click',()=>{
        sCheck();        
    });
    document.getElementById('reset').addEventListener('click',()=>{
        reset();
        document.getElementById('gameData1').textContent = '';
        document.getElementById('gameData2').textContent = '';
        document.getElementById('resolt').textContent = '';
        document.getElementById('settei').classList.remove('hidden');
        document.getElementById('tag').classList.add('hidden');
    })
    const alls = document.querySelectorAll('input');
    const allsarr =[];
    function setarr(){
        for(let i=0;i<6;i++){
            for(let j=0;j<alls[i].value;j++){
                const sabarr =[];
                sabarr[0] = alls[i].name;
                allsarr.push(sabarr[0]);                
            }
        }
    }
    function saffle(){
        for(let i=0;i<allsarr.length;i++){
            const a =Math.floor(Math.random()*(allsarr.length-1-i));
            [allsarr[allsarr.length-1-i],allsarr[a]]=
            [allsarr[a],allsarr[allsarr.length-i-1]];
        }
    }
    let mode;
    function makeList(){
        const list = document.getElementById('datalist');
        for(let i=0;i<allsarr.length;i++){
            s=allsarr[i];
            for(let f=0;f<mode;f++){
                game1();
            }
            const li = document.createElement('li');
            li.textContent = `totalgame:${totalGame} BIG:${big} REG:${reg} ボーナス合算:1/${Math.floor(totalGame/(big+reg))}`;
            list.appendChild(li);
            const btn = document.createElement('button');
            btn.textContent='設定を確認する';
            btn.addEventListener('click',()=>{
                const p = document.createElement('p');
                p.textContent = `設定は${allsarr[i]}です`
                li.appendChild(p);
                setTimeout(()=>{p.remove()},1000);                
            })
            list.appendChild(btn);
            reset();
        }
    }
    document.getElementById('hsm2000').addEventListener('click',()=>{
        mode =2000;
        setarr();
        saffle();
        makeList();
        document.getElementById('hsmg').classList.add('hidden');
        document.getElementById('hsmresolt').classList.remove('hidden');
    })
    document.getElementById('hsm4000').addEventListener('click',()=>{
        mode =4000;
        setarr();
        saffle();
        makeList();
        document.getElementById('hsmg').classList.add('hidden');
        document.getElementById('hsmresolt').classList.remove('hidden');
    })
    document.getElementById('hsm').addEventListener('click',()=>{
        document.getElementById('hsmg').classList.remove('hidden');
        document.getElementById('settei').classList.add('hidden');
    })
    document.getElementById('allreset').addEventListener('click',()=>{
        const li = document.getElementById(datalist);
        while(datalist.firstChild){
            datalist.removeChild(datalist.firstChild);
        }
        const g = allsarr.length
        for(let i=0;i<g;i++){
            allsarr.pop();
        }
        document.getElementById('hsmresolt').classList.add('hidden');
        document.getElementById('settei').classList.remove('hidden');

    })
        

}
