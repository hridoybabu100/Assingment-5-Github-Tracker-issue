// Index. style
// Sing in Loggin Button 

const singinButton = document.getElementById("singIn-btn");
// console.log(singinButton);
singinButton.addEventListener("click", () => {
    // console.log("clicked Button");
    // 1. input Text Define
    const inputText = document.getElementById("input-Text-Btn");
    const newInputText = inputText.value ;
    // console.log(newInputText);
    
    // 2. input Password Define
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value ;
    
    // console.log(pin);
    
    // 3. input & Password verify Define
    if ( newInputText === "admin" && pin === "admin123" ){
        // 4. Condition > jodi input & Password This Thake Tahole LOggin korte dibo.
        alert("Loggin suceessfull");
        window.location.assign("./homepage.html");
    }else{
        // 5. Condition > jodi input & Password This Thake Tahole LOggin korte dibona.
        alert("Loggin failed")
        return;
    }
    
})
