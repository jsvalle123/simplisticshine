let revIndex = 0;
showReviews();

function showReviews() {
    let i;
    let reviews = document.getElementsByClassName("reviewItems");
    for(i = 0; i < reviews.length; i++){
        reviews[i].getElementsByClassName.display = "none";
    }
    revIndex++;
    if (revIndex > reviews.length) {
        revIndex = 1
    }
    reviews[revIndex - 1].style.display = "block";
    setTimeout(showReviews, 5000);
}

