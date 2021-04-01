var $ = function(id) {
    return document.getElementById(id);
};

var clearVal = function()
{
    $("result").value='';
    console.clear();
    $("result").focus();
}
var checkNum = function(str) {
for (var i = 0; i < str.length; i++) {
var ch = str.charAt(i);
if (ch < "0" || ch > "9") {
if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
&& ch != "(" && ch!= ")" && ch != "%") {
alert("Invalid Entry , Please Enter Correct Input (Only Numbers)");
    clearVal();
return false;
          }
      }
   }
  return true;
}
var deleteChar = function()
{
    var Res;
    Res = $("result").value;
    Res = Res.substring(0, Res.length - 1);
    $("result").value=Res;
    
$("result").focus();    
}

var changeSign =function() {
    var inputStr=$("result").value;
    if(inputStr!="0")
   {        
if(inputStr.substring(0, 1) == "-")
inputStr = inputStr.substring(1, inputStr.length);
else
inputStr = "-" + inputStr;
    $("result").value=inputStr;
   }
}