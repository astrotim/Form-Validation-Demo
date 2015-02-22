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

  // console.log
  var log = 0;

  // regular expressions
  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var amountRegex = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;

  /**
   * prefill
   *
   */
  $('.prefill a').on('click', function(e){

    e.preventDefault();

    name.val('First Last');
    email.val('test@email.com');
    amount.val('99.99');
    cardNum.val('4005 5500 0000 0001');
    cvc.val('123');
    terms.prop('checked', true);

  });

  /**
   * validate fields before submit
   *
   */
  function validateOnBlur(fields) {

    // check single fields on blur
    fields.each(function () {
      var target = $(this);
      var messageText = 'This field is required';
      target.on('blur', function () {

        // remove existing errors
        target.closest('.form-group')
          .removeClass('has-error')
          .find('span.validation-message').remove();

        $('#errors .alert').remove();

        // check and add errors
        if (target.val() === '') {

          messageText = target
                          .closest('.form-group')
                          .find('label')
                          .text() + ' is required';

          target
            .after('<span class="validation-message fade">' + messageText + '</span>')
            .closest('.form-group')
              .addClass('has-error')
              .find('.validation-message')
              .addClass('in');

          abort = true;
        }

        // email address
        if(target.attr('id') === 'email') {

          // test against regex
          if( !abort && !emailRegex.test( target.val() ) ) {

            messageText = 'Please enter a valid email address';

            target
              .after('<span class="validation-message fade">' + messageText + '</span>')
              .closest('.form-group')
                .addClass('has-error')
                .find('.validation-message')
                .addClass('in');

            abort = true;

          }

        }

        // amount
        if(target.attr('id') === 'amount') {

          // test against regex
          if( !abort && !amountRegex.test( target.val() ) ) {

            messageText = 'Please enter a valid amount';

            target
              .after('<span class="validation-message fade">' + messageText + '</span>')
              .closest('.form-group')
                .addClass('has-error')
                .find('.validation-message')
                .addClass('in');

            abort = true;

          }

        }


      });
    });
  }


  function validateOnSubmit(form, fields) {

    // check all fields on submit
    form.on('submit', function (e) {

      e.preventDefault();

      // remove existing messages
      $('span.validation-message').remove();
      $('.form-group').removeClass('has-error');

      // reset submit flag
      abort = false;

      // check single fields
      fields.each(function () {

        var target = $(this);
        var messageText = 'This field is required';

        // check and add errors
        if (target.val() === '') {

          messageText = target
                          .closest('.form-group')
                          .find('label')
                          .text() + ' is required';

          target
            .after('<span class="validation-message fade">' + messageText + '</span>')
            .closest('.form-group')
              .addClass('has-error')
              .find('.validation-message')
              .addClass('in');

          required = true;
          abort = true;

        }

        if( !terms.is(':checked') ) {

          termsUnchecked = true;
          abort = true;

        }
      });

      if (abort) {

        if(required) {
          message = 'Please complete all required fields. ';
        }

        else if(termsUnchecked) {
          message = 'You must agree to the terms and conditions. ';
        }

        $('#errors').append('<div class="alert alert-danger">'+ message +'</div>');


        return false;
      } else {

        /**  change button text to
         *   "Processing..." on submit
         */
        $('#submit')
          .addClass('processing')
          .html('Processing &hellip;');

        $('#afterSubmit').append('<div class="alert alert-info">Order processing; do not close this window</div>');

        return true;
      }

    }); // on submit
  }

  // call functions on demo form
  validateOnBlur(allFields);
  validateOnSubmit(form, allFields);


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
        .after('<span class="validation-message fade">Invalid card number</span>')
        .closest('.form-group')
          .removeClass('valid-card')
          .addClass('has-error invalid-card')
          .find('.validation-message')
          .addClass('in');
    }
  });


})(jQuery);


