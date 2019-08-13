Button1.addEventListener('click', optionOne, false); 
Button2.addEventListener('click', optionTwo, false);
Button3.addEventListener('click', optionThree, false);
Button4.addEventListener('click', optionFour, false);
Button5.addEventListener('click', optionFive, false);
Button6.addEventListener('click', optionSix, false);
Button7.addEventListener('click', optionSeven, false);
Button8.addEventListener('click', optionEight, false);

function optionOne(){
    //Reccomended
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const userSavings = document.getElementById('userSavings').value;
    const remainderOp1 = userIncome - (userExpenses + userSavings);
    const food1 = Math.floor(remainderOp1 * 0.15);
    const personalexpenses1 = Math.floor(remainderOp1 * 0.20);
    const transportion1 = Math.floor(remainderOp1 * 0.15);
    const medical_expenses1 = Math.floor(remainderOp1 * 0.15);
    const utilities1 = Math.floor(remainderOp1 * 0.10);
    const emergency1 = Math.floor(remainderOp1 * 0.05);
    const education1 = Math.floor(remainderOp1 * 0.10);
    const savings1 = Math.floor(remainderOp1 * 0.10);
    document.getElementById("results").innerText = ("Food: " + food1 + "; Personal expenses: " + personalexpenses1 + "; Transportation: " + transportion1 + "; Medical: " + medical_expenses1 + "; Utilities:" + utilities1 + "; Emergency: " + emergency1 + "; Education: " + education1 + "; Savings: " + savings1);
}

function optionTwo(){
    //Food
    anychart.onDocumentReady(function() {

        // set the data
        var data = [
            {x: "Food", value: 10},
            {x: "Personal expenses", value: 10},
            {x: "", value: 100},
            {x: "", value: 10},
            {x: "", value: 10},
            {x: "", value: 10},
            {x: "", value: 10}
        ];
      
        // create the chart
        var chart = anychart.pie();
      
        // set the chart title
        chart.title("Population by Race for the United States: 2010 Census");
      
        // add the data
        chart.data(data);
        
        // set legend position
        chart.legend().position("right");
        // set items layout
        chart.legend().itemsLayout("vertical");  
      
        // display the chart in the container
        chart.container('container');
        chart.draw();
      
      });
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const userSavings = document.getElementById('userSavings').value;
    const remainderOp2 = userIncome - (userExpenses + userSavings);
    const food2 = Math.floor(remainderOp2 * 0.25);
    const personalexpenses2 = Math.floor(remainderOp2 * 0.20);
    const transportion2 = Math.floor(remainderOp2 * 0.05);
    const medical_expenses2 = Math.floor(remainderOp2 * 0.15);
    const utilities2 = Math.floor(remainderOp2 * 0.10);
    const emergency2 = Math.floor(remainderOp2 * 0.05);
    const education2 = Math.floor(remainderOp2 * 0.10);
    const savings2 = Math.floor(remainderOp2 * 0.10);
    document.getElementById("result").innerText = ("Food: " + food2 + "; Personal expenses: " + personalexpenses2 + "; Transportation: " + transportion2 + "; Medical: " + medical_expenses2 + "; Utilities:" + utilities2 + "; Emergency: " + emergency2 + "; Education: " + education2 + "; Savings: " + savings2);
} 

function optionThree(){
    //Transport
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const userSavings = document.getElementById('userSavings').value;
    const remainderOp3 = userIncome - (userExpenses + userSavings);
    const food3 = Math.floor(remainderOp3 * 0.15);
    const personalexpenses3 = Math.floor(remainderOp3 * 0.10);
    const transportion3 = Math.floor(remainderOp3 * 0.25);
    const medical_expenses3 = Math.floor(remainderOp3 * 0.05);
    const utilities3 = Math.floor(remainderOp3 * 0.10);
    const emergency3 = Math.floor(remainderOp3 * 0.05);
    const education3 = Math.floor(remainderOp3 * 0.10);
    const savings3 = Math.floor(remainderOp3 * 0.10);
    document.getElementById("result").innerHTML = ("Food: " + food3 + "; Personal expenses: " + personalexpenses3 + "; Transportation: " + transportion3 + "; Medical: " + medical_expenses3 + "; Utilities:" + utilities3 + "; Emergency: " + emergency3 + "; Education: " + education3 + "; Savings: " + savings3);
}

function optionFour(){
    //Medical
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const userSavings = document.getElementById('userSavings').value;
    const remainderOp4 = userIncome - (userExpenses + userSavings);
    const food4 = Math.floor(remainderOp4 * 0.15);
    const personalexpenses4 = Math.floor(remainderOp4 * 0.10);
    const transportion4 = Math.floor(remainderOp4 * 0.15);
    const medical_expenses4 = Math.floor(remainderOp4 * 0.25);
    const utilities4 = Math.floor(remainderOp4 * 0.10);
    const emergency4 = Math.floor(remainderOp4 * 0.05);
    const education4 = Math.floor(remainderOp4 * 0.10);
    const savings4 = Math.floor(remainderOp4 * 0.10);
    document.getElementById("result").innerHTML = ("Food: " + food4 + "; Personal expenses: " + personalexpenses4 + "; Transportation: " + transportion4 + "; Medical: " + medical_expenses4 + "; Utilities:" + utilities4 + "; Emergency: " + emergency4 + "; Education: " + education4 + "; Savings: " + savings4);
}

