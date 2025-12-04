const getCourseById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/courses/${id}`
    );

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

export default getCourseById;
