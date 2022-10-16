const out = document.getElementById("output");
let paragraph;

function buttonClick(){
    fetch("http://localhost:3000/users").then(
        (response)=>{
            return response.text();
        }
    ).then((text)=>{
        let usersArray = JSON.parse(text);
        usersArray.forEach(element => {
            paragraph = document.createElement('p');
            paragraph.innerText=`id: ${element.id} name: ${element.name} email: ${element.email}`;
            out.appendChild(paragraph);
        });
    })
}