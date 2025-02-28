document.getElementById("cash-out-section").style.display="none";


document.getElementById("btn-add-money").addEventListener("click",function(event){
    handleToggle("add-money-section","block")
    handleToggle("cash-out-section","none")
    
    // document.getElementById("add-money-section").style.cursor="pointer";
    
    // document.getElementById("cash-out-section").style.display="none";
    // document.getElementById("add-money-section").style.display="block";

})
document.getElementById("btn-cash-out").addEventListener("click",function(event){
    
    
    // document.getElementById("cash-out-section").style.cursor="pointer";
    // document.getElementById("cash-out-section").style.display="block";
    // document.getElementById("add-money-section").style.display="none";
    handleToggle("add-money-section","none")
    handleToggle("cash-out-section","block")

})