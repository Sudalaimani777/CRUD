const names = [
    {
        firstName : "Arun",
        lastName  : "Kumar",
        email : "arun123@gmail.com",
        mobileNo : Math.floor(Math.random()*10000000000),
    }
];

const userDetails = document.getElementById("userDetails");
const tableRefersh = () => {
    userDetails.innerHTML = names.map((customerDetails, index) => {
        return `
                    <tr>
                        <td>${customerDetails.firstName}</td>
                        <td>${customerDetails.lastName}</td>
                        <td>${customerDetails.email}</td>
                        <td>${customerDetails.mobileNo}</td>
                        <td><button id = "delete-btn" onClick = "handlesDelete(${index})">Delete</button></td>
                    </tr>
                `;
}).join("");
}
tableRefersh();

const handleSubmitEvent = () => {
    const firstName = document.getElementById("inputFirstName").value;
    const lastName = document.getElementById("inputLastName").value;
    const emailID = document.getElementById("inputEmail").value;
    const mobileNumber = document.getElementById("inputMobileNumber").value;

    const newUsers = 
        {
            firstName : firstName,
            lastName  : lastName,
            email : emailID,
            mobileNo : mobileNumber, 
        }
    
    console.log(newUsers);

//IF ANY ONE OF THE FIELDS ARE NOT ENTERED THE TABLE WON'T PUSH THE ARRAY
//SO WE CAN USE THE IF STATEMENT

        if(firstName === "" || lastName === "" || emailID === "" ||mobileNumber === ""){
            alert("Please fill all the details");
        }
        else{
            names.push(newUsers);
        }
    tableRefersh();
    
    // FOR RESET THE EMPTY FIELD
        document.getElementById("inputFirstName").value = "";
        document.getElementById("inputLastName").value = ";"
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputMobileNumber").value = "";
}


/*DELETE BUTTON WAS WORKED BASED ON THE SPLICE
 CLICK -> INDEX -> SPLICE(CUT)
*/

//NOTES :
/*
TO INSERT DATA :
    1)CAPTURE THE DATA
    2)CREATE OBJECT
    3)SAVE THE OBJECT IN THE CREATED ARRAY
 */

const handlesDelete = (index) => {
        names.splice(index, 1);
        tableRefersh();

}
