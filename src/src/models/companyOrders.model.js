import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const companyOrdersSchema = new Schema(
  {
    companyName: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    address: {
      type: String,
      require: true
    },
    phone: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

companyOrdersSchema.plugin(mongoosePaginate);

export default model('CompanyOrders', companyOrdersSchema);
