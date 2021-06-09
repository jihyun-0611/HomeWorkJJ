function addList() {
    var number = document.getElementById("number").value;
    var color = document.getElementById("color").value;
    var siz = document.getElementById("siz").value;
    
    var tbody = document.getElementById("tbody");
    

    var row = tbody.insertRow(tbody.rows.length);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2); 
    var cell5 = row.insertCell(3);
    var cell6 = row.insertCell(4); 
    
     
    


    cell1.innerHTML = number;
    cell2.innerHTML = color;
    cell3.innerHTML = siz;
    cell5.innerHTML = '<input type="number"  value = "입력" id="number2" class="number1" > ';
    cell6.innerHTML = '<input type="button" value = "삭제" onClick="deleteRow(this)">';
    
    
    
    
    
}


function deleteRow(obj) {
   var index = obj.parentNode.parentNode.rowIndex;
   var table = document.getElementById("myTable");
   table.deleteRow(index);
  
}





 
 