input_box_array = [];

function getparagraph1()
{
var inputs = [];

for(var i = 1 ; i <=6 ; i++)

{
    inputs.push(document.getElementById("input_box_" + i).value);
}




document.getElementById("showParagraph1").innerHTML = inputs.join(". ");

inputs.join(". ");
}


input_box_2_array = [];

function getparagraph2()
{
var inputs = [];

for(var j = 1 ; j <=6 ; j++)

{
    inputs.push(document.getElementById("input_box_" + j).value);
}




document.getElementById("showParagraph2").innerHTML = inputs.join(". ");

inputs.join(". ");
}