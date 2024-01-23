let req_fields = document.getElementById("form").querySelectorAll("[required]");
let req_labels = document.getElementsByTagName("label");
let tempArr = [];

let pickupDateInput = document.getElementById("pickupDate");
let returnDateInput = document.getElementById("returnDate");
let today = new Date();
let tomorrow = new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];
let dayAfter = today = new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];

let insuranceRadioYes = document.getElementById("insurance_yes");
let insuranceRadioNo = document.getElementById("insurance_no");
let insuranceRow = document.getElementById("insurance_row");

let checkboxes = document.getElementsByClassName("checkbox");

insuranceRadioYes.addEventListener("click", (event) => {
    insuranceRadioYes.checked ? insuranceRow.classList.remove("hidden") : null;
})

insuranceRadioNo.addEventListener("click", (event) => {
    insuranceRadioNo.checked ? insuranceRow.classList.add("hidden") : null;
})

pickupDateInput.setAttribute("min", tomorrow);
returnDateInput.setAttribute("min", dayAfter);
req_fields.forEach(field => {
    // field.classList.add("required");
    tempArr.push(field.id)
})

for (let i = 0; i < req_labels.length; i++) {
    let tempVal = req_labels[i].attributes["for"].value;
    if (tempArr.includes(tempVal)) {
        req_labels[i].classList.add("required")
    }
}

const checkChange = () =>{
    console.log(checkboxes)
    console.log("change detected")
    let checked = 0
    for(let i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checked += 1;
        }
    }
    if(checked > 0){
        for(let i=0; i<checkboxes.length; i++) {
            checkboxes[i].removeAttribute("required")
            console.log(checkboxes[i])
        }
    }else{
        for(let i=0; i<checkboxes.length; i++) {
            checkboxes[i].setAttribute("required", true)
            console.log(checkboxes[i])
        }
    }
}
