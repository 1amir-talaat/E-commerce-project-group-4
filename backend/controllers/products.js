import Product from "../models/Products.js";
import ProductSubImage from "../models/ProductSubImage.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: ProductSubImage,
          as: "subImgs",
          attributes: ["imageUrl"],
        },
      ],
    });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const { title, description, price, stock, mainImage, rating, subImage } = req.body;

  try {
    const newProduct = await Product.create({
      title,
      description,
      price,
      stock,
      mainImage,
      rating,
    });

    if (subImage && subImage.length > 0) {
      const imageRecords = subImage.map((imageUrl) => ({ imageUrl, productId: newProduct.id }));
      await ProductSubImage.bulkCreate(imageRecords);
    }

    res.status(201).json({ msg: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
