import React from 'react';

const SearchStatus = ({ numberOfUsers }) => {
  const renderPhrase = (number) => {
    const chooseText = (number) => {
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
      <span className={number > 0 ? 'badge bg-primary' : 'badge bg-danger'}>
        {number > 0
          ? `${number} ${chooseText(number)} с тобой сегодня`
          : 'никто c тобой не тусанет'}
      </span>
    );
  };

  return (
    <>
      <h2>{renderPhrase(numberOfUsers)}</h2>
    </>
  );
};

export default SearchStatus;
