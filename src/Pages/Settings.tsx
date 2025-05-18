import React from "react";
import { Typography, Paper, TextField, Button } from "@mui/material";

const Settings: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper sx={{ p: 2 }}>
        <TextField label="Site Name" fullWidth margin="normal" />
        <TextField label="Admin Email" fullWidth margin="normal" />
        <Button variant="contained" sx={{ mt: 2 }}>
          Save Settings
        </Button>
      </Paper>
    </div>
  );
};

export default Settings;
