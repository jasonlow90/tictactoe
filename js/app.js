var boardData;
var sumOfRow;
var turn = 0;
var timer;
var timerLength = 10;
var secondsPassed = 0;
var playerOne, playerTwo;
var playerOneScore=0, playerTwoScore=0;
var currentPlayer;
var numberOfRounds = 5;
var currentRoundNumber = 0;

var storage, storage2;
// var boardData = [[null,null, null], [null, null, null], [null, null, null]];

$(document).ready(function(){
  // Mapping CSS selector to variables to make life simpler:
  var playerOne = prompt("Player 1's name?");
  var playerTwo = prompt("Player 2's name?");
  currentPlayer = playerOne;
  var body = $('body');

  body.append('<div class ="board">');
  var board = $('.board');

  // body.append($('<button class="start">'));
  // Creating scoreBoard
  board.append($('<h1 class="scoreBoardDiv">'));
  var scoreBoardDiv = $('.scoreBoardDiv');
  scoreBoardDiv.append($('<h1 id ="scoreBoardOne">'));
  scoreBoardDiv.append($('<h1 id ="scoreBoardTwo">'));
  scoreBoardDiv.append($('<h1 id ="roundRemaining">'));


  scoreBoardOne = $('#scoreBoardOne');
  scoreBoardTwo = $('#scoreBoardTwo');
  roundRemaining = $('#roundRemaining');
  // Creating a message board
  board.append($('<h1 id="message">'));

  var messageBoard = $('#message');

  // Making the timer
  board.append($('<h1 id="timer">'));
  var timer = $('#timer');

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


//CSS part

      $('html').css({
        'margin': '0',
        'padding': '0',
        'width': '100%',
        'height': '100%'
      });

      body.css({
        'text-align': 'center',
        'margin': '0',
        'padding': '0',
        'width': '100%',
        'height': '100%'
      });

      board.css({
        'margin': '0 auto',
        'border': 'double',
        'border-color': 'black',
        'height': '450px',
        'width': '450px',
        // 'position': 'absolute'
        'top': '10%',
        // 'left': '25%',
        'position' : 'relative'
      });

      $('h1').css({
        'margin': '0',
        'padding': '0',
        'position': 'absolute '
      });

      timer.css('bottom', '-50px');

      messageBoard.css({
        'position': 'absolute',
        'left': '180px',
        'top': '-50px'
      });

      scoreBoardDiv.css({
        'left': '-250px',
        'font-size': '16px'
      })

      scoreBoardDiv.children().css({
        'display': 'block',
        'position': 'relative'
      })
      // scoreBoardOne.css('right', '-200px');
      //
      // scoreBoardTwo.css({
      //   'top': '-50px',
      //   'right': '-200px'
      // });
      //
      // roundRemaining.css({
      //   'top': '-100px',
      //   'right': '-250px'
      // });

      row.css({
        'display': 'flex',
        'height': '150px',
        'width': '450px'
      });

      column.css({
        'border-style': 'solid',
        'border-color': 'black',
        'width': '150px',
        'height': '150px',
        'text-align': 'center',
        'font-size': '100px'
      });
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
              alert('won');
              checkRound();
              //Check vertical
            } else if (boardData[i][y] !== null && boardData[i][y] === boardData[i+1][y] && boardData[i+1][y] === boardData[i+2][y]){
              messageBoard.text(currentPlayer + ' won!');
              checkRound();
              //Check diagonal from top left
            } else if ((boardData[i+1][y+1] !== null && boardData[i][y] === boardData[i+1][y+1] && boardData[i+1][y+1] === boardData[i+2][y+2])){
              messageBoard.text(currentPlayer + ' won!');
              checkRound();
              //Check diagonal from top right
            } else if (boardData[i+1][y+1] !== null && boardData[i+2][y] === boardData[i+1][y+1] && boardData[i+1][y+1] === boardData[i][y+2]){
              messageBoard.text(currentPlayer + ' won!');
              checkRound();
         }
       }
     }
   }

