import Card from "../../components/card/Card.jsx";
import { useProduct } from "../../context/ProductsContext.jsx";
import { useWishlist } from "../../context/WishlistContext.jsx";
import "./wishlist.css";
function Wishlist() {
  const { wishlist } = useWishlist();
  const { products } = useProduct();

  console.log(wishlist);
  if (wishlist.length <= 0) {
    return (
      <div className="text-center py-5 my-5" style={{ backgroundColor: "#f5f5f7", padding: "20px" }}>
        <p className="display-1">wishList is empty</p>
      </div>
    );
  } else {
    return (
      <div className="text-dark" style={{ backgroundColor: "#f5f5f7", padding: "20px" }}>
        <div className="container m-auto">
          <div className="row mt-5 mb-5">
            {wishlist.map((item) => {
              let data = products.filter((product) => {
                return product.id == item.productId;
              });
              return (
                <div className="cartProduct" key={item.id}>
                  <Card id={data[0].id} data={data[0]} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Wishlist;
