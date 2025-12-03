export default async function loginUser({ email, password }) {
  try {
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
