const loginUser = async ({ email, password }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const result = await response.json();

    if (!result.success) {
      return {
        success: false,
        message: result.message || "Login failed",
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

export default loginUser;
