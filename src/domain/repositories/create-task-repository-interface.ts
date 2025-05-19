import { Task } from "@/domain/entities/task-entinty";

export interface CreateTaskRepositoryInterface  {
      create(user:Task): Promise<Task | null>
}