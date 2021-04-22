function saveForm(){
    const name = document.getElementById("nameInput").value

    const newDiv = document.createElement("div")
    newDiv.innerHTML = name
    document.body.appendChild(newDiv)


}