document.getElementById('submitButton').addEventListener('click', function() {
    const userEmail = document.getElementById('userEmail').value;
const userpassword = document.getElementById('userPassword').value;
if (userEmail == 'baap_er_sontan@gmail.com' && userpassword == 'baap_er_sontan') {
    window.location.href = 'bank.html';   
}
else{
    alert('Wrong Email or Password');
}

})