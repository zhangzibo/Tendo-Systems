'use strict'

var json = require('./data.json');
// console.log(json["entry"][0]["resource"]["name"], 'the json obj');

let firstname = json["entry"][0]["resource"]["name"][0]["given"][0]

let doctorlastname = json["entry"][1]["resource"]["name"][0]["family"]
// console.log(doctorlastname)
let diagnosis = json["entry"][3]["resource"]["code"]["coding"][0]["name"]
// console.log(diagnosis)


function question_one(){
  var first_question = prompt("Hi "+ firstname +" , on a scale of 1-10, would you recommend Dr "+ doctorlastname +" to a friend or family member? 1 = Would not recommend, 10 = Would strongly recommend")
  if (first_question>=1 && first_question<=10){
    return "thank you"
  } 
  else{
    return "please enter a correct number"
    }
}

function question_two(){
  var second_question= prompt("Thank you. You were diagnosed with " + diagnosis+ ". Did Dr "+ doctorlastname+ " explain how to manage this diagnosis in a way you could understand?")
  return "thank you"
}

function question_three(){
  var third_question = prompt( "We appreciate the feedback, one last question: how do you feel about being diagnosed with " +diagnosis+ "?")
  return "thank you"
}

