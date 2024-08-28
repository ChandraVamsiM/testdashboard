import { Box, Typography, useTheme, TextField, Button, Modal, Fade, Backdrop } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { useState } from "react";
import Header from "./Header";

const UserManagement = () => {

  const [mockDataTeam, setMockDataTeam] = useState([
    {
      id: 1,
      name: "Florence Shaw",
      email: "florence@untitledui.com",
      lastActive: "Mar 4, 2024",
      dateAdded: "July 4, 2022",
      access1: "Admin",
      access2: "Data Export",
      access3: "Data Import",
    },
    {
      id: 2,
      name: "Amelie Laurent",
      email: "amelie@untitledui.com",
      lastActive: "Mar 4, 2024",
      dateAdded: "July 5, 2022",
      access1: "Admin",
      access2: "Data Export",
      access3: "Data Import",
    },
    {
      id: 3,
      name: "Ammar Foley",
      email: "ammar@untitledui.com",
      lastActive: "Mar 4, 2024",
      dateAdded: "July 4, 2022",
      access1: "",
      access2: "Data Export",
      access3: "Data Import",
    },
    {
      id: 4,
      name: "Caitlyn King",
      email: "caitlyn@untitledui.com",
      lastActive: "Mar 2, 2024",
      dateAdded: "July 6, 2022",
      access1: "",
      access2: "Data Export",
      access3: "Data Import",
    },
    {
      id: 5,
      name: "Sienna Hewitt",
      email: "sienna@untitledui.com",
      lastActive: "Mar 4, 2024",
      dateAdded: "July 4, 2022",
      access1: "",
      access2: "Data Export",
      access3: "Data Import",
    },
    {
      id: 6,
      name: "Olly Shroeder",
      email: "olly@untitledui.com",
      lastActive: "Mar 4, 2024",
      dateAdded: "July 4, 2022",
      access1: "",
      access2: "Data Export",
      access3: "Data Import",
    },
    {
      id: 7,
      name: "Mathlide Lewis",
      email: "mathlide@untitledui.com",
      lastActive: "Mar 4, 2024",
      dateAdded: "July 4, 2022",
      access1: "",
      access2: "Data Export",
      access3: "Data Import",
    },
    {
      id: 8,
      name: "Jay Wills",
      email: "jay@untitledui.com",
      lastActive: "Mar 4, 2024",
      dateAdded: "July 4, 2022",
      access1: "",
      access2: "Data Export",
      access3: "Data Import",
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "Harvey@untitledui.com",
      lastActive: "Mar 4, 2024",
      dateAdded: "July 4, 2022",
      access1: "",
      access2: "Data Export",
      access3: "Data Import",
    },
  ]);
  

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    lastActive: '',
    dateAdded: '',
    access1: '',
    access2: '',
    access3: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleAddUser = () => {
    setMockDataTeam((prevData) => [
      ...prevData,
      { id: prevData.length + 1, ...newUser }
    ]);
    handleClose(); // Close the modal after adding
    setNewUser({
      name: '',
      email: '',
      lastActive: '',
      dateAdded: '',
      access1: '',
      access2: '',
      access3: ''
    }); // Reset form
  };

  const columns = [
    {
      field: "user Name",
      headerName: "User Info",
      flex: 1,
      renderCell: ({ row }) => (
        <Box>
          <Typography variant="body1" fontWeight="bold">{row.name}</Typography>
          <Typography variant="body2" color="textSecondary">{row.email}</Typography>
        </Box>
      ),
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: {access1, access2 , access3} }) => (
        <Box display="flex"
        alignItems="center"
        gap={1}>
         {access1 && (
        <Typography
          variant="body1"
          style={{ backgroundColor: colors.blueAccent[600], padding: '4px 8px', borderRadius: '10px' }}
        >
          {access1}
        </Typography>
      )}
      {access2 && (
        <Typography
          variant="body1"
          style={{ backgroundColor: colors.redAccent[700], padding: '4px 8px', borderRadius: '10px' }}
        >
          {access2}
        </Typography>
      )}
      {access3 && (
        <Typography
          variant="body1"
          style={{ backgroundColor: colors.greenAccent[700], padding: '4px 8px', borderRadius: '10px' }}
        >
          {access3}
        </Typography>
      )}
        </Box>
        
    ),
    },
    {
      field: "lastActive",
      headerName: "Last Active",
      flex: 1,
    },
    {
      field: "dateAdded",
      headerName: "Date Added",
      flex: 1,
    },
  ];

  const filteredData = mockDataTeam.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.access1.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.access2.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.access3.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastActive.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.dateAdded.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box m="20px">
     <Header title="User Management" subtitle="Manage your Team Members and their account permissions here" />
      <Box
      display="flex"
      alignItems="flex-start">
      <h1>All Users {mockDataTeam.length}</h1>
      <Box
        display="flex"
        justifyContent="flex-end"
        width="90%"
        gap={1}>
      <TextField
          variant="outlined"
          label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            style: { width: '300px'},
          }}
        />

<Button variant="contained" color="primary" onClick={handleOpen}>
          Add User
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgcolor="background.paper"
            p={3}
            m={3}
            borderRadius={2}
            boxShadow={3}
          >
            <Typography variant="h6" mb={2}>Add New User</Typography>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              value={newUser.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              value={newUser.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="lastActive"
              label="Last Active"
              variant="outlined"
              value={newUser.lastActive}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="dateAdded"
              label="Date Added"
              variant="outlined"
              value={newUser.dateAdded}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="access1"
              label="Access 1"
              variant="outlined"
              value={newUser.access1}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="access2"
              label="Access 2"
              variant="outlined"
              value={newUser.access2}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="access3"
              label="Access 3"
              variant="outlined"
              value={newUser.access3}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddUser}
              sx={{ mt: 2 }}
            >
              Add User
            </Button>
          </Box>
        </Fade>
      </Modal>
      </Box>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
       
      >
      <DataGrid checkboxSelection 
        rows={filteredData} 
        columns={columns} 
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10 , 25, 50]}
         />
      </Box>
    </Box>
  );
}

export default UserManagement