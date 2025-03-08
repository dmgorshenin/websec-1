let history = [];

function onClickCalculate(){
    let num1Input = document.getElementById("number1");
    let num2Input = document.getElementById("number2");
    let operator = document.getElementById("operator").value;
    let oldResult = document.getElementById("oldResult");
    let newResult = document.getElementById("newResult");
    
    num1Input.classList.remove("input-error");
    num2Input.classList.remove("input-error");

    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    let errorMessage = "";

    if (isNaN(num1)) {
        num1Input.classList.add("input-error");
        errorMessage += "Ошибка: введите корректное число 1!<br>";
    }
    if (isNaN(num2)) {
        num2Input.classList.add("input-error");
        errorMessage += "Ошибка: введите корректное число 2!<br>";
    }

    if (errorMessage) {
        newResult.innerHTML = `<span>${errorMessage}</span>`;
        return;
    }

    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? (num1 / num2).toFixed(2) : "<span class='error'>Ошибка: деление на ноль!</span>"; break;
    }
    
    oldResult.innerHTML = newResult.innerHTML;
    newResult.innerHTML = `<strong>${num1} ${operator} ${num2} = ${result}</strong>`;
}
