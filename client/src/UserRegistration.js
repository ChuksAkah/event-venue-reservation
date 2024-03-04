fetch('http://localhost/api/booking', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Include any additional headers as needed
  },
  body: JSON.stringify({
    // Include request data here
  }),
})
.then(response => response.json())
.then(data => {
  // Handle response data
})
.catch(error => {
  console.error('Error:', error);
});
