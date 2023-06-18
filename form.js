function submitData(){
    var name = document.getElementById("name").value
    var date = document.querySelector("input[name=date]").value
    var age = document.getElementById("myselect").value
    var favorite = document.querySelector("input[name=favorite]:checked").value
    var rating = document.querySelector("input[name=rating]:checked").value
    var response = document.getElementById("response").value
    
    

    alert(
        "Name : " + name +
        "\nBirth  Date : " + date +
        "\nAge Range : " + age +
        "\nFavorite Disney Movie : " + favorite +
        "\nRating Favorite Disney Movie : " + rating +
        "\nResponse : " + response
    )
}