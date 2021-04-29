function arrayInput(){
    var arrayInput = new Array();
    var inputsValues = document.getElementsByClassName('form'),
    namesValues = [].map.call(inputsValues,function(form){
        arrayInput.push(form.value);
    }); 

    arrayInput.forEach(function(inputsValuesData){
       // console.log("Los datos fueron registrados:"+ inputsValuesData);
       alert("Se registraron los siguientes Datos:" + " " + inputsValuesData);    
});

}