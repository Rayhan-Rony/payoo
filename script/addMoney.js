
document.getElementById("add-money-btn").addEventListener("click",function(event){
    event.preventDefault()
   const amount= getInputValueById("amount");
   const pin=getInputValueById("pin")
   const mainBalance=getInnerTextById("main-balance")
   if(amount<=0 ){
    alert("Please enter valid Amount")
    return
   }
   if(amount && pin){
    if(pin===1234){
        const sum=mainBalance+amount;   
        setInnerText("main-balance",sum)
       }
       else{
        alert("Enter correct pin")
       }
   }
   else{
    alert("Please fill all the field")
   }
   
})