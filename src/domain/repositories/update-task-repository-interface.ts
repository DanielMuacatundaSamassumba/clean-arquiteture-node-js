import { Task } from "@/domain/entities/task-entinty";

export interface UpdateTaskRepositoryInterface  {
      update(id:string): Promise<Task>
}