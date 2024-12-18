// Function to update the bonus based on species, ability, and weapon combinations
  function updateBonus() {
    const species = document.getElementById('input5').value;
    const ability = document.getElementById('input9').value;
    const weapon = document.getElementById('input11').value;
    let Bonus = '';
	
  // Get the BonusDescriptionContainer element
    const bonusDescriptionContainer = document.getElementById('BonusDescriptionContainer');

  // Only update if all required fields are selected
    if (species && ability && weapon) {
       // Define combinations for species - weapons - abilities:
	   // For Sword weapon 
        if (species === 'Knight' && ability === 'Grand Slash' && weapon === 'Sword') {
            Bonus = 'Attack +2 & Grand Slash radius increases';
        } 
        else if (species === 'Knight' && ability === 'Berserker Fury' && weapon === 'Sword') {
            Bonus = 'Attack +2 & Berserker Fury raises Attack a bit more';
        } 
        else if (species === 'Wizard' && weapon === 'Sword') {
            Bonus = 'Attack -2';
        } 
        
       // For Bow weapon 
        else if (species === 'Elf' && weapon === 'Bow & Arrows') {
            Bonus = 'Attack +2 & Critical hits more likely (+16%)';
        }
        else if (species === 'Thief' && weapon === 'Bow & Arrows') {
            Bonus = 'Defense -2';
        }  

       // For Book weapon 
        else if (species === 'Wizard' && ability === 'Army of the Dead' && weapon === 'Tome of Shadows') {
            Bonus = 'Attack +2 & Health regeneration equal to half of the damage caused';
        } 
        else if (species === 'Wizard' && ability === 'Darkness Supreme' && weapon === 'Tome of Shadows') {
            Bonus = 'Attack +2 & Cursed status last longer and causes more damage each turn';
        } 
        else if (species === 'Knight' && weapon === 'Tome of Shadows') {
            Bonus = 'Attack -2';
        }
		
       // For Gun weapon 
        else if (species === 'Thief' && ability === 'Phantom Backstrike' && weapon === 'Buccaneer Gun') {
            Bonus = 'Attack +2 & Phantom Backstrike causes more damage';
        } 
        else if (species === 'Thief' && ability === "Fool's Substitute" && weapon === 'Buccaneer Gun') {
            Bonus = 'Attack +2 & Explosion causes splash damage to nearby enemies';
        } 
        else if (species === 'Elf' && weapon === 'Buccaneer Gun') {
            Bonus = 'Attack -2';
        }  

       // For Shield weapon 
        else if (species === 'Knight' && weapon === 'Enchanted Shield') {
            Bonus = 'Defense +3';
        } 
        else if (species === 'Elf' && weapon === 'Enchanted Shield') {
            Bonus = 'Defense +3';
        } 
        else if (species === 'Wizard' && weapon === 'Enchanted Shield') {
            Bonus = 'Defense +3';
        } 
        else if (species === 'Thief' && weapon === 'Enchanted Shield') {
            Bonus = 'Defense +3';
        }
		else {
        Bonus = ''; // Default (no Bonus)
        }

        document.getElementById('input13').value = Bonus;// Update the textarea with the bonus
    }
	
   // Show or hide the BonusDescriptionContainer based on the criteria
    if (Bonus) {
        bonusDescriptionContainer.style.display = 'block'; // Show the container if criteria match (there is a bonus)
    } 
	else {
        bonusDescriptionContainer.style.display = 'none'; // Hide the container if no match (there is no bonus)
    }
 }

  // Add event listeners to species, ability, and weapon dropdowns
    document.getElementById('input5').addEventListener('change', updateBonus);
    document.getElementById('input9').addEventListener('change', updateBonus);
    document.getElementById('input11').addEventListener('change', updateBonus);