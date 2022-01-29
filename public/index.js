

document.getElementById('hola').style.color = 'pink';

async function getApiFromServer(){
    const response = await fetch('/api');
    const json = await response.json();
    //console.log(json);
    const arr = []
    for(let i = 0; i < 10; i++){
        arr.push([json.businesses[i].name, json.businesses[i].url, json.businesses[i].image_url]);
        console.log(arr);
    }

    for(let j = 0; j < 10; j++){
        const div = document.createElement('div');
        document.getElementById('response').appendChild(div).id = 'div' + j;
        console.log(div);


    }

    document.getElementById('response').innerHTML = arr;

}

getApiFromServer();




