const contactForm =document.getElementById('submit-form');
contactForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    userName=document.getElementById('name').value.trim();
    userEmail=document.getElementById('email').value.trim();
    userSubject=document.getElementById('subject').value.trim();
    userMessage=document.getElementById('message').value.trim();
    
    if(userName==='' || userEmail==='' || userSubject==='' || userMessage==='')
    {
        alert("Fileds cannot be blank! please fillout all fileds");
        return false;
    }
    else if(!nameValidation(userName))
    {
        alert("Your name is not in a required format!");
        return false;
    }
    else if(!emailValidation(userEmail))
    {
        alert("Your Email Id is not in a required format!");
        return false;
    }
    return false;
})
    

nameValidation = userNameVal=>{
    var pattern = /^[a-zA-Z]{3,}(?:[\s-][a-zA-Z]{3,})*$/;
   return pattern.test(userNameVal);
}
emailValidation= userEmailVlaue=>{
    var pattern=/^(?!.*@.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return pattern.test(userEmailVlaue)
}
// $("#submit-form").submit((e)=>{
//     alert("inside")
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycby1CtFDMXpZBU5L9_HHBiXny69-e4S3cWNCm0gbGK3hn9xmDRxAUbVxF5NNer3AyRfQgw/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })