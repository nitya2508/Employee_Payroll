// window.addEventListener('DOMContentLoaded', function (){
    console.log("hi")

  

    // const payrollData ={

    //     profilePic : selectedImage,
    //     empName : name,
    //     empGender : getSelectedValues('[name = gender]').pop(),
    //     empDept : empdepartment,
    //     empSalary :document.getElementById('salary').value,
    //     empStartDate : document.getElementById('day').value +"/"+ document.getElementById('month').value +"/"+ document.getElementById('year').value,
    //     empNote : getInputValueById('#notes'),
    // }
    // console.log("input data", payrollData)

    
        function save(){
            console.log("inside save")

            const selectedImage = () =>{

                var image1 = document.getElementById('profile_1').checked;
                var image2 = document.getElementById('profile_2').checked;
                var image3 = document.getElementById('profile_3').checked;
                var image4 = document.getElementById('profile_4').checked;
                
                if (image1 == true){
                    var pic1 = document.getElementById('profile_1').value;
                    return pic1;
                }
                else if(image2 == true){
                    var pic2 = document.getElementById('profile_2').value;
                    return pic2;
                }
                else if(image3 == true){
                    var pic3 = document.getElementById('profile_3').value;
                    return pic3;
                }
                else if(image4 == true){
                    var pic4 = document.getElementById('profile_4').value;
                    return pic2;
                }
            }

            var name = document.getElementById('emName').value;
            console.log(name);
        
            
        
            const empdepartment = () => {
                let empDept = [];
            
                var hrchecked = document.getElementById('hr').checked;
                var saleschecked = document.getElementById('sales').checked;
                var financechecked = document.getElementById('finance').checked;
                var engineerchecked = document.getElementById('engineering').checked;
                var otherschecked = document.getElementById('others').checked;
            
                if (hrchecked == true) {
                    var hrcheck = document.getElementById('hr').value;
                    empDept.push(hrcheck);
                }
                if (saleschecked == true) {
                    var salescheck = document.getElementById('sales').value;
                    empDept.push(salescheck);
                }
                if (financechecked == true) {
                    var financecheck = document.getElementById('finance').value;
                    empDept.push(financecheck);
                }
                if (engineerchecked == true) {
                    var engineercheck = document.getElementById('engineer').value;
                    empDept.push(engineercheck);
                }
                if (otherschecked == true) {
                    var othercheck = document.getElementById('others').value;
                    empDept.push(othercheck);
                }
            
                console.log(empDept);
                return empDept;
            }
        
           
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

            const payrollData ={

                "profilePic" : selectedImage,
                "empName" : name,
                "empGender" : getSelectedValues('[name = gender]').pop(),
                "empDept" : empdepartment,
                "empSalary" : document.getElementById('salary').value,
                "empStartDate" : document.getElementById('day').value +"/"+ document.getElementById('month').value +"/"+ document.getElementById('year').value,
                "empNote" : getInputValueById('#notes'),
            }

            console.log("input data", payrollData)
        
        }
// })