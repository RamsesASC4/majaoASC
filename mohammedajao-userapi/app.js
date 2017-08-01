$.ajax({
     url: 'https://randomuser.me/api/',
     dataType: 'json',
     success: function(info){
          var data = info.results[0];
          $("h1").text(data.name.first);
     }
});
