
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
    
    //div이용해서 온클릭...
    //row 생성될때마다 값을 배열에 저장?
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTable");
    table.deleteRow(index);
   
 }
 

function deleteList() {
    var tbody = document.getElementById("tbody");
    if (tbody.rows.length < 1) return;
    tbody.deleteRow(tbody.rows.lenght-1);
}

$(document).ready(function(){
    $("#search_in").keyup(function(){
        var searchText = $(this).val();
        $("#myTable > tbody > tr").hide();
        var temp = $("#myTable > tbody > tr > td:nth-child(5n+2):contains('"+ searchText + "')");

        $(temp).parent().show();
    })
})

function readRow(){
    var row1 = document.getElementById("row1");
    var row2 = document.getElementById("row2");
    var row3 = document.getElementById("row3");
    var row4 = document.getElementById("row4");
    var row5 = document.getElementById("row5");
    
    var item_num1 = document.getElementById("item_num1");
    var item_num2 = document.getElementById("item_num2");
    var item_num3 = document.getElementById("item_num3");
    var item_num4 = document.getElementById("item_num4");
    var item_num5 = document.getElementById("item_num5");

    var search_in = document.getElementById("search_in");

    let m = new Map();
    m.set(item_num1,row1);
    m.set(item_num2,row2);
    m.set(item_num3,row3);
    m.set(item_num4,row4);
    m.set(item_num5,row5);

    var search_it = m.get('search_in');

    document.write(search_it);
    document.write('<br><br>');

}