const problems = [
    { problem: "50 + 30", answer: 50 + 30 },
    { problem: "120 - 40", answer: 120 - 40 },
    { problem: "70 * 20", answer: 70 * 20 },
    { problem: "8 + 6", answer: 8 + 6 },
    { problem: "15 - 9", answer: 15 - 9 },
    { problem: "3 * 5", answer: 3 * 5 },
    { problem: "10 + 7", answer: 10 + 7 },
    { problem: "20 - 11", answer: 20 - 11 },
    { problem: "6 * 4", answer: 6 * 4 },
    { problem: "9 + 2", answer: 9 + 2 },
    { problem: "14 - 8", answer: 14 - 8 },
    { problem: "5 * 3", answer: 5 * 3 },
    { problem: "13 + 6", answer: 13 + 6 },
    { problem: "18 - 5", answer: 18 - 5 },
    { problem: "7 * 7", answer: 7 * 7 },
    { problem: "11 + 9", answer: 11 + 9 },
    { problem: "25 - 13", answer: 25 - 13 },
    { problem: "8 * 3", answer: 8 * 3 },
    { problem: "10 + 4", answer: 10 + 4 },
    { problem: "16 - 7", answer: 16 - 7 }
];

let index = 0;

export const generateProblem = () => {
    const { problem, answer } = problems[index];
    index = (index + 1) % problems.length; 
    return { problem, answer };
};
