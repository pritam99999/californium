const now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});
const batchName= 'Californium'
const week1='W3';
const days = 'D4';

const BatchInfo = function (person) {
    console.log(`${batchName},${week1},${days},the topic for today is Nodejs module system`)
}
module.exports.MyDateMyMonth = now
module.exports.batchName=batchName;
module.exports.week=week1;
module.exports.day=days;
module.exports.myBatchInfo = BatchInfo
