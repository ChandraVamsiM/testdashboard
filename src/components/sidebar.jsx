import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
//import "react-pro-sidebar/dist/styles";
import { tokens } from "../theme";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CasinoIcon from '@mui/icons-material/Casino';
import JoinLeftIcon from '@mui/icons-material/JoinLeft';
import StorageIcon from '@mui/icons-material/Storage';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import KeyIcon from '@mui/icons-material/Key';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import PaymentsIcon from '@mui/icons-material/Payments';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useNavigate} from 'react-router-dom';



const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate= useNavigate();
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => navigate(to)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };
  
  const Sidebar1 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
  
    return (
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <Sidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <CasinoIcon />
                  <Typography variant="h3" color={colors.grey[100]}>
                    
                    Untitled UI
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
  
  
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              
  
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                GENERAL
              </Typography>
              <Item
                title="Dashboard"
                to="/"
                icon={<DashboardIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Appearence"
                to="/appearence"
                icon={<JoinLeftIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Database"
                to="/database"
                icon={<StorageIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Connections"
                to="/connections"
                icon={<PersonAddAltIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="TimeZone"
                to="/timezone"
                icon={<AvTimerIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Notifications"
                to="/notifications"
                icon={<NotificationsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
  
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                SISYPHUS VENTURES
              </Typography>
              <Item
                title="User management"
                to= "/usermangement"
                icon={<GroupAddIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Security & Access"
                to="/security&access"
                icon={<KeyIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Authentication"
                to="/authentication"
                icon={<QrCodeScannerIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Payments"
                to="/payments"
                icon={<PaymentsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Import Data"
                to="/line"
                icon={<CloudDownloadOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Export Data"
                to="/geography"
                icon={<CloudUploadOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    );
  };
  
  export default Sidebar1;