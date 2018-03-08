export const signUserUpApi = async (url, params) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    const { status, statusText } = response;
    if (status === 409) {
      throw new Error(statusText);
    }
    return response;
  } catch (error) {
    throw new Error(error.toString());
  }
};

export const signUserIn = () => {
  console.log('asdasdasdasdas');
};
