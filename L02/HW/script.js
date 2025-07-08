function showProfile() 
{
            // Add your wizarding details here
    var name="Jane Smith";  //String
    var age= 29;           //float
    var weight="120 Lb";
    var height="140cm";
    var address="4th Street, 7th Block, Quintinn Square, NY";
            // Display the details on the webpage
    document.getElementById('dp').src="https://images.unsplash.com/photo-1514626585111-9aa86183ac98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY1ODcxOTB8&ixlib=rb-4.0.3&q=80&w=400";
    document.getElementById('displayName').innerHTML = name;
    document.getElementById('displayAge').textContent = String(age);
    document.getElementById('displayHeight').textContent = height;
    document.getElementById('displayWeight').textContent = weight;
    document.getElementById('displayAddress').textContent = address;

    // Show the profile summary
    document.getElementById('profileSummary').style.display = 'block';
}