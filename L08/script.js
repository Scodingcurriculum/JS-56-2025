function calculateDays() {
      let date1 = new Date(document.getElementById('date1').value);
      let date2 = new Date(document.getElementById('date2').value);
      let difference = Math.abs(date2 - date1);
      let days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      document.getElementById('result1').textContent = `Days between dates: ${days}`;
    }

 function calculateFutureDate() {
      let startDate = new Date(document.getElementById('startDate').value);
      let daysToAdd = parseInt(document.getElementById('daysToAdd').value);
      let futureDate = new Date(startDate);
      futureDate.setDate(futureDate.getDate() + daysToAdd);
      document.getElementById('result2').textContent = `Future date: ${futureDate.toDateString()}`;
    }