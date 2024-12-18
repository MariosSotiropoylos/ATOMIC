// Function to dynamically calculate and display the STAT Total
 function calculateAndDisplayStatTotal() {
   // Get values of Health, Attack, Defense, and Intelligence fields
    const health = parseInt(document.getElementById('input6').value, 10) || 0;
    const attack = parseInt(document.getElementById('input7').value, 10) || 0;
    const defense = parseInt(document.getElementById('input8').value, 10) || 0;
    const intelligence = parseInt(document.getElementById('input10').value, 10) || 0;

   // Calculate the total
    const total = health + attack + defense + intelligence;

   // Update the STAT Total field (input12)
    const statTotalField = document.getElementById('input12');
    statTotalField.value = total;

   // Display or hide the error if the total is not equal to 20
    const statErrorElement = document.getElementById('errorInput12.5');
    if (total !== 20) {
        statErrorElement.style.display = 'inline'; // Display the error if the total is not equal to 20
    } 
	else {
        statErrorElement.style.display = 'none'; // Hide the error 
    }
}


// Add event listeners to the relevant input fields
  ['input6', 'input7', 'input8', 'input10'].forEach(fieldId => {
    document.getElementById(fieldId).addEventListener('input', calculateAndDisplayStatTotal);
});