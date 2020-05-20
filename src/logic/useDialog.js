import { useState } from 'react';

export const useDialog = (todos, setTodos) => {
    const [open, setOpen] = useState(false);
    const [newTodo, setNewTodo] = useState({
      title: "", deadline: new Date(), done: false
    });

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleChange = e => {
        setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
      };
    
      const handleChangeDate = e => {
        setNewTodo({...newTodo, "deadline": e});
      };

      const clickAdd = () => {
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setOpen(false);
        setNewTodo({ title: "", deadline: "", done: false });
      };
    return [open, handleOpen, handleClose, handleChange, handleChangeDate, clickAdd, newTodo];    
};