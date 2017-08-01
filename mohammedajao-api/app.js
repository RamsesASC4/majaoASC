$(".btn-primary").click(function(){
     $("div").removeClass("none");
     var info;

     $.ajax({
       url: 'https://randomuser.me/api/?inc=gender,name,picture,dob,cell&gender=female',
       dataType: 'json',
       success: function(data) {
          info = data.results[0];
          console.log(info);
          var name = info.name.first + " " + info.name.last;
          console.log(name);
          var picture = info.picture.large;
          $("h1").html(name);
          $("img").prop("src", "" +picture);
          var age = 2017 - Number(info.dob.substring(0,4));
          $("#age").html("I'm " +(age)+" years old.");
          $("#number").html("Here's my number: " + info.cell);
       }
     });
     $.ajax({
       url: 'https://pebble-pickup.herokuapp.com/tweets/random',
       dataType: 'json',
       success: function(data) {
          var line = data.tweet;
          $("#pickup-line").html("" + line);
       }
     });
});
