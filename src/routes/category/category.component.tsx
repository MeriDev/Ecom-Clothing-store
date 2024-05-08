import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { shopContext } from '../../contexts/shop.context';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoryTitle, CategoryPageContainer } from './category.styles';

const CategoryPage = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(shopContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
      <CategoryPageContainer>
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPageContainer>
    </>
  );
};

export default CategoryPage;
