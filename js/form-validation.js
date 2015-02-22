/**
 * Form validation
 *
 */

(function($){

  // the form
  var form    = $('#demoForm');

  // bail if form does not exist
  if(!form.length) return;

  // fields
  var name    = form.find('#name'),
      email   = form.find('#email'),
      amount  = form.find('#amount'),
      cardNum = form.find('#cardNumber'),
      cvc     = form.find('#cvc'),
      terms   = form.find('#terms');

  var allFields = name
                    .add(email)
                    .add(amount)
                    .add(cardNum)
                    .add(cvc)
                    .add(terms);

  // flags
  var abort = false,
      required = false,
      termsUnchecked = false;

  // errors
  var message = '';
  var log = 1;

  var message = '<span class="validation-message fade">This field is required.</span>',
    ccMessage = '<span class="validation-message fade">Invalid card number. Try 4005 5500 0000 0001</span>',
    cvcMessage = '<span class="validation-message fade">Invalid code</span>';


  /**
   * validate fields before submit
   *
   */
  function validateOnBlur(fields) {

    // check single fields on blur
    fields.each(function () {
      var target = $(this);
      target.on('blur', function () {

        // remove existing errors
        target.closest('.form-group')
          .removeClass('has-error')
          .find('span.validation-message').remove();

        // check and add errors
        if (target.val() === '') {
          target
            .after(message)
            .closest('.form-group')
              .addClass('has-error')
              .find('.validation-message')
              .addClass('in');

          abort = true;
        }
      });
    });
  }

  validateOnBlur(allFields);

  form.submit(function(e){

    e.preventDefault();

    form.find('.alert-danger').remove();
    form.find('.form-group').removeClass('has-error');
    form.find('.terms').removeClass('has-error');

    if( name.val() === '' ) {
      if(log) console.log('Name is empty');
      name.parents('.form-group').addClass('has-error');
      required = true;
      abort = true;
    }

    if( email.val() === '' ) {
      if(log) console.log('Email Address is empty');
      email.parents('.form-group').addClass('has-error');
      required = true;
      abort = true;
    }

    if( amount.val() === '' ) {
      if(log) console.log('Amount is empty');
      amount.parents('.form-group').addClass('has-error');
      required = true;
      abort = true;
    }

    if( !terms.is(':checked') ) {
      if(log) console.log('Terms has not been checked');
      terms.parents('.terms').addClass('has-error');
      abort = true;
      termsUnchecked = true;
    }

    if (abort) {

      if(required) {
        message += 'Please complete all required fields. ';
      }

      if(termsUnchecked) {
        message += 'You must agree to the terms and conditions. ';
      }

      $('#errors').append('<div class="alert alert-danger" style="margin-top: 15px;">'+ message +'</div>');

      // e.preventDefault();

    } else {

      /*  change button text to
      *   "Processing..." on submit
      */
      $('#nextButton')
        .addClass('processing')
        .find('span')
        .html('<img src="https://www.thinkleanmethod.com/wp-content/themes/thinklean/images/processing2.gif" alt="">Processing...');

    }

  });



  /**
   * use jQuery Formance plugin
   * for credit card validation
   */
  cardNum.formance('format_credit_card_number');

  cardNum.on('blur', function(e) {
    var target = $(this);
    if(target.formance('validate_credit_card_number')) {

      if(log) console.log('Card number is valid');

      // remove existing errors
      target.closest('.form-group')
        .removeClass('has-error invalid-card')
        .addClass('valid-card')
        .find('span.validation-message').remove();

    } else {

      if(log) console.log('Card number is invalid');

      target
        .after(ccMessage)
        .closest('.form-group')
          .removeClass('valid-card')
          .addClass('has-error invalid-card')
          .find('.validation-message')
          .addClass('in');
    }
  });


})(jQuery);


