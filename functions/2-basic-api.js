//domain/.netlify/functions/1-hello
const items = require("../public/assets/data");

exports.handler = async (event, context, cb) => {
  //   cb(null, {
  //     statusCode: 200,
  //     body: JSON.stringify(items),
  //   });
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
