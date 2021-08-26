import React, { useState } from 'react';
import api from '../api/index';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    if (number > 4 && number < 15) {
      return 'человек тусанет';
    } else if (number >= 2 && number <= 4) {
      return 'человека тусанут';
    } else if (number === 1) {
      return 'человек тусанет';
    } else {
      return 'человек тусанет';
    }
  };

  return (
    <>
      <h2>
        <span
          className={users.length > 0 ? 'badge bg-primary' : 'badge bg-danger'}
        >
          {users.length > 0
            ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
            : 'никто c тобой не тусанет'}
        </span>
      </h2>

      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>
                    {user.qualities.map((quality) => (
                      <span
                        key={quality._id}
                        className={'badge m-1 bg-' + quality.color}
                      >
                        {quality.name}
                      </span>
                    ))}
                  </td>
                  <td>{user.profession.name}</td>
                  <td>{user.completedMeetings}</td>
                  <td>{user.rate}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(user._id);
                      }}
                      type="button"
                      className="btn btn-danger"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
