const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const Module1 = require('../logger/logger');
const MyDateMyMonth= require('../util/helper.js');
const BatchInfo = require('../util/helper')
const Greetings = require('../validator/formatter');
const up = require('upper-case');
const down = require('lower-case');
const _ = require('lodash');
const union = require('../Union');
const frompair= require('../frompair');
const tail = require('../tail');
const chunk = require('../chunk')
const pp = require('underscore');
const { times } = require('underscore');

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    Module1.greetName('Pritam')   
    console.log(MyDateMyMonth)
    BatchInfo.myBatchInfo('Pritam')
    console.log(Greetings.myGreeting)
    console.log(up.upperCase("hii my name is pritam and this is my third week in the cohort"))
    console.log(down.lowerCase("HII MY NAME IS PRITAM AND THIS IS MY THIRD WEEK IN THE COHORT"))
    console.log(union.myunion)
    console.log(tail.mytail)
    console.log(frompair.mypairs)
    console.log(chunk.mychunk)
    
        

    res.send('any dummy text')
});


// //QUESTION 1 : 
// // Create an API for GET /movies that returns a list of movies. 
// // Define an array of movies in your code and return the value in response.

//  router.get('/movies',function(req,res){
//      const arr1 = [{name :'Rang de basanti'}, {name :'The shining'}, {name :'Lord of the rings'}, {name :'Batman begins'}]
//      console.log("DONE");
//      res.send(arr1);
//  })


 
// // 2 Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie
// //  in your array at index 1). You can define an array of movies again in your api

// // router.get('/movies/:indexNumber' ,function(req, res){
// //      const arr2 = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
// //      console.log("this is right ");
// //      let index = req.params.indexNumber;
// //          res.send("first index movie : "+arr2[index])
// //  })


//  // 3    Handle a scenario in problem 2 where if the index is greater than the valid maximum value
// //  a message is returned that tells the user to use a valid index in an error message.

//  router.get('/movies/:indexNumber' ,function(req, res){
//      const arr3 = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
//     let index = req.params.indexNumber;
//     console.log("This is your Movie");
//     if(index>arr3.length){
//          res.send("use a valid index ");
//     }
//         res.send("first index movie : "+arr3[index])
//  })

//  //4    Write another api called GET /films. Instead of an array of strings define an array of movie objects this time.
// //  Each movie object should have values - id, name. An example of movies array is 
// // [ {
// //     “id”: 1,
// //     “name”: “The Shining”
// //    }, {
// //     “id”: 2,
// //     “name”: “Incendies”
// //    }, {
// //     “id”: 3,
// //     “name”: “Rang de Basanti”
// //    }, {
// //     “id”: 4,
// //     “name”: “Finding Nemo”
// //    }]



//     router.get('/films', function(req,res){
//      let arr4 = [{
//              "id": 1,
//              "name": "The Shining"
//             }, {
//              "id": 2,
//              "name": "Incendies"
//            }, {
//             "id": 3,
//             "name": "Rang de Basanti"
//            }, {
//             "id": 4,
//             "name": "Finding Nemo"
//            }]
//    console.log("hope array got printed...");
//    res.send("your array is here : "+JSON.stringify(arr4));
//    res.send(arr4)
// })


// //5
// router.get('/films/:filmId', function(req,res){
//         let arr5 =[{
//             "id": 1,
//             "name": "The Shining"
//            }, {
//             "id": 2,
//             "name": "Incendies"
//            }, {
//             "id": 3,
//             "name": "Rang de Basanti"
//            }, {
//             "id": 4,
//             "name": "Finding Nemo"
//            }]
//             let id = req.params.filmId;
//            if(id >arr5.length-1){
//             res.send("No movie exists with this id");
//            }
//            res.send(arr5[id]);
//     })

//Q1.
   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing

router.get('/sol1', function(req,res){

    let arr = [1,2,3,5,6,7];

    let total = (arr.length+1)*(arr.length+2)/2;
    
    for(i = 0; i < arr.length; i++) {
        total = total - arr[i];
    }
    
    console.log(total);

    
    res.send( { data: total  });
})
//Q2. 
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing

router.get('/sol2', function(req,res){
    let arr = [33, 34, 35, 37, 38]
    let len=arr.length
    let total = 0;
    
    for(var i in arr){
        total += arr[i];
    }
    
    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit) / 2
    let missingNumber = consecutiveSum - total
    res.send(  { data: missingNumber  }  );
});





    const players = []

    router.post('/players', function (req, res) {
        
        const newPlayer = req.body

        const playerDetail = players.find( player => player.name === body.name)
           
                
        if (playerDetail) {
            //Player exists
            res.send("This player was already added!")
        } else {
            players.push(newPlayer)
            res.send(players)
        }
    });
    

module.exports = router;