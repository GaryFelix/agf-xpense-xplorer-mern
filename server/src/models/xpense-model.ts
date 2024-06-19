import mongoose from "mongoose";

interface XpenseModel {
  userId: string;
  date: Date;
  description: string;
  amount: number;
  transactionType: string;
  category: string;
  frequency: string;
  paymentMethod: string;
}

const xpenseSchema = new mongoose.Schema<XpenseModel>({
  userId: {
    type: String,
    required: [false, "Path `userId` is not required."],
  },
  date: {
    type: Date,
    required: [false, "Path `date` is not required."],
  },
  description: {
    type: String,
    required: [true, "Path `description` is required."],
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    required: false,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});

const XpenseDataModel = mongoose.model<XpenseModel>("XpenseData", xpenseSchema);

export default XpenseDataModel;
