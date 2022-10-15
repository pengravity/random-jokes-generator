import { useState, useEffect } from 'react';
import spinner from '../assets/spinner.gif';

const Jokes = () => {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);

  const URL = 'https://api.chucknorris.io/jokes/random';

  const getJoke = () => {
    setLoading(true);
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setJoke(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <section className=' --center-all --100vh --bg-primary'>
      <div className='container --card --bg-light --p2 '>
        <h1>Chuck Norris Jokes Generator</h1>
        <div className='--line'></div>
        <br />
        {loading ? (
          <img src={spinner} alt='loading' width={150} />
        ) : (
          <>
            <h4>{joke.value}</h4>
          </>
        )}
        <br />
        <button onClick={getJoke} className='--btn --btn-primary '>
          Generate Joke
        </button>{' '}
      </div>
    </section>
  );
};

export default Jokes;
