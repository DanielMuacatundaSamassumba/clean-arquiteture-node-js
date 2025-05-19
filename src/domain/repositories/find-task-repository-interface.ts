import { Task } from "@/domain/entities/task-entinty";

export interface FindTaskRepositoryInterface  {
      find(id:string): Promise<Task | null>
}