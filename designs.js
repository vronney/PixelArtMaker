// Select color input
// Select sixe input

var height, width, color;

// When size is submitted by user, call makeGrid()

$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#input_Height').val();
  width = $('#input_Width').val();
  makeGrid(height, width);
  // console.log('Height: ' + height + ' and width: ' + width);
})

function makeGrid(x, y) {
    $('tr').remove();

    for (var i = 1; i <= x; i++) {
      $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
      for (var j = 1; j <= y; j++) {
        $('#table' + i).append('<td></td>');
      }
    }
      // Add color to cell
      
      $('#pixelCanvas').on('click', 'td', function(e) {
        let color = $('#colorPicker').val();
        $(e.target).css('background-color', color);
      });
}

