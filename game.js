let gameScreen = document.querySelector("#startScreen");
let setnum1 = [0, 0, 0, 0, 0];
let setnum2 = setnum1.slice();
function changeScreen(){
    
    

    // let gameScreen = "";
    gameScreen.innerHTML = "";
    for(let i = 1; i <= 4; i++){//隨機數字
        let a = Math.round(Math.random() * 12)+1;
        console.log(a);
        setnum1[i] =  a;
        if(a == 1){
            gameScreen.innerHTML += "<div><img src='game/1.png'></img></div>"
        }
        else if(a == 2){
            gameScreen.innerHTML += "<div><img src='game/2.png'></img></div>"
        }
        else if(a == 3){
            gameScreen.innerHTML += "<div><img src='game/3.png'></img></div>"
        }
        else if(a == 4){
            gameScreen.innerHTML += "<div><img src='game/4.png'></img></div>"
        }
        else if(a == 5){
            gameScreen.innerHTML += "<div><img src='game/5.png'></img></div>"
        }
        else if(a == 6){
            gameScreen.innerHTML += "<div><img src='game/6.png'></img></div>"
        }
        else if(a == 7){
            gameScreen.innerHTML += "<div><img src='game/7.png'></img></div>"
        }
        else if(a == 8){
            gameScreen.innerHTML += "<div><img src='game/8.png'></img></div>"
        }
        else if(a == 9){
            gameScreen.innerHTML += "<div><img src='game/9.png'></img></div>"
        }
        else if(a == 10){
            gameScreen.innerHTML += "<div><img src='game/10.png'></img></div>"
        }
        else if(a == 11){
            gameScreen.innerHTML += "<div><img src='game/11.png'></img></div>"
        }
        else if(a == 12){
            gameScreen.innerHTML += "<div><img src='game/12.png'></img></div>"
        }
        else if(a == 13){
            gameScreen.innerHTML += "<div><img src='game/13.png'></img></div>"
        }

    }

    gameScreen.innerHTML += "<p>請按照你需要順序填入數字及符號，不用考慮先乘除後加減</p>";
    gameScreen.innerHTML += "<input type='text' id='num1'> <br/>";
    gameScreen.innerHTML += `<select id="sign1">
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                    <option value="*">*</option>
                                    <option value="/(表示樓上除以樓下)">/</option>
                                    <option value="|(表示樓下除以樓上)">/</option>
                              </select> <br/>`;
    gameScreen.innerHTML += "<input type='text' id='num2'> <br/>";
    gameScreen.innerHTML += `<select id="sign2">
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                    <option value="*">*</option>
                                    <option value="/(表示樓上除以樓下)">/</option>
                                    <option value="|(表示樓下除以樓上)">/</option>
                              </select> <br/>`;
    gameScreen.innerHTML += "<input type='text' id='num3'> <br/>";
    gameScreen.innerHTML += `<select id="sign3">
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                    <option value="*">*</option>
                                    <option value="/(表示樓上除以樓下)">/</option>
                                    <option value="|(表示樓下除以樓上)">/</option>
                              </select> <br/>`;
    gameScreen.innerHTML += "<input type='text' id='num4'> <br/>";
    gameScreen.innerHTML += "<button onclick = 'compute()'>確定</button> <br/>";
    gameScreen.innerHTML += "<button id='disappearButton' onclick='showButton()'>解不出來或式認為題目無解嗎? 點擊以重開</button>";
    setTimeout(function() {
        document.getElementById('disappearButton').style.display = 'block';
      }, 10000);
    gameScreen.innerHTML += "<a href='all.html'>Back</a>";

    
    // console.log(setnum);
    setnum2 = setnum1.slice();
}

function showButton() {
    changeScreen();
}


function compute(){
    let ans = 0;
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let num3 = document.getElementById("num3");
    let num4 = document.getElementById("num4");
    let sign11 = document.getElementById("sign1");
    let sign22 = document.getElementById("sign2");
    let sign33 = document.getElementById("sign3");
    num1 = num1.value;
    num2 = num2.value;
    num3 = num3.value;
    num4 = num4.value;
    let sign1 = sign11.value;
    let sign2 = sign22.value;
    let sign3 = sign33.value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    num4 = parseInt(num4);
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
    console.log(sign1);
    console.log(sign2);
    console.log(sign3);
    for(let i = 1; i <= 4; i++){//數字偵錯
        if(num1 ==  setnum1[i] ){
            setnum1[i]=0;
            break;
        }
        if(i == 4){
            // console.log("第1個出現問題");
            alert("使用不符合規定之數字，請重新輸入答案");
            return;
        }
    }
    for(let i = 1; i <= 4; i++){//數字偵錯
        if(num2 ==  setnum1[i] ){
            setnum1[i]=0;
            break;
        }
        if(i == 4){
            // console.log("第2個出現問題");
            alert("使用不符合規定之數字，請重新輸入答案");
            return;
        }
    }
    for(let i = 1; i <= 4; i++){//數字偵錯
        if(num3 ==  setnum1[i] ){
            setnum1[i]=0;
            break;
        }
        if(i == 4){
            // console.log("第3個出現問題");
            alert("使用不符合規定之數字，請重新輸入答案");
            return;
        }
    }
    for(let i = 1; i <= 4; i++){//數字偵錯
        if(num4 ==  setnum1[i] ){
            setnum1[i]=0;
            break;
        }
        if(i == 4){
            // console.log("第4個出現問題");
            alert("使用不符合規定之數字，請重新輸入答案");
            return;
        }
    }
    
    if(sign1 == '+'){//符號1運算
        ans = num1 + num2;
    }
    else if(sign1 == '-'){
        ans = num1 - num2;
    }
    else if(sign1 == '*'){
        ans = num1 * num2;
    }
    else if(sign1 == '/'){
        ans = num1 / num2;
    }
    else if(sign1 == '|'){
        ans = num2 / num1;
    }
    else{
        // console.log(sign1);
        // console.log("第1個出現問題");
        alert("使用不符合規定之符號，請重新輸入答案");
        return;
    }
    if(sign2 == '+'){//符號2運算
        ans = ans + num3;
    }
    else if(sign2 == '-'){
        ans = ans - num3;
    }
    else if(sign2 == '*'){
        ans = ans * num3;
    }
    else if(sign2 == '/'){
        ans = ans / num3;
    }
    else if(sign2 == '|'){
        ans = num3 / ans;
    }
    else{
        // console.log(sign2);
        // console.log("第2個出現問題");
        alert("使用不符合規定之符號，請重新輸入答案");
        return;
    }
    if(sign3 == '+'){//符號偵錯
        ans = ans + num4;
    }
    else if(sign3 == '-'){
        ans = ans - num4;
    }
    else if(sign3 == '*'){
        ans = ans * num4;
    }
    else if(sign3 == '/'){
        ans = ans / num4;
    }
    else if(sign3 == '|'){
        ans = num4 / ans;
    }
    else{
        // console.log(sign3);
        // console.log("第3個出現問題");
        alert("使用不符合規定之符號，請重新輸入答案");
        return;
    }

    if(ans == 24){
        alert("恭喜答對! 點選重新以再開始新一局");
        gameScreen.innerHTML += "<button onclick = 'changeScreen()'>重新</button>";
        return;
    }
    else{
        alert("可惜答錯了，可以再想想唷!");
        setnum1 = setnum2.slice();
        return;
    }
}
