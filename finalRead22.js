var items = {
    '20103': {

        number: 'YMP20103',
        color: 'White',
        size: 'XS',
        quantity: '3'
    },
    '20208': {
        number: 'YMP20208',
        color: 'Black',
        size: 'M',
        quantity: '9'
    },
    '20321': {
        number: 'YMP20321',
        color: 'Black',
        size: 'L',
        quantity: '3'
    },
    '20114': {
        number: 'YMP20114',
        color: 'Grey',
        size: 'XL',
        quantity: '5'
    },
    '20101': {
        number: 'YMP20101',
        color: 'Blue',
        size: 'S',
        quantity: '1'
    },

    show: function(x){
        var tmp = this[x];
        var num = tmp.number;
        var color = tmp.color;
        var size = tmp.size;
        var quantity = tmp.quantity;
       
        var rebody = document.getElementById("rebody");
        var row = rebody.insertRow(rebody.rows.length);
    
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2); 
        var cell4 = row.insertCell(3);


        cell1.innerHTML = num;
        cell2.innerHTML = color;
        cell3.innerHTML = size;
        cell4.innerHTML = quantity;
        }
};


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

    items[number] = {
        number: number,
        color: color,
        size: siz,
        quantity: quantity
    }
    
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTable");
    table.deleteRow(index);
   
 }
 


function readRow(){
    var x = document.getElementById("search_in").value;
    items.show(x);


    

}
