function generateTable() {
            // Get the input number
            var number = parseInt(document.getElementById('number').value);
            
            // Validate the input
            if (isNaN(number) || number <= 0) {
                alert('Please enter a valid positive number.');
                return;
            }
            
            // Get the table element
            var table = document.getElementById('table');
            
            // Clear previous table content
            table.innerHTML = '';
            
            // Create table header
            var headerRow = document.createElement('tr');
            var headerCell = document.createElement('th');
            headerCell.colSpan = 2;
            headerCell.textContent = 'Multiplication Table for ' + number;
            headerRow.appendChild(headerCell);
            table.appendChild(headerRow);
            
            // Create table rows for the multiplication table
            for (var i = 1; i <= 10; i++) {
                var row = document.createElement('tr');
                
                var cell1 = document.createElement('td');
                cell1.textContent = number + ' x ' + i + " = " + (number * i);
                
                /*var cell2 = document.createElement('td');
                cell2.textContent = number * i;*/
                
                row.appendChild(cell1);
                //row.appendChild(cell2);
                
                table.appendChild(row);
            }
        }