document.getElementById('withdrawButton').addEventListener('click', function () {
    const withdrawAmountField = document.getElementById('withdrawAmount');
    const withdrawAmountString = withdrawAmountField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    const withdrawTotal = document.getElementById('withdrawTotal');
    const previousWithdrawAmountString = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    const CurrentWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = CurrentWithdrawAmount;
    const balanceTotal = document.getElementById('balanceTotal');
    const balanceTotalString = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalString);
    const CurrentBalanceTotal = balanceTotalAmount - withdrawAmount;
    balanceTotal.innerText = CurrentBalanceTotal;
    withdrawAmountField.value = '';
});
