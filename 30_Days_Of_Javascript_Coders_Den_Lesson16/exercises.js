const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

//Exercises Level 1
//Question 1: Change skills array to JSON using JSON.stringify()
const skillsArrToJson = JSON.stringify(skills, undefined, 4);
console.log(skillsArrToJson); //"JS",???"React",???"Node",???"Python"]

//Question 2: Stringify the age variable
const ageVarToJson = JSON.stringify(age);
console.log(ageVarToJson); //result: 250

//Question 3: Stringify the isMarried variable
const marriedVarToJson = JSON.stringify(isMarried);
console.log(marriedVarToJson); //result: true??????

//Question4: Stringify the student object
const studentObjToJson = JSON.stringify(student, undefined, 2);
console.log(studentObjToJson);

//Exercises Level 1
//Question 1: Stringify the students object with only firstName, lastName and skills properties
const studentObjNameSkillsToJson = JSON.stringify(
  student,
  ["firstName", "lastName", "skills"],
  2
);
console.log(studentObjNameSkillsToJson); // result: {???"firstName": "Asabeneh",???"lastName": "Yetayehe",???"skills": [???"HTML",??? "CSS",???"JS",???"React",??? "Node",??? "Python"???]???}

//Exercise Level 3
//Question 1: Parse the txt JSON to object.
txtJsonToObj = JSON.parse(txt);
console.log(txtJsonToObj);

//Question 2: Find the the user who has many skills from the variable stored in txt.
// txtHighestSkillsJsonToObj = JSON.parse(
//   txt,

//   (key, value) => {
//     result = 0;
//     for (const i of txt) {
//       if (i.key == "skills" && i.val.length > result) {
//         result = val.length;
//       }
//     }
//     return result;
//   }
// );

// console.log(txtHighestSkillsJsonToObj);
