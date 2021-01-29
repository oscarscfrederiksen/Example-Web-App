window.onload = function(){
    populateTable(allStorage());
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

function populateTable(data) {
    var table = document.getElementById("table-JSON");
    data.forEach(function(object) {
        object = JSON.parse(object);
        var tr = document.createElement("tr");
        tr.innerHTML = `<td><a href="#">${object.AssetName}</a></td><td>${object.AssetClass}</td><td>${object.AssetDateOfService}</td><td>${object.AssetCostBasis}</td><td>${object.AssetBookValue}</td>`;
        table.appendChild(tr);
    });
}
