$(document).ready(function() {
  $("#calculate").click(function() {
    var eaters = parseFloat($("#eaters").val());
    var cupWeight = parseFloat($("#cupWeight").val());
    var leftover = parseFloat($("#leftover").val());
    if (isNaN(leftover)) { leftover = 0; }

    var pot = parseFloat($("#pot").val());
    var ratio = parseFloat($("#ratio").val());
    var aveEaten = parseFloat($("#aveEaten").val());

    var targetCooked = (eaters * aveEaten) - leftover;

    // 140g uncooked rice at 14% moisture yields
    // 300g cooked rice at 60% moisture
    var targetUncooked = targetCooked / 300 * 140;

    var cups = targetUncooked / cupWeight;

    var netWeight = targetUncooked * (1 + ratio) + pot;

    $("#results").html("You should cook " + targetUncooked.toFixed(2) + "g of rice (about " + cups.toFixed(2) + " cups).<br>" +
                       "Wash the rice then fill the pot with water until the total weight is " + netWeight.toFixed(2) + "g give or take " + (cups * 20).toFixed(2) + "g.<br><br>" +
                       "This should produce " + targetCooked.toFixed(2) + "g of cooked rice.");

  });
});
