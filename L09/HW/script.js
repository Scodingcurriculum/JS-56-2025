var shoppingList = [];

        function addItem(position) {
            var item = document.getElementById('item').value;
            
            if (item.trim() === '') {
                alert('Please enter an item.');
                return;
            }
            
            if (position === 'start') {
                shoppingList.unshift(item); // Add item to the start of the list
            } else if (position === 'end') {
                shoppingList.push(item); // Add item to the end of the list
            }
            
            document.getElementById('item').value = ''; // Clear the input field
            updateList();
        }

        function removeItem(position) {
            if (shoppingList.length === 0) {
                alert('The list is empty.');
                return;
            }
            
            if (position === 'start') {
                shoppingList.shift(); // Remove item from the start of the list
            } else if (position === 'end') {
                shoppingList.pop(); // Remove item from the end of the list
            }
            
            updateList();
        }

        function updateList() {
            var listItems = document.getElementById('listItems');
            listItems.innerHTML = ''; // Clear current list display
            
            shoppingList.forEach(function(item) {
                var li = document.createElement('li');
                li.textContent = item;
                listItems.appendChild(li);
            });
            
            // Update item count and first/last item display
            document.getElementById('itemCount').textContent = shoppingList.length;
            document.getElementById('firstItem').textContent = shoppingList[0] || 'None';
            document.getElementById('lastItem').textContent = shoppingList[shoppingList.length - 1] || 'None';
        }