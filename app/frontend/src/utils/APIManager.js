export const signUserUpApi = async (url, params) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const signUserIn = () => {
  console.log('asdasdasdasdas');
};
