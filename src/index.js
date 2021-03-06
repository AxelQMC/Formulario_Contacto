const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const path = require("path");
//inicializaciones
const app = express();

//settings 
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs",hbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars")
}));
app.set("view engine", ".hbs")

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//variables globales
app.use((req,res,next) =>{
    next();
})

//routes
app.use(require("./routes/index"));
app.use("/formulario",require("./routes/form"));
app.use("/managger",require("./routes/MessageManagger"));
    

//public
app.use(express.static(path.join(__dirname, "public")));
//start server
app.listen(app.get("port"), ()=>{
    console.log("server on port" , app.get("port"));
})