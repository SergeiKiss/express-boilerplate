const handleServerError = (res, error) => {
  console.error(error);
  res.status(500).json({ error });
};

export const exampleController1 = (req, res) => {
  try {
    res.status(200).json({ message: 'Hello, World!' });
  } catch (error) {
    handleServerError(res, error);
  }
};

export const exampleController2 = (req, res) => {
  try {
    res.status(500).end();
  } catch (error) {
    handleServerError(res, error);
  }
};
