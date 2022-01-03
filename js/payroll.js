const form = document.getElementById('form')

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

form.addEventListener('submit', (e) =>{
    save()

    console.log("inside save")

} )


function save() {
    console.log("inside save")

    const payrollData = {

        "profilePic": getSelectedValues('[name = profileimage]').pop(),
        "empName": document.querySelector('#emName').value,
        "empGender": getSelectedValues('[name = gender]').pop(),
        "empDept": getSelectedValues('[name = department]').pop(),
        "empSalary": document.getElementById('salary').value,
        "empStartDate": document.getElementById('day').value + "/" + document.getElementById('month').value + "/" + document.getElementById('year').value,
        "empNote": getInputValueById('#notes'),
    }

    console.log("input data", payrollData)
    $.ajax({
        url: "http://localhost:3000/employees",
        type: "POST",
        data: payrollData,
       

        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });

}