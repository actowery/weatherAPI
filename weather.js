
//alert("loaded");
document.addEventListener('DOMContentLoaded', bindButtons);


//was unable to get proper connection. I went to the openweather site, signed up got a key, but simply cant get it to connect
function bindButtons() {
	document.getElementById('getWeather').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var appID = "&appid=c67ba197ba5f6dec494044183d445d90"; 
		var zip = document.getElementById("zip").value;
        var city = document.getElementById("city").value;
        var payload;
        //got all this info from ipenweather site
        //i couldnt get zip to work for a while, and i think i overloaded my appid by testing..
        if(zip)
		{
            payload = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + appID;
		    
		}
        else
        {
            payload = "http://api.openweathermap.org/data/2.5/weather?q=" + city + appID;
        }
		req.open("GET", payload, true);
        
        //stack exchange helped here
		req.addEventListener('load', function() {
			if (req.status >= 200 && req.status < 400) {
				var response = JSON.parse(req.responseText);
				displayWeather(response);
			}
    });
		req.send();
		event.preventDefault();
});
}
function displayWeather(response)
{
    document.getElementById("temperature").textContent = response.main.temp; 
}
