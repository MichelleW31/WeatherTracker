$(document).ready(function(){
// ------

// $("button").on("click", function(){
//   var page = $("#response").val();
//   $.get("https://www.reddit.com/r/" + page + ".json").done(function(data) {
//       console.log(data);
//       var array = data.data.children;
//       array.forEach(function(item){
//         $("#display").append("<div><h2>" + item.data.title + "</h2><h3>" + item.data.author + "</h3><img src=" + item.data.thumbnail + "></div>");
//         $("#display div").addClass("box");

    // });/*End of for loop*/
  // });/*End of get function*/
// });/*End of on click function*/

$("button").on("click", function(){
  $("#display div").remove();
  var city = $("#city").val();
  var state = $("#state").val();
  var fadeImg;
  $.get("http://api.wunderground.com/api/884049d93552d85e/conditions/q/" + state + "/" + city + ".json").done(function(response){
    console.log(response);
    var array = response.current_observation;
    $("#display").append("<div><h2>" + array.display_location.full + "</h2><p>" +array.temperature_string + "</p></div>");
    if(array.temp_f <= 45){
      $("#display div").css("background-color","rgba(29,47,74, 1)");
      fadeImg = $("<img src ='Images/ice.png'>").hide().fadeIn(2000)
      $("#display div").append(fadeImg);
      $("#inputs").css("background-color", "rgba(29,47,74, 1)");
    }else if(array.temp_f > 45 && array.temp_f <= 75){
      $("#display div").css("background-color","rgba(218, 138, 32, .9)");
      fadeImg = $("<img src ='Images/sunshine.png'>").hide().fadeIn(2000)
      $("#display div").append(fadeImg);
      $("#inputs").css("background-color", "rgba(218, 138, 32, .9)");
    }else if(array.temp_f > 75){
      $("#display div").css("background-color","rgba(214, 53, 0, 0.8)");
      fadeImg = $("<img src ='Images/hotsun.png'>").hide().fadeIn(2000)
      $("#display div").append(fadeImg);
      $("#inputs").css("background-color", "rgba(214, 53, 0, 0.8)");
    }

  });
});


// ------
});


// 884049d93552d85e
