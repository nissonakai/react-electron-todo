import React from "react";
import {
    Dialog,
    TextField,
    DialogActions,
    DialogContent,
    DialogTitle,
    Fab,
    Button
} from "@material-ui/core";
import {
    Add
} from '@material-ui/icons';

export const AddDialog = ({ open, handleOpen, handleClose, handleChange, clickAdd, newTodo }) => {
    
    
    return (
        <>
            <Fab aria-label="edit" onClick={() => handleOpen()}>
                <Add />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">新規追加</DialogTitle>
                <DialogContent>
                    <>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="title"
                        label="TODO"
                        type="text"
                        value={newTodo.title}
                        onChange={e => handleChange(e)}
                    />
                    <TextField
                        margin="dense"
                        name="deadline"
                        label="期日"
                        type="datetime-local"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        value={newTodo.deadline}
                        onChange={e => handleChange(e)}
                    />
                    </>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => clickAdd()}>
                        追加
                    </Button>
                    <Button onClick={() => handleClose()} color="secondary">
                        キャンセル
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};