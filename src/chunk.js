let input = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];
let chunked = []
let size = 4;

for (let i = 0;  i < input.length; i += size) {
  chunked.push(input.slice(i, i + size))
}

module.exports.mychunk= chunked