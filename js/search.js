const header = "50F7";
var device_id = "";
var tipo_do_comando = "";
var dados = "";
var rodape = "73C4";
var interpretado = ""; 
var dado_hash = "";




function buscarHash(event, form) {
    event.preventDefault();
    const inputHash = form.hash;
    if (inputHash) {
        const hash = inputHash.value;
        
            const URL = `http://localhost:3000/api/v1/location/${hash}/`;
             
            console.log(hash)
            console.log(URL)
            fetch(URL)
                .then(resposta => resposta.json())
                .then(data => mostrarResposta(data))
                .catch(erro => console.error(erro));
        
    }
}


function mostrarResposta(hash) {    
    const dado_hash = hash[0].hash; 
    
    alert(dado_hash);   
    
  
};
