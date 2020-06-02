const apiKey = 'eXfHPv8f21EfPKy8vaB3TZqZ3AyV3ArvODdeRf9a'
const endpoint = 'https://developer.nps.gov/api/v1/parks'


var myHeaders = new Headers();
myHeaders.append("x-api-key", "eXfHPv8f21EfPKy8vaB3TZqZ3AyV3ArvODdeRf9a");
myHeaders.append("Cookie", "AWSALB=SNMEoPxu+C/zFyqSW+tL/vIu/pMlMrCzLfZIXTk6bIEqBGlMGxjAGMqqBPzN8lXBrcm8iiR4o328z9lNP122wHmayWUu+RCWXdLuUelrtsXvNNvR7GRaGkm5omdQ; AWSALBCORS=SNMEoPxu+C/zFyqSW+tL/vIu/pMlMrCzLfZIXTk6bIEqBGlMGxjAGMqqBPzN8lXBrcm8iiR4o328z9lNP122wHmayWUu+RCWXdLuUelrtsXvNNvR7GRaGkm5omdQ");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};














function format(parameters){
    const formattedSearch = Object.keys(parameters)
        // I am not sure what is being done here .map(key => `${}`)
        // { foo: 'bar' }
        // [foo]
        // ['foo=bar', 'name=jon']
        // 'foo=bar&name=jon'
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`)
        return formattedSearch.join('&');

        return Object.keys(parameters)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`)
        .join('&');
}

function formatSingleLoop(parameters) {
    return Object.entries(parameters).reduce((result, [key, value], i) => {
        return `${i === 0 ? '?' : '&'}${key}=${value}`
    }, '')
}

function display(){
    //show the results
}


function search(search, max=10) {
    const parameters = {
        //key: apiKey,
        q: search,
        limit: max,
    };
    let temp = format(parameters)
    let url = endpoint + '?' + temp;

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


function begin() {
    // event listener 
    $('.submit').on('click', function(e) {
        e.preventDefault();
        let temp = $('#state').val();
        let max = $('#max').val();
        search(temp, max);
    });
}

$(begin);