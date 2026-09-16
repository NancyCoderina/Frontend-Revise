// const express = require("express")
// const app = express()

// const studentRoutes = require("./studentRoutes")

// app.use("/students",studentRoutes);

// app.listen(3000,()=>{
//     console.log("Server started")
// })

//controller ka server
const express = require("express")

const studentRoutes = require("./studentRoutes")

const app = express()

app.use(express.json)

app.use("/students",studentRoutes)

app.listen(3000,()=>{
    console.log("Server running")
})