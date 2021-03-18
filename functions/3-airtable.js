require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID)
  .table(process.env.AIRTABLE_TABLE_NAME);

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((record) => {
      const { id } = record;
      const { name, description, images, price } = record.fields;
      const url = images[0].url;
      return {
        id,
        name,
        description,
        url,
        price,
      };
    });
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
