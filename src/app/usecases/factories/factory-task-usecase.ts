import { CreateTaskRepositoy } from "@/infra/repositories/create-task-repository";
import { CreateTaskUsecase } from "@/app/usecases/create-task-usecase";
import { prisma } from "@/infra/database/prisma/datasource";

const createtaskrepository = new CreateTaskRepositoy(prisma)
const createtaskusecase = new CreateTaskUsecase(createtaskrepository)

export { 
     createtaskusecase
}