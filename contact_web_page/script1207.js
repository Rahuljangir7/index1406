// function 
function validform() {
    const Form = document.getElementById("form");
    // console.log(Form);
    let isValid = true;
    
    for(let x of Form){
        if(x.value !== ""){
            window.location.href="./contact.html"
        }
    }

    return false;
}