import { Router } from "express";
import { createTask } from "@/infra/controllers/task-controllers/task-controller";

const taskRoutes = Router()

taskRoutes.post("/task/create", createTask)
taskRoutes.get("/", (req, res)=>{
  return res.send("mine")
})
export { 
     taskRoutes   
}