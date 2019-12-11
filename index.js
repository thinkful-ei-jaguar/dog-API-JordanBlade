
//console.log('test 1');

function getDogImage(numberOfDogs) {
  // eslint-disable-next-line quotes
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => console.log('nope, something went wrong'));
}

$(document).ready(function(){

  $('body').on('submit', 'form', function(event) {
    event.preventDefault();
    let numberOfDogs = $('input').val();
    console.log(numberOfDogs);

    getDogImage(numberOfDogs);
  });

});

