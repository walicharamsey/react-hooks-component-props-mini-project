import React from 'react';

const Article = ({ title, date, preview }) => {
  const renderDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{renderDate}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
