const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },
        description: {
            type: String,
            required: [true, "Please enter product description"],
        },
        category: {
            type: String,
            required: [true, "Please enter product category"],
        },
        tags: {
            type: [String],
            required: [true, "Please enter product tags"],
        },
        price: {
            type: Number,
            required: [true, "Please enter product price"],
        },
        stock: {
            type: Number,
            required: [true, "Please enter product stock"],
        },
        email: {
            type: String,
            required: [true, "Please enter your email!"],
        },
          images:{
            type:[string],
            required: [true, "Please upload product images"],
          },
          createdAt:{
            type: Date,
            default: Date.now(),//automatically set the creation date
          },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("Product", productSchema);

