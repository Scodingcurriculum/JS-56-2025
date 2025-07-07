function display(){
  var name= document.getElementById("ip1").value;
  var data1="Hi "+ String(name)+"! Welcome to Code Champ 2025 !!!"; 
  document.getElementById("data").innerHTML=data1;
  
  //Additional Activity
  document.getElementById("img1").src="https://images.unsplash.com/photo-1600577916048-804c9191e36c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzU5ODQ2NjF8&ixlib=rb-4.0.3&q=80&w=400";
  document.getElementById("header").style.color="#E53935";
}