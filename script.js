var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula

	if(option_from === "meter" && option_to==="kilometer"){
		//this is meter to kilometer formula 
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "meter" && option_to==="Centimeter"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 100;

	}else if(option_from === "meter" && option_to==="meter"){
		//this is meter to meter formula 
		result.value = input.value
	}



	if(option_from === "kilometer" && option_to==="meter"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilometer" && option_to==="Centimeter"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 100000;
	}else if(option_from === "kilometer" && option_to==="kilometer"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	}

	if(option_from === "Centimeter" && option_to==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "Centimeter" && option_to==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "Centimeter" && option_to==="Centimeter"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}
	if(option_from === "feet" && option_to==="inches"){
        result.value= Number(input.value)*12;
    }
	if(option_from === "feet" && option_to==="feet"){
        result.value= input.value;
    }
    if(option_from === "inches" && option_to==="feet"){
        result.value= Number(input.value)/12;
    }
	if(option_from === "inches" && option_to==="inches"){
        result.value= input.value;
    }
    if(option_from === "kilograms" && option_to==="grams"){
        result.value= Number(input.value)*1000;
    }
	else if(option_from === "kilograms" && option_to==="tonne"){
		result.value= Number(input.value)*0.001;
	}
	else if(option_from === "kilograms" && option_to==="kilograms"){
        result.value= input.value;
    }
    if(option_from === "tonne" && option_to==="grams"){
        result.value= Number(input.value)*1000000;
    }
	else if(option_from === "tonne" && option_to==="kilograms"){
		result.value= Number(input.value)*1000;
	}
	else if(option_from === "tonne" && option_to==="tonne"){
        result.value= input.value;
    }


    if(option_from === "grams" && option_to==="kilograms"){
        result.value= Number(input.value)*0.001;
    }
    if(option_from === "grams" && option_to==="tonne"){
        result.value= Number(input.value)*10**(-6);
    }
	else if(option_from === "grams" && option_to==="grams"){
        result.value= input.value;
    }



    
	if(option_from === "celsius" && option_to==="kelvin"){
        result.value= Number(input.value)+273.15;
    }
	else if(option_from === "celsius" && option_to==="fahrenheit"){
        result.value= (Number(input.value)*9/5)+32;
    }

    if(option_from === "kelvin" && option_to==="celsius"){
        result.value= Number(input.value)-273.15;
    }
	else if(option_from === "kelvin" && option_to==="fahrenheit"){
        result.value= (Number(input.value)-273.15)*(9/5)+32;
    }

	if(option_from === "fahrenheit" && option_to==="kelvin"){
        result.value= (Number(input.value)-32)*(5/9)+273.15;
    }
	
	else if(option_from === "fahrenheit" && option_to==="celsius"){
        result.value= (Number(input.value)-32)*(5/9);
    }





}
