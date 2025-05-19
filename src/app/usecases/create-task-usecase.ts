import { Task } from "@/domain/entities/task-entinty";
import { CreateTaskRepositoryInterface } from "@/domain/repositories/create-task-repository-interface";
import { TaskType } from "@/app/usecases/types/TaskType";
export class CreateTaskUsecase {
    constructor(private IcreateRepository: CreateTaskRepositoryInterface) { }

    async execute(params: TaskType) {
        const { name,  duration } = params
        const task = new Task(name, duration)
        const response = await this.IcreateRepository.create(task)
         console.log("mine")
        return response
    }
}