function saveForm(){
    const form = document.querySelector('form')

    const data = form.querySelectorAll('input,select')
   //console.log(data)
    
    let data_item = 0;
    for (let i=0; i < data.length; i++){
        console.log("Valor data item",data_item)
        //se item for uma tag select verificar se o selected esta true
        if (data[i].id.match('input')){
            if (data[i].value != ""){
                data_item = data[i].value
                //console.log("if input nao vazio ",data_item)
            }
        }
        if (data[i].id.match('select')){
            //console.log("entrou select? ")
            if (data[i].id.match('multiple')){
                //console.log("entrou multiple? ")
                //console.log(data[i])

                for (let j=0; j < data[i].length; j++){
                    if (data[i][j].selected == true){  
                        data_item = data[i][j].value
                        //console.log("entrou select multiple option selecionado ",data_item)
                    }
                }
            }else if(data[i].value != 0){
                data_item = data[i].value
                //console.log("entrou select não zero ",data_item)
            }
        }
        //const data_item = data[i].value
        if(data_item != 0){
            const newDiv = document.createElement('div')
            newDiv.innerHTML = data_item
            document.body.appendChild(newDiv)
        }
    }
//Está imprimindo dentro do for mesmo sem preencher nada, esse data_item != 0 não tá funcionando

}