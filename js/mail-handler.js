document.getElementById('contactform').onsubmit = function (event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch('php/send_email.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('message').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
