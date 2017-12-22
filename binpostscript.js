
//alert("connection test")

document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons()
{
    document.getElementById("strSubmit").addEventListener("click", function(event)
    {
        var req = new XMLHttpRequest();
        var pasteSite = "http://httpbin.org/post";
        var payload =
        {
            "str": null
        };
        payload.str = document.getElementById("str").value; 
        req.open("POST", pasteSite, true);                      
        req.setRequestHeader("Content-Type", "application/json");
        req.addEventListener("load",function(){
            if(req.status >= 200 && req.status < 400)   
            {
                var response = JSON.parse(JSON.parse(req.responseText).data);
                displayResult(response);
            }

        });
        req.send(JSON.stringify(payload));
        event.preventDefault();
    });
}

function displayResult(response)                                     
{
    document.getElementById("streturn").textContent = response.str;
}

