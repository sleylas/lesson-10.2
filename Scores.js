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
];

function calculateGroupScore(group) {
    let bestStudent = {
        score: 0,
    };

    group.forEach(student => {
        if (student.score === bestStudent.score) {
            if (+new Date(student.date) < +new Date(bestStudent.date)) {
                bestStudent = student;
            }
        } else if (student.score > bestStudent.score) {
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

function printTheBest(best, message_success, message_not_found) {
    if (best.score !== 0) {
        console.log(message_success, best.name);
    } else {
        console.log(message_not_found);
    }
}

printTheBest(calculateGroupsScore(students), "Congrats!!! You are the best student among All groups:", "Vo vsex qruppax net luchshego");

printTheBest(calculateGroupScore(students[0]), "Congrats!!! You are the best student among group 1: ", "No best student among group 1");
printTheBest(calculateGroupScore(students[1]), "Congrats!!! You are the best student among group 2: ", "No best student among group 2");
printTheBest(calculateGroupScore(students[2]), "Congrats!!! You are the best student among group 3", "No best student among group 3");

/*
    calculateGroupsScore ALL:  { name: 'Ivan', score: 35, date: '2022-10-11' }
    
    calculateGroupScore 1:  { name: 'Ivan', score: 35, date: '2022-10-11' }
    calculateGroupScore 2:  { name: 'Marina', score: 25, date: '2022-10-01' }
    calculateGroupScore 3:  { score: 0 }
*/

module.exports = {
    students: students,
    calculateGroupsScore: calculateGroupsScore,
    calculateGroupScore: calculateGroupScore
};