import { randomUUID } from "node:crypto"
import { sql } from "./db.js"


export class DatabasePostgres {
   

    async list(search) {
        let videos

        if(search){
            videos = await sql`SELECT * FROM VIDEOS WHERE TITLE ilike ${"%" + search + "%"}`
        }else{
            videos = await sql`SELECT * FROM VIDEOS`
        }

        return videos
    }


    async create(video) {
       const videoID = randomUUID()

       const { title, description, duration } = video

       await sql`INSERT INTO VIDEOS (id, title, description, duration) VALUES(${videoID}, ${title}, ${description}, ${duration})`

    }

    async update(id, video){
        const { title, description, duration } = video

        await sql`UPDATE VIDEOS SET title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`
    }

    async delete(id){
        
        await sql`DELETE FROM VIDEOS WHERE id=${id}`
    }
    
}