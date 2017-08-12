let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.get('/',function (req,res) {
    res.send('./index.html',{root:__dirname});
})
app.listen(9999);
