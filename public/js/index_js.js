function form_validation()
{
	// $("#value_of_input_first_name").val();
	console.log($("#value_of_input_first_name").val());	
	console.log($("#value_of_input_email").val());	
	console.log($("#value_of_input_password").val());

	var indicator = 0; 

	//VALIDATING NAME
	// ^: Assert position at the beginning of the string
	// [a-zA-Z]: Match a single character present in the list below:
	// +: Between one and unlimited times, as many as possible, giving back as needed (greedy)
	// a-z: A character in the range between "a" and "z"
	// A-Z: A character in the range between "A" and "Z"
	// $: Assert position at the end of the string (or before the line break at the end of the string, if any)

	if(!/^[a-zA-Z]+$/.test($("#value_of_input_first_name").val()))
	{
		console.log("ALL ARE NOT CHARACTERS.");
		$("#message_for_wrong_name").text("Must only contain alphabets.");
		indicator=0;
	}
	else
	{
		$("#message_for_wrong_name").text("");
		indicator=1;
	}

	//VALIDATING EMAIL
	if(!/\S+@\S+\.\S+/.test($("#value_of_input_email").val()))
	{
		console.log("NOT A VALID EMAIL");
		$("#message_for_wrong_email").text("Enter a valid email.");
		indicator =0 ;
	}
	else
	{
		$("#message_for_wrong_email").text("");
		indicator=1;
	}

	//VALIDATING PASSWORD
	if($("#value_of_input_password").val().length<8 )
	{
		console.log("SMALL PASSWORD");
		$("#message_for_wrong_password").text("Password must be 8 character long.");
		indicator =0 ;
		
	}
	else
	{
		$("#message_for_wrong_password").text("");
		indicator = 1;
	}
	if(!/(.*[A-Z].*)(.*\d.*)/.test($("#value_of_input_password").val()))
		{
			console.log("DOES NOT HAVE A INT OR UPPER CASE");
			$("#message_for_wrong_password").text("Password must contain a UpperCase letter and an integer.");
			indicator =0;
		}
	else
	{
		indicator=1;
		$("#message_for_wrong_password").text("");
	}
}