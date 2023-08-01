
//express la thư viện càu ở node_module,di vao thu vien tai va nap 
const express = require('express')
const morgan = require('morgan')
//express la function dc viet san va tra ve ,duoi dang toan tu const ,trả về 1 đối tượng ,xây dựng website 
const app = express()
// chạy ở cổng nào 
const port = 3000
app.use(morgan('combined'))
//định nghĩa  route ,tuyến đường đi ,địa chỉ ,dưới đây là aroute function
app.get('/trang-chu', (req, res) => {
  res.send('Hello World!')
})
//dạng funtion
// app.get('/',function(req,res)){
//   return res.send('hello world');
// }

//127.0.0.1 - ánh xạ loacahost
//chạy new temimal  node index.js (tên thư mục ) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
