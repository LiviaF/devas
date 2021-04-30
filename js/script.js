function saveForm(){
    const form = document.querySelector('form')

    const data = form.querySelectorAll('input,select')
    console.log(data)

    for (let i=0; i < data.length; i++){

        const data_item = data[i].value

        //se item for uma tag select verificar se o selected esta true
        console.log(data_item)

        const newDiv = document.createElement('div')
        newDiv.innerHTML = data_item
        document.body.appendChild(newDiv)
    }


}