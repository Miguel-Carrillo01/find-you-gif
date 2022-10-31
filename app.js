const container = document.getElementById("container");
const search = document.getElementById("search")

const apikey ="AIzaSyAVl5_Vre4GS9dM77LULwzajOy5FObHRKE";
const clientkey= "my_test_app"
const term = "excited"

const URL = "https://tenor.googleapis.com/v2/search?q=" +term + "&key=" +
apikey +"&client_key=" + clientkey ;

const trending ="https://tenor.googleapis.com/v2/trending_terms?q= "+ term + "&key=" +
apikey +"&client_key=" + clientkey ;

const URL1 ="https://tenor.googleapis.com/v2/featured?&key=AIzaSyAVl5_Vre4GS9dM77LULwzajOy5FObHRKE&client_key=my_test_app";


window.addEventListener('DOMContentLoaded', getApi);

document.addEventListener('keyup', e=> {
    if(e.target.matches("#search")){
        if(e.key ==="escape")e.target.value = ""
        document.querySelectorAll(".card").forEach(Element=>{
            Element.textContent.toLowerCase().includes(e.target.value)
            ?Element.classList.remove("filter")
            :Element.classList.add("filter")
        })
    }
})


function getApi() {
    fetch(URL)
    .then(response => response.json())
    .then(data => data["results"].map(results => {

        const div =document.createElement("div");
        div.classList.add("card");
        
        const name = document.createElement("h3");
        name.textContent = results["content_description"];
        name.classList.add("name");
        
        const img = document.createElement("img");
        img.src = results.media_formats.gif["url"];
        img.classList.add("img");
        
        div.appendChild(name);
        div.appendChild(img);
        container.appendChild(div);

    }))
}
