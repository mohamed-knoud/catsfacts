document.getElementById('gen').addEventListener('click',function(){
  // Making a GET request
fetch('https://meowfacts.herokuapp.com/')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json(); // Parse JSON data
})
.then(data => {
  document.getElementById('fact').textContent = data.data[0]
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

})
