window.onload = function() {
    const form = document.querySelector('.assetform');
    form.addEventListener('submit', handleFormSubmit);

  /*
  // Apply formatter
  const input1 = document.getElementById("AssetBookValue");
  const input2 = document.getElementById("AssetCostBasis");
  addFormatter(input1, regexPrefix(/^(?:\d*_?){1}\d*$/, '$'));
  addFormatter(input2, regexPrefix(/^https?:\/\//, '$'));
  */
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

    /*
    Object.values(AssetData).forEach(function(key) {
        if (AssetData[key] == '') {
            for (var key of Object.keys(p)) {
                console.log(key + " -> " + p[key])
            }
          
          console.log(JSON.stringify(AssetData[AssetData[key]]));
          document.getElementById(AssetData[key]).style.color = "red";
          alert('exists');
          let errorMessageSpace = document.getElementById("ErrorMessage");
          errorMessageSpace.innerHTML = "Please fill in all of the required fields."
          
        }
        console.log(AssetData[key]);
      });
      */
    

    var AssetDataJSON = JSON.stringify(AssetData);
    localStorage.setItem(AssetData.AssetName, AssetDataJSON);

    console.log(AssetData);
    console.log(AssetDataJSON);
    console.log(JSON.parse(AssetDataJSON));

    window.location.href = "index.html"

    //const formJSON = Object.fromEntries(data.entries());
    
    //console.log(JSON.stringify(formJSON, null, 2));
    //const results = document.querySelector('.results pre');
    //results.innerText = JSON.stringify(formJSON, null, 2);
  }

  /*
  function addFormatter (input, formatFn) {
    let oldValue = input.value;
    
    const handleInput = event => {
      const result = formatFn(input.value, oldValue, event);
      if (typeof result === 'string') {
        input.value = result;
      }
      
      oldValue = input.value;
    }
  
    handleInput();
    input.addEventListener("input", handleInput);
  }
  
  
  // Example implementation
  // HOF returning regex prefix formatter
  function regexPrefix (regex, prefix) {
    return (newValue, oldValue) => regex.test(newValue) ? newValue : (newValue ? oldValue : prefix);
  }
*/


