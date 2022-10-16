import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const GithubUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='--bg-primary --py2'>
      <div className='container'>
        <header>
          <h1 className='--text-center --text-light'>Github Users</h1>
          <div className='--line'></div>
        </header>
        <div className='--grid-25 --py'>
          {users.map((user) => {
            const { avatar_url, login, id, html_url } = user;
            return (
              <div key={id} className='--card --bg-light --p --flex-start '>
                <img
                  src={avatar_url}
                  alt='image'
                  className='--profile-img --mx'
                />
                <span>
                  <h4> {login}</h4>
                  <a href={html_url}>View profile</a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GithubUsers;
