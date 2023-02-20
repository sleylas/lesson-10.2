const students = [
    [
        { "name": "Ivan", "score": 35, "date": "2022-10-11" },
        { "name": "Maria", "score": 5, "date": "2022-10-10" },
        { "name": "Olga", "score": 0, "date": "" },
        { "name": "Stepan", "score": 35, "date": "2022-10-12" },
        { "name": "Oleg", "score": 9, "date": "2022-10-01" },
        { "name": "Zanna", "score": 15, "date": "2022-10-11" }
    ],
    [
        { "name": "Margo", "score": 0, "date": "2022-10-11" },
        { "name": "Natalia", "score": 25, "date": "2022-10-10" },
        { "name": "Marina", "score": 25, "date": "2022-10-01" },
        { "name": "Dmitry", "score": 25, "date": "2022-10-12" },
        { "name": "Denis", "score": 0, "date": "2022-10-02" },
        { "name": "Vadimyr", "score": 1, "date": "2022-10-11" }
    ],
    [
        { "name": "Irina", "score": 0, "date": "2022-10-11" },
        { "name": "Vasily", "score": 0, "date": "2022-10-10" },
        { "name": "David", "score": 0, "date": "2022-10-11" },
        { "name": "Kristina", "score": 0, "date": "2022-10-12" },
        { "name": "Varvara", "score": 0, "date": "2022-10-01" },
        { "name": "Tanya", "score": 0, "date": "2022-10-11" }
    ]
]

function calculateGroupScore(group) {
    let bestStudent = {
        score: 0,
    };

    group.forEach(student => {
        if (student.score > bestStudent.score) {
            bestStudent = student;
        }
    });

    return bestStudent;
}

function calculateGroupsScore(groups) {
    let bestStudentInGroups = {
        score: 0,
    };

    groups.forEach(group => {
        const bestStudent = calculateGroupScore(group);

        if (bestStudent.score > bestStudentInGroups.score) {
            bestStudentInGroups = bestStudent;
        }
    });

    return bestStudentInGroups;
}

console.log("calculateGroupsScore ALL: ", calculateGroupsScore(students));

console.log("calculateGroupScore 1: ", calculateGroupScore(students[0]));
console.log("calculateGroupScore 2: ", calculateGroupScore(students[1]));
console.log("calculateGroupScore 3: ", calculateGroupScore(students[2]));

/*
    calculateGroupsScore ALL:  { name: 'Ivan', score: 35, date: '2022-10-11' }
    
    calculateGroupScore 1:  { name: 'Ivan', score: 35, date: '2022-10-11' }
    calculateGroupScore 2:  { name: 'Natalia', score: 25, date: '2022-10-10' }
    calculateGroupScore 3:  { score: 0 }
*/

module.exports = {
    students: students,
    calculateGroupsScore: calculateGroupsScore,
    calculateGroupScore: calculateGroupScore
};