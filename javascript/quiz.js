var questions=[
    {
        id:1,
        category:"python",
        question:"what is django",
        mode:"beginner",
        mark:2,
        choices:[
            {text:"mvt",correct:true}, 
            {text:"mvc",correct:false},
            {text:"library",correct:false},

        ]
    },
    {
        id:2,
        category:"python",
        question:"is set mutable",
        mode:"beginner",
        mark:2,
        choices:[
            {text:"yes",correct:true}, 
            {text:"no",correct:false},
            {text:"partialy",correct:false},

        ]
    },
    {
        id:3,
        category:"javascript",
        question:"what is coercion",
        mode:"intermediate",
        mark:2,
        choices:[
            {text:"auto matic typecasting",correct:true}, 
            {text:"data type",correct:false},
            {text:"function",correct:false},

        ]
    },
    {
        id:4,
        category:"javascript",
        question:"is javascript synchronous?",
        mode:"intermediate",
        mark:2,
        choices:[
            {text:"yes",correct:true}, 
            {text:"no",correct:false},
            {text:"non",correct:false},

        ]
    }, 
    {
        id:5,
        category:"java",
        question:"is java compiled?",
        mode:"intermediate",
        mark:3,
        choices:[
            {text:"yes",correct:true}, 
            {text:"no",correct:false},
            {text:"none",correct:false},

        ]
    }, {
        id:6,
        category:"java",
        question:"founder of java?",
        mode:"beginner",
        mark:5,
        choices:[
            {text:"goslin",correct:true}, 
            {text:"ritche",correct:false},
            {text:"guido",correct:false},

        ]
    }, {
        id:7,
        category:"python",
        question:"how to define a set in python ?",
        mode:"intermediate",
        mark:6,
        choices:[
            {text:"set()",correct:true}, 
            {text:"{}",correct:false},
            {text:"[]",correct:false},

        ]
    },

]


//total number of question
//console.log(questions.length);

//is c# category available
var isAvailable = questions.some(q=>q.category == "c#")
//console.log(isAvailable);

//total marks

var total = questions.map(q=>q.mark).reduce((m1,m2)=>m1+m2)
//console.log(total);

// print python category questions
var pycatgry = questions.filter(q=>q.category == "python").map(q=>q.question)
//console.log(pycatgry);

//beginer level question
var beginer = questions.filter(q=>q.mode == "beginner").map(q=>q.question)
//console.log(beginer);

//print ans of qstn with id 7
//find()

var qsnans=questions.find(q=>q.id==7).choices.find(c=>c.correct==true).text
console.log(qsnans);

//all qsn ans
var qsnans=questions.map(q=>q.choices)
console.log(qsnans);

var allans=questions.map(q=>q.choices).flat().filter(c=>c.correct==true)
console.log(allans);

//for Each()
var arr=[1,2,3,5]
arr.forEach(n=>console.log(n))