window.onload = function(){
    var emptyState = document.getElementById("Empty-state");
    emptyState.style.display = "none";
    populateTable(allStorage());
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(localStorage.getItem(keys[i]) );
    }

    return values;
}

function populateTable(data) {
    var emptyState = document.getElementById("Empty-state");
    var newButton = document.getElementById("Shown-button");
    var table = document.getElementById("table-JSON");
    console.log(table);
    if (localStorage.length === 0) {
        emptyState.style.display = "block";
        table.style.display = "none";
        newButton.style.display = "none";
        return;
    }
    data.forEach(function(object) {
        object = JSON.parse(object);
        var tr = document.createElement("tr");
        tr.innerHTML = `<td><a href="#" class="ObjectLink">${object.AssetName}</a></td><td>${object.AssetClass}</td><td>${object.AssetDateOfService}</td><td>${object.AssetCostBasis}</td><td>${object.AssetBookValue}</td>`;
        table.appendChild(tr);
    });

    $('.ObjectLink').each(function(i, obj) {
        $(obj).on( "click", function() {
            showAssetDetails($(this).text(), allStorage());
          });
    });
}

function showAssetDetails(AssetName, data){
    var asset = AssetName
    var queryString = "?Asset=" + asset
    window.location.href = "AssetDetails.html" + queryString;
}
