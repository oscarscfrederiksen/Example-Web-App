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

    const data = new FormData(event.target);
    
    console.log(data.AssetName)
    console.log("ASSET DATA!")
    //const formJSON = Object.fromEntries(data.entries());
    
    //console.log(JSON.stringify(formJSON, null, 2));
    //const results = document.querySelector('.results pre');
    //results.innerText = JSON.stringify(formJSON, null, 2);
  }

