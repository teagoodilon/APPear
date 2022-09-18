import express from "express";
import bodyParser from "body-parser";
import itemRoutes from "./routes/item.routes.js"
import itemAProvarRoutes from "./routes/itemAprovar.routes.js"
import casesRoutes from "./routes/casesDeSucesso.routes.js"
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json())//sempre antes das rotas
app.use(bodyParser.urlencoded({extended : true}))
app.use("/item", itemRoutes)
app.use("/itemAprovar", itemAProvarRoutes)
app.use("/casesdesucesso", casesRoutes)
app.listen(3000, () => {console.log("Servidor Executando !!!")})