$(document).ready(function(){
  // Mapping CSS selector to variables to make life simpler:

  var body = $('body');

  body.append('<div class ="board">');
  var board = $('.board');

  body.append($('<button class="start">'));
  var button = $('button');
  button.text('Button');
  button.on('click', function(){

      for (var i = 1; i <= 3; i++) {
        board.append($('<div class="row ' + i + '">'));
      }

      var row = $('.row');

      for (var i = 1; i <= 3; i++) {
        row.append($('<div class ="column ' + i + '">'));
      }

      var column = $('.column');

      body.css({
        'text-align': 'center',
      })

      board.css({
        'margin': '0 auto',
        'border': 'double',
        'border-color': 'black',
        'height': '600px',
        'width': '600px'
      })

      row.css({
        'display': 'flex',
        'height': '200px',
        'width': '600px'
      })

      column.css({
        'border-style': 'solid',
        'border-color': 'black',
        'width': '200px',
        'height': '200px'
      })

  })

});
