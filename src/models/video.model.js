import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
        videoFile:{
            type:String,
            required:true
        },
        thumbnail:{
            type:String,//clouding url
            required:true
        },
        title:{
            type:String,//clouding url
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:String,
            required:true
        },
        views:{
            type:String,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.type.ObjectId,
            ref:"User"
        }
        


},{timestamps})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video =mongoose.model("Video",videoSchema)