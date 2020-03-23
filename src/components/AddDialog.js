import React from "react";
import {
    Dialog,
    TextField,
    DialogActions,
    DialogContent,
    DialogTitle,
    Fab,
    Button,
    Container,
    Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
    Add
} from '@material-ui/icons';

const useStyles = makeStyles({
    centering: {
        marginTop: 20,
        textAlign: 'center'
    },
    mb: {
        marginBottom: 10
    }
});

export const AddDialog = ({ open, handleOpen, handleClose, handleChange, clickAdd, newTodo }) => {
    const classes = useStyles();
    return (
        <Container className={classes.centering}>
            <Fab aria-label="edit" onClick={() => handleOpen()}>
                <Add />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">新規追加</DialogTitle>
                <DialogContent>
                    <Container>
                        <Grid container className={classes.mb}>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="title"
                                label="TODO"
                                type="text"
                                value={newTodo.title}
                                onChange={e => handleChange(e)}
                            />
                        </Grid>
                        <Grid container>
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
                        </Grid>
                    </Container>
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
        </Container>
    );
};