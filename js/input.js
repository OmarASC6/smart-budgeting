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
    document.getElementById("resultFood").innerText = (food1);
    document.getElementById("resultPersonal").innerText = (personalexpenses1);
    document.getElementById("resultTransport").innerText = (transportion1);
    document.getElementById("resultMedical").innerText = (medical_expenses1);
    document.getElementById("resultUtilities").innerText = (utilities1);
    document.getElementById("resultEmergency").innerText = (emergency1);
    document.getElementById("resultEducation").innerText = (education1);
} 
//     anychart.onDocumentReady(function() {
//       // set the data
//       const data = [
//             {x: "Food", value: food1},
//             {x: "personalexpenses", value: personalexpenses1},
//             {x: "transportation", value: transportion1},
//             {x: "medical", value: medical_expenses1},
//             {x: "utilities", value: utilities1},
//             {x: "emergency", value: emergency1},
//             {x: "education", value: education1}
//         ];
      
//         // create the chart
//         const chart = anychart.pie();
      
//         // set the chart title
//         chart.title("Population by Race for the United States: 2010 Census");
      
//         // add the data
//         chart.data(data);
      
//         // display the chart in the container
//         chart.container('container');
//         chart.draw();
// }



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
    document.getElementById("resultFood").innerText = (food2);
    document.getElementById("resultPersonal").innerText = (personalexpenses2);
    document.getElementById("resultTransport").innerText = (transportion2);
    document.getElementById("resultMedical").innerText = (medical_expenses2);
    document.getElementById("resultUtilities").innerText = (utilities2);
    document.getElementById("resultEmergency").innerText = (emergency2);
    document.getElementById("resultEducation").innerText = (education2);
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
    document.getElementById("resultFood").innerText = (food3);
    document.getElementById("resultPersonal").innerText = (personalexpenses3);
    document.getElementById("resultTransport").innerText = (transportion3);
    document.getElementById("resultMedical").innerText = (medical_expenses3);
    document.getElementById("resultUtilities").innerText = (utilities3);
    document.getElementById("resultEmergency").innerText = (emergency3);
    document.getElementById("resultEducation").innerText = (education3);}

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
    document.getElementById("resultFood").innerText = (food4);
    document.getElementById("resultPersonal").innerText = (personalexpenses4);
    document.getElementById("resultTransport").innerText = (transportion4);
    document.getElementById("resultMedical").innerText = (medical_expenses4);
    document.getElementById("resultUtilities").innerText = (utilities4);
    document.getElementById("resultEmergency").innerText = (emergency4);
    document.getElementById("resultEducation").innerText = (education4);
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
    document.getElementById("resultFood").innerText = (food5);
    document.getElementById("resultPersonal").innerText = (personalexpenses5);
    document.getElementById("resultTransport").innerText = (transportion5);
    document.getElementById("resultMedical").innerText = (medical_expenses5);
    document.getElementById("resultUtilities").innerText = (utilities5);
    document.getElementById("resultEmergency").innerText = (emergency5);
    document.getElementById("resultEducation").innerText = (education5);
    
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
    document.getElementById("resultFood").innerText = (food6);
    document.getElementById("resultPersonal").innerText = (personalexpenses6);
    document.getElementById("resultTransport").innerText = (transportion6);
    document.getElementById("resultMedical").innerText = (medical_expenses6);
    document.getElementById("resultUtilities").innerText = (utilities6);
    document.getElementById("resultEmergency").innerText = (emergency6);
    document.getElementById("resultEducation").innerText = (education6);
}