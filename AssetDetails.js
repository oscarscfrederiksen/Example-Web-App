var queryString = ""

window.onload = function(){
    console.log(allStorage());
    console.log(typeof(allStorage()));

    queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1).replace("Asset=", ""); 
    console.log(queryString);

    let assetObject = allStorage().find(isCorrectAsset)


    document.getElementById("AssetName").innerHTML = assetObject.AssetName;
    document.getElementById("AssetClass").innerHTML = "Class: " + assetObject.AssetClass;
    document.getElementById("AssetDateOfService").innerHTML = "Date of Service: " + assetObject.AssetDateOfService;
    document.getElementById("AssetCostBasis").innerHTML = "Cost Basis: " + assetObject.AssetCostBasis;
    document.getElementById("AssetBookValue").innerHTML = "Book Value: " + assetObject.AssetBookValue;
    //AssetData.AssetClass = $("#AssetClass").val();
    //AssetData.AssetDateOfService = $("#AssetDateOfService").val();
    //AssetData.AssetCostBasis = $("#AssetCostBasis").val();
    //AssetData.AssetBookValue = $("#AssetBookValue").val();
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
}

function isCorrectAsset(Asset) {
    return Asset.AssetName === queryString;
}