import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@mui/material';

const TextDisplayForm = () => {
  // Состояние для хранения введенного текста
  const [inputText, setInputText] = useState('');
  // Состояние для хранения текста, который нужно отобразить
  const [displayedText, setDisplayedText] = useState('');

  // Обработчик изменения текста в поле ввода
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Обработчик нажатия кнопки
  const handleButtonClick = () => {
    setDisplayedText(inputText);
    setInputText('');
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Поле ввода */}
      <TextField
        label="Введите текст"
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={handleInputChange}
        style={{ marginBottom: '20px' }}
      />

      {/* Кнопка */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleButtonClick}
      >
        Отобразить текст
      </Button>

      {/* Если текст для отображения не пустой, показываем карточку с текстом */}
      {displayedText && (
        <Card
          style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: '#f5f5f5',
          }}
        >
          <Typography variant="h5" color="textSecondary">
            {displayedText}
          </Typography>
        </Card>
      )}
    </div>
  );
};

export default TextDisplayForm;
