const express = require("express");

const path = require("path");

const http = require("http");
const fileupload=require("express-fileupload");

const {routesInit , corsAccessControl} = require("./routes/config_routes");

// מגדיר משתנה שמשתמש ביכולות האקספרס ולאחר מכן
// נאסוף אותו כאשר נפעיל שרת עם  מודול
// HTTP
const app = express();

app.use(fileupload({
    limits:{fileSize:1021*1024*5}
}))
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

corsAccessControl(app);

routesInit(app);

const server = http.createServer(app);
let port = process.env.PORT || "3000";
server.listen(port);