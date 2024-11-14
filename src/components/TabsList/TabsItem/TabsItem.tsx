import { Tab } from "@/components/TabsList/data-tabs";

type TabsItemProps = {
  item: Tab;
};

const TabsItem = ({ item }: TabsItemProps) => {
  console.log(item);
  return <div>{item.name}</div>;
};

export { TabsItem };
