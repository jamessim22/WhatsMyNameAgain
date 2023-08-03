const h2 = document.createElement("h2");
h2.textContent = "This content was added by JavaScript";

document.querySelector("body").appendChild(h2);

function generateName(){
	let firstname = ["Tom","Gerald","Bob","James","Betsy","Caroline","Mary","Susan"];
	let lastname= ["Fitzgerald","Bond","Wacker","Woods","Hoff","Simeon","Springstein","Wenta"];
	let rand_first = Math.floor(Math.random()*firstname.length); 
	let rand_last = Math.floor(Math.random()*lastname.length); 
	let result=document.getElementById('result');
	result = "<div class='alert alert-success' style='height:120px; padding:20px;'><center><h2>"+firstname[rand_first]+" "+lastname[rand_last]+"</h2></center></div>";
 
}






