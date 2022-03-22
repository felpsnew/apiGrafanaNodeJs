const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// respond with "hello world" when a GET request is made to the homepage
app.post('/webhook', function(req, res) {
  
  var body = [];

  req.on('data', function (data) {
       body += data;

      if (body.length > 1e6)
          request.connection.destroy();
  });

  req.on('end', async function () {

    

    let texto = JSON.parse(body).texto;
    let presenceZoomWebhook = JSON.parse(body).payload.object.presence_status;
    let emailZoomWebhook = JSON.parse(body).payload.object.email;
    let datetimeZoomWebhook = JSON.parse(body).payload.object.date_time;
    let idZoomWebhook = JSON.parse(body).payload.object.id;

    let issuesZoomWebhook = JSON.parse(body).payload.object.issues;
    let topicZoomWebhook = JSON.parse(body).payload.object.topic;

    res.send("Esse é o texto recebido pela API: " + emailZoomWebhook);
    console.log(emailZoomWebhook,"--",presenceZoomWebhook);
    

      
  });





});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

