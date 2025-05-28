//1 - selecionando o formulario
const multiplicationForm = document.querySelector("#multiplication-form");

//2 - capturar o numero da tabuada
const numeroTabuada = document.querySelector("#number");

//3 - capturar o número de vezes que deseja multiplicar
const multiplicadorInput = document.querySelector("#multiplicator");

//5 - limpando os campos #multiplication-title e #multiplication-operations 
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

//6 - criando a função que cria a tabela
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
            <div class="operation">${number} x ${i} = ${result}</div>
        </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerHTML = number;
};


//4 - Impede o envio do formulário e recarregamento da página
multiplicationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const multiplicationNumber = numeroTabuada.value;
    const multiplicatorNumber = +multiplicadorInput.value;

    // Validação dos campos
    if (!multiplicationNumber || !multiplicatorNumber) {
        alert("Por favor, preencha ambos os campos.");
        return;
    }

    // Gera a tabuada
    createTable(multiplicationNumber, multiplicatorNumber);
});
