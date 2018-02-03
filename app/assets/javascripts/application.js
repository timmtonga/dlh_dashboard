// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function updateRecords(link) {
    getData(link);
}
function handleResults(data){

    reloadTable('dataSection',data,['item','available','threshold','projected'], "main")
}

function getData(link)
{
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }else{// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            var results = xmlhttp.responseText;
            if(results == 'undefined' || results == '' || results == 'null' || results == '"not validate"') {
                return ;
            }else if(results.length > 0){
                handleResults(JSON.parse(results))
            }else{
                //document.getElementById('reporter').innerHTML = "....";
                return ;
            }
        }
    }
    xmlhttp.open("GET",link ,true);
    xmlhttp.send();

}

function reloadTable(section, data, keys, container)
{
    // This function reloads the table section as defined
    if (container.trim() == "" )
    {
        container = "main";
    }
    var table = document.getElementById(section);
    var html = "";
    var count = 0;
    while (table.hasChildNodes()) {
        table.removeChild(table.lastChild);
    }

    for (e = 0; e < data.length;e++ )
    {
        html = html + "<div style='display: table-row' class='"+ ((e % 2 == 0) ? 'odd' : 'even') +"'>"
        for( i=0 ; i < keys.length ; i++)
        {
                html = html + "<div class='base-cell'>"+
                    data[e][keys[i]] +"</div>"
        }
        html += "</div>"
    }

    table.innerHTML = html
}
