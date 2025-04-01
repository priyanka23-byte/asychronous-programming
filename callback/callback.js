
//------------------callback function----------------------//

function fetchDataWithCallback(callback){
    const resultDiv = document.getElementById("callbackResult");
    resultDiv.classList.remove("error", "success");
    resultDiv.innerText = " Result will be available after 5 seconds...";
    // ddelay of 5seconds...

    setTimeout(() =>{
        fetch("https://dummyjson.com/posts")
        .then(response =>{
            if(!response.ok) throw new error("failed to fetch data");
            return response.json();

        })
        .then(data =>{
            callback(null , data.posts.map(post => post.title).join("\n"));

        })
        .catch(error => {
            callback("Error: " + error.message, null);
        });

    },5000);
}

document.addEventListener("DOMContentLoaded", function(){
    const callbackBtn = document.getElementById("callbackButton");
    if (callbackBtn){
        callbackBtn.addEventListener("click", function(){
            fetchDataWithCallback((error, data) => {
                const resultDiv = document.getElementById("callbackResult");
                if (error){
                    resultDiv.classList.add("error");
                    resultDiv.innerText = error;
                } else{
                    resultDiv.classList.add("success");
                    resultDiv.innerText = data;
                }
            });
        });
    }

});






















