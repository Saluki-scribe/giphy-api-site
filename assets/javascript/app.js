$(document).ready(function(){

    var shownGifs = ["Vampire", "Werewolf", "Zombie", "Witch", "Ghost", "Demon", "Hellhound", "Monster", "Full Moon", "The Raven"];
    

function searchGiphy() {
    //Set up initial gifs to display on site load
    console.log("gif-input: " + $("#gif-input").val());
    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + gif + "&api_key=1e91fe5c8cee4fdeb30896944371bd74&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){

        $("#gif-display").html(" ");

        var rArray = response.data.length;
            
        for (let i = 0; i < rArray; i++) {

            console.log(response);
            
            var gifRating = response.data[i].rating;
            var gifImage = response.data[i].images.downsized.url;
            var gifStill = response.data[i].images.downsized_still.url;

            
            
            $("#gif-display").append("<div class = 'col-4 picture' > <p> Rating: " + gifRating + "</p> <img src = '" + gifStill + "' data-still ='" + gifStill + "' data-animate = '" + gifImage + "'></div>")    
            console.log("Data-still: " + "data-still");

           
        } //End for Loop


        $(".picture").on("click", function() {
            var current = $(this).children("img").attr("src");
            var animated = $(this).children("img").attr("data-animate");
            var still = $(this).children("img").attr("data-still");
            
            console.log("current: " + current);
            console.log("animated: " + animated);
            console.log("still: " + still);
            
            
            if (current == still) {
                $(this).children("img").attr("src", animated);
                console.log("last current: " + current);
            } else {
                $(this).children("img").attr("src", still);
            }
            
            
                
                //, "data-animate");
                //console.log();
                //.toggle(1000, function() {
                   //$(this).attr("src", "data-animate");
                //});    
        });
        

        //    $(".picture").on("click", function () {
        //        $(".picture").attr("src", gifImage);
        //        console.log("This: " + $(".picture"));
        //    })
        
       
        

        //$("img").on("click", function (event) {

          //  $(this).html("<div class = 'col-4'> <p> Rating: " + gifRating + "</p> <img src = '" + gifImage + "'></div>");

         //   console.log("This equals: " + this);
            //if($(this).val() == gifStill) {
            //    $(this) = gifImage;
            //} else {
            //    $(this).val() = gifStill;
            //}
        
        });

       

        //$("#gif-display").append("<p>" + gifRating + "</p> <img src='" + gifImage + "'>" );
       // $("#gif-display").append("<img src='" + response.data[1].images.downsized.url + "'>" );
        //$("#gif-display").append("<img src='" + response.data[2].images.downsized.url + "'>" );
        
    //})
} //End searchGiphy Function

function renderButtons() {

    $("#buttons-display").empty();

    for(var i = 0; i < shownGifs.length; i++) {
        
        console.log("shownGifs length: " + shownGifs.length);

        var b = $("<button>");
        
        b.addClass("gif");
        b.attr("data-name", shownGifs[i]);
        b.text(shownGifs[i]);
        $("#buttons-display").append(b);

        console.log(b);
    }
}

//Add new button by inputting something and pressing Enter/the "Call" button

$("#new-button").on("click", function(event) {
    event.preventDefault();

    var gif = $("#gif-input").val().trim();

    shownGifs.push(gif);

    renderButtons();
    
});

$(document).on("click", ".gif", searchGiphy);

renderButtons();


});