// // Get the button element
// const myButton = document.getElementById('myButton');

// // Add a click event listener
// myButton.addEventListener('click', function() {
//   // Display a message when the button is clicked
//   alert('Button clicked!');
//   // You can also use other methods to display a message, such as console.log or modifying the DOM to show a message on the page
// });

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {

    while (true) {
        let name = prompt('Enter your name:');
        if (name === 'jackon') {
            alert('Hello, ' + name + '!');
          let favoriteColor =  prompt('what is your favorite color?');
            alert(favoriteColor1)
            break;
        } else {
            alert('Invalid name. Please try again.');
        }
        
    }
})