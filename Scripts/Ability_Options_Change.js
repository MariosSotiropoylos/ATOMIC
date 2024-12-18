// Event listener for species dropdown
        document.getElementById('input5').addEventListener('change', function () {
          const selectedValue = this.value;
          updateAbilitiesOptions(selectedValue); // Dynamically change the ability options based on selected species
        });
		
		
// Function to update ability options based on the selected species
        function updateAbilitiesOptions(species) {
            const abilitiesDropdown = document.getElementById('input9');
            abilitiesDropdown.innerHTML = ''; // Clear current options
			
		// Add the "Choose Ability" option back to the dropdown
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Choose Ability';
            defaultOption.selected = true;
            defaultOption.disabled = true;
            abilitiesDropdown.appendChild(defaultOption);

            let abilities = [];

        // Set abilities based on the species selected
            if (species === 'Knight') {
                abilities = ['Grand Slash', 'Berserker Fury'];
            } 
			else if (species === 'Elf') {
                abilities = ['Bullseye Barrage', 'Elemental Shot'];
            } 
			else if (species === 'Wizard') {
                abilities = ['Army of the Dead', 'Darkness Supreme'];
            } 
			else if (species === 'Thief') {
                abilities = ['Phantom Backstrike', 'Fool\'s Substitute'];
            }
			
        // Add options to abilities dropdown
            abilities.forEach(function(ability) {
                const option = document.createElement('option');
                option.value = ability;
                option.textContent = ability;
                abilitiesDropdown.appendChild(option);
            });
        }