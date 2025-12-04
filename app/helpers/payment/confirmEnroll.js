const confirmEnroll = async (payload) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/payments/confirm-enrollment`,
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

export default confirmEnroll;
