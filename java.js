function calculateGPA() {
    const gradesInput = document.getElementById('grades');
    const resultContainer = document.getElementById('result');
    const gpaValue = document.getElementById('gpaValue');
    const percentageValue = document.getElementById('percentageValue');

    const gradesArray = gradesInput.value.split(',').map(grade => parseFloat(grade.trim()));

    if (gradesArray.some(isNaN)) {
        alert('Please enter valid numeric grades.');
        return;
    }

    const totalSubjects = gradesArray.length;
    const totalGPA = gradesArray.reduce((acc, grade) => acc + gradeToGPA(grade), 0);
    const averageGPA = totalGPA / totalSubjects;
    const percentage = (averageGPA / 4.0) * 100;

    gpaValue.textContent = averageGPA.toFixed(2);
    percentageValue.textContent = percentage.toFixed(2);

    resultContainer.style.display = 'block';
}

function gradeToGPA(grade) {
    if (grade >= 97) {
        return 4.0;
    } else if (grade >= 93) {
        return 4.0;
    } else if (grade >= 90) {
        return 4.0;
    } else if (grade >= 87) {
        return 4.0;
    } else if (grade >= 84) {
        return 3.7;
    } else if (grade >= 80) {
        return 3.7;
    } else if (grade >= 78) {
        return 3.3;
    } else if (grade >= 73) {
        return 3.0;
    } else if (grade >= 69) {
        return 2.7;
    } else if (grade >= 63) {
        return 2.3;
    } else if (grade >= 60) {
        return 2.0;
    } else if (grade >= 57) {
        return 1.7;
    } else if (grade >= 53) {
        return 1.3;
    } else if (grade >= 50) {
        return 1.0;
    } else if (grade >= 47) {
        return 0.7;
    } 
     else {
        return 0.0;
    }
}

