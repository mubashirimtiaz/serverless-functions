require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID)
  .table(process.env.AIRTABLE_TABLE_NAME);

exports.handler = async (event, context) => {
  const {
    queryStringParameters: { id },
  } = event;
  if (id) {
    try {
      const result = await airtable.retrieve(id);
      if (result.error) {
        return {
          statusCode: 404,
          body: "Resource Not Found",
        };
      }
      const {
        id: pid,
        fields: { name, description, price, images },
      } = result;
      const url = images[0].url;
      const product = {
        pid,
        name,
        description,
        price,
        url,
      };

      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (err) {
      return {
        statusCode: 404,
        body: "Unknown Resource",
      };
    }
  } else {
    return {
      statusCode: 400,
      body: "ID is required",
    };
  }
};
