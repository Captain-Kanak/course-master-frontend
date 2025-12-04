const createPaymentIntent = async (payload) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/payments/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message,
    };
  }
};

export default createPaymentIntent;
