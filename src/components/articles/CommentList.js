import React from 'react';

// Компонент для відображення списку коментарів
// Приймає масив `comments` через props
function CommentList({ comments }) {
  // Якщо коментарів немає, відображаємо відповідне повідомлення
  if (!comments || comments.length === 0) {
    return <p>Коментарів ще немає.</p>;
  }

  return (
    <div className="comments-list">
      {/* Ітерація по масиву коментарів та рендеринг кожного коментаря */}
      {comments.map((comment, index) => (
        // Використовуємо index як ключ, але краще мати унікальний ID для кожного коментаря
        <div className="comment-item" key={index}>
          {/* Відображення імені автора (або "Анонім") та тексту коментаря */}
          <p className="comment-author">{comment.name || 'Анонім'}</p>
          <p className="comment-text">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

// Експорт компонента за замовчуванням
export default CommentList;
