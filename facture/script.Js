function calculateTotal() {
    const price1 = parseFloat(document.getElementById("price1").value);
    const quantity1 = parseFloat(document.getElementById("quantity1").value);
    const price2 = parseFloat(document.getElementById("price2").value);
    const quantity2 = parseFloat(document.getElementById("quantity2").value);
    const price3 = parseFloat(document.getElementById("price3").value);
    const quantity3 = parseFloat(document.getElementById("quantity3").value);

    const result1 = price1 * quantity1;
    const result2 = price2 * quantity2;
    const result3 = price3 * quantity3;

    document.getElementById("result1").textContent = result1;
    document.getElementById("result2").textContent = result2;
    document.getElementById("result3").textContent = result3;

    const totalResult = result1 + result2 + result3;
    document.getElementById("totalResult").textContent = totalResult;
}

function resetForm() {
    document.getElementById("price1").value = 0;
    document.getElementById("quantity1").value = 0;
    document.getElementById("result1").textContent = 0;
    document.getElementById("price2").value = 0;
    document.getElementById("quantity2").value = 0;
    document.getElementById("result2").textContent = 0;
    document.getElementById("price3").value = 0;
    document.getElementById("quantity3").value = 0;
    document.getElementById("result3").textContent = 0;
    document.getElementById("totalResult").textContent = 0;
}
