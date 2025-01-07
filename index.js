// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  module.exports = superbowlWin; // Ensure you export the function if you are running tests
  
