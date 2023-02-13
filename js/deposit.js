                     // Deposit 

document.getElementById('btn-deposit').addEventListener('click' , function(){
    const depositField =document.getElementById('deposit-field');
    const newDepositElementString = depositField.value;
    const newDepositElement = parseFloat(newDepositElementString);
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositElement
    depositTotalElement.innerText = currentDepositTotal;
    
    /* Clear the deposit Field */
    depositField.value = ''

})