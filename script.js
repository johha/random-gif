
$(document).ready(function(){
    $("#new").click(function() {
        var imgUrl;
        var imgId;
        $.ajax ({
            url: "https://api.giphy.com/v1/gifs/random?api_key=GML25hSunINGi6eDyXGGInxZuT3BiAYC&rating=pg&tag=funny",
            type: "GET",
            dataType: "json",
            success: function(response) {
                imgUrl = response.data.embed_url;
                imgId = response.data.id;
                console.log(response);
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

$(document).ready(function(){
    $("#giphy-ok").click(function() {
        $("#giphy-embed").attr("src", "https://giphy.com/embed/"+$("#giphy-id").val());
    });
});


