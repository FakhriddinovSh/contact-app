let elForm = document.querySelector("form")
let elWrapperLeft = document.querySelector(".wrapper-left");
let elNameInput = document.querySelector(".form-name")
let elRelationshipInput = document.querySelector(".form-relationship")
let elPhoneInput = document.querySelector(".form-phone")

let ulElement = document.createElement("ul")
ulElement.setAttribute("class", "list-unstyled p-3")
elWrapperLeft.appendChild(ulElement)

let arr = []

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    let nameInputValue = elNameInput.value.trim();
    let relationshipInputValue = elRelationshipInput.value.trim();
    let phoneInputValue = elPhoneInput.value.trim();
    
    let obj =
    {
        name: nameInputValue,
        relationship: relationshipInputValue,
        phone: phoneInputValue
    }
    
    let repeat = arr.find((repeat) => repeat.phone == phoneInputValue)
    if(repeat){
        alert("This number already entered")
    }
    
    if(nameInputValue && relationshipInputValue && phoneInputValue !== "" && !repeat){
        arr.push(obj)
        renderContact()
    }

    // arr.push(obj)
    ulElement.textContent = "";
    elNameInput.value = "";
    elRelationshipInput.value = "";
    elPhoneInput.value = "";
    
    renderContact()
})


function renderContact(){
    for(let i = 0; i < arr.length; i++){
        let liElement = document.createElement("li")
        liElement.setAttribute("class", "bg-white p-3 rounded mb-4")
        let divElement = document.createElement("div")
        let h4Element = document.createElement("h4")
        h4Element.textContent = arr[i].name
        let pElement = document.createElement("p")
        pElement.textContent = arr[i].relationship
        pElement.setAttribute("class", "text-muted")
        let aElement = document.createElement("a")
        aElement.textContent = arr[i].phone
        aElement.setAttribute("href", "tel:${arr[i].phone")
        aElement.setAttribute("class", "text-decoration-none")
        let buttonElement = document.createElement("button")
        buttonElement.setAttribute("class", "btn btn-danger d-block mt-2")
        buttonElement.textContent = "Delete"
        
        
        liElement.appendChild(divElement);
        liElement.appendChild(h4Element)
        liElement.appendChild(pElement)
        liElement.appendChild(aElement)
        liElement.appendChild(buttonElement)
        ulElement.appendChild(liElement)
    }
}

renderContact()

