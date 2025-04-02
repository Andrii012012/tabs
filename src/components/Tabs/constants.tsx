import { ITabs } from "./types";
import { ReactComponent as Dashboard } from '../../assets/images/fi-rs-apps.svg';
import { ReactComponent as Banking } from '../../assets/images/fi-rs-bank.svg';
import { ReactComponent as Telefonie } from '../../assets/images/fi-rs-phone-call.svg';
import { ReactComponent as Accounting } from '../../assets/images/fi-rs-user-add.svg';
import { ReactComponent as TabAnpinnen } from '../../assets/images/fi-rs-thumbtack.svg';
import { ReactComponent as Verkauf } from '../../assets/images/fi-rs-shop.svg';
import { ReactComponent as Statistik } from '../../assets/images/static.svg';
import { ReactComponent as PostOffice } from '../../assets/images/fi-rs-letter.svg';
import { ReactComponent as Administration } from '../../assets/images/settings.svg';
import { ReactComponent as Help } from '../../assets/images/help.svg';

export const tabsArray: ITabs[] = [
  {
    name: "Dashboard",
    id: 1,
    order: 1,
    icon: <Dashboard fill='red' />,
    url: null,
  },
  {
    name: "Banking",
    id: 2,
    order: 2,
    icon: <Banking />,
    url: "/",
  },
  {
    name: "Telefonie",
    id: 3,
    order: 3,
    icon: <Telefonie />,
    url: "/",
  },
  {
    name: "Accounting",
    id: 4,
    order: 4,
    icon: <Accounting />,
    url: null,
    children: {
      name: "Tab anpinnen",
      id: 14,
      order: 14,
      icon: <TabAnpinnen />,
      url: "/",
    },
  },
  {
    name: "Verkauf",
    id: 5,
    order: 5,
    icon: <Verkauf />,
    url: "/",
  },
  {
    name: "Statistik",
    id: 6,
    order: 6,
    icon: <Statistik />,
    url: "/",
  },
  {
    name: "Post Office",
    id: 7,
    order: 7,
    icon: <PostOffice />,
    url: "/",
  },
  {
    name: "Administration",
    id: 8,
    order: 8,
    icon: <Administration />,
    url: "/",
  },
  {
    name: "Help",
    id: 9,
    order: 9,
    icon: <Help />,
    url: "/",
  },
  //   {
  //     name: "Warenbestand",
  //     id: 10,
  //     order: 10,
  //     icon: "fi-rs-cube.svg",
  //     url: "/",
  //   },
  //   {
  //     name: "Auswahllisten",
  //     id: 11,
  //     order: 11,
  //     icon: "fi-rs-list.svg",
  //     url: "/",
  //   },
  //   {
  //     name: "Einkauf",
  //     id: 12,
  //     order: 12,
  //     icon: "fi-rs-shopping-cart-check.svg",
  //     url: "/",
  //   },
  //   {
  //     name: "Rechn",
  //     id: 13,
  //     order: 13,
  //     icon: "fi-rs-browser.svg",
  //     url: "/",
  //   },
];
