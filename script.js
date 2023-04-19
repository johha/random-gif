
$(document).ready(function(){
    $("#new").click(function() {
        var imgSrc;
        var imgId;
        $.ajax ({
            url: "https://api.giphy.com/v1/gifs/random?api_key=rE6WgDxZnwRdADR8M2Nv7ZKuA4nFjq49&tag=theoffice",
            type: "GET",
            dataType: "json",
            success: function(response) {
                imgUrl = response.data.embed_url;
                imgId = response.data.id;
                $("#giphy-embed").attr("src", imgUrl);
                // $("#giphy-embed").attr("src", "https://media.giphy.com/media/"+imgId+"/giphy.gif");
                return false;
                }, 
            error: function(e) {
                console.log("uh oh");
            }
        });
    });
});


