import  express  from "express";
import router from "./src/Router/UserRoutes.ts"
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
}  
)

app.use(express.json())
app.use("/",router)
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})