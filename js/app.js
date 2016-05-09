var boardData;
var sumOfRow;
var count = 0;

$(document).ready(function(){
  // Mapping CSS selector to variables to make life simpler:

  var body = $('body');

  body.append('<div class ="board">');
  var board = $('.board');

  body.append($('<button class="start">'));

  var column, row;
  //Creating a button to generate the board of the tictactoe; along with 3x3 rows and columns
  var button = $('button');
  button.text('Button');
  // button.on('click', function(){

      for (var i = 0; i <= 2; i++) {
        board.append($('<div class="row ' + i + '">'));
      }

      row = $('.row');

      for (var i = 0; i <= 2; i++) {
        row.append($('<div class ="column ' + i + '">'));
      }

      column = $('.column');

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
        'height': '200px',
        'text-align': 'center'
      })
  // }) //End of button;

//Fucking game logic of tic fucking tac toe

//Creating an empty array of arrays to store the tictactoe value
  // boardData = [[1,2, 3], [4, 5, 6], [7, 8, 9]];
  boardData = [[null,null, null], [null, null, null], [null, null, null]];

    function huhuhu(){
      for (var i = 0; i < boardData.length; i++) {
        for (var y = 0; y < boardData[i].length; y++){
          if (boardData[i][y]=== true){
          if(boardData[i][y] === boardData[i+1][y] && boardData[i+1][y] === boardData[i+2][y]){
            console.log('YOU WON');
          }
        }
          }
      }
    }


//To map the value onto the boardData as user clicks on the board
  function getIndices (){
    var rowIndex = $(this).parent().attr('class').split(' ')[1];
    var columnIndex = $(this).attr('class').split(' ')[1];
    if (boardData[rowIndex][columnIndex] !== null){
      return false;
    }
    if (count % 2 === 0){
      $(this).text('x');
      boardData[rowIndex][columnIndex] = 'x';
    } else {
      $(this).text('o');
      boardData[rowIndex][columnIndex] = 'o';
    }
    count ++;
    huhuhu();
    console.log(boardData[rowIndex][columnIndex]);
  }

  column.on('click', getIndices);


//Setting the winning combination
  function halooo (){
    if (boardData[0][0] === boardData[0][1] && boardData[0][1] === boardData [0][2]){
      console.log('You won!');
    }
  }
  halooo;


  // Creating a reset button
    body.append($('<button id="reset">').text('Reset'));
    $('#reset').on('click', function(){
      column.empty();
      count = 0;
    });

});
