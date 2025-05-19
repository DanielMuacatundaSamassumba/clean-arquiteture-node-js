import { Task } from "@/domain/entities/task-entinty";

export interface ListTaskRepositoryInterface  {
      list(): Promise<Task[]>
}