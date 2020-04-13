var handlers = {

    projects: [],
    tableFlag: false,

    addProject: function () {
        var id = document.getElementById('id').value;
        var name = document.getElementById('name').value;
        var status = document.getElementById('status').value;
        var description = document.getElementById('description').value;

        handlers.projects.push({
            id: id,
            name: name,
            status: status,
            description: description
        })

        alert('Data saved successfully');
        document.getElementById('id').value = "";
        document.getElementById('name').value = "";
        document.getElementById('status').value = "";
        document.getElementById('description').value = "";


    },


    display: function () {

        var table_div = document.getElementById('table_id');
        table_div.innerHTML = "";

        if (handlers.projects.length == 0) {
            table_div.innerHTML = "There is no data to display"
        } else {
            //For Header
            var col = [];
            var count = handlers.projects.length;
            for (var i = 0; i < count; i++) {
                for (var key in handlers.projects[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            var table = document.createElement("table");     // Table 
            table.border = "1";
            table.className = "table-css";

            var tr = table.insertRow(-1);                   // Table Row.
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");      // Table Header.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }

            for (var i = 0; i < count; i++) {
                tr = table.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = handlers.projects[i][col[j]];  // Table row value
                }
            }

            table_div.append(table);
        }

    },

    checkCount: function () {
        var count = document.getElementsByTagName('tr').length;
        var check_div = document.getElementById('check');
        check_div.innerHTML = "";
        if (count - 1 == this.projects.length) {
            check_div.innerHTML = "< tr > tag and size of the list is equal";
        } else if (count == 0) {
            check_div.innerHTML = "There is no table to check"
        } else {
            check_div.innerHTML = "< tr > tag and size of the list is not equal"
        }

    }
}

class MyConsoleClass {

    constructor() {
        this.outputarray = [];
    }

    log(input) {
        var ch = '"'
        var input_str;
        if (typeof (input) == "object") {
            input_str = JSON.stringify(input);
        } else {
            input_str = input.toString();
        }

        var output = ch + input_str + ch;
        console.log(output);
        this.outputarray.push(input_str);

    }

    history() {
        var result = "";
        if (arguments.length == 0) {
            for (var i = 0; i < this.outputarray.length; i++) {
                result = result + this.outputarray[i] + "\\n ";
            }
            
        }else{
            for (var i = 0; i < arguments[0]; i++) {
                result = result + this.outputarray[i]+ "\\n ";
            }
        }
        console.log(result.slice(0,-3));

    }

    clearHistory() {
        this.outputarray = [];
    }
}
