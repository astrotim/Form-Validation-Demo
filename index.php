<?php include('header.php'); ?>

  <div class="main" role="main">

    <div class="container">

    <form id="demoForm" action="submitted.php">

      <div class="form-group">
        <label for="name" class="sr-only">Name</label>
        <input type="text" id="name" class="form-control" placeholder="Your name">
      </div>

      <div class="form-group">
        <label for="email" class="sr-only">Email Address</label>
        <input type="email" id="email" class="form-control" placeholder="Your email address">
      </div>

      <div class="form-group">
        <label for="amount" class="sr-only">Amount</label>
        <div class="input-group">
          <div class="input-group-addon">$</div>
          <input type="text" id="amount" class="form-control" placeholder="Amount">
        </div>
      </div>

      <!-- Card Number -->
      <div class="form-group">
        <label class="control-label col-sm-4" for="cardNumber">Card Number</label>
        <div class="col-sm-6">
        <input type="text" id="cardNumber" name="CardNumber" class="form-control">
        <span class="help-block">Visa and Mastercard accepted only.</span>
        </div>
      </div>

      <!-- Expiry-->
      <div class="form-group expiry">
        <div class="control-label col-sm-4">Expiry Date</div>
        <div class="col-xs-6 col-sm-3 expiry-month">
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
        <div class="col-xs-6 col-sm-3 expiry-year">
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

      <!-- CVV -->
      <div class="form-group">
        <label class="control-label col-sm-4" for="cvc">Security Code</label>
        <div class="col-sm-3">
        <input type="number" id="cvc" name="CardSecurityCode" class="form-control">
        </div>
      </div>

      <button type="submit" class="button btn-large">Submit Form</button>


    </form>

    </div>
    <!-- .container -->

  </div>
  <!-- .main -->

<?php include('footer.php'); ?>