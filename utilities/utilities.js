function getInputValueById(id){
    const value=document.getElementById(id).value;
    const convertedValue=parseFloat(value)
    return convertedValue;
}
function getInnerTextById(id){
    const text=document.getElementById(id).innerText
    const convertedText=parseFloat(text)
    return  convertedText
}
function setInnerText(id,text){
    document.getElementById(id).innerText = text;
    
}
function handleToggle(id,status){
    document.getElementById(id).style.display=status;

}