export async function get(_req, res, next) {
  const data = require('../../../static/content/cv.json');

  try {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  } catch (err) {
    console.error(err);
    next();
  }
}
