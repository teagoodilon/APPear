import express from "express";
import bodyParser from "body-parser";
import itemRoutes from "./routes/item.routes.js"

const app = express();

app.use(express.json())//sempre antes das rotas
app.use(bodyParser.urlencoded({extended : true}))
app.use("/item", itemRoutes)
app.listen(3000, () => {console.log("Servidor Executando !!!")})