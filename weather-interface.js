$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    console.log(city);
    $('#location').val('');
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=adfda684d78d4876a3e77e8dbfb6c5b9`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('#errors').text('There was an error processing your request. Please try again.')
      } //note no comma here after the squiggly bracket as it is the last javascript line of code
    });
  });
});
