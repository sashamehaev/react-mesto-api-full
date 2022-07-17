const allowedCors = [
  'https://api.sashamehaev-mesto.nomoredomains.xyz',
  'http//api.sashamehaev-mesto.nomoredomains.xyz',
  'https://sashamehaev-mesto.nomoredomains.xyz',
  'http://sashamehaev-mesto.nomoredomains.xyz',
  'localhost:3000'
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Origin', "*");

  const { method } = req;

  const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);

    return res.end();
  }

  return next();
};