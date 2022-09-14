 //weekend or Working day

 let clickButton = document.getElementById("btn");
 function days() {
    let date = new Date(document.getElementById("date").value);
    console.log(date);
    let day = date.getDay();
    console.log(day);
    if(day == 0 || day == 6){
        document.write("weekend");
    }
    else{
        document.write("working day");
    }
 }
 clickButton.addEventListener('click', days);