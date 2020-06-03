const apiKey = 'eXfHPv8f21EfPKy8vaB3TZqZ3AyV3ArvODdeRf9a'
const endpoint = 'https://developer.nps.gov/api/v1/parks'

function responseHandler(response){
    let result = ""
    for (i=0; i<response.data.length; i++){
        let description = response.data[i].description
        let fullName = response.data[i].fullName
        let url = response.data[i].url
        temp = `<li> <h4>${fullName}</h4> <br> <p>${description}</p> <br> <a href=${url}>Website</a> </li> <br>`
        result = result + temp;
    }
    display(result);
}


function format(parameters){
    const formattedSearch = Object.keys(parameters)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`)
        return formattedSearch.join('&');
}

function display(result){
    //show the results
    $('.result-list').empty();
    $('.result-list').html(result);
}


function search(search, limit) {
    //if (limit < 1){
        //limit = 10;
//}
    const parameters = {
        api_key: apiKey,
        limit,
        stateCode: search,
        
    };
    let temp = format(parameters)
    let url = endpoint + '?' + temp;
    fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            responseHandler(responseJson); 
        });
}

function begin() {
    // event listener 
    document.getElementById("max").defaultValue = "10";
    $('.submit').on('click', function(e) {
        e.preventDefault();
        let temp = $('#state').val();
        let limit = $('#max').val();
        search(temp, limit);
    });
}

$(begin);