const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  img: {
    type: String,
    default:
      "https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/ava-1.png",
  },
  name: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
