import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/FormatPrice';
import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
  BackButton,
} from './styles';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = queryParams.get('categoria');

    if (categoryId) {
      return categoryId === '0' ? 0 : categoryId;
    }
    return 0;
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const categoryId = queryParams.get('categoria');

    if (categoryId === '0' || !categoryId) {
      // eslint-disable-next-line
      setActiveCategory(0);
    } else {
      setActiveCategory(categoryId);
    }
  }, [search]);

  const filteredProducts =
    activeCategory === 0
      ? products
      : products.filter(
          (product) => String(product.category_id) === String(activeCategory),
        );

  // useEffect(() => {
  //   if (activeCategory === 0) {
  //     setFilteredProducts(products);
  //   } else {
  //     const newFilteredProducts = products.filter(
  //       (product) => product.category_id === activeCategory,
  //     );
  //     setFilteredProducts(newFilteredProducts);
  //   }
  // }, [products, activeCategory]);

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
      <Banner>
        <h1>
          O MELHOR <br /> HAMBURGUER <br /> ESTÁ AQUI!
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>

      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
