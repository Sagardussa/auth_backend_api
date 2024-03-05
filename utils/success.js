 const createSuccess = (statusCode, successmessage, data) => {
  const successObj = {
    status: statusCode,
    message: successmessage,
    data: data,
  };
  return successObj;
};

exports.createSuccess = createSuccess;
// exports.verifyUser = verifyUser;