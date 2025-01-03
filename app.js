const express =require('express');
const app =express();
const port = 3000;

let booklog ={}

// json使えるように
app.use(express.json())

app.post('/booklog', (req,res)=>{
  booklog = req.body

  if(!(booklog.name && booklog.text)){
    res.json({
      "ok":false,
      "error":"inalid"
    })
  }

  res.json({
    "OK":true,
    "booklog":booklog
  })
})

// getの処理
app.get("/booklog", (req,res)=>{
  res.json({
    "OK":true,
    "booklog":[
      booklog
    ],
  })
})

// webServer
app.listen(port, ()=>{
  console.log(`App listening at http://localhost:${port}`)
})