
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
     console.log('\nSnake bypass:');
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let columnIdx = i % 2 === 0 
          ? j
          : (matrix[i].length - j - 1);


          
        console.log( matrix[i][columnIdx] );
      }
    }
}
 let smallMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  showMatrix(smallMatrix);
  snakeBypass(smallMatrix);
