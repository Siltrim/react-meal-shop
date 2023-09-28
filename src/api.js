import { API_URL } from './config';

const getMealById = async (mealId) => {
  const respone = await fetch(API_URL + 'lookup.php?i=' + mealId);
  return await respone.json();
};

const getAllCategories = async () => {
  const response = await fetch(API_URL + 'categories.php', {
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
  const data = await response.json();
  return data;
};

const getFilteredCategory = async (catName) => {
  const respone = await fetch(API_URL + 'filter.php?c=' + catName);
  return await respone.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
