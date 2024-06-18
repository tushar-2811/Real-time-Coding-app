import {z} from 'zod';

export const envConfigSchema = z.object({
    PORT : z.coerce.number().positive().max(65536).default(3000),
    MONGODB_URI : z.string({
        description : "Mongo database connection string",
        required_error : "you forgot to add the database uri"
    }),
    CORS_ORIGIN : z.string({
        description : "Cross origin resource sharing web address",
        required_error : "you forgot to add the cors urls"
    }).url()
})

