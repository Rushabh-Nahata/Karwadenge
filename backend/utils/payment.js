
import Razorpay from 'razorpay'

// Initialize Razorpay
const instance = new Razorpay({
  key_id: "rzp_test_4dwxul55tzAoD6", // Replace with your Razorpay Key ID
  key_secret: "Tuv3eyGbePALmbFL9UDXpHjF" // Replace with your Razorpay Key Secret
});

const createOrder = async(req,res)=>{
    const { amount, currency, receipt } = req.body;

    try {
      const options = {
        amount: amount * 100, // Amount in paise
        currency,
        receipt,
      };
      const order = await instance.orders.create(options);
      res.json(order);
    } catch (error) {
      res.status(500).send(error);
    }

 
}

const verifyPayment = async (signature, payment_id, payment_signature) => {
  try {
    const result = await instance.payments.authorize(payment_id, signature, payment_signature);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  verifyPayment,
  createOrder
}