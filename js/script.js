
let btt = document.querySelector('#btt')

const factoryResult = (nam, weight, imc, classificacao) => {
    return `Olá, ${nam}, seu peso é: ${weight}kg. IMC: ${imc}, classificação: ${classificacao}`
}

const calcularIMC = () => {

    const nam = document.querySelector('#name').value
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const result = document.querySelector('#result')

    document.getElementById('result').style.backgroundColor = 'black'
    document.getElementById('result').style.color = 'rgb(49, 226, 43)'

    let imc = Number(weight) / Number(height**2)

    let resul = ''
    if(imc < 18.5 ){
        resul = factoryResult(nam, weight, imc, "Magreza")
    }
    if(imc >= 18.5 && imc <=24.9){
        resul = factoryResult(nam, weight, imc, "Normal")
    }
    if(imc >= 25 && imc <= 29.9){
        resul = factoryResult(nam, weight, imc, "Sobrepeso")
    }
    if(imc >= 30 && imc <= 34.9){
        resul = factoryResult(nam, weight, imc, "Obesidade grau I")
    }
    if(imc >= 35 && imc <= 39.9){
        resul = factoryResult(nam, weight, imc, "Obesidade grau II")
    }
    if(imc > 40 ){
        resul = factoryResult(nam, weight, imc, "Obesidade grau III")

    }
   result.innerHTML = resul
}
btt.addEventListener('click', calcularIMC)
result.addEventListener('click', calcularIMC)

