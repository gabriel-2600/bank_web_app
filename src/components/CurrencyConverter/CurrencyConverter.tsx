import { useEffect, useState } from "react";

interface Rate {
  rate: number;
  source: string;
  target: string;
}

function CurrencyConverter() {
  const [data, setData] = useState<Rate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const resultData = data?.[0];

  const [inputCurrency, setInputCurrency] = useState(1);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCurrency(Number(e.target.value));
  };

  useEffect(() => {
    async function fetchData() {
      const apiKey = import.meta.env.VITE_API_KEY;

      try {
        const response = await fetch(
          "https://api.wise.com/v1/rates?source=USD&target=PHP",
          {
            mode: "cors",
            method: "GET",
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result: Rate[] = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  if (!resultData) {
    return <p>No rate data available.</p>;
  }

  return (
    <div>
      <h2>{resultData.rate * inputCurrency}</h2>
      <p>{resultData.source}</p>
      <p>{resultData.target}</p>
      <input type="number" value={inputCurrency} onChange={handleInput} />
    </div>
  );
}

export default CurrencyConverter;