function optionFive(){
    //Entertainment
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const userSavings = document.getElementById('userSavings').value;
    const remainderOp5 = userIncome - (userExpenses + userSavings);
    const food5 = Math.floor(remainderOp5 * 0.15);
    const personalexpenses5 = Math.floor(remainderOp5 * 0.30);
    const transportion5 = Math.floor(remainderOp5 * 0.05);
    const medical_expenses5 = Math.floor(remainderOp5 * 0.15);
    const utilities5 = Math.floor(remainderOp5 * 0.10);
    const emergency5 = Math.floor(remainderOp5 * 0.05);
    const education5 = Math.floor(remainderOp5 * 0.10);
    const savings5 = Math.floor(remainderOp5 * 0.10);
    document.getElementById("result").innerHTML = ("Food: " + food5 + "; Personal expenses: " + personalexpenses5 + "; Transportation: " + transportion5 + "; Medical: " + medical_expenses5 + "; Utilities:" + utilities5 + "; Emergency: " + emergency5 + "; Education: " + education5 + "; Savings: " + savings5);
}

function optionSix(){
    //Utilities
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const userSavings = document.getElementById('userSavings').value;
    const remainderOp6 = userIncome - (userExpenses + userSavings);
    const food5 = Math.floor(remainderOp6 * 0.15);
    const personalexpenses6 = Math.floor(remainderOp6 * 0.10);
    const transportion6 = Math.floor(remainderOp6 * 0.15);
    const medical_expenses6 = Math.floor(remainderOp6 * 0.05);
    const utilities6 = Math.floor(remainderOp6 * 0.20);
    const emergency6 = Math.floor(remainderOp6 * 0.05);
    const education6 = Math.floor(remainderOp6 * 0.10);
    const savings6 = Math.floor(remainderOp6 * 0.10);
    document.getElementById("result").innerHTML = ("Food: " + food6 + "; Personal expenses: " + personalexpenses6 + "; Transportation: " + transportion6 + "; Medical: " + medical_expenses6 + "; Utilities:" + utilities6 + "; Emergency: " + emergency6 + "; Education:" + education6 + "; Savings: " + savings6);
}

function optionSeven(){
    //Emergency
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const userSavings = document.getElementById('userSavings').value;
    const remainderOp7 = userIncome - (userExpenses + userSavings);
    const food7 = Math.floor(remainderOp7 * 0.15);
    const personalexpenses7 = Math.floor(remainderOp7 * 0.10);
    const transportion7 = Math.floor(remainderOp7 * 0.15);
    const medical_expenses7 = Math.floor(remainderOp7 * 0.05);
    const utilities7 = Math.floor(remainderOp7 * 0.10);
    const emergency7 = Math.floor(remainderOp7 * 0.15);
    const education7 = Math.floor(remainderOp7 * 0.10);
    const savings7 = Math.floor(remainderOp7 * 0.10);
    document.getElementById("result").innerHTML = ("Food: " + food7 + "; Personal expenses: " + personalexpenses7 + "; Transportation: " + transportion7 + "; Medical: " + medical_expenses7 + "; Utilities:" + utilities7 + "; Emergency: " + emergency7 + "; Education: " + education7 + "; Savings: " + savings7);
}

function optionEight(){
    //Education
    const userIncome = document.getElementById('nameField').value;
    const userExpenses = document.getElementById('fixedExpenses').value;
    const userSavings = document.getElementById('userSavings').value;
    const remainderOp8 = userIncome - (userExpenses + userSavings);
    const food8 = Math.floor(remainderOp8 * 0.15);
    const personalexpenses8 = Math.floor(remainderOp8 * 0.10);
    const transportion8 = Math.floor(remainderOp8 * 0.15);
    const medical_expenses8 = Math.floor(remainderOp8 * 0.15);
    const utilities8 = Math.floor(remainderOp8 * 0.10);
    const emergency8 = Math.floor(remainderOp8 * 0.05);
    const education8 = Math.floor(remainderOp8 * 0.20);
    const savings8 = Math.floor(remainderOp8 * 0.10);
    document.getElementById("results").innerText = ("Food: " + food8 + "; Personal expenses: " + personalexpenses8 + "; Transportation: " + transportion8 + "; Medical: " + medical_expenses8 + "; Utilities:" + utilities8 + "; Emergency: " + emergency8 + "; Education: " + education8 + "; Savings: " + savings8);
}


window.onload = function() {

    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Recommended"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 15, label: "Food"},
                {y: 20, label: "Personal expenses"},
                {y: 14, label: "Transportaion"},
                {y: 5, label: "Medical expenses"},
                {y: 8, label: "Utilities"},
                {y: 5, label: "Emergency"},
                {y: 10, label: "Savings"}
              
              
          
            ]
        }]
    });
    chart.render();
    
    }



    








function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
