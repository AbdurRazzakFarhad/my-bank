
// Login button event handler
var loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    var loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none';
    var transactionArea = document.getElementById('transaction-area')
    transactionArea.style.display = 'block';
})



// Deposite button event handler
var depositeBtn = document.getElementById('addDeposite');
depositeBtn.addEventListener('click', function () {
    var depositeAmount = document.getElementById('depositeAmount').value;
    var parseValue1 = parseFloat(depositeAmount);

    var currentDeposite = document.getElementById('current-deposite').innerText;
    var parseValue2 = parseFloat(currentDeposite);
    var totalDeposite = parseValue1 + parseValue2;
    document.getElementById('current-deposite').innerText = totalDeposite;


    var currentBalance = document.getElementById('current-balance').innerText;
    var parseValue3 = parseFloat(currentBalance)
    var totalDeposite2 = parseValue1 + parseValue3;
    document.getElementById('current-balance').innerText = totalDeposite2;

    document.getElementById('depositeAmount').value = "";
})