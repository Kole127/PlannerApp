import { useEffect, useState } from "react";

export default function Joke() {
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setJoke(data.value);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
    <h3 className="text-3xl font-bold underline">Chuck Norris joke: </h3><p className="underline">{joke}</p>
    <button onClick={fetchJoke}>Next</button>
    </div>
        
  )
}
