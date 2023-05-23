import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const employmentApplicationsSchema = new Schema(
  {
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

employmentApplicationsSchema.plugin(mongoosePaginate);

export default model('EmploymentApplications', employmentApplicationsSchema);
