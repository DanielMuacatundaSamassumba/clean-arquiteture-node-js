import { createtaskusecase } from "@/app/usecases/factories/factory-task-usecase";
import { Request, Response } from "express";
import { tasktSchemaValidation } from "@/infra/controllers/task-controllers/types/task-schema-validation";
export async function createTask(req: Request, res: Response) {
    const data = tasktSchemaValidation.parse(req.body)
    try {
        const response = await createtaskusecase.execute(data)

        return res.status(201).json({
            message: " task created with sucess",
            data: response
        })
    } catch (e) {
        return res.status(400).json({
            message: " task created with sucess",
            error: e
        })
    }
}