let nomes = ["Abreu", "jose"];
console.log(nomes)

let lista = document.getElementById("lista")

function renderizaLista(){
    lista.innerHTML = "";
    for(let nome of nomes){
        let item = document.createElement("li");
        item.textContent = nome;
        lista.append(item);
    }
}

document.getElementById("btnAdd").addEventListener("click", () => {
    let campo = document.getElementById("idNome").value;
    nomes.push(campo);
    renderizaLista();
})
document.getElementById("btnOrdemAlfabetica").addEventListener("click", () => {
    nomes.sort();
    renderizaLista();
})
document.getElementById("btnReverter").addEventListener("click", () => {
    nomes.reverse();
    renderizaLista();
})
document.getElementById("btnRemover").addEventListener("click", () => {
    let campo = document.getElementById("idNome").value;
    let index = nomes.indexOf(campo)
    if(index > -1){
        nomes.splice(index, 1)
        renderizaLista()
    }
})
    
    

renderizaLista();

