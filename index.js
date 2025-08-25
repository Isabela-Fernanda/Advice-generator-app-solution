const btn = document.getElementById('button')

async function gerarConselhoAleatorio(){
    try{
        const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()

    }catch{
        console.log("Erro ao gerar conselho:", erro)
    }finally{
        console.log("Processo 1 encerrado.")
    }
}

async function tirarUmConselhoAleatorio() {
    try{
const conselhos = await gerarConselhoAleatorio()
    const textoConselho = conselhos.slip.advice
    const idConselho = conselhos.slip.id
    document.getElementById('advice-text').textContent = '"' + textoConselho + '"'
    document.getElementById('advice').textContent = "ADVICE #" + idConselho;
    }catch(erro){
        console.error("Erro ao tirar conselho:", erro)
    }finally{
        console.log("Processo 2 encerrado.")
    }
}

btn.addEventListener("click", ()=>{
    tirarUmConselhoAleatorio()
})
