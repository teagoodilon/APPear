import express from "express";
import bodyParser from "body-parser";
import clienteRoutes from "./routes/cliente.routes.js"
import produtoRoutes from "./routes/produto.routes.js"

const app = express();

app.use(express.json())//sempre antes das rotas
app.use(bodyParser.urlencoded({extended : true}))
app.use("/cliente", clienteRoutes)
app.use("/produto", produtoRoutes)
app.listen(3000, () => {console.log("Servidor Executando !!!")})