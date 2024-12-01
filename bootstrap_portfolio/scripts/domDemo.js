console.log(document);

function testTheDom() {
    console.log("testing the dom");

    var nodes = document.getElementsByTagName("li");
    console.log(nodes);

    for(let node of nodes) {
        console.log(node.textContent);
    }

    var checkingNode = document.getElementById("checking");
    // console.log(checkingNode.textContent);
    // checkingNode.textContent = "Changed!";
    balance = parseInt(checkingNode.textContent);
    balance += 100;
    checkingNode.textContent = balance;
}

function depositChecking() {
    var checkingNode = document.getElementById("checking");
    balance = parseInt(checkingNode.textContent);
    balance += 100;
    checkingNode.textContent = balance;
}

function depositSavings() {
    var savingsNode = document.getElementById("savings");
    balance = parseInt(savingsNode.textContent);
    if(balance == 0) {
        var headingNode = document.getElementById("heading");
        headingNode.textContent = "Bank Accounts";
    }
    balance += 100;
    savingsNode.textContent = balance;
}

function emptySavings() {
    var savingsNode = document.getElementById("savings");
    savingsNode.textContent = 0;
    var headingNode = document.getElementById("heading");
    headingNode.textContent = "Alert: Savings Empty!";
}