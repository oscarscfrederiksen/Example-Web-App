window.onload = function() {
    const form = document.querySelector('.assetform');
    form.addEventListener('submit', handleFormSubmit);
}

$(document).ready(function() {
    var year = (new Date).getFullYear();
    $('.input-daterange').datepicker({
      format: "mm/dd/yyyy",
      autoclose:true,
      minDate: new Date(year, 0, 1),
      maxDate:new Date(year, 11, 31)
 
    });
});

function handleFormSubmit(event) {
    event.preventDefault();
    let isComplete = true;
    var AssetData = {}
    AssetData.AssetName = $("#AssetName").val();
    AssetData.AssetClass = $("#AssetClass").val();
    AssetData.AssetDateOfService = $("#AssetDateOfService").val();
    AssetData.AssetCostBasis = $("#AssetCostBasis").val();
    AssetData.AssetBookValue = $("#AssetBookValue").val();

    for (var key of Object.keys(AssetData)) {
        if (AssetData[key] == "") {
            document.getElementById("ErrorMessage").innerHTML = "Please enter all of the required fields."
            isComplete = false;
        }
        console.log(key + " -> " + AssetData[key])
    }

    if (!isComplete){
        return;
    }

    var AssetDataJSON = JSON.stringify(AssetData);
    localStorage.setItem(AssetData.AssetName, AssetDataJSON);

    console.log(AssetData);
    console.log(AssetDataJSON);
    console.log(JSON.parse(AssetDataJSON));

    window.location.href = "index.html"
}


