let currentText = 1;
document.addEventListener("click", function(){
  var text = document.getElementById("text");
  if(currentText == 1){
    text.innerHTML = "În curând împlinesc frumoasa vârstă de 18 ani!";
    text.style.color = "white";
    currentText++;
  }else if(currentText == 2){
    text.innerHTML = "Te invit cu mare drag să sărbătorim cum se cuvine si să creăm amintiri frumoase";
    text.style.color = "white";
    currentText++;
  }else if(currentText == 3){
    text.innerHTML = "Aștept confirmarea ta până în data de 20 Martie";
    text.style.color = "white";
    currentText++;
  }else if(currentText == 4){
    text.innerHTML = "Locația: Conacu' din Clisură";
    text.style.color = "white";
    currentText++;
  }else if(currentText == 5){
    text.innerHTML = "Data: 10.04.2023";
    text.style.color = "white";
    currentText++;
  }else if(currentText == 6){
    text.innerHTML = "Ora: 19:00";
    text.style.color = "white";
    currentText++;
  }else if(currentText == 7){
        text.innerHTML = "";
        text.style.color = "white";
        currentText++;
  }else{
    text.innerHTML = "Majorat Cristi!";
    text.style.color = "white";
    currentText = 1;
  }
});
