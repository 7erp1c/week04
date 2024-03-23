import {postCollection} from "../db/mongo-db";
import {PostsView} from "../model/postsType/postsView";


export const PostsRepositories = {
    //get(/)
    async findFullPosts():Promise<PostsView[]> {
        return postCollection.find({},{ projection: { _id: 0 }}).toArray()
    },
//post(/)

    async createPosts(newPosts:PostsView):Promise<PostsView> {
        await postCollection.insertOne(newPosts)
        return newPosts

    },
//get(/id)
    async  findPostsByID(id: string):Promise<PostsView|null> {
        return  await postCollection.findOne({id}, { projection: { _id: 0 }});

    },
//put(/id)
    async updatePosts(id: string, title: string, shortDescription: string, content: string, blogId:string):Promise<boolean> {
        const result = await postCollection
            .updateOne({id:id},{$set:{title:title,shortDescription:shortDescription,content:content,blogId:blogId}})
        return result.matchedCount === 1

    },
//delete(/id)
    async deletePosts(id: string): Promise<boolean> {
        const result = await postCollection.deleteOne({id:id})
        return result.deletedCount === 1
    }
}