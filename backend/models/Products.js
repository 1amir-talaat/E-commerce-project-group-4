import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";
import ProductSubImage from "./ProductSubImage.js";

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mainImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      min: 0,
      max: 5,
    },
  },
  sale: {
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      min: 0,
      max: 100,
    },
  },
});

Product.hasMany(ProductSubImage, { as: "subImgs", foreignKey: "productId" });

(async () => {
  try {
    await Product.sync({ force: false });
    console.log("Product model synced with database");
  } catch (err) {
    console.error("Error syncing Product model with database:", err);
  }
})();

export default Product;
