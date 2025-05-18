import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import RecentUsers from "../components/RecentUsers";
import UserMenu from "../components/UserMenu";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationBell from "../components/NotificationBell";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample stats data
const stats = [
  {
    label: "Total Users",
    value: 1200,
    icon: <PeopleIcon />,
    gradient: "linear-gradient(135deg, #1976d2 30%, #42a5f5 90%)",
  },
  {
    label: "Active Users",
    value: 875,
    icon: <PersonIcon />,
    gradient: "linear-gradient(135deg, #2e7d32 30%, #66bb6a 90%)",
  },
  {
    label: "Total Revenue",
    value: "$24,500",
    icon: <AttachMoneyIcon />,
    gradient: "linear-gradient(135deg, #ed6c02 30%, #ff9800 90%)",
  },
  {
    label: "Today's Visits",
    value: 321,
    icon: <BarChartIcon />,
    gradient: "linear-gradient(135deg, #d32f2f 30%, #ef5350 90%)",
  },
];

const tasks = [
  { id: 1, title: "Complete dashboard design", status: "In Progress" },
  { id: 2, title: "Review API integration", status: "Pending" },
  { id: 3, title: "Write unit tests for components", status: "Completed" },
  { id: 4, title: "Prepare release notes", status: "In Progress" },
  { id: 5, title: "Fix UI bugs", status: "Pending" },
];

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const initialUser = {
  name: "John Doe",
  email: "johndoe@example.com",
  profilePicture: "https://i.pravatar.cc/150?img=5",
};

const UserProfile = () => {
  const [user, setUser] = useState(initialUser);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleEditToggle = () => {
    setEditing(!editing);
    setFormData(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setUser(formData);
    setEditing(false);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: 3 }}>
      <Paper sx={{ maxWidth: 400, width: "100%", padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="User Avatar"
            src={user.profilePicture}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography variant="h5" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {user.email}
          </Typography>

          {editing ? (
            <>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                sx={{ mt: 2 }}
              >
                Save Changes
              </Button>
            </>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              onClick={handleEditToggle}
              sx={{ mt: 2 }}
            >
              Edit Profile
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default function Dashboard() {
  return (
    <Box p={3} sx={{ position: "relative", height: "100%" }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Info Cards */}
        {stats.map((stat, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },
              }}
            >
              <Avatar
                sx={{
                  background: stat.gradient,
                  color: "#fff",
                  width: 48,
                  height: 48,
                }}
              >
                {stat.icon}
              </Avatar>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  {stat.label}
                </Typography>
                <Typography variant="h5">{stat.value}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              User Growth
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#1976d2"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="pv" stroke="#42a5f5" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        {/* Task List */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Task List
            </Typography>
            <Box>
              <ul>
                {tasks.map((task) => (
                  <li key={task.id}>
                    <Typography variant="body1">
                      {task.title}
                      <span style={{ fontWeight: "bold" }}>{task.status}</span>
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {/* Notification Bell */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <NotificationBell />
        <UserMenu />
      </Box>
      <Typography variant="h4" gutterBottom></Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <RecentUsers />
        </Grid>
      </Grid>
    </Box>
  );
}
