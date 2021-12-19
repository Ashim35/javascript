function validFname()
    {
let first_name=document.getElementById('firstname').value
if(first_name=='')
{
    displayMsg('firstname is required','fnamemsg','red')
    return false
}
else if(first_name.length<3)
{
    displayMsg('firstname must be greater than 2 characters','fnamemsg','red')
    return false
}
else if(!first_name.match(/^([a-zA-Z])+$/))
{
    displayMsg('firstname can only contain aplhabets','fnamemsg','red')
    return false
}

else{
    displayMsg('valid firstname','fnamemsg','green')
    return true
}
    }
    function validLname()
    {
let last_name=document.getElementById('lastname').value
if(last_name=='')
{
    displayMsg('lastname is also required','lnamemsg','yellow')
    return false
}
else if(last_name.length<3)
{
    displayMsg('lastname must be greater than 2 char','lnamemsg','red')
    return false
}
else if(!last_name.match(/^([a-zA-Z])+$/))
{
    displayMsg('lastname can only contain aplhabets','lnamemsg','red')
    return false
}

else{
    displayMsg('valid lastname','lnamemsg','green')
    return true
}
    }
    

    function validEmail()
    {
let e_mail=document.getElementById('email').value
if(e_mail=='')
{
    displayMsg('email must include special char and symbols','emailmsg','red')
    return false
}
else if(!e_mail.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z])+\.)+([a-z])/))
{
    displayMsg('invalid email format','emailmsg','red')
}
else{
    displayMsg('valid email','emailmsg','green')
    return true
}
    }
    function validPname()
    {
let password=document.getElementById('password').value
if(password=='')
{
    displayMsg('password is required','passwordmsg','red')
    return false
}
else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&!]).{8,20}$/))
{
    displayMsg('password format should be like A@s4tstst and miminum of 8 characters','passwordmsg','red')
        return false 
}
else{
    displayMsg('strong password','passwordmsg','green')
    return true
}
    }
    


    function displayMsg(message,id,colorValue)
    {
        document.getElementById(id).innerHTML=message
        document.getElementById(id).style.color=colorValue
    }

function validForm(){
    if(validFname() && validLname() && validEmail() && validPname()) {
    return true
}
else{
    return false
}
}
