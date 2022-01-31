// GET HTML FEED WITH API INFO
async function getApiFromServer(){

    // Need to get it from form
    const city = 'OverlandPark';
    const term = 'food';

    // gets API
    const response = await fetch(`api/${city}/${term}`);
    const json = await response.json();
    console.log(json);


    // Creates the divs and elements for the feed

    for(let j = 0; j < json.businesses.length; j++){
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const img = document.createElement('img');
        const a = document.createElement('a');


        // creates ids and classes for elements in feed

        document.getElementById('response').appendChild(div).id = 'div' + j;
        console.log(div);
        document.getElementById('div' + j).appendChild(h2).id = 'h2' + j;
        document.getElementById('div' + j).appendChild(h3).id = 'categories' + j;
        document.getElementById('div' + j).appendChild(p1).id = 'address' + j;
        document.getElementById('address' + j).className = 'address';
        document.getElementById('div' + j).appendChild(img).id = 'img' +j;
        document.getElementById('div' + j).appendChild(a).id = 'a' + j;
        document.getElementById('div' + j).appendChild(p2).id = 'rating' + j;
        document.getElementById('rating' + j).className = 'rating';
        document.getElementById('div' + j).appendChild(p3).id = 'review-count' + j;
        document.getElementById('review-count' + j).className = 'review-count';
        document.getElementById('div' + j).appendChild(a).id = 'a' + j;
        document.getElementById('a' + j).target = '_blank';

        // get the titles info from json response

        function getTitles() {
            const p = [];
            for(let i = 0; i < json.businesses[j].categories.length; i++){
            p.push(`${json.businesses[j].categories[i].title}`)
            }
        return p.join(' ~ ');
        }


        // organices json info into feed sections

        document.getElementById('h2' + j).textContent = json.businesses[j].name;
        document.getElementById('categories' + j).textContent = getTitles();
        document.getElementById('address' + j).textContent = 'Address: ' + json.businesses[j].location.address1 + ', ZipCode : ' + json.businesses[j].location.zip_code;
        document.getElementById('img' + j).src = json.businesses[j].image_url;
        document.getElementById('rating' + j).textContent = `Rating: ${json.businesses[j].rating}`;
        document.getElementById('review-count' + j).textContent = `Reviews: ${json.businesses[j].review_count}`;
        document.getElementById('a' + j).href = json.businesses[j].url;
        document.getElementById('a' + j).textContent = 'Visit website';


    }





}

getApiFromServer();




