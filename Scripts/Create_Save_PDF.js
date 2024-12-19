// Save as PDF with the selected image
 function saveToPDF() {
    if (!selectedImagePath) {
        alert('Please select an appearance');
        return;
    }

    if (!validateForm()) {
        alert('Please fill in all required fields.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Convert ArrayBuffer to Base64 (safe for binary data)
    function arrayBufferToBase64(buffer) {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    // Load the local font file (here the NotoSans-Regular.ttf)
    fetch('./fonts/NotoSans-Regular.ttf') 
        .then((response) => response.arrayBuffer())
        .then((fontData) => {
            // Convert font to Base64
            const base64Font = arrayBufferToBase64(fontData);

            // Add the font to jsPDF
            doc.addFileToVFS("NotoSans-Regular.ttf", base64Font);
            doc.addFont("NotoSans-Regular.ttf", "NotoSans", "normal");
            doc.setFont("NotoSans"); // Set font for all text in PDF

            // Generate the PDF
            const inputs = [
                document.getElementById('input1').value, // Name
                document.getElementById('input2').value, // Surname
                document.getElementById('input3').value, // Age
                document.getElementById('input4').value, // Attire Color
                document.getElementById('input5').value, // Species
                document.getElementById('input6').value, // Health
                document.getElementById('input7').value, // Attack
                document.getElementById('input8').value, // Defense
                document.getElementById('input9').value, // Ability
                document.getElementById('input10').value, // Intelligence
                document.getElementById('input11').value // Weapon
            ];

            const selectedAbility = document.getElementById('input9').value;
            const abilityDescription = abilityDescriptions[selectedAbility] || 'No description available.';

            const Bonus = document.getElementById('input13').value || 'No bonus available.';

            const hexColor = inputs[3];
            const r = parseInt(hexColor.substr(1, 2), 16);
            const g = parseInt(hexColor.substr(3, 2), 16);
            const b = parseInt(hexColor.substr(5, 2), 16);

            // Add the selected image to the PDF
            const img = new Image();
            img.src = selectedImagePath;

            img.onload = function () {
                const imgWidth = 50;
                const imgHeight = 50;
                const pageWidth = doc.internal.pageSize.getWidth();
                const marginRight = 10;
                const marginTop = 10;

                // Add the image to the top right corner of the first page
                doc.addImage(img, 'JPEG', pageWidth - imgWidth - marginRight, marginTop, imgWidth, imgHeight);

                let startY = marginTop; // Start drawing fields below the image
                const fieldHeight = 15;
                const gapBetweenFields = 6;
                const pageHeight = doc.internal.pageSize.height;

                const fields = [
                    `Name: ${inputs[0]}`,
                    `Surname: ${inputs[1]}`,
                    `Age: ${inputs[2]}`,
                    `Species: ${inputs[4]}`,
                    `Health: ${inputs[5]}`,
                    `Attack: ${inputs[6]}`,
                    `Defense: ${inputs[7]}`,
                    `Intelligence: ${inputs[9]}`,
                    `Ability: ${inputs[8]}`,
                    `Weapon: ${inputs[10]}`
                ];

                // Loop through fields and add them to the PDF
                fields.forEach((field) => {
                    if (startY + fieldHeight > pageHeight - 20) {
                        doc.addPage();
                        startY = marginTop; // Reset startY for the new page
                    }
                    doc.rect(10, startY, 100, fieldHeight); // Draw a rectangle 
                    doc.text(field, 15, startY + fieldHeight / 2 + 5); // Add the 'text'
                    startY += fieldHeight + gapBetweenFields; // Update startY 

                    // If the current field is Ability, add its description below:
                    if (field.includes('Ability:')) {
                        const descriptionFontSize = 10; // Smaller font size for the description
                        const maxWidth = 180; // Maximum width of the text area
                        doc.setFontSize(descriptionFontSize); // Reduce font size for description
                        const wrappedDescription = doc.splitTextToSize(abilityDescription, maxWidth); // Wrap the ability description text
                        startY += 0.3; // Add a small gap
                        doc.text(wrappedDescription, 15, startY); // Add the 'text'
                        doc.setFontSize(17); // Reset font size to default for subsequent fields
                        startY += wrappedDescription.length * 5; // Adjust for the number of lines
                    }

                    // If the current field is "Weapon" and bonus exists, add the bonus below the Weapon field:
                    if (field.includes('Weapon:') && Bonus && Bonus !== 'No bonus available.') {
                        const bonusFontSize = 10; // Smaller font size for the bonus description
                        const maxWidth = 180; // Maximum width of the text area
                        doc.setFontSize(bonusFontSize); // Reduce font size for the bonus
                        const wrappedBonus = doc.splitTextToSize(Bonus, maxWidth); // Wrap the bonus content text
                        startY += 0.3; // Add a small gap
                        doc.text(wrappedBonus, 15, startY); // Add the 'text'
                        doc.setFontSize(17); // Reset font size to default for subsequent fields
                        startY += wrappedBonus.length * 5; // Adjust for the number of lines
                    }
                });

                // Draw the color square for the attire color
                doc.rect(10, startY, 100, fieldHeight);
                doc.text('Attire color: ', 15, startY + fieldHeight / 2 + 5);
                doc.setFillColor(r, g, b); // Set the fill color for the square
                doc.setDrawColor(0, 0, 0); // Set the border color to black
                const squareSize = 10; // size of the square
                doc.rect(95 - squareSize - 5, startY + (fieldHeight - squareSize) / 2, squareSize, squareSize, 'FD'); // 'F' = fill, 'D' = draw border

                // Save the PDF
                doc.save('MyCharacter.pdf');
            };

            img.onerror = function () {
                alert('Failed to load the image from the path: ' + selectedImagePath);
            };
        })
        .catch((error) => {
            alert('Failed to load the font: ' + error.message);
        });
}
