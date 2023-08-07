import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
var list = []
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
app.get("/", (req, res) => {
    
    const d = new Date();
    const data = {
        year: d.getFullYear(),
        day: d.getDay(),
        month: monthName[d.getMonth()],
        itemsList : list,
    };
    res.render('index.ejs', data);
});
app.post("/add",(req ,res )=>{
    list.push(req.body.addText);
    const d = new Date();
    const data = {
        year: d.getFullYear(),
        day: d.getDay(),
        month: monthName[d.getMonth()],
        itemsList : list,
    };
    console.log(list);
    res.render('index.ejs', data);
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});