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
        gameData();
    }
    function game10(){
        let i = 0;
        while(i<10){
            game1();
            i++;
        }
    }
    function game100(){
        let i = 0;
        while(i<100){
            game1();
            i++;
        }
    }
    function game2000(){
        let i = 0;
        while(i<2000){
            game1();
            i++;
        }
    }
    function game8000(){
        let i = 0;
        while(i<8000){
            game1();
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
    document.getElementById('game8000').addEventListener('click',()=>{
        game8000();        
    });
    document.getElementById('sCheck').addEventListener('click',()=>{
        sCheck();        
    });

}
