import React from "react";
import Dialog from "@mui/material/Dialog";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Button from "../Button/Button";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  btnLabel: string;
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
  questions: string[];
  setQuestionFromList: (selectedIndex: number) => void;
}

function DialogBox(props: IProps) {
  const {
    btnLabel,
    isDialogOpen,
    setIsDialogOpen,
    questions,
    setQuestionFromList,
  } = props;

  const handleOpenCloseModel = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const selectedQuestionFromList = (index: number) => {
    setQuestionFromList(index);
    handleOpenCloseModel();
  };
  return (
    <div>
      <Button
        label={btnLabel}
        type="button"
        variant="outlined"
        trigger={handleOpenCloseModel}
      />
      <Dialog
        fullScreen
        open={isDialogOpen}
        onClose={handleOpenCloseModel}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleOpenCloseModel}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          {questions.map((item: string, index: number) => (
            <ListItem>
              <h3
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
                style={{ cursor: "pointer" }}
                onClick={() => selectedQuestionFromList(index)}
              />
            </ListItem>
          ))}
          <Divider />
        </List>
      </Dialog>
    </div>
  );
}
export default DialogBox;
