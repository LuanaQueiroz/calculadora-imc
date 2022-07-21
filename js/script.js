
let btt = document.querySelector('#btt')

const calcularIMC = () => {

    const nam = document.querySelector('#name').value
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const result = document.querySelector('#result')

    document.getElementById('result').style.backgroundColor = 'black'
    document.getElementById('result').style.color = 'rgb(49, 226, 43)'

    let imc = Number(weight) / Number(height**2)

    
    if(imc < 18.5 ){
        result.innerHTML =  `Olá, ${nam}, seu peso é: ${weight}kg. IMC: ${imc.toFixed(2)}, classificação: Magreza`
    }
    if(imc >= 18.5 && imc <= 24.9){
        result.innerHTML = `Olá, ${nam}, seu peso é: ${weight}kg. IMC: ${imc.toFixed(2)}, classificação: Normal`
    }
    if(imc >= 25 && imc <= 29.9){
        result.innerHTML = `Olá, ${nam}, seu peso é: ${weight}kg. IMC: ${imc.toFixed(2)}, classificação: Sobrepeso.(Obesidade grau I)`
    }
    if(imc >= 30 && imc <= 39.9){
        result.innerHTML = `Olá, ${nam}, seu peso é: ${weight}kg. IMC: ${imc.toFixed(2)}, classificação: Obesidade (Obesidade grau II).`
    }
    if(imc > 40 ){
    result.innerHTML = `Olá, ${nam}, seu peso é: ${weight}kg. IMC: ${imc.toFixed(2)}, classificação: Obesidade Grave (Obesidade grau III).`

    }
    result.innerHTML = "Não foi possível calcular."
}
btt.addEventListener('click', calcularIMC)
result.addEventListener('click', calcularIMC)

