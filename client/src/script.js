fetch('http://localhost/api/booking', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData), // formData contains the booking data
})
.then(response => response.json())
.then(data => {
  // Handle response from the backend
})
.catch(error => {
  console.error('Error:', error);
});
