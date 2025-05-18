import React, { useState } from "react";
import { IconButton, Badge, Menu, MenuItem, ListItemText } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { blue } from "@mui/material/colors";

const notifications = [
  { id: 1, message: "New user signed up", time: "2 mins ago" },
  { id: 2, message: "Server restarted", time: "10 mins ago" },
  { id: 3, message: "New task assigned", time: "1 hour ago" },
  { id: 4, message: "System update completed", time: "3 hours ago" },
];

const NotificationBell = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        sx={{ color: blue[500], position: "relative" }}
      >
        <Badge
          badgeContent={notifications.length}
          color="error"
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 300,
            maxHeight: 400,
            overflowY: "auto",
          },
        }}
      >
        {notifications.map((notification) => (
          <MenuItem key={notification.id}>
            <ListItemText
              primary={notification.message}
              secondary={notification.time}
            />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NotificationBell;
