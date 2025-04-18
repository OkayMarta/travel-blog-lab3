import React, { useState } from 'react';
import CommentForm from './CommentForm'; // Імпорт компонента форми коментарів
import CommentList from './CommentList'; // Імпорт компонента списку коментарів

// Компонент картки статті
// Приймає об'єкт `article` та функцію `handleAddComment` через props
function ArticleCard({ article, handleAddComment }) {
  // Стан для кількості лайків
  const [likes, setLikes] = useState(article.initialLikes || 0); // Використовуємо початкове значення, якщо є
  // Стан для відстеження, чи поставив користувач лайк
  const [isLiked, setIsLiked] = useState(false);
  // Стан для відстеження, чи розгорнута картка
  const [isExpanded, setIsExpanded] = useState(false);

  // Обробник кліку на кнопку "Подобається"
  const handleLikeClick = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked); // Інвертуємо стан лайка
  };

  // Обробник кліку на картку для згортання/розгортання
  const handleToggleExpand = (event) => {
    // Ігноруємо кліки на кнопці лайка або всередині форми коментаря
    if (event.target.closest('.like-btn') || event.target.closest('.comment-form')) {
      return;
    }
    // Запобігаємо стандартній поведінці, якщо клік був на посиланні (заголовок)
    if (event.target.tagName === 'A' && event.target.closest('.publication-title')) {
        event.preventDefault();
    }
    setIsExpanded(!isExpanded);
  };

  // Формування класів для кореневого елемента картки
  const articleClasses = [
    'article-item',
    isExpanded ? 'article-item--expanded' : '',
    isLiked ? 'article-item--liked' : ''
  ].filter(Boolean).join(' '); // Фільтруємо порожні значення та об'єднуємо в рядок

  return (
    // Додаємо обробник кліку `handleToggleExpand` до картки
    <article id={article.id} className={articleClasses} onClick={handleToggleExpand}>
      <div className="publication-header">
        {/* Заголовок статті - клік обробляється на батьківському елементі */}
        <h3 className="publication-title"><a href={`#${article.id}`}>{article.title}</a></h3>
        <p className="publication-date">{article.date}</p>
        <div className="publication-actions">
          {/* Кнопка "Подобається" з окремим обробником кліку */}
          <button
            className={`like-btn ${isLiked ? 'liked' : ''}`} // Додаємо клас `liked` для стилізації
            data-article-id={article.id}
            onClick={handleLikeClick} // Використовуємо окремий обробник `handleLikeClick`
          >
            {isLiked ? 'Вподобано' : 'Подобається'} ({likes})
          </button>
        </div>
      </div>

      {/* Контент статті (видимість керується через CSS за допомогою класу article-item--expanded) */}
      <div className="publication-content">
        <div className="publication-image">
          <img src={article.image} alt={article.alt} />
        </div>
        <div className="publication-text">
          {article.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
           {/* Кнопка "Згорнути/Розгорнути" - клік обробляється на батьківському елементі */}
           <a href="#toggle" className="collapse-btn">
              {isExpanded ? 'Згорнути' : 'Розгорнути'}
          </a>
        </div>
      </div>

      {/* Секція коментарів (видимість керується через CSS) */}
      <div className="comment-section">
        <h4>Коментарі</h4>
        {/* Передаємо ID статті та функцію для додавання коментаря */}
        <CommentForm articleId={article.id} onCommentSubmit={handleAddComment} />
        {/* Передаємо поточний список коментарів */}
        <CommentList comments={article.comments} />
      </div>
    </article>
  );
}

// Експорт компонента за замовчуванням
export default ArticleCard;
