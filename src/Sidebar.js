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

export default function Sidebar() {
  return (
    <div class="mi-header">
      <ProSidebar>
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
    </div>
  );
}
