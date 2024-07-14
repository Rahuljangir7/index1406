// function 
function validform() {
    const Form = document.getElementById("form");
    // console.log(Form);

    for (let count = 0; count < Form.length - 1; count++) {
        if (Form[count].value === "") {
            Form[count].style.borderColor = "red";
        } else {
            Form[count].style.borderColor = "rgba(178, 178, 178, 0.378)";
             
            if(count === Form.length-2){
                window.location.href = "./houseSale0207/index.html";
            }
        }
    }
    
    return false;
}