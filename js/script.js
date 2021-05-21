function getMultipleSelect(select) {
    var valueSelection = [];
    var i;
    for (i = 0; i < select.options.length; i += 1) {
        if (select.options[i].selected) {
            valueSelection.push(select.options[i].text);
        }
    }
    return valueSelection;
}

function saveForm(){
    
    const name = document.getElementById('name-input');
    const regiao = document.getElementById('regiao-select')
    const areas = document.getElementById('area-multiple-select')

    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    const li3 = document.createElement('li')

    li1.innerHTML = name.value
    li2.innerHTML = regiao.options[regiao.selectedIndex].text


    //newDiv.innerHTML = name.value + '<br>'+regiao.options[regiao.selectedIndex].text
    document.body.appendChild(li1)
    document.body.appendChild(li2)
    //newDiv.innerHTML = areas[]


    
    
    
    
    
    
    
    
    
    
    
    
    /*const form = document.querySelector('form')

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
//Está imprimindo dentro do for mesmo sem preencher nada, esse data_item != 0 não tá funcionando*/

}