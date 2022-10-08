const likeBtn = document.getElementById("like-button")
const likeCount = document.getElementById("count")

likeBtn.addEventListener('click', incrementLike);

let count = 1;

function incrementLike(){

    count = count+1
    console.log(count);
    likeCount.value = count
}