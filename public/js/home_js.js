function sort_by_name()
{
	$("#post_selection_for_home_sort_by_name").submit();
	console.log("THIS IS SORT BY NAME FUCNTION BEING EXCECUTED");
}
function sort_by_year()
{
	$("#post_selection_for_home_sort_by_year").submit();
	console.log("THIS IS SORT BY YEAR FUCNTION BEING EXCECUTED");
}

function sort_by_rating()
{
	$("#post_selection_for_home_sort_by_rating").submit();
	console.log("THIS IS SORT BY YEAR FUCNTION BEING EXCECUTED");
}

function sort_by_random()
{
	$("#post_selection_for_home_sort_by_random").submit();
	console.log("THIS IS SORT BY RANDOM BEING EXECUTED");
	
}

function logout()
{
	$("#logout_form").submit();
	console.log("THIS IS THE LOGOUT FUNCTION BEING EXECUTED.");
}
function info_symbol_1(i)
{
	console.log($("#info_symbol_form_"+ i.toString()).attr('action'));
	$("#info_symbol_form_" + i.toString()).submit();
	console.log("info button was clicked in the row");
}

function info_symbol_2(i)
{
	console.log($("#info_symbol_form_"+ (i+1).toString()).attr('action'));
	$("#info_symbol_form_" + (i+1).toString()).submit();
	console.log("info button was clicked in the row");
}

function info_symbol_3(i)
{
	console.log($("#info_symbol_form_"+ (i+2).toString()).attr('action'));
	$("#info_symbol_form_" + (i+2).toString()).submit();
	console.log("info button was clicked in the row");
}
