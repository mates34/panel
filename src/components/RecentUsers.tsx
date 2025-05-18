import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
  Box,
} from "@mui/material";

const users = [
  {
    name: "Alice Johnson",
    message: "Requested access to dashboard",
    date: "2025-05-08",
  },
  {
    name: "Bob Smith",
    message: "Sent a feedback",
    date: "2025-05-07",
  },
  {
    name: "Charlie Davis",
    message: "Signed up recently",
    date: "2025-05-06",
  },
];

const RecentUsers: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Users
        </Typography>
        <List>
          {users.map((user, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start" sx={{ alignItems: "center" }}>
                <ListItemAvatar>
                  <Avatar>{user.name.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {user.message}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        {user.date}
                      </Typography>
                    </>
                  }
                />
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button size="small" color="error" variant="outlined">
                    Reject
                  </Button>
                  <Button size="small" color="primary" variant="contained">
                    Approve
                  </Button>
                </Box>
              </ListItem>
              {index < users.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentUsers;
