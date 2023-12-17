"use client";
import { useEffect } from "react";

const FetchModule = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/melon");
      const data = await response.json();
      console.log("Api : ", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default FetchModule;
