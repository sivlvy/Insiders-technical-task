"use client";

import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Tab } from "@/helpers/types";
import styles from "../TabsList/TabsItem/tabs-item.module.css";

type Props = {
  tabs: Tab[];
  handleUnPin: (id: number) => void;
};

const CustomSelect = ({ tabs, handleUnPin }: Props) => {
  const [menuOpen, setMenuOpen] = useState<null | HTMLElement>(null);

  const open = Boolean(menuOpen);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
  };

  return (
    <div>
      <Button
        sx={{ height: "100%" }}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        B
      </Button>
      <Menu
        anchorEl={menuOpen}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {tabs.map((tab) => (
          <MenuItem
            key={tab.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <tab.icon />
            <span>{tab.name}</span>
            <button
              className={styles.btn}
              onClick={(e) => {
                e.stopPropagation();
                handleUnPin(tab.id);
              }}
            >
              X
            </button>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomSelect;
