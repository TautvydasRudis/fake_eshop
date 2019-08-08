import React, { useContext } from "react";
import "./index.scss";
import { ProductCard, ShopContext } from "../../components";

function Error() {
  return <p>Ohh no, you don't have favorites</p>;
}

function Favorites() {
  const { products, favorites } = useContext(ShopContext);
  const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
  );

  return (
    <div className="Favorites">
      {!favoriteProducts.length && <Error />}
      {favoriteProducts.map(data => {
        return <ProductCard {...data} key={data.id} />;
      })}
    </div>
  );
}

export default Favorites;
