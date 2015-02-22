<?php include('header.php'); ?>

  <div class="main" role="main">

    <div class="container">

    <form id="demoForm" action="submitted.php">

      <div class="form-group input-name">
        <label for="name" class="sr-only">Full name</label>
        <div class="input-wrapper">
          <input type="text" id="name" class="form-control" placeholder="Full Name">
        </div>
      </div>

      <div class="form-group input-email">
        <div class="input-wrapper">
        <label for="email" class="sr-only">Email address</label>
          <input type="email" id="email" class="form-control" placeholder="Email Address">
        </div>
      </div>

      <div class="form-group input-amount">
        <label for="amount" class="sr-only">Amount</label>
        <div class="input-wrapper">
          <input type="text" id="amount" class="form-control" placeholder="Amount">
        </div>
      </div>

      <div class="form-credit-card-fields">

      <!-- Card Number -->
      <div class="form-group input-credit-card input-flex">
        <label class="control-label" for="cardNumber">Card number</label>
        <div class="flex-wrapper">
          <div class="input-wrapper">
          <input type="text" id="cardNumber" name="cardNumber" class="form-control">
          </div>
          <!-- <span class="help-block">Visa and Mastercard accepted only.</span> -->
        </div>
      </div>

      <!-- Expiry-->
      <div class="form-group input-expiry input-flex">
        <div class="control-label expiry-label">Expiry Date</div>
        <div class="expiry-select">
          <div class="expiry-month">
            <label class="sr-only" for="expiryMonth">Expiry Month</label>
            <select name="CardExpiryMonth" id="expiryMonth" class="form-control">
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div class="expiry-year">
            <label class="sr-only" for="expiryYear">Expiry Year</label>
            <select name="CardExpiryYear" id="expiryYear" class="form-control">
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
        <!-- .expiry-select -->
      </div>

      <!-- CVV -->
      <div class="form-group input-cvc input-flex">
        <label class="control-label" for="cvc">Security code</label>
        <div class="flex-inner">
        <div class="input-wrapper">
          <input type="number" id="cvc" name="CardSecurityCode" class="form-control">
        </div>
        </div>
      </div>

      </div>
      <!-- .form-credit-card-fields -->

      <!-- Terms -->
      <div class="checkbox input-terms">
        <div class="input-wrapper">
        <label class="control-label" for="terms">
          <input type="checkbox" id="terms" name="terms"> I agree to the terms &amp; conditions
        </label>
        </div>
      </div>

      <div class="form-submit">

        <div id="errors"></div>

        <button id="submit" type="submit" class="button button-submit btn-large">Submit Form</button>

        <div id="afterSubmit"></div>

      </div>

      <p class="prefill"><a href="#">Prefill</a> with valid data. <br><br>
        Sample credit card: 4005 5500 0000 0001</p>


    </form>

    </div>
    <!-- .container -->

  </div>
  <!-- .main -->

<?php include('footer.php'); ?>