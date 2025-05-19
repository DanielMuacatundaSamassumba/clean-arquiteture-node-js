import { taskRoutes } from "@/infra/controllers/routes/task-routes"
import express from "express"

const app = express()
app.use(express.json())
app.use(taskRoutes)
export { app }