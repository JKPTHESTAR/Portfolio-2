const calculatorFormEl = document.getElementById("calculatorFormId");
const resultEl = document.getElementById("resultId");


const calculateMarks = (event) => {
    event.preventDefault();


    const formData = new FormData(calculatorFormEl);
    const data = {};
    formData.forEach((value, key) => {
        data[key]= +value;
    });
    console.log(data, formData)


    const maxMarks = 400;
    const totalMarks = data.math + data.english + data.hindi + data.science;
    const percentage = ((totalMarks / maxMarks)*100).toFixed(2);
    let grade;
    if (percentage>=80) {
        grade = "A"
    } else if (percentage>=60) {
        grade = "B"
    } else if (percentage>=50) {
        grade = "C"
    } else if (percentage>=40) {
        grade = "D"
    } else if (percentage>=35) {
        grade = "E"
    }
       

    if ((data.math<35 || data.science<35 || data.hindi<35 || data.english<35)) {
        resultEl.innerHTML = `You are Fail <br><span style="color:red">Grade = F</span>`
    } else {
        resultEl.innerHTML = `You are Pass <br>You have got ${totalMarks} out of ${maxMarks} <br>your percentage are ${percentage}%   <br><span style="color:yellow">Grade = ${grade}</span>`;
    };

    
};