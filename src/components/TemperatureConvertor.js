import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

const TemperatureConvertor = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertCelsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const convertFahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    if (celsiusValue !== "") {
      setFahrenheit(
        convertCelsiusToFahrenheit(parseFloat(celsiusValue)).toFixed(2)
      );
    } else {
      setFahrenheit("");
    }
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    if (fahrenheitValue !== "") {
      setCelsius(
        convertFahrenheitToCelsius(parseFloat(fahrenheitValue)).toFixed(2)
      );
    } else {
      setCelsius("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Температурный конвертер
      </Typography>
      <div style={{ marginBottom: "16px" }}>
        <TextField
          label="Цельсий"
          variant="outlined"
          value={celsius}
          onChange={handleCelsiusChange}
          type="number"
          fullWidth
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <TextField
          label="Фаренгейт"
          variant="outlined"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          type="number"
          fullWidth
        />
      </div>
    </div>
  );
};

export default TemperatureConvertor;
