Button1.addEventListener('click', optionOne, false); 
Button2.addEventListener('click', optionTwo, false);
Button3.addEventListener('click', optionThree, false);

function optionOne(){
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const remainderOp1 = userIncome - userExpenses;
    const multiplier1 = 0.14;
    const spendMoneyOption1 = Math.floor(remainderOp1 * multiplier1);
    console.log(spendMoneyOption1);
}

function optionTwo(){
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const remainderOp2 = userIncome - userExpenses;
    const multiplier2 = 0.14;
    const food = 0.25;
    const spendMoneyOption2 = Math.floor((remainderOp2 - (remainderOp2 * food)) * multiplier2);
    console.log(spendMoneyOption2);
}

function optionThree(){
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const remainderOp3 = userIncome - userExpenses;
    const multiplier3 = 0.14;
    const 
    const spendMoneyOption3 = Math.floor(remainderOp3 * multiplier3);
    console.log(spendMoneyOption3);
}
