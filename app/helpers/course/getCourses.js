const getCourses = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/courses`);

    const result = await response.json();

    if (!result.success) {
      return {
        success: false,
        message: result.message,
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

export default getCourses;
