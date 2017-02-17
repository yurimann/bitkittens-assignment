$(function(){

  $('.summon-cats').on('click', function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json' ,
      method: 'GET',
      data: {number: 5},
      dataType: 'JSON'
    }).done(function(responseData){
      console.log(responseData);

      var catDiv = $('<div>');
      var visit = $('<h2>');
      var text = "Cats who've visited:";
      visit.append(text);
      catDiv.append(visit);
      var list = $('<ul>');
      var catContainer = $('<div>');
      $('main').append(catDiv);

      for (i = 0 ; i < 5; i++){
        var test = $('<li>');
        test.html(responseData.cats[i].name);
        list.append(test);

        var catPic = responseData.cats[i].photo;
        var catAlt = 'This cat is ' + responseData.cats[i].name;
        $('<img>').attr('src', catPic).appendTo(catContainer);
        $('<p>').html(catAlt).appendTo(catContainer);
        $('#cat' + (i + 1)).html(catContainer);
      };
      $(catDiv).append(list);
  });
  });
});
