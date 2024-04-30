import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { shopContext } from '../../contexts/shop.context';

import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

const CategoryPage = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(shopContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      <div className="category-page-container">
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default CategoryPage;
