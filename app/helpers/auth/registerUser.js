const registerUser = async (payload) => {
  try {
    const response = await fetch(`http://localhost:5000/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!result.success) {
      return {
        success: false,
        message: result.message || "Registration failed",
      };
    }

    return result;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message,
    };
  }
};

export default registerUser;
