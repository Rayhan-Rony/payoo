document.getElementById("cashOut-btn").addEventListener("click",function(event){
    event.preventDefault()
    const amount=getInputValueById("cashOut-amount")
    const pin=getInputValueById("cashOut-pin")
   const mainBalance=getInnerTextById("main-balance")
   if(amount>mainBalance){
    alert("Insufficient Balance")
    return
   }
   
   if( pin === 1234 ){
         const sum = mainBalance-amount ;
       setInnerText("main-balance",sum)

   }
   else{
    alert("Incorrect Pin")
   }
    
})