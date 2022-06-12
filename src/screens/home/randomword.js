//add functionanlity increase word limit maybe from redux
function randomword() {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = 6;
  for (var i = 0; i < 6; i++) {
    if (i == 0) {
      result += characters.charAt(Math.floor(Math.random() * 52)).toUpperCase();
    } else {
      result += characters.charAt(Math.floor(Math.random() * 52));
    }
  }

  return result;
}
export default randomword;
