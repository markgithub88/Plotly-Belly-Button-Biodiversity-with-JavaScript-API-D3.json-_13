// const url = "https://api.spacexdata.com/v4/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData.map(function(obj) {return (obj.lat, obj.lng)}))
// )

// receivedData.map(function(obj) {return (obj.lat, obj.lng)})




const url = "https://api.spacexdata.com/v4/launchpads";



d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(receivedData => console.log(receivedData.map(x=> ({lat:x.latitude, lng:x.longitude}))));
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions