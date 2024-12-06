import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Список дел
      </Typography>

      <div style={{ marginBottom: "16px" }}>
        <TextField
          label="Введите задачу"
          variant="outlined"
          value={task}
          onChange={handleInputChange}
          fullWidth
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <Button variant="contained" onClick={handleAddTask}>
          Добавить задачу
        </Button>
      </div>

      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} sx={{ marginTop: 1 }}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ListItemText primary={task} />
                  <IconButton
                    onClick={() => handleDeleteTask(index)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
