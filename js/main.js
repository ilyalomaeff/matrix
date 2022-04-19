const equalButton = document.getElementById('equal');
const form = document.getElementById('matrixForm');
const clearButton = document.getElementById('clear');
const resInp = document.getElementById('inputToValuePrint');


function getInputRanges() {
    let arrRanges = [];
    let underArr = [];
    for(let index = 1; index < 10; index++) {
        let ind = index.toString();
        let val = document.getElementById('m' + ind + 'Value').value;
        underArr.push(val);
        if (index % 3 == 0) {
            arrRanges.push(underArr);
            underArr = [];
        }
    }
    console.log(arrRanges);
    return arrRanges;
}

function countDeterminant(arr) {
    return (arr[0][0] * arr[1][1] * arr[2][2] + arr[0][1] * arr[1][2] * arr[2][0] + arr[0][2] * arr[1][0] * arr[2][1] - (arr[0][2] * arr[1][1] * arr[2][0] + arr[0][0] * arr[1][2] * arr[2][1] + arr[0][1] * arr[1][0] * arr[2][2]))
}

function determinant() {
    document.getElementById('inputToValuePrint').value = countDeterminant(getInputRanges());
}

clearButton.addEventListener('click', () => {
    form.reset();
    resInp.value = 0;
});