$.ajax({
     url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=a372e4056f7d48b93a44869af3c1838e",
     dataType: "json",
     success: function(data){
          console.log(data);
     },
     error: function(msg){
          alert("Ajax Error: " + msg);
     }
});
