import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
    console.log("done")
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    console.log("not done")
  }
});

export default router;

//there are router object(to define and handle routes) for each part like authentication, etc. route is created for each path to handle request made for that path.
//router.route('/').get((req,res)=>{    this is a route to handle request made for this path
  //  res.send('heloobroo')
//})

// configuration is a class provided by the OpenAI library, that is used to set up the connection to the OpenAI service