import axios from "axios";
import React, { useEffect, useState } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);
  const [firstCategoryID, setFirstCategoryID] = useState("");

  const BASE_API_URL = import.meta.env.VITE_API_URL;
  const API_URL = `${BASE_API_URL}/categories/active?limit=10`;
  const getCategories = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setCategories(data.categories);
      setFirstCategoryID(data.categories[0]._id);
    } catch (error) {
      console.log(`error is : ${error}`);
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return { categories, firstCategoryID, loader };
}

export default useCategories;
