const {
    students,
    calculateGroupScore,
    calculateGroupsScore
} = require("./Scores.js");

describe('The best student in the group is', () => {
    test('The max score in 1st group must match exactly', () => {
        expect(calculateGroupScore(students[0])).toMatchObject({ name: 'Ivan', score: 35, date: '2022-10-11' });
    });

    test('The max score in 2nd group must match exactly', () => {
        expect(calculateGroupScore(students[1])).toMatchObject({ name: 'Natalia', score: 25, date: '2022-10-10' });
    });

    test('The max score in 3rd group must match exactly', () => {
        expect(calculateGroupScore(students[2])).toMatchObject({ score: 0 });
    });

});