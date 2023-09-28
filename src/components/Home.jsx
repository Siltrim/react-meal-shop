import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../api';
import Preloader from './Preloader';
import CategoryList from './CategoryList';
import Search from './Search';

const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())),
    );
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, []);
  // fetch('http://www.themealdb.com/api/json/v1/1/categories.php');

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? <Preloader></Preloader> : <CategoryList catalog={filteredCatalog} />}
    </>
  );
};

export default Home;
