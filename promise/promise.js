

//------------------------promise- function--------------------//

function fetchDataWithPromise(){
    return new Promise((resolve, reject) => {
    const resultDiv = document.getElementById("promiseResult");

    resultDiv.classList.remove("error", "success");
    resultDiv.innerText = " Result will be available after 5 seconds...";
    

     const timeout = setTimeout(() =>{
        reject("Operation Timed out");
     },5000);

        fetch("https://dummyjson.com/posts")
        .then(response =>{
            if(!response.ok) throw new error("failed to fetch data");
            return response.json();

        })
        .then(data =>{
           clearTimeout(timeout);
           resolve(data.posts.map(post => post.title).join("\n"));

        })
        .catch(error => {
            reject("Error: " + error.message);
        });

    });
}

document.addEventListener("DOMContentLoaded", function(){
    const promiseBtn = document.getElementById("promiseButton");
    if (promiseBtn){
        promiseBtn.addEventListener("click", function(){
            fetchDataWithPromise() 
                .then(data => {
                    const resultDiv = document.getElementById("promiseResult");
                    resultDiv.classList.add("success");
                    resultDiv.innerText = data;

                })
                .catch(error => {
                    const resultDiv = document.getElementById("promiseResult");
                    resultDiv.classList.add("error");
                    resultDiv.innerText = error;

            });
        })
    }

})


































