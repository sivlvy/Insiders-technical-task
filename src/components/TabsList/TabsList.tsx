"use client";

import styles from "./TabsItem/tabs-item.module.css";

import { tabs } from "@/components/TabsList/data-tabs";
import { TabsItem } from "./TabsItem/TabsItem";
import { useState } from "react";
import { DragEventType, Tab } from "@/helpers/types";

const TabsList = () => {
  const [itemList, setItemList] = useState(tabs);
  const [currentItem, setCurrentItem] = useState<Tab | null>(null);

  const dragStartHandler = (item: Tab) => () => {
    setCurrentItem(item);
  };

  const dragEndHandler = (e: DragEventType) => {
    e.currentTarget.style.background = "white";
    e.currentTarget.style.color = "#7f858d";
  };

  const dragOverHandler = (e: DragEventType) => {
    e.preventDefault();
    e.currentTarget.style.background = "grey";
    e.currentTarget.style.color = "white";
  };

  const dropHandler = (e: DragEventType, item: Tab) => {
    e.preventDefault();
    if (!currentItem) {
      return;
    }
    setItemList(
      itemList.map((i) => {
        if (i.id === item.id) {
          return { ...i, order: currentItem.order };
        }
        if (i.id === currentItem.id) {
          return { ...i, order: item.order };
        }
        return i;
      }),
    );
    e.currentTarget.style.background = "white";
    e.currentTarget.style.color = "#7f858d";
  };

  const sortItems = (a: Tab, b: Tab) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <ul className={styles.list}>
      {itemList.sort(sortItems).map((tab) => (
        <TabsItem
          key={tab.id}
          dragOverHandler={dragOverHandler}
          dragEndHandler={dragEndHandler}
          dragStartHandler={dragStartHandler(tab)}
          dropHandler={dropHandler}
          item={tab}
        />
      ))}
    </ul>
  );
};

export { TabsList };
