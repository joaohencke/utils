exports.check = str => {
  if (!str || str.length === 0 || str === '') return false;

  // eslint-disable-next-line
  const regex = /^(data:\w+\/[a-zA-Z\+\-\.]+;base64,)?(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/gi;
  return new RegExp(regex, 'g').test(str);
};
