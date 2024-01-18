let req_fields = document.getElementById("form").querySelectorAll("[required]");
let req_labels = document.getElementsByTagName("label");
let tempArr =[];

req_fields.forEach(field =>{
    // field.classList.add("required");
    tempArr.push(field.id)
})

for(let i=0; i<req_labels.length; i++){
    let tempVal = req_labels[i].attributes["for"].value;
    if(tempArr.includes(tempVal)){
        req_labels[i].classList.add("required")
    }
}