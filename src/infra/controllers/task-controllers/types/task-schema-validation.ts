import z, { string } from "zod"

export const  tasktSchemaValidation = z.object({
      name:z.string().nonempty(),
      duration:z.string().nonempty()
})