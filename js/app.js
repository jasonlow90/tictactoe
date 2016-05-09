var boardData;
var sumOfRow;
var count = 0;
var playerOne, playerTwo;
var currentPlayer;
$(document).ready(function(){
  // Mapping CSS selector to variables to make life simpler:
  var playerOne = prompt("Player 1's name?");
  var playerTwo = prompt("Player 2's name?");
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
        'text-align': 'center',
        'font-size': '150px'
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
              messageBoard.text(currentPlayer + ' won!');
              alert('horizontal WON');
              //Check vertical
            } else if (boardData[i][y] !== null && boardData[i][y] === boardData[i+1][y] && boardData[i+1][y] === boardData[i+2][y]){
              messageBoard.text(currentPlayer + ' won!');
              alert('horizontal WON');
              //Check diagonal from top left
            } else if ((boardData[i+1][y+1] !== null && boardData[i][y] === boardData[i+1][y+1] && boardData[i+1][y+1] === boardData[i+2][y+2])){
              messageBoard.text(currentPlayer + ' won!');
              alert('horizontal WON');
              //Check diagonal from top right
            } else if (boardData[i+1][y+1] !== null && boardData[i+2][y] === boardData[i+1][y+1] && boardData[i+1][y+1] === boardData[i][y+2]){
              messageBoard.text(currentPlayer + ' won!');
              alert('horizontal WON');
         }
       }
     }
   }





//To map the value onto the boardData as user clicks on the board
  function getIndices (){
    var rowIndex = $(this).parent().attr('class').split(' ')[1];
    var columnIndex = $(this).attr('class').split(' ')[1];
    //To reject overwriting any grid that already has been clicked
    if (boardData[rowIndex][columnIndex] !== null){
      return false;
    }
    count ++;
    //To review draw when no winner is decided at the end of the round
    //To alternate between player 1 and 2
    if (count === 9){
      messageBoard.text("It's a draw!");
    } else if (count % 2 === 0){
      currentPlayer = playerOne;
      messageBoard.text(currentPlayer + "'s turn");
      $(this).text('x');
      boardData[rowIndex][columnIndex] = 'x';
    } else if (count % 2 !== 0){
      currentPlayer = playerTwo;
      messageBoard.text(currentPlayer + "'s turn");
      $(this).text('o');
      boardData[rowIndex][columnIndex] = 'o';
    }

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

    // Creating a message board
    body.append($('<h3 id="message">'));
    var messageBoard = $('#message');
      // if (count === 9){
      //   messageBoard.text("It's a draw!");
      // } else if (count % 2 === 0){
      //   messageBoard.text("Player 1's turn");
      //   $(this).text('x');
      //   boardData[rowIndex][columnIndex] = 'x';
      // } else if (count % 2 !== 0){
      //   messageBoard.text("Player 2's turn");
      //   $(this).text('o');
      //   boardData[rowIndex][columnIndex] = 'o';
      // }




});
