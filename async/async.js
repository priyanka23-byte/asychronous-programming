

async function fetchDataWithAsyncAwait(){
    const resultDiv = document.getElementById("asyncResult");
    resultDiv.classList.remove("error", "success");
    resultDiv.innerText = "Result will be available in 5 seconds ";

    await new Promise(resolve => setTimeout(resolve, 5000));

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(),5000 );

    try {
        const response = await fetch("https://dummyjson.com/posts");
        clearTimeout(timeout);

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        resultDiv.classList.add("success");
        resultDiv.innerText = data.posts.map(post =>post.title).join("\n");

     } catch(error)  {
      resultDiv.classList.add("error");
      if(error.name ==="AbortError") {
        resultDiv.innerText = "Error:Request timed out.";
      }else{
        resultDiv.innerText = "Error Fetching data:" +error.message;
      }
     }

}

document.addEventListener("DOMContentLoaded", function(){
    const asyncBtn = document.getElementById("asyncButton");
    if (asyncBtn) {
        asyncBtn.addEventListener("click", fetchDataWithAsyncAwait)
    }
});













































