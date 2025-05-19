import { Task } from "@/domain/entities/task-entinty";
import { CreateTaskRepositoryInterface } from "@/domain/repositories/create-task-repository-interface";

export class CreateTaskRepositoy implements CreateTaskRepositoryInterface {

    public OrmLib
    constructor(ormLib: any) {
        this.OrmLib = ormLib
    }
    async create(user: Task): Promise<Task | null> {

        const { name, duration } = user
        const response = await this.OrmLib.taskMine.create({
            data: {
                name: name,
                duration: duration
            }
        })
        return response ? user : null
    }
}