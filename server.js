const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/webhook', async (req, res) => {
      try {
        // Extract data from the request body
        const webhookData = req.body;
        // Log the received data for debugging
        console.log('Received webhook data:', webhookData);
        // Connect to your database
        // await mongoose.connect(process.env.MONGODB_URI, {
        //    useNewUrlParser: true,
        //    useUnifiedTopology: true,
        // });
        // // Create a new document in your database
        // const WebhookModel = mongoose.model('Webhook', { data: Object });
        // const newWebhook = new WebhookModel({ data: webhookData });
        // await newWebhook.save();
        // Send a success response
        res.status(200).send('Webhook data received and saved.');
        } catch (error) {
            console.error('Error processing webhook:', error);
            res.status(500).send('Error processing webhook.');
        } finally {
            await mongoose.disconnect();
        }
      });