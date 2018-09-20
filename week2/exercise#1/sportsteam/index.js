// exporting named function as module
exports.Cheer = function() {
  console.log('Go! ' + this.teamname + ' Go!');
};

exports.Boo = function () {
  console.log('Boo! ' + this.teamname + ' Boo!');
}