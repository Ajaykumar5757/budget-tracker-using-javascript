function add(){
    var type=document.getElementById("type").value;
    var name=document.getElementById("name").value;
    var amount=document.getElementById("amount").value;

    document.getElementsByClassName("new")[0].innerHTML=type;
    document.getElementsByClassName("new")[1].innerHTML=name;
    document.getElementsByClassName("new")[2].innerHTML=amount;
    document.getElementById("new").innerHTML="<button onclick=del(this)>delete</button>"
}