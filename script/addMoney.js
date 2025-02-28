document.getElementById("add-money-btn").addEventListener("click",function(event){
    event.preventDefault()
   const amount= document.getElementById("amount").value;
   console.log(amount)
   const convertedAmount=parseFloat(amount)
   console.log(convertedAmount)
   const pin= document.getElementById("pin").value;
   console.log(pin)
   const convertedPin=parseInt(pin)
   console.log(convertedPin)
   const mainBalance=document.getElementById("main-balance").innerText;
   const convertedMainBalance=parseFloat(mainBalance)
   if(amount && pin){
    if(convertedPin===1234){
        const sum=convertedMainBalance+convertedAmount;
        document.getElementById("main-balance").innerText=sum;
       }
       else{
        alert("Enter correct pin")
       }
   }
   else{
    alert("Please fill all the field")
   }
   
})