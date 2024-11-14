import { tabs } from "@/components/TabsList/data-tabs";
import { TabsItem } from "./TabsItem/TabsItem";

const TabsList = () => {
  return (
    <div>
      {tabs.map((tab) => (
        <TabsItem key={tab.id} item={tab} />
      ))}
    </div>
  );
};

export default TabsList;
