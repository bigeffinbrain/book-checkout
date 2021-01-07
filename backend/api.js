var express = require('express')
var app = express()
var port = 3001

app.use(express.json())

let bookTemp=[
  {
    "index": 0,
    "Book_Title": "Virxo",
    "Author": "Christy Estrada",
    "ISBN_Number": "1,353",
    "isCheckedOut": true,
    "Date_Due": 20210514
  },
  {
    "index": 1,
    "Book_Title": "Skinserve",
    "Author": "Gwen Donovan",
    "ISBN_Number": "3,252",
    "isCheckedOut": false,
    "Date_Due": 20210245
  },
  {
    "index": 2,
    "Book_Title": "Greeker",
    "Author": "Riggs Gibbs",
    "ISBN_Number": "3,449",
    "isCheckedOut": false,
    "Date_Due": 20210303
  }]


app.get('/', (req, res) => {
    res.send('Success')
})

app.get('/books', (req,res)=>{
  res.send(bookTemp)
})

app.listen(port, () => console.log(`We are listening at port ${port}`))

module.exports = app