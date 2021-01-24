import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./App.css";

export default function Sidebar() {
  return (
    // TODO: Add in a hamburger button to toggle the toggled props for the prosidebar
    <ProSidebar breakPoint="md" toggled={false}>
      {/* #663f3f */}
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>
            Home
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            About
            <Link to="/about" />
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            Resume
            <Link to="/resume" />
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            Contact
            <Link to="/contact" />
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </ProSidebar>
  );
}
