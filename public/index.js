

document.getElementById('hola').style.color = 'pink';

async function getApiFromServer(){
    const response = await fetch('/api');
    const json = await response.json();
    console.log(json);
    const arr = []
    for(let i = 0; i < 5; i++){
        arr.push(json.businesses[i].name);
    }
    document.getElementById('response').textContent = arr;
}

getApiFromServer();