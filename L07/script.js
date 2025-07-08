let students = [];
 
function addStudent() {
     let name = document.getElementById("studentName").value;
     let money = document.getElementById("moneyCollected").value;
          
     if (name && money) {
        students.push({name: name, money: parseFloat(money)});
        document.getElementById("output").innerHTML += `<p>${name} collected $${money}</p>`; 
        document.getElementById("studentName").value = '';
        document.getElementById("moneyCollected").value = '';
      }
     else {
        alert("Please enter both name and money collected!");
        }
      }
    //Additional Activity - to calculate total amount collected by all the students
      function calculateTotal() 
      {
        let totalMoney = 0;
        for (let i = 0; i < students.length; i++)
        {
          totalMoney += students[i].money;
        }
        document.getElementById("output").innerHTML += `<h3>Total Money Collected: $${totalMoney}</h3>`;
     }