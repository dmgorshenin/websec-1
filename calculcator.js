function onClickButton(){
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let operation = document.getElementById("operation").value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Введите корректные данные");
        return;
    }
    
    let result;

    switch (operation)
    {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Нельзя делить на ноль");
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById("newResult").innerText = result;
}
