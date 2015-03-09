'use strict';

$(document).ready(init);


function init() {
  $('#go').click(function() {
var dist = $('#distance').val();
var mpg =  $('#milePerGal').val();
var ftg = $('#fullTankGal').val();
var ppg = $('#pricePerGal').val();


var oneStopGal = ftg * ppg;
var totalGal = dist / mpg;
var totalStop = Math.ceil(totalGal / ftg);
var totalCost = (totalGal * ppg);
var fullStopCost = ((Math.ceil(totalStop)) * oneStopGal);
var galLeft = (fullStopCost - totalCost)/ ppg;

$('#totalStops').html('Total Stop is : ' +totalStop);
$('#totalCost').html('Total Cost is : ' +totalCost);
$('#galLeft').html('Gallons left is : ' +galLeft);

// console log('total Stops: ' + totalStop+);
// console log('total cost: ' + totalCost+);
// console log('gallons Left: '+ galLeft+);
  })
}
