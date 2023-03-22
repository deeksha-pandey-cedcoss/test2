
//let reg=\^[A-Za-z0-9]
let upper=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let special=['@','!','#','$','%','^','&','*','(',')',',','.',';'];
let number=[1,2,3,4,5,6,7,8,9,0];
// FUNCTION SHOULD 
function validation()
{
    let value_p=document.getElementById("text1").value;
     let len=value_p.length;
     

     for(i=0;i<len;i++)
     {
        if(len<8 || len>15)
    {
        document.getElementById("error").innerHTML="invalid";
    }
             if(upper.includes(value_p[i]))
        {
            document.getElementById("error").innerHTML=" content sholud contain lowercase";
        }

         if( special.includes(value_p[i]) )
        {
        document.getElementById("error").innerHTML="content shoukld contain uppercase";
         }
     if(number.includes(value_p[i]))
    {
        document.getElementById("error").innerHTML="content should contain number too";
        }
        else{
            document.getElementById("error").innerHTML="content should contain number too";
        }

     }
    
    
        
}

