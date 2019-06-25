import { useState, useEffect } from "react";

const useHttp = (url, dependencies = []) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log("Sending Http request to URL: " + url);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error: Failed to send http  request to: .");
        }
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);

  return [fetchedData, isLoading];
};

export default useHttp;
