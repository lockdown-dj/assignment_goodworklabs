'use strict';
const express = require('express');
const app = express();
const port = 8000;
const fs = require('fs');


app.get('/get-meta-data/:strOne/:strTwo',async (req, res) => {
  try{    
    let path = '/'+req.params.strOne+'/'+req.params.strTwo;
    let rawdata = await fs.readFileSync('./src/ui-config/specification'+path+'.json');
    res.send(JSON.parse(rawdata));
  }catch(err){
    res.send({err});
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});