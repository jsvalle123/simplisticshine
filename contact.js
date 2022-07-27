const btn = document.getElementById('button');
     document.getElementById('myForm')
      .addEventListener('submit', function(event) {
        event.preventDefault();
      
        btn.value = 'Sending...';
      
        const serviceID = 'service_9bx4wq5';
     
        emailjs.sendForm(serviceID,'template_wi6wdwa', '#myForm', '3_8uct6JOitKDwm5z', this)
         .then(() => {
           btn.value = 'Send';
           alert('Sent!');
         }, (err) => {
           btn.value = 'Send';
           alert(JSON.stringify(err));
         });
         
});