import React from 'react';
import Qualitie from './qualitie';
import Bookmark from './bookmark';

const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onBookmark,
}) => {
  return (
    <tr>
      <th scope="row">{name}</th>
      <td>
        <Qualitie qualities={qualities} />
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{`${rate} /5`}</td>
      <td>
        <Bookmark status={bookmark} onBookmark={() => onBookmark(_id)} />
      </td>
      <td>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => onDelete(_id)}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default User;
