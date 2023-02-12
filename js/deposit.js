document.getElementById('depositButton').addEventListener('click', function () {
    const depositField = document.getElementById('depositAmount')
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    const depositTotal = document.getElementById('depositTotal')
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + depositAmount;
    depositTotal.innerText = currentDepositTotal;
    const balanceTotal = document.getElementById('balanceTotal');
    const balanceTotalString = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalString);
    const CurrentBalanceTotal = balanceTotalAmount + depositAmount;
    balanceTotal.innerText = CurrentBalanceTotal;
    depositField.value = '';
});