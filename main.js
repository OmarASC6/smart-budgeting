subButton.addEventListener('click', getUserInput,false); 

// function getUserIncome() {
//     const userIncome = document.getElementById('nameField').value;
//     return userIncome;
// }
function getUserInput(){
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixed-expenses').value;
    const remainder = userIncome - userExpenses;
    
    const divide = 11.11;
    const userSpend = Math.floor(remainder / divide);


}

