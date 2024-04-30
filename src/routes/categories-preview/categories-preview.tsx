import { useContext } from 'react';
import { shopContext } from '../../contexts/shop.context';
import CategoryPreview from '../../components/category-preview/category.preview';

const Shop = () => {
  const { categoriesMap } = useContext(shopContext);
  return (
    <div className="categories-preview-container">
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
