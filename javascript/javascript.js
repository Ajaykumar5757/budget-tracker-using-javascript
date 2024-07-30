function addTrans(){
    var type=document.getElementById("type").value;
    var name=document.getElementById("name").value;
    var amount=document.getElementById("amount").value;
    var tableBody=document.getElementById("transactionTable");
    
    const row1=document.createElement('tr');
    row1.innerHTML=`<td>${type}</td><td>${name}</td><td>${amount}</td><td><button id='btn'>delete</button></td>`
    tableBody.appendChild(row1);

    row1.querySelector("#btn").addEventListener('click',()=>{
        row1.remove();
    });
}
