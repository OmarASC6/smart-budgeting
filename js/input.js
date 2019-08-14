Button1.addEventListener('click', optionOne, false); 
Button2.addEventListener('click', optionTwo, false);
Button3.addEventListener('click', optionThree, false);
Button4.addEventListener('click', optionFour, false);
Button5.addEventListener('click', optionFive, false);
Button6.addEventListener('click', optionSix, false);

function optionOne(){ 
    //Reccomended
    const userIncome = document.getElementById('income').value;
    const userExpenses = document.getElementById('fixed-expenses').value;
    const userSavings = document.getElementById('savings').value;
    const remainderOp1 = ((userIncome - userExpenses) - userSavings);
    const food1 = Math.floor(remainderOp1 * 0.15);
    const personalexpenses1 = Math.floor(remainderOp1 * 0.20);
    const transportion1 = Math.floor(remainderOp1 * 0.15);
    const medical_expenses1 = Math.floor(remainderOp1 * 0.15);
    const utilities1 = Math.floor(remainderOp1 * 0.10);
    const emergency1 = Math.floor(remainderOp1 * 0.15);
    const education1 = Math.floor(remainderOp1 * 0.10);
    document.getElementById("result").innerText = ("Food: " + food1 + "; Personal expenses: " + personalexpenses1 + "; Transportation: " + transportion1 + "; Medical: " + medical_expenses1 + "; Utilities:" + utilities1 + "; Emergency: " + emergency1 + "; Education: " + education1);
}

function optionTwo(){
//Food
    const userIncome = document.getElementById('income').value;
    const userExpenses = document.getElementById('fixed-expenses').value;
    const userSavings = document.getElementById('savings').value;
    const remainderOp2 = ((userIncome - userExpenses) - userSavings);
    const food2 = Math.floor(remainderOp2 * 0.25);
    const personalexpenses2 = Math.floor(remainderOp2 * 0.20);
    const transportion2 = Math.floor(remainderOp2 * 0.05);
    const medical_expenses2 = Math.floor(remainderOp2 * 0.15);
    const utilities2 = Math.floor(remainderOp2 * 0.10);
    const emergency2 = Math.floor(remainderOp2 * 0.15);
    const education2 = Math.floor(remainderOp2 * 0.10);
    document.getElementById("result").innerText = ("Food: " + food2 + "; Personal expenses: " + personalexpenses2 + "; Transportation: " + transportion2 + "; Medical: " + medical_expenses2 + "; Utilities:" + utilities2 + "; Emergency: " + emergency2 + "; Education: " + education2);
} 

function optionThree(){
    //Transport
    const userIncome = document.getElementById('income').value;
    const userExpenses = document.getElementById('fixed-expenses').value;
    const userSavings = document.getElementById('savings').value;
    const remainderOp3 = ((userIncome - userExpenses) - userSavings);
    const food3 = Math.floor(remainderOp3 * 0.15);
    const personalexpenses3 = Math.floor(remainderOp3 * 0.10);
    const transportion3 = Math.floor(remainderOp3 * 0.25);
    const medical_expenses3 = Math.floor(remainderOp3 * 0.15);
    const utilities3 = Math.floor(remainderOp3 * 0.10);
    const emergency3 = Math.floor(remainderOp3 * 0.15);
    const education3 = Math.floor(remainderOp3 * 0.10);
    document.getElementById("result").innerHTML = ("Food: " + food3 + "; Personal expenses: " + personalexpenses3 + "; Transportation: " + transportion3 + "; Medical: " + medical_expenses3 + "; Utilities:" + utilities3 + "; Emergency: " + emergency3 + "; Education: " + education3);
}

function optionFour(){
    //Medical
    const userIncome = document.getElementById('income').value;
    const userExpenses = document.getElementById('fixed-expenses').value;
    const userSavings = document.getElementById('savings').value;
    const remainderOp4 = ((userIncome - userExpenses) - userSavings);
    const food4 = Math.floor(remainderOp4 * 0.15);
    const personalexpenses4 = Math.floor(remainderOp4 * 0.10);
    const transportion4 = Math.floor(remainderOp4 * 0.15);
    const medical_expenses4 = Math.floor(remainderOp4 * 0.25);
    const utilities4 = Math.floor(remainderOp4 * 0.10);
    const emergency4 = Math.floor(remainderOp4 * 0.15);
    const education4 = Math.floor(remainderOp4 * 0.10);
    document.getElementById("result").innerHTML = ("Food: " + food4 + "; Personal expenses: " + personalexpenses4 + "; Transportation: " + transportion4 + "; Medical: " + medical_expenses4 + "; Utilities:" + utilities4 + "; Emergency: " + emergency4 + "; Education: " + education4);
}

function optionFive(){
    //Entertainment
    const userIncome = document.getElementById('income').value;
    const userExpenses = document.getElementById('fixed-expenses').value;
    const userSavings = document.getElementById('savings').value;
    const remainderOp5 = ((userIncome - userExpenses) - userSavings);
    const food5 = Math.floor(remainderOp5 * 0.15);
    const personalexpenses5 = Math.floor(remainderOp5 * 0.30);
    const transportion5 = Math.floor(remainderOp5 * 0.05);
    const medical_expenses5 = Math.floor(remainderOp5 * 0.15);
    const utilities5 = Math.floor(remainderOp5 * 0.10);
    const emergency5 = Math.floor(remainderOp5 * 0.15);
    const education5 = Math.floor(remainderOp5 * 0.10);
    document.getElementById("result").innerHTML = ("Food: " + food5 + "; Personal expenses: " + personalexpenses5 + "; Transportation: " + transportion5 + "; Medical: " + medical_expenses5 + "; Utilities:" + utilities5 + "; Emergency: " + emergency5 + "; Education: " + education5);
}

function optionSix(){
    //Education
    const userIncome = document.getElementById('income').value;
    const userExpenses = document.getElementById('fixed-expenses').value;
    const userSavings = document.getElementById('savings').value;
    const remainderOp6 = ((userIncome - userExpenses) - userSavings);
    const food6 = Math.floor(remainderOp6 * 0.15);
    const personalexpenses6 = Math.floor(remainderOp6 * 0.10);
    const transportion6 = Math.floor(remainderOp6 * 0.15);
    const medical_expenses6 = Math.floor(remainderOp6 * 0.15);
    const utilities6 = Math.floor(remainderOp6 * 0.10);
    const emergency6 = Math.floor(remainderOp6 * 0.15);
    const education6 = Math.floor(remainderOp6 * 0.20);
    document.getElementById("resultFood").innerText = ("Food: " + food6 + "; Personal expenses: " + personalexpenses6 + "; Transportation: " + transportion6 + "; Medical: " + medical_expenses6 + "; Utilities:" + utilities6 + "; Emergency: " + emergency6 + "; Education: " + education6);
}