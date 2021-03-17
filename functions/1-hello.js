//domain/.netlify/functions/1-hello

exports.handler = async (event, context, cb) => {
  //   cb(null, {
  //     statusCode: 200,
  //     body: "Our First Netlify Function Example from callback",
  //   });
  return {
    statusCode: 200,
    body: "Our First Netlify Function Example",
  };
};
