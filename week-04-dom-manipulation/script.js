
// When this function is called, it takes the values from the inputs and adds
// them to the outputs.
function fillOutputs() {

  // Get the adjective input element
  const adjectiveOneInput = document.getElementById('adjective-one-input');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneInput.value;

  // Get the adjective output element
  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Set the text of the input element
  adjectiveOneOutput.innerText = adjectiveOne;

  // Get the output container element
  const outputDiv = document.getElementById('output1');
  // Make the output container element visible
  outputDiv.style.display = 'block';

}

function fillnounOutput() {

	const nounOneInput = document.getElementById('noun-one-input');

	const nounOne = nounOneInput.value

	const nounOneOutput = document.getElementById('noun-one-output');

	nounOneOutput.innerText = nounOne;

	const output2Div = document.getElementById('output2');

	output2Div.style.display = 'block';

}


function fillAdjectiveTwoOutput() {

	const adjectiveTwoInput = document.getElementById('adjective-two-input');

	const adjectiveTwo = adjectiveTwoInput.value

	const adjectiveTwoOutput = document.getElementById('adjective-two-output');

	adjectiveTwoOutput.innerText = adjectiveTwo;

	const output3Div = document.getElementById('output3');

	output3Div.style.display = 'block';

}

function fillbattlecryOutput() {

	const battlecryOneInput = document.getElementById('battlecry-one-input');

	const battlecryOne = battlecryOneInput.value

	const battlecryOneOutput = document.getElementById('battlecry-one-output');

	battlecryOneOutput.innerText = battlecryOne;

	const output4Div = document.getElementById('output4');

	output4Div.style.display = 'block';

}

function fillkingdomOutput() {

	const kingdomOneInput = document.getElementById('kingdom-one-input');

	const kingdomOne = kingdomOneInput.value

	const kingdomOneOutput = document.getElementById('kingdom-one-output');

	kingdomOneOutput.innerText = kingdomOne;

	const output5Div = document.getElementById('output5');

	output5Div.style.display = 'block';

}
