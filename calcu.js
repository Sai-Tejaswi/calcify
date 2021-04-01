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

var multiPY = function(){
    if($("result").value!='')
  {        
    var num;
    num=parseFloat(compute($("result").value))*Math.PI;
      if(isNaN(num))
          {
              console.log("Not a number");
              $("result").value="";
              $("result").focus(); 
          }
      else
          {
    console.log("Input : "+$("result").value+" * π");
    num=num.toFixed(8);
    console.log("Output : "+num);
    $("result").value=num;
          }
  }
    else
        {
            $("result").value=(Math.PI).toFixed(8);
            $("result").focus();
        }
}

var perCent = function(){
    if($("result").value!='')
  {        
    var num;
    num=compute($("result").value)/100;
            if(isNaN(num))
          {
              console.log("Not a number");
              $("result").value="";
              $("result").focus(); 
          }
      else
          {
    console.log("Input : "+$("result").value+" % ");
    console.log("Output : "+num);
    $("result").value=num;
          }
  }
    else
        {
            alert("Please enter a value");
            $("result").focus();
        }
    
}

var tanVal = function(){
    if($("result").value!='')
  {        
    var num,tannum;
    num=compute($("result").value);
                  if(isNaN(num))
          {
              console.log("Not a number");
              $("result").value="";
              $("result").focus(); 
          }
      else
          {
      if(((num/90)%2 == 0) || (num%90)!=0)
          {
    tannum=Math.tan(num * Math.PI / 180);
    tannum=tannum.toFixed(7);
              console.log("Input degrees : "+num);
              if(tannum=="-0.0000000" || tannum=="0.0000000")
                  {
                      tannum="0";
                  }
    console.log("Output : tan("+num+"°) = "+tannum);
    $("result").value=tannum;
          }
      else{
    tannum="Infinity";
    console.log("Output : tan("+num+"°) = "+tannum);
    $("result").value=tannum;
      }
    }
  }
      else
        {
            alert("Please enter a value");
            $("result").focus();
        }  
}

var sinVal = function(){
        if($("result").value!='')
  {
    var num,sinnum;
    num=compute($("result").value);
                  if(isNaN(num))
          {
              console.log("Not a number");
              $("result").value="";
              $("result").focus(); 
          }
      else
          {
    console.log("Input : "+num);
    sinnum=Math.sin(num * Math.PI / 180);
    sinnum=sinnum.toFixed(8);
    if(sinnum=="-0.00000000" || sinnum=="0.00000000")
                  {
                      sinnum="0";
                  }  
      
    console.log("Output : sin("+num+"°) = "+sinnum);
    $("result").value=sinnum;
     }
  }
        else
        {
            alert("Please enter a value");
            $("result").focus();
        }  
    
}

var cosVal = function(){
          if($("result").value!='')
  {  
    var num,cosnum;
    num=compute($("result").value);
                        if(isNaN(num))
          {
              console.log("Not a number");
              $("result").value="";
              $("result").focus(); 
          }
      else
          {
    console.log("Input : "+num);
    cosnum=Math.cos(num * Math.PI / 180);
    cosnum=cosnum.toFixed(8);
    if(cosnum=="-0.00000000" || cosnum=="0.00000000")
                  {
                      cosnum="0";
                  }
    console.log("Output : cos("+num+"°) = "+cosnum);
    $("result").value=cosnum;
   }
}
        else
        {
            alert("Please enter a value");
            $("result").focus();
        } 
    
}

var expoFn = function(){
              if($("result").value!='')
  { 
    var num;
    num=compute($("result").value);
            if(isNaN(num))
          {
              console.log("Not a number");
              $("result").value="";
              $("result").focus(); 
          }
      else
          {
    console.log("Input : "+num+" ^ y");         
    var exp=parseFloat(prompt(" Input : "+num+" ^ y"+"\n Enter exponential value (y) : "));
              /*$("result").value="Power:";
              $("result").focus();
              var a=$("result").value;
              var x=parseFloata.substr(6,a.length-1);*/
              if(isNaN(exp))
                  {
                    console.log("Not entered valid number");
              $("result").value="";
              $("result").focus();  
                  }
              else
                  {
    console.log("Entered exponential value (y): "+exp);
    console.log("Input : "+num+" ^ "+exp);
    $("result").value=Math.pow(num,exp);
    console.log("Output : "+$("result").value);
                  }
          }
  }
        else
        {
            alert("Please enter a value");
            $("result").focus();
        }
}

var enterVal = function(num)
{
    if($("result").value == "0")
        $("result").value = num;  
    else
    $("result").value+=num;
    
 $("result").focus();    
}

var lnFn = function()
{
    if($("result").value!='')
  {
    var num,lognum;
    num=parseFloat(compute($("result").value));
      if(isNaN(num))
          {
              console.log("Please enter number only");
              $("result").value="";
              $("result").focus(); 
          }
      else
     { 
         if(num>0)
    {         
    console.log("Input : "+num);
    lognum=Math.log(num);
    lognum=lognum.toFixed(7);
    console.log("Output : ln("+num+") = "+lognum);
    $("result").value=lognum;
    }
         else{
             alert("Please enter number greater than 0");
              console.log("Please enter number greater than 0");
              $("result").value="";
              $("result").focus(); 
             }
     }
  }
      else
      {
          clearVal();
          console.log("Please Enter valid value");
             $("result").value="";
              $("result").focus();
      }
}

var sqrtFn = function()
{
      if($("result").value!='')
  {  
    var num,sqrtval;
    num=parseFloat(compute($("result").value));
      if(num>=0)
    {      
    console.log("Input : "+num);
    sqrtval=parseFloat(Math.sqrt(num));
    console.log("Output : sqrt("+num+") = "+sqrtval);
    $("result").value=sqrtval;
    }
      else
          {
              console.log("Math Error, Press C to Clear");
              $("result").value="Math Error";
              $("result").focus();
          }
  }
        else
        {
            alert("Please enter a value");
            $("result").focus();
        }
    
}

var squareFn = function()
{
         if($("result").value!='')
  { 
    var num,sqrval;
    num=parseFloat(compute($("result").value));
                 if(isNaN(num))
          {
              console.log("Not a number");
              $("result").value="";
              $("result").focus(); 
          }
      else
          { 
    console.log("Input : "+num);
    sqrval=num*num;
    console.log("Output : "+num+" ^ 2 = "+sqrval);
    $("result").value=sqrval;
      }
  }
            else
        {
            alert("Please enter a value");
            $("result").focus();
        }
    
}

var compute = function()
{
    var ResValue = $("result").value;
    var x;
   if(ResValue!='')
  {       
    if(checkNum(ResValue))
        {
            try
            {
            $("result").value = eval(ResValue);
            console.log("Input : "+ResValue);
            console.log("Evaluated Value : "+$("result").value);
            x=$("result").value;
            }
            catch(e)
                {
                   alert(e+"\nPlease enter expression correctly");
                   clearVal();    
                }
        }
  }
    else
        {
            alert("Please enter a value");
            $("result").focus();
            x='';
        }
  return x;
}

window.onload = function() {
    
   $("result").focus(); 
}