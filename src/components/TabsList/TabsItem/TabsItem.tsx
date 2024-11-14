import styles from "./tabs-item.module.css";
import { DragEventType, Tab } from "@/helpers/types";

type TabsItemProps = {
  item: Tab;
  dragEndHandler: (e: DragEventType) => void;
  dragOverHandler: (e: DragEventType) => void;
  dragStartHandler: () => void;
  dropHandler: (e: DragEventType, item: Tab) => void;
};

const TabsItem = ({
  item,
  dragEndHandler,
  dragOverHandler,
  dragStartHandler,
  dropHandler,
}: TabsItemProps) => {
  return (
    <div
      onDragStart={dragStartHandler}
      onDragLeave={dragEndHandler}
      onDragEnd={dragEndHandler}
      onDragOver={dragOverHandler}
      onDrop={(e) => dropHandler(e, item)}
      draggable
      className={styles.wrapper}
    >
      <p className={styles.title}>{item.name}</p>
      <button className={styles.btn}>X</button>
    </div>
  );
};

export { TabsItem };
