<template>
  <div class="container">
    <div class="col-6 offset-3">
      <div class="card bg-light">
        <div class="card-header">Payment Information</div>
        <div class="card-body">
          <div class="alert alert-success" v-if="nonce">
            Successfully generated nonce.
          </div>
          <div class="alert alert-danger" v-if="error">
            {{ error }}
          </div>

          <form>
            <div class="form-group">
              <label for="amount">Amount</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  id="amount"
                  class="form-control"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
            <hr />
            <div class="form-group">
              <label>Credit Card Number</label>
              <div id="creditCardNumber" class="form-control"></div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label>Expire Date</label>
                  <div id="expireDate" class="form-control"></div>
                </div>
                <div class="col-6">
                  <label>CVV</label>
                  <div id="cvv" class="form-control"></div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <button
                class="btn btn-primary btn-block"
                @click.prevent="payWithCreditCard"
              >
                Pay with Credit Card
              </button>
            </div>
            <hr />
            <div id="paypalButton"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import braintree from "braintree-web";
import paypal from "paypal-checkout";

export default {
  data() {
    return {
      hostedFieldInstance: false,
      nonce: "",
      error: "",
      amount: 10,
    };
  },
  methods: {
    payWithCreditCard() {
      if (this.hostedFieldInstance) {
        this.error = "";
        this.nonce = "";

        this.hostedFieldInstance
          .tokenize()
          .then((payload) => {
            console.log(payload);
          })
          .catch((err) => {
            console.error(err);
            this.error = err.message;
          });
      }
    },
  },
  mounted() {
    braintree.client
      .create({
        authorization: "sandbox_7bvxnbqx_jdby9k69tp6czpcs",
      })
      .then((clientInstance) => {
        let options = {
          client: clientInstance,
          styles: {
            input: {
              "font-size": "14px",
              "font-family": "Open Sans",
            },
          },
          fields: {
            number: {
              selector: "#creditCardNumber",
              placeholder: "Enter Credit Card",
            },
            cvv: {
              selector: "#cvv",
              placeholder: "Enter CVV",
            },
            expirationDate: {
              selector: "#expireDate",
              placeholder: "00 / 0000",
            },
          },
        };
        // return braintree.hostedFields.create(options);
        return Promise.all([
          braintree.hostedFields.create(options),
          braintree.paypalCheckout.create({ client: clientInstance }),
        ]);
      })
      .then((instances) => {
        console.log(instances);
        const hostedFieldInstance = instances[0];
        const paypalCheckoutInstance = instances[1];
        // Use hostedFieldInstance to send data to Braintree
        this.hostedFieldInstance = hostedFieldInstance;
        return paypal.Button.render(
          {
            env: "sandbox",
            style: {
              label: "paypal",
              size: "responsive",
              shape: "rect",
            },
            payment: () => {
              return paypalCheckoutInstance.createPayment({
                flow: "checkout",
                intent: "sale",
                amount: parseFloat(this.amount) > 0 ? this.amount : 10,
                displayName: "Braintree Testing",
                currency: "USD",
              });
            },
            onAuthorize: (data, options) => {
              console.log(options);
              return paypalCheckoutInstance
                .tokenizePayment(data)
                .then((payload) => {
                  console.log(payload);
                  this.error = "";
                  this.nonce = payload.nonce;
                });
            },
            onCancel: (data) => {
              console.log(data);
              console.log("Payment Cancelled");
            },
            onError: (err) => {
              console.error(err);
              this.error =
                "An error occurred while processing the paypal payment.";
            },
          },
          "#paypalButton"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
body {
  padding: 20px;
}
</style>
