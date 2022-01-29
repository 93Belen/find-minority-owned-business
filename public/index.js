

document.getElementById('hola').style.color = 'pink';

async function getApiFromServer(){
    const response = await fetch('/api');
    const json = await response.json();
    //console.log(json);

    for(let j = 0; j < 10; j++){
        const div = document.createElement('div');

        document.getElementById('response').appendChild(div).id = 'div' + j;
        console.log(div);

        document.getElementById('div' + j).innerHTML = `<h2>${json.businesses[j].name}</h2><br><a href="${json.businesses[j].url}" target:"_blank">Visit website</a>`;

        document.getElementById('div' + j).style.backgroundImage = `url(${json.businesses[j].image_url})`;


    }

    



/*
    const arr = []
    for(let i = 0; i < 10; i++){
        arr.push([json.businesses[i].name, json.businesses[i].url, json.businesses[i].image_url]);
        document.getElementById('div' + i).innerHTML = arr[i];
    }
    console.log(arr);

    document.getElementById('response').innerHTML = arr;
*/
}

getApiFromServer();




