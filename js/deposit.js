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
    
    // step-5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositElement;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the deposit field
    depositField.value = '';

})