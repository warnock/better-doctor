var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(medicalIssue, doctors) {
  console.log(medicalIssue);
  if ((doctors.length > 0) && (medicalIssue !== "")) {
    doctors.forEach(function(doctor){
      $('.showDoctors').append("<div class='panel panel-info'><div class='panel-heading'><h4 class='tab'> Dr. " + doctor.profile.first_name + " " + doctor.profile.last_name + " - " + doctor.practices[0].visit_address.street + "</h4><p>" + "number: " + doctor.practices[0].phones[0].number +"</p>" + "</div><div class='panel-body'><div class='row'><div class='col-md-3'><img src='" + doctor.profile.image_url + "'width='200px'></div><div class='col-md-9'> Bio: " + doctor.profile.bio + "</div></div></div>");
    });
  } else {
    $('.showDoctors').append("<p>Sorry there is no doctor near by for that ailment</p>");
  }
};

$(document).ready(function() {
  var doctor = new Doctor();
    $('#doctorForm').submit(function() {
      event.preventDefault();
      var medicalIssue = $('#medicalIssue').val();
      $('#medicalIssue').val("");
      doctor.getDoctors(medicalIssue, displayDoctors);
      $('.bodyContent').hide();
  });
});
