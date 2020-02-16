function form_validation()
{
	// $("#value_of_input_first_name").val();
	console.log($("#value_of_input_first_name").val());	
	console.log($("#value_of_input_email").val());	
	console.log($("#value_of_input_password").val());

	var indicator_1 = 0; 
	var indicator_2 = 0; 
	var indicator_3 = 0; 
	var indicator_4 = 0; 

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
		indicator_1=0;
	}
	else
	{
		$("#message_for_wrong_name").text("");
		indicator_1=1;
	}

	//VALIDATING EMAIL
	if(!/\S+@\S+\.\S+/.test($("#value_of_input_email").val()))
	{
		console.log("NOT A VALID EMAIL");
		$("#message_for_wrong_email").text("Enter a valid email.");
		indicator_2=0 ;
	}
	else
	{
		$("#message_for_wrong_email").text("");
		indicator_2=1;
	}


	//VALIDATING PASSWORD

	if(!/(.*[A-Z].*)(.*\d.*)/.test($("#value_of_input_password").val()))
	{
		console.log("DOES NOT HAVE A INT OR UPPER CASE");
		$("#message_for_wrong_password").text("Password must contain a UpperCase letter and an integer.");
		indicator_3 =0;
	}
	else
	{
		indicator_3 =1;
		$("#message_for_wrong_password").text("");
	}

	if($("#value_of_input_password").val().length<8 )
	{
		console.log("SMALL PASSWORD");
		$("#message_for_wrong_password").text("Password must be 8 character long.");
		indicator_4 =0 ;
		
	}
	else
	{
		$("#message_for_wrong_password").text("");
		indicator_4 = 1;
	}

	if(indicator==1 && indicator_2==1 && indicator_3==1 & indicator_4==1)
	{
		$("#id_for_the_form").submit();
	}
}