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

    function checkWin(){
      for (var i = 0; i < boardData.length; i++) {
          for (var y = 0; y < boardData[i].length; y++){
            // Check horizontal
            if(boardData[i][y] !== null && boardData[i][y] === boardData[i][y+1] && boardData[i][y+1] === boardData[i][y+2]){
              console.log('horizontal WON');
              //Check vertical
            } else if (boardData[i][y] !== null && boardData[i][y] === boardData[i+1][y] && boardData[i+1][y] === boardData[i+2][y]){
              console.log('vertical WON');
              //Check diagonal from top left
            } else if ((boardData[i+1][y+1] !== null && boardData[i][y] === boardData[i+1][y+1] && boardData[i+1][y+1] === boardData[i+2][y+2])){
              console.log('diagonal Left');
              //Check diagonal from top right
            } else if (boardData[i+1][y+1] !== null && boardData[i+2][y] === boardData[i+1][y+1] && boardData[i+1][y+1] === boardData[i][y+2]){
           console.log('diagonal Right');
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
    if (count >= 8){
      console.log('Draw');
    }
    if (count % 2 === 0){
      $(this).text('x');
      boardData[rowIndex][columnIndex] = 'x';
    } else {
      $(this).text('o');
      boardData[rowIndex][columnIndex] = 'o';
    }
    count ++;
    checkWin();
  }

  column.on('click', getIndices);

  // Creating a reset button
    body.append($('<button id="reset">').text('Reset'));
    $('#reset').on('click', function(){
      column.empty();
      boardData = [[null,null, null], [null, null, null], [null, null, null]];
      count = 0;
    });

});
