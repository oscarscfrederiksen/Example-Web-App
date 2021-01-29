window.onload = function() {
    const form = document.querySelector('.assetform');
    form.addEventListener('submit', handleFormSubmit);
}

//function submitEvent() {
    //console.log($('.form'));
    //const form = document.querySelector('form');
    //const data = new URLSearchParams(new FormData(form).entries());
    //console.log(data);
    //let assetObject = Object();
    //localStorage.setItem(assetObject.name, JSON.stringify(assetObject));
//}

function handleFormSubmit(event) {
    event.preventDefault();
    var AssetData = {}
    AssetData.AssetName = $("#AssetName").val();
    AssetData.AssetClass = $("#AssetClass").val();
    AssetData.AssetDateOfService = $("#AssetDateOfService").val();
    AssetData.AssetCostBasis = $("#AssetCostBasis").val();
    AssetData.AssetBookValue = $("#AssetBookValue").val();

    var AssetDataJSON = JSON.stringify(AssetData);
    localStorage.setItem(AssetDataJSON.AssetName, AssetDataJSON);

    console.log(AssetData);
    console.log(AssetDataJSON);
    console.log(JSON.parse(AssetDataJSON));
    
    window.location.href = "index.html"
    //const formJSON = Object.fromEntries(data.entries());
    
    //console.log(JSON.stringify(formJSON, null, 2));
    //const results = document.querySelector('.results pre');
    //results.innerText = JSON.stringify(formJSON, null, 2);
  }

