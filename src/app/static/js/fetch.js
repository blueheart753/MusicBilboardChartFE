"use client";
import { useEffect } from "react";

const FetchModule = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/apple"); // 프록시 설정을 통해 http://localhost:8080/ 로 요청이 전달됩니다.
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
