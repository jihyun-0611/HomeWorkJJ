
function addList() {
    var number = document.getElementById("number").value;
    var color = document.getElementById("color").value;
    var siz = document.getElementById("siz").value;
    var quantity = document.getElementById("quantity").value;
    var tbody = document.getElementById("tbody");
    var row = tbody.insertRow(tbody.rows.length);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2); 
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4); 


    cell1.innerHTML = number;
    cell2.innerHTML = color;
    cell3.innerHTML = siz;
    cell4.innerHTML = quantity;
    cell5.innerHTML='<input type="button" value = "삭제" onClick="Javacsript:deleteRow(this)">';
    

    
}

function deleteRow(obj) {
   var index = obj.parentNode.parentNode.rowIndex;
   var table = document.getElementById("myTableData");
   table.deleteRow(index);
  
}

function deleteList() {
    var tbody = document.getElementById("tbody");
    if (tbody.rows.length < 1) return;
    tbody.deleteRow(tbody.rows.lenght-1);
}

