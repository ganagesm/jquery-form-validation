// Wait for the DOM to be ready
$(function() {
  var $form = $("form"),
    $successMsg = $(".alert");
  $.validator.setDefaults({
    submitHandler: function() {
      //alert("submitted!");
      $successMsg.show().focus();
    }
  });

  $("#mobile").keydown(function(event) {
    k = event.which;
    if ((k >= 96 && k <= 105) || k == 8) {

    } else {
      event.preventDefault();

    }

  });

  $.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
  });

  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#signupForm").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      username: {
        required: true,
        minlength: 2
      },
      username1: {
        required: true,
        minlength: 2,
        letters: true
      },
      password: {
        required: true,
        minlength: 5
      },
      // file: {
      //   required: true,
      //   accept: "image/*"
      // },
      mobile: {
        required: true,
        minlength: 10,
        maxlength: 15,
        number: true
      },
      pincode: {
        required: true,
        minlength: 6,
        maxlength: 6,
        number: true
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
      email: {
        required: true,
        email: true
      },
      agree: "required",
      blankRadio1: "required"
    },
    messages: {
      firstname: "Please enter your First Name",
      lastname: "Please enter your Last Name",
      username: {
        required: "Please enter a Username",
        minlength: "Your username must consist of at least 2 characters"
      },
      username1: {
        required: "Please specify your name (only letters and spaces are allowed)",
        minlength: "Your username must consist of at least 2 characters"
      },
      password: {
        required: "Please provide a Password",
        minlength: "Your password must be at least 5 characters long"
      },
      confirm_password: {
        required: "Please provide a Password",
        minlength: "Your password must be at least 5 characters long",
        equalTo: "Please enter the same password as above"
      },
      email: "Please enter a valid email address",
      agree: "Please accept our policy",
      blankRadio1: "Please Click on Allow Me"
    },
    errorElement: "span",
    errorPlacement: function(error, element) {
      // Add the `help-block` class to the error element
      error.addClass("help-block");

      if (element.prop("type") === "checkbox") {
        error.insertAfter(element.parent("label"));
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function(element, errorClass, validClass) {
      $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
    }
  });
});