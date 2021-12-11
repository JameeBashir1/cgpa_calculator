//Calculate CGPA
document.getElementById('calculate').addEventListener('click',start);
function start() {
  let last_cgpa = document.getElementById('last_sem_cgpa').value;
  let this_sem = document.getElementById('this_sem_sgpa').value;
  //CALCULATE
  var res = (Number(last_cgpa) + Number(this_sem))/2;
  document.getElementById('result').innerHTML = "Your New CGPA is: "+res;
  if(res<=5 && res>4){
    document.getElementById('remarks').innerHTML = "Remarks: You Need To Work Hard";
  }else if(res<=8 && res>5){
    document.getElementById('remarks').innerHTML = "Remarks: You are Average (Try to work little Harder ! )";
  }else if(res<=9 && res>8){
    document.getElementById('remarks').innerHTML = "Remarks: You are Above Average ! Keep It Up";
  }else if(res<=10 && res >9){
    document.getElementById('remarks').innerHTML = "Remarks: Wooooh! Dude You are Awesome! Try to Maintain it";
  }else if (res<=4 || res >10){
    document.getElementById('remarks').innerHTML = "Remarks: Are You Serious? Enter the Actual Details Man !"
  }
}
