import React from "react";
import IconTextMenu from "../iconTextMenu";

import "./index.scss";
import {
  AuditLogs,
  ChevronDown,
  Decision,
  FeesCharges,
  FeesPricing,
  Guarantors,
  Karma,
  LoanProducts,
  LoanRequests,
  Loans,
  Organization,
  Preferences,
  Reports,
  Savings,
  SavingsProducts,
  ServiceAccount,
  Services,
  Settlements,
  SystemsMessages,
  Transactions,
  Users,
  Whitelist,
} from "../../assets/icons";

const Sidebar = () => {
  const menuGroup = [
    {
      title: "customers",
      menu: [
        { text: "Users", icon: <Users /> },
        { text: "Guarantors", icon: <Guarantors /> },
        { text: "Loans", icon: <Loans /> },
        { text: "Decision Models", icon: <Decision /> },
        { text: "Savings", icon: <Savings /> },
        { text: "Loan Requests", icon: <LoanRequests /> },
        { text: " Whitelist", icon: <Whitelist /> },
        { text: "Karma", icon: <Karma /> },
      ],
    },
    {
      title: "businesses",
      menu: [
        {
          text: "Organization",
          icon: <Organization />,
        },
        {
          text: "Loan Products",
          icon: <LoanProducts />,
        },
        {
          text: "Savings Products",
          icon: <SavingsProducts />,
        },
        {
          text: "Fees and Charges",
          icon: <FeesCharges />,
        },
        {
          text: "Transactions",
          icon: <Transactions />,
        },
        {
          text: "Services",
          icon: <Services />,
        },
        {
          text: "Service Account",
          icon: <ServiceAccount />,
        },
        {
          text: "Settlements",
          icon: <Settlements />,
        },
        {
          text: "Reports",
          icon: <Reports />,
        },
      ],
    },
    {
      title: "Settings",
      menu: [
        { text: "Preferences", icon: <Preferences /> },
        { text: "Fees and Pricing", icon: <FeesPricing /> },
        { text: "Audit Logs", icon: <AuditLogs /> },
        { text: "Systems Messages", icon: <SystemsMessages /> },
      ],
    },
  ];
  return (
    <div className="sidebar flexColCenter">
      <div className="container flexCol">
        <div className="organizationMenu">
          <a
            className="menuItemLink flexStartCenter"
            href={`dashboard`}
            aria-label="Dashboard"
          >
            <IconTextMenu text={"Switch Organization"} active={true} />
            <ChevronDown />
          </a>
        </div>
        <div className="dashboardMenu">
          <a className="menuItemLink" href={`dashboard`} aria-label="Dashboard">
            <IconTextMenu text={"Dashboard"} />
          </a>
        </div>
        {menuGroup.map((menuItem) => (
          <div className="menuItem flexCol">
            <p>{menuItem.title}</p>
            {menuItem.menu.map((item) => (
              <a
                className="menuItemLink"
                href={item.text.toLowerCase().replaceAll(" ", "-")}
                aria-label={item.text}
              >
                <IconTextMenu text={item.text} icon={item.icon} />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
