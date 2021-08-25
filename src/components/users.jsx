import React, { useState } from 'react';
import api from '../api/index';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    console.log(userId);
    setUsers(users.filter((user) => user._id !== userId.id));
  };

  const renderPhrase = (number) => {
    const text = number < 5 && number > 1 ? 'человека' : 'человек';
    return number > 0
      ? `${number} ${text} тусанет с тобой сегодня`
      : 'никто c тобой не тусанет';
  };

  return (
    <>
      <div
        className={users.length > 0 ? 'badge bg-primary' : 'badge bg-danger'}
      >
        {renderPhrase(users.length)}
      </div>
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
                    <span className={'me-1 badge bg-' + quality.color}>
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
                      handleDelete({ id: user._id });
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
    </>
  );
};

export default Users;
