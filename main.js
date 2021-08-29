function ArrayChallenge(stringArray) {
    var array = stringArray
        .toString()
        .split(",")
        .map(Number);

	const count = array[0];

	for (let i = 0; i < count; i++) {
  	    array.push(array.shift());
  }

   return array.join("");
}

function DisplayResult() {
    let inputValue = document.querySelector(".input_value").value;
    var result = ArrayChallenge(inputValue.split(","));
    document.querySelector(".out").innerHTML = result;
}
