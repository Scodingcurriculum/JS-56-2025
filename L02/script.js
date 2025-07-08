function showProfile() {  
    // Wizarding details
    var name = "Harry Potter";  
    var age = 11.5;           
    var birthdate = "1980-07-31";
    var school = "Hogwarts";
    var subject = "Defense Against the Dark Arts";
     
    // Display details on the webpage
    document.getElementById('displayName').innerHTML = name;
    document.getElementById('displayAge').textContent = String(age);
    document.getElementById('displayBirthdate').textContent = birthdate;
    document.getElementById('displaySchool').textContent = school;
    document.getElementById('displaySubject').textContent = subject;

  //ADDITIONAL ACTIVITY
    // Show the profile summary
    document.getElementById('profileSummary').style.display = 'block';
   
  
  let imgElement = document.createElement('img'); // Create an <img> element
    imgElement.src = "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"; 
    imgElement.alt = "Harry Potter"; 
    imgElement.style.width = "200px"; // Set image size using JS
  let profileDiv = document.getElementById('profileSummary');
  profileDiv.appendChild(imgElement); // Append the new image to the profile section
    
}