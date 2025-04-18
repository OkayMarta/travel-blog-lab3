import React, { useState } from 'react';

// Компонент форми для додавання коментарів
// Приймає `articleId` та функцію `onCommentSubmit` через props
function CommentForm({ articleId, onCommentSubmit }) {
  // Стан для імені користувача
  const [name, setName] = useState('');
  // Стан для тексту коментаря
  const [text, setText] = useState('');

  // Обробник відправки форми
  const handleSubmit = (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці форми
    // Перевірка, чи заповнені поля
    if (!name.trim() || !text.trim()) {
      alert('Будь ласка, заповніть ім\'я та текст коментаря.');
      return;
    }
    // Викликаємо функцію onCommentSubmit, передану з батьківського компонента,
    // з ID статті та даними нового коментаря
    onCommentSubmit(articleId, { name, text });

    // Очищення полів форми після відправки
    setName('');
    setText('');
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor={`comment-name-${articleId}`}>Ваше ім'я:</label>
        <input
          type="text"
          id={`comment-name-${articleId}`} // Унікальний ID для поля імені
          className="comment-name-input"
          placeholder="Ваше ім'я"
          value={name} // Прив'язка до стану name
          onChange={(e) => setName(e.target.value)} // Оновлення стану name при зміні
          required // Обов'язкове поле
        />
      </div>
      <div className="form-group">
        <label htmlFor={`comment-text-${articleId}`}>Ваш коментар:</label>
        <textarea
          id={`comment-text-${articleId}`} // Унікальний ID для поля тексту
          className="comment-text-input"
          placeholder="Ваш коментар"
          value={text} // Прив'язка до стану text
          onChange={(e) => setText(e.target.value)} // Оновлення стану text при зміні
          required // Обов'язкове поле
        ></textarea>
      </div>
      <button type="submit" className="submit-comment-btn">Надіслати</button>
    </form>
  );
}

// Експорт компонента за замовчуванням
export default CommentForm;