//Writing game's over function:
  function checkRound(){
    if(currentRoundNumber < (numberOfRounds - 1)){
      secondsPassed = 0;
      column.empty();
      boardData = [[null,null, null], [null, null, null], [null, null, null]];
      if (turn === 9){
        messageBoard.text("It's a draw!")
      } else if (turn % 2 === 0){
        playerTwoScore ++;
        currentRoundNumber ++;

      } else if (turn % 2 !== 0){
        playerOneScore ++;
        currentRoundNumber ++;
      }
      turn = 0;
      currentPlayer = playerOne;
    } else {
      window.clearInterval(myCountDown);
      column.off('click');
      messageBoard.text('Game Over!');
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
    //To review draw when no winner is decided at the end of the round
    //To alternate between player 1 and 2
    if (turn === 9){
      messageBoard.text("It's a draw!")
      turn = 0;
      secondsPassed = 0;
      currentPlayer = playerOne;
    } else if (turn % 2 === 0){
      turn ++;
      currentPlayer = playerTwo; //It should be the next player's turn after the click
      messageBoard.text(currentPlayer + "'s turn");
      $(this).text('x');
      boardData[rowIndex][columnIndex] = 'x';
    } else if (turn % 2 !== 0){
      turn ++;
      currentPlayer = playerOne;
      messageBoard.text(currentPlayer + "'s turn");
      $(this).text('o');
      boardData[rowIndex][columnIndex] = 'o';
    }
    secondsPassed = 0;
    checkWin();
  }
  column.on('click', getIndices);

  // Creating a reset button
    // body.append($('<button id="reset">').text('Reset'));
    // $('#reset').on('click', function(){
    //   column.empty();
    //   boardData = [[null,null, null], [null, null, null], [null, null, null]];
    //   turn = 0;
    //   secondsPassed = 0;
    // });

// Make a turn for the currentPlayer when timer is up

  function randomPlacement(){

    function randomNumberRow(){
      return Math.round(Math.random()*2);
    }

    function randomNumberColumn(){
      return Math.round(Math.random()*2);
    }
    storage = randomNumberRow(); //To store the randomNumberRow
    storage2 = randomNumberColumn();
    randomNumberRow();
    randomNumberColumn();

    if(boardData[storage][storage2] !== null){
      randomPlacement();
    } else {
      boardData[storage][storage2] = 'x';
      if(turn % 2 === 0){
        $('.'+storage+'>.'+ storage2).text('x');
        boardData[storage][storage2] = 'x';
      } else {
        $('.'+storage+'>.'+ storage2).text('o');
        boardData[storage][storage2] = 'o';
      }

    }
}
// Setting the timer function to count down
    function countDown(){
      myCountDown = window.setInterval(function(){
        timer.text('Time left: ' + (timerLength-secondsPassed));
        messageBoard.text(currentPlayer + "'s turn.")
        scoreBoardOne.text(playerOne + ' Score: ' + playerOneScore);
        scoreBoardTwo.text(playerTwo + ' Score: ' + playerTwoScore);
        roundRemaining.text('Rounds left: ' + (numberOfRounds - currentRoundNumber));
        if ((timerLength-secondsPassed) === 0){
          randomPlacement();
          turn ++;
          if(turn === 9){
              messageBoard.text("It's a draw!")
              turn = 0;
              currentPlayer = playerOne;
              column.empty();
            } else if (turn % 2 === 0){
            currentPlayer = playerOne;
            messageBoard.text(currentPlayer + "'s turn.");
          } else {
            currentPlayer = playerTwo;
            messageBoard.text(currentPlayer + "'s turn.");
          }
          secondsPassed = 0;
          checkWin();
        }
        secondsPassed ++;
        checkWin();
        // checkWin();

    }, 1000)
    }
    countDown();

});
