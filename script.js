//cotacao de moeda do dia.

const USD = 4.87
const EUR = 5.32
const GBP = 6.08


//obtendo elementos do formulario.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


//Manipulando o input amount para receber somente numeros.
amount.addEventListener("input" , ()=>{
  

    const hasCharactersRegex = /\D+/g
amount.value = amount.value.replace(hasCharactersRegex, "")
})
//captando evento de submte do formulario.
form.onsubmit = (event) => {
    event.preventDefault()
   switch (currency.value) {
    case "USD":
        convertCurrency(amount.value, USD, "US$")
        break
    case "EUR":
        convertCurrency(amount.value, EUR, "€")
        break
    case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break
        
   }
  
} 

//funcao para converter moeda

function convertCurrency (amount, price, symbol) {
try {
    //exibindo a cotacao da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    //Aplica a classe que exibe o footer para mostrar o resultado.


    //caucula o total
    let total = amount * price

    //Verifica se o Resultado nao e um numero

    if (isNaN(total)) {
        return alert ("Por favor, digite o valor corretamente para converter.")
    }
    total = formatCurrencyBRL(total).replace("R$", "")
    result.textContent = `${total} Reais`
    footer.classList.add("show-result")

} catch (error) {
    footer.classList.remove("show-result")
    console.log(error)
    alert("Nao foi possivel converter tente novamente mais tarde.")

    
}
} 
// formata o a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}



