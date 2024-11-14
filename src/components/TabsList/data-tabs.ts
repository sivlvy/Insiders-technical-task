import { Tab } from "@/helpers/types";
import { DashboardIcon } from "../../../assets/icons/DashboardIcon";
import { BankingIcon } from "../../../assets/icons/BankingIcon";
import { TelephoneIcon } from "../../../assets/icons/TelephoneIcon";
import { AccountingIcon } from "../../../assets/icons/AccountingIcon";
import { VerkaufIcon } from "../../../assets/icons/VerkaufIcon";
import { StatisticIcon } from "../../../assets/icons/StatisticIcon";
import { PostOfficeIcon } from "../../../assets/icons/PostOfficeIcon";
import { AdministrationIcon } from "../../../assets/icons/AdministrationIcon";
import { RechnIcon } from "../../../assets/icons/RechnIcon";
import { HelpIcon } from "../../../assets/icons/HelpIcon";
import { WarenbestardIcon } from "../../../assets/icons/WarenbestardIcon";
import { AuthIcon } from "../../../assets/icons/AuthIcon";
import { EinkaufIcon } from "../../../assets/icons/EinkaufIcon";

export const tabs: Tab[] = [
  {
    id: 1,
    name: "Dashboard",
    order: 1,
    pin: true,
    icon: DashboardIcon,
  },
  {
    id: 2,
    name: "Banking",
    order: 2,
    pin: true,
    icon: BankingIcon,
  },
  {
    id: 3,
    name: "Telefonie",
    order: 3,
    pin: false,
    icon: TelephoneIcon,
  },
  {
    id: 4,
    name: "Accounting",
    order: 4,
    pin: false,
    icon: AccountingIcon,
  },
  {
    id: 5,
    name: "Verkauf",
    order: 5,
    pin: false,
    icon: VerkaufIcon,
  },
  {
    id: 6,
    name: "Statistic",
    order: 6,
    pin: false,
    icon: StatisticIcon,
  },
  {
    id: 7,
    name: "Post office",
    order: 7,
    pin: false,
    icon: PostOfficeIcon,
  },
  {
    id: 8,
    name: "Administration",
    order: 8,
    pin: false,
    icon: AdministrationIcon,
  },
  {
    id: 9,
    name: "Rechn",
    order: 9,
    pin: false,
    icon: RechnIcon,
  },
  {
    id: 10,
    name: "Help",
    order: 10,
    pin: false,
    icon: HelpIcon,
  },
  {
    id: 11,
    name: "Warenbestard",
    order: 11,
    pin: false,
    icon: WarenbestardIcon,
  },
  {
    id: 12,
    name: "Authwahlisten",
    order: 12,
    pin: false,
    icon: AuthIcon,
  },
  {
    id: 13,
    name: "Einkauf",
    order: 13,
    pin: true,
    icon: EinkaufIcon,
  },
  {
    id: 14,
    name: "Rechn",
    order: 14,
    pin: false,
    icon: RechnIcon,
  },
];
