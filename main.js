subButton.addEventListener('click', getUserInput,false); 

function getUserInput(){
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const remainder = userIncome - userExpenses;
    let divide = 11.11;
    let userSpend = Math.floor(remainder / divide);
    if(remainder <= 10){
    let divide = 1.11
    let userSpend = Math.floor(remainder / divide)
    }
    console.log(userSpend);
}
