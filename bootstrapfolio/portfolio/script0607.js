// script type.js  for h1 tag
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed", {
        strings: ["Rahul Jangir", "Developer", "Freelancer", "Designer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const detail_tech = document.getElementsByClassName("detail-techno");
    console.log(detail_tech);

    // popup box 
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    h4.innerHTML = "This is MERN Stack part";
    p.innerHTML = "This is Programming language and this technology is use to website becomed Dynamic struture and some logic, event, action, and important Data Store by user other person detail";

    h4.appendChild(p);
    div.appendChild(h4);
    div.style.position='absolute';
    div.style.top = '0';
    div.style.width= '250px';

    for (let x of detail_tech) {
        x.style.position='relative';
        x.addEventListener('click', () => {
            alert(div.innerHTML)
        });
    }

});

