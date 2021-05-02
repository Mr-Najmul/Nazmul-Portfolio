function sendMail(params){
    var tempParams ={
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,
    };

    emailjs.send('service_d32cn5i','template_91ma2nh',tempParams )

    .then(function(res){
        
        console.log("success", res.status);
    })
    
}