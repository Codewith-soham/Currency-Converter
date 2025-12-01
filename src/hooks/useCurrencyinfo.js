import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
        const json = await res.json();

        if (json && json.rates) {
          setData(json.rates);
        } else {
          setData({});
        }
      } catch (err) {
        console.error("Failed to fetch currency data", err);
        setData({});
      }
    }

    fetchRates();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
