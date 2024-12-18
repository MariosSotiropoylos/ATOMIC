// Ability descriptions map
    const abilityDescriptions = {
    'Grand Slash': 'A devastating sword strike that deals immense damage to enemies.',
    "Berserker Fury": 'An uncontrollable & almost animalistic rage, boosting attack but lowering defense.',
    'Bullseye Barrage': 'A precise onslaught of arrows targeting the enemy\'s weak points (high critical hit ratio).',
    'Elemental Shot': 'Fires arrows imbued with the power of flame, frost, or thunder causing the burn, frozen or paralysed status.',
    'Army of the Dead': 'Summons a massive horde of undead soldiers and restless souls to attack the enemy.',
    'Darkness Supreme': 'Casts an eldritch, archaic spell that targets the very souls of the enemies on the battlefield, weakening them and causing the cursed status.',
    'Phantom Backstrike': 'Hides in the shadows and performs a quick strike from behind, dealing damage undetected.',
    "Fool's Substitute": 'Creates a fake duplicate that takes the enemy\'s attack. On rare occasions (~10%) it is filled with explosives, causing damage to the attacker.'
};


// Event listener for the abilities dropdown
    document.getElementById('input9').addEventListener('change', function () {
     const selectedAbility = this.value;
     const descriptionContainer = document.getElementById('abilityDescriptionContainer');
     const descriptionField = document.getElementById('abilityDescription');

     if (abilityDescriptions[selectedAbility]) {
        descriptionField.value = abilityDescriptions[selectedAbility]; // Update (Fill) the textarea with the description
        descriptionContainer.style.display = 'block'; // Make the container visible
     } 
	 else {
        descriptionContainer.style.display = 'none'; // Clear the textarea if no ability is selected
        descriptionField.value = ''; // Hide the container 
     }
});
		