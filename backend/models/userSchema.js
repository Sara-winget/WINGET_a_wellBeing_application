import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    phone:{
        type: String,
    default: ''
    },
    password: {
    type: String,
    required: true
  },
  profilePic: {
    type: String // Store URL/path to image
  },
   role: {
    type: String,
    enum: ['user', 'phycologist', 'physiotherapist', 'gym trainer', 'yoga trainer', 'zumba trainer', 'nutritionist', 'dermatologist'],
    default: 'user'
  },
  appliedRole: {
    type: String,
    enum: ['phycologist', 'physiotherapist', 'gym trainer', 'yoga trainer', 'zumba trainer', 'nutritionist', 'dermatologist'],
    default: null
  },
  resume:{
     type: String
  }
,
 isApproved: {
    type: Boolean,
    default: false // Will become true only after admin approval
  }
}, { timestamps: true })