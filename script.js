let page;
let flag = false;
let counter = 1;
let add_button;

document.addEventListener("DOMContentLoaded", function () {
    page = document.getElementById("grade_input");

    add_button = document.querySelector(".add_input");

    add_button.addEventListener("click", function () {
        flag = true;
        counter += 1;

        if (flag) {
            page.innerHTML += `
               <div class="grade_input">
                    <span class="grade">
                        Course Unit: <input type="number" class="fld" id="units_${counter}">
                        Grade: <input type="number" class="fld" id="grade_${counter}">
                    </span>
                </div> 
            `;
        }
    });

    let compute = document.getElementById("compute");
    let result = document.getElementById("result");

    compute.addEventListener("click", function () {
        let unitxgrade = 0;
        let totalUnits = 0;

        for (let i = 1; i <= counter; i++) {
            let units = parseFloat(document.getElementById(`units_${i}`).value);
            let grade = parseFloat(document.getElementById(`grade_${i}`).value);

            // If units and grade are valid numbers, accumulate their product
            if (!isNaN(units) && !isNaN(grade)) {
                unitxgrade += units * grade;
                totalUnits += units;
            }
        }

        let gpa = totalUnits ? (unitxgrade / totalUnits) : 0;

        result.innerHTML = '';
        result.innerHTML = `GPA: ${gpa.toFixed(2)}`;
    });
});
