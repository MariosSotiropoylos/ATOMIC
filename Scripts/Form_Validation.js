// Function to validate the form
 function validateForm(event) {
    let isValid = true;

   // Reset all error messages
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(errorMessage => {
        errorMessage.style.display = 'none';
    });

   // Validate EACH input
    const fields = [
        { id: 'input1', errorId: 'errorInput1' },
        { id: 'input2', errorId: 'errorInput2' },
        { id: 'input3', errorId: 'errorInput3' },
        { id: 'input4', errorId: 'errorInput4' },
        { id: 'input5', errorId: 'errorInput5' },
        { id: 'input6', errorId: 'errorInput6' },
        { id: 'input7', errorId: 'errorInput7' },
        { id: 'input8', errorId: 'errorInput8' },
        { id: 'input9', errorId: 'errorInput9' },
        { id: 'input10', errorId: 'errorInput10' },
        { id: 'input11', errorId: 'errorInput11' }
    ];

    fields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const errorElement = document.getElementById(field.errorId);

   // Criteria 1: Check if the field is empty
        if (!inputElement.value.trim()) {  
            errorElement.style.display = 'inline'; // Show error message
            isValid = false;
        }
    });

   // Criteria 2: Validate min and max range for specific inputs
    const rangeFields = [
	    { id: 'input3', errorId: 'errorInput3.5', min: 1}, // Age
        { id: 'input6', errorId: 'errorInput6.5', min: 1, max: 20 }, // Health
        { id: 'input7', errorId: 'errorInput7.5', min: 1, max: 20 }, // Attack
        { id: 'input8', errorId: 'errorInput8.5', min: 1, max: 20 }, // Defense
        { id: 'input10', errorId: 'errorInput10.5', min: 1, max: 20 } // Intelligence
    ];

    rangeFields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const errorElement = document.getElementById(field.errorId);
        const value = parseInt(inputElement.value, 10);

        if (isNaN(value) || value < field.min || value > field.max) {
            errorElement.style.display = 'inline'; // Show error message
            isValid = false;
        }
    });

   // Criteria 3: Validate the STAT Total field 
    const health = parseInt(document.getElementById('input6').value, 10) || 0;
    const attack = parseInt(document.getElementById('input7').value, 10) || 0;
    const defense = parseInt(document.getElementById('input8').value, 10) || 0;
    const intelligence = parseInt(document.getElementById('input10').value, 10) || 0;

    const calculatedTotal = health + attack + defense + intelligence;
	
    const statTotal = parseInt(document.getElementById('input12').value, 10) || 0;
    const statErrorElement = document.getElementById('errorInput12.5');
	
    if (calculatedTotal !== 20 || statTotal !== 20) {
        statErrorElement.style.display = 'inline'; // Show error if the sum is not 20
        isValid = false;
    }

   // Criteria 4: Ensure an image is selected
    if (!selectedImagePath) {
        alert('Please select an appereance');
        isValid = false;
    }

    return isValid; // Return false if any validation fails
}