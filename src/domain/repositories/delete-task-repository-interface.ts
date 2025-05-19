import { Task } from "@/domain/entities/task-entinty";

export interface DeleteTaskRepositoryInterface  {
      delete(id:string): Promise<Task | null>
}