// Global variable
var boardData;
var sumOfRow;
var turn = 0;
var timer;
var timerLength = 10;
var secondsPassed = 0;
var playerOne, playerTwo;
var playerOneScore = 0;
var playerTwoScore = 0;
var nextPlayer, currentPlayer;
var numberOfRounds = 5;
var currentRoundNumber = 1;
var countDownTimer;

var storage, torage2;
var boardData;

$(document).ready(function () {


  $('html').css({
    'margin': '0',
    'padding': '0',
    'width': '100%',
    'height': '100%'
  });

    var body = $('body');
    body.append($('<button id="startButton">').text('Start Game'));
    body.css({
      'background' : 'url(http://www.calljourney.com/wp-content/uploads/blackboard.jpg) no-repeat center center',
      'background-size': 'cover',
      'text-align': 'center',
      'margin': '0',
      'padding': '0',
      'width': '100%',
      'height': '100%',
      'font-family': "'Shadows into Light', cursive",
      'color': 'black'
    });

    var startButton = $('#startButton')
    startButton.css({
      'position': 'absolute',
      'left': '44%',
      'bottom': '35%',
      'font-size': '20px'
    })

    body.append($('<div class="label">'));
    var labelDiv = ($('.label'));

    labelDiv.css({
      'position': 'absolute',
      'top': '25%',
      'left': '42%',
      'font-size': '18px'
    });

    labelDiv.append($("<label>Player One's Name <input id='playerOne' type='text' maxlength='10' value='Player One'></label>"));
    labelDiv.append($("<label>Player Two's Name <input id='playerTwo' type='text' maxlength='10' value='Player Two'></label>"));
    labelDiv.append($("<label>Player One's Token <input id='playerOneSymbol' type='text' maxlength='1' value='X'></label>"));
    labelDiv.append($("<label>Player Two's Token <input id='playerTwoSymbol' type='text'  maxlength='1' value='O'></label>"));

    var inputs = ($('input'));

    inputs.css({
      'display': 'block',
    })

    startButton.on('click', function(){

      startButton.hide();

      // Mapping CSS selector to variables to make life simpler:
      var playerOne = $('#playerOne').val();
      var playerTwo = $('#playerTwo').val();
      var playerOneSymbol = $('#playerOneSymbol').val();
      var playerTwoSymbol = $('#playerTwoSymbol').val();

      labelDiv.hide();

      nextPlayer = playerOne;

      body.append('<div class ="board">');
      var board = $('.board');

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

      //Making the board of tictactoe
      var column, row;

      for (var i = 0; i <= 2; i++) {
        board.append($('<div class="row ' + i + '">'));
      }

      row = $('.row');

      for (var i = 0; i <= 2; i++) {
        row.append($('<div class ="column ' + i + '">'));
      }

      column = $('.column');
      // Making the timer
      board.append($('<h1 id="timer">'));
      var timer = $('#timer');


  //Reset button:
          board.append($('<button id="reset">').text('Reset'));

  // Crazy mode function:
          board.append($('<button id="crazyMode">').text("Entertain Me"));
          var crazyMode = $('#crazyMode')

    //CSS part


          board.css({
            'margin': '0 auto',
            'height': '450px',
            'width': '450px',
            'top': '10%',
            'position' : 'relative'
          });

          $('h1').css({
            'margin': '0',
            'padding': '0',
            'position': 'absolute',
            'color': 'white'
          });

          timer.css('bottom', '-50px');
          messageBoard.css({
            'position': 'absolute',
            'left': '120px',
            'top': '-50px'
          });

          scoreBoardDiv.css({
            'left': '-70%',
            'font-size': '16px'
          })

          scoreBoardDiv.children().css({
            'display': 'block',
            'position': 'relative'
          })

          row.css({
            'display': 'flex',
            'height': '150px',
            'width': '450px'
          });

          column.css({
            'border-style': 'solid',
            'border-width': 'thin',
            'border-color': 'black',
            'width': '150px',
            'height': '150px',
            'text-align': 'center',
            'font-size': '100px'
          });

          crazyMode.css({
            'bottom': '0px',
            'right': '-120px',
            'position': 'relative'
          })
    //Creating an empty array of arrays to store the tictactoe value
    boardData = [[ 0, 0, 0], [ 0, 0, 0], [0, 0, 0]];

    //Function to check winningCombination
    function checkWin(){

      //Checking horizontal
      var rowCheckOne = 0;
      var rowCheckTwo = 0;
      var rowCheckThree = 0;
      var columnCheckOne = 0;
      var columnCheckTwo = 0;
      var columnCheckThree = 0;
          for (var y = 0; y < boardData[0].length; y++){
              rowCheckOne += boardData[0][y];
            if (Math.abs(rowCheckOne) === 3){
            messageBoard.text(currentPlayer + ' won!');
            checkRound();
            // messageBoard.text(currentPlayer + ' won!');
            // checkRound();
          }
        }
          for (var y = 0; y < boardData[1].length; y++){
              rowCheckTwo += boardData[1][y];
            if (Math.abs(rowCheckTwo) === 3){
            messageBoard.text(currentPlayer + ' won!');
            checkRound();
          }
        }
          for (var y = 0; y < boardData[2].length; y++){
              rowCheckThree += boardData[2][y];
            if (Math.abs(rowCheckThree) === 3){
              messageBoard.text(currentPlayer + ' won!');
              checkRound();
          }
        }

          // Checking vertical
          for (var i = 0; i < boardData.length; i++){
              columnCheckOne += boardData[i][0];
            if (Math.abs(columnCheckOne) === 3){
            messageBoard.text(currentPlayer + ' won!');
            checkRound();
          }
        }
          for (var i = 0; i < boardData.length; i++){
              columnCheckTwo += boardData[i][1];
            if (Math.abs(columnCheckTwo) === 3){
            messageBoard.text(currentPlayer + ' won!');
            checkRound();
          }
        }
          for (var i = 0; i < boardData.length; i++){
              columnCheckThree += boardData[i][2];
            if (Math.abs(columnCheckThree) === 3){
            messageBoard.text(currentPlayer + ' won!');
            checkRound();
          }
        }

          //Checking left diagonal

          if (Math.abs(boardData[0][0] + boardData[1][1] + boardData [2][2]) === 3 ){
            messageBoard.text(currentPlayer + ' won!');
            checkRound();
          }

          // Checking right diagonal

          if (Math.abs(boardData[2][0] + boardData[1][1] + boardData [0][2]) === 3 ){
            messageBoard.text(currentPlayer + ' won!');
            checkRound();
          }
        }

    //Writing game over function:
      function checkRound(){
          if (turn === 9){
            messageBoard.text("It's a draw!");

            } else if (turn % 2 === 0){
              playerTwoScore ++;
              currentRoundNumber ++;

            } else if (turn % 2 !== 0){
              playerOneScore ++;
              currentRoundNumber ++;
            }
          scoreBoardOne.text(playerOne + "'s Score: " + playerOneScore);
          scoreBoardTwo.text(playerTwo + "'s Score: " + playerTwoScore);
          secondsPassed = 0;
          column.empty();
          boardData = [[0,0, 0], [0, 0, 0], [0, 0, 0]];

          if(currentRoundNumber <= numberOfRounds){
            turn = 0;
            nextPlayer = playerOne;
            } else {
              window.clearInterval(myCountDown);
              column.off('click');
              roundRemaining.text('Rounds left: ' + (numberOfRounds - currentRoundNumber +   1));
              messageBoard.text('Game Over!');
            }
      }


      // What happens if the game is a tie?

      function ifDraw(){
        messageBoard.text("It's a draw!")
        secondsPassed = 0;
        column.empty();
        boardData = [[ 0, 0, 0], [ 0, 0, 0], [ 0, 0, 0]];
        turn = 0;

      }

    // What happens when the column is click?
    // To map the value onto the boardData as user clicks on the board
      function getIndices (){
        var rowIndex = $(this).parent().attr('class').split(' ')[1];
        var columnIndex = $(this).attr('class').split(' ')[1];
        //To reject overwriting any grid that already has been clicked
        if (boardData[rowIndex][columnIndex] !== 0){
          return false;
        }
        //To alternate between player 1 and 2
        checkWin();

        //To review draw when no winner is decided at the end of the round
        if (turn === (9-1)) {
          ifDraw();

          } else if (turn % 2 === 0) {
            turn ++;
            currentPlayer = playerOne;
            nextPlayer = playerTwo; //It should be the next player's turn after the click
            messageBoard.text(nextPlayer + "'s turn");
            $(this).text(playerOneSymbol).css('color', 'red');
            boardData[rowIndex][columnIndex] = 1;

          } else {
            turn ++;
            currentPlayer = playerTwo;
            nextPlayer = playerOne;
            messageBoard.text(nextPlayer + "'s turn");
            $(this).text(playerTwoSymbol).css('color', 'blue');
            boardData[rowIndex][columnIndex] = -1;
          }
          secondsPassed = 0;
        }

    // Putting the getIndices function into the click listener
      column.on('click', getIndices);

    // Make a turn for the nextPlayer when timer is up
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

        if(boardData[storage][storage2] !== 0){ //To stop overwriting written grid
          randomPlacement();
        } else {
          if(turn % 2 === 0){
            $('.'+storage+'>.'+ storage2).text(playerOneSymbol).css('color', 'red');
            boardData[storage][storage2] = 1;
          } else {
            $('.'+storage+'>.'+ storage2).text(playerTwoSymbol).css('color', 'blue');
            boardData[storage][storage2] = -1;
          }
        }
      }

    // Setting the timer function to count down
      countDownTimer = 1000;

        function countDown(){

          myCountDown = window.setInterval(function(){
          timer.text('Time left: ' + (timerLength-secondsPassed));
          scoreBoardOne.text(playerOne + "'s Score: " + playerOneScore);
          scoreBoardTwo.text(playerTwo + "'s Score: " + playerTwoScore);
          messageBoard.text(nextPlayer + "'s turn.")
          roundRemaining.text('Rounds left: ' + (numberOfRounds - currentRoundNumber +1));

            if ((timerLength-secondsPassed) === 0){
              randomPlacement();
              turn ++;

              if(turn === 9){
                ifDraw();

                } else if (turn % 2 === 0){
                currentPlayer = playerOne;
                nextPlayer = playerOne;
                messageBoard.text(nextPlayer + "'s turn.");
              } else {
                currentPlayer = playerTwo;
                nextPlayer = playerTwo;
                messageBoard.text(nextPlayer + "'s turn.");
              }
              secondsPassed = 0;
              checkWin();

            }
            secondsPassed ++;
            checkWin();

          }, countDownTimer)
        }

        // Calling the timer interval
        countDown();

        // Reset button function
        $('#reset').on('click', function(){

            clearInterval(myCountDown);
            column.empty();
            boardData = [[ 0, 0, 0], [0, 0, 0], [0, 0, 0]];
            turn = 0;
            secondsPassed = 0;
            playerOneScore = 0;
            playerTwoScore = 0;
            currentRoundNumber = 1;
            timerLength = 10;
            countDownTimer = 1000;
            numberOfRounds = 5;
            countDown();
            column.on('click', getIndices);

        });

        //Crazy mode function:
        crazyMode.on('click', function () {
          clearInterval(myCountDown);
          secondsPassed = 0;
          timerLength = 10;
          countDownTimer = 1;
          numberOfRounds = 1000;
          countDown();
        })



  }) // End of start button



});
