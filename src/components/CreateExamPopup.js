import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

const CreateExamPopup = ({
  onSubmit,
  onClose,
  examTitle,
  setExamTitle,
  googleFormLink,
  setGoogleFormLink,
  examDuration,
  setExamDuration,
}) => {
  return (
    <Popover
      open={true} // Assuming this component is always open when called
      onClose={onClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <Box sx={{ p: 4 }}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" gutterBottom>
          Fill Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          Exam Title
        </Typography>
        <FormControl fullWidth>
        <InputLabel htmlFor="exam-title" >
          </InputLabel>
          <TextField
            id="exam-title"
            value={examTitle}
            onChange={(e) => setExamTitle(e.target.value)}
          />
        </FormControl>
        <Typography variant="body1" gutterBottom>
          Google Form Link
        </Typography>
        <FormControl fullWidth>
          <InputLabel htmlFor="google-form-link"></InputLabel>
          <TextField
            id="google-form-link"
            value={googleFormLink}
            onChange={(e) => setGoogleFormLink(e.target.value)}
          />
        </FormControl>
        <Typography variant="body1" gutterBottom>
          Exam Duration (in minutes)
        </Typography>
        <FormControl fullWidth>
          <InputLabel htmlFor="exam-duration">
          </InputLabel>
          <TextField
            id="exam-duration"
            type="number"
            value={examDuration}
            onChange={(e) => setExamDuration(e.target.value)}
          />
        </FormControl>
        <Button variant="contained" onClick={onSubmit}>
          Create Exam
        </Button>
      </Box>
    </Popover>
  );
};

export default CreateExamPopup;
