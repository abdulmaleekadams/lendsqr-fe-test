import React from "react";
import { Back, Rating, UserAvatar } from "../../assets/icons";
import Button from "../buttons";
import "./index.scss";

const usersDetailsTabs = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

type Props = {
  userRecord: any;
  returnDashboard: Function
};

const formatCurrency = (value: number, currency: string) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  });
};

const UserDetails = ({ userRecord, returnDashboard }: Props) => {
  const education = userRecord.education;
  const user = userRecord.profile;
  const social = userRecord.socials;
  const guarantor = userRecord.guarantor;
  const userDetailsRecords = [
    {
      title: "Personal Information",
      details: [
        {
          title: "FULL NAME",
          body: user.firstName + " " + user.lastName,
        },
        {
          title: "PHONE NUMBER",
          body: user.phoneNumber.substring(0,12),
        },
        {
          title: "EMAIL ADDRESS",
          body: userRecord.email,
        },
        {
          title: "BVN",
          body: user.bvn,
        },
        {
          title: "GENDER",
          body: user.gender,
        },
        {
          title: "MARITAL STATUS",

          // Randomly return a Marital status
          body:
            Math.random() > 0.6
              ? "Married "
              : Math.random() > 0.4
              ? "Divorced"
              : "Single",
        },
        {
          title: "CHILDREN",
          body: "undisclosed",
        },
        {
          title: "TYPE OF RESIDENCE",
          body: "undisclosed",
        },
      ],
    },

    {
      title: "Education and Employment",
      details: [
        {
          title: "LEVEL OF EDUCATION",
          body: education.level,
        },
        {
          title: "EMPLOYMENT STATUS",
          body: education.employmentStatus,
        },
        {
          title: "SECTOR OF EMPLOYMENT",
          body: education.sector,
        },
        {
          title: "DURATION OF EMPLOYMENT",
          body: education.duration,
        },
        {
          title: "OFFICE EMAIL",
          body: education.officeEmail,
        },
        {
          title: "MONTHLY INCOME",
          body: `₦${education.monthlyIncome[1]} - ₦${education.monthlyIncome[0]}`,
        },
        {
          title: "LOAN REPAYMENT",
          body: education.loanRepayment,
        },
      ],
    },

    {
      title: "Socials",
      details: [
        {
          title: "TWITTER",
          body: social.twitter,
        },
        {
          title: "FACEBOOK",
          body: social.facebook,
        },
        {
          title: "INSTAGRAM",
          body: social.instagram,
        },
      ],
    },
    {
      title: "Guarantor",
      details: [
        {
          title: "FULL NAME",
          body: guarantor.firstName + " " + guarantor.lastName,
        },
        {
          title: "PHONE NUMBER",
          body: guarantor.phoneNumber.substring(0,14),
        },
        {
          title: "RELATIONSHIP",
          body: guarantor.instagram,
        },
        {
          title: "EMAIL ADDRESS",
          body: guarantor.email ? guarantor.email : 'Not provided',
        },
      ],
    },
  ];

  const handleClick : any = () => {
    returnDashboard()
  }


  return (
    <div className="userDetails flexCol">
      <div className="userHeader flexCol">
        <div className="backBtn" onClick={handleClick}>
          <Back />
          <p>Go back</p>
        </div>
        <div className="flexBetween userTitleAction">
          <h1 className="title">User Details</h1>

          <div className="action flexCenter">
            <Button variant="secondaryDanger" label="BLACKLIST USER" />
            <Button variant="secondary" label="ACTIVATE USER" />
          </div>
        </div>
      </div>

      <div className="userInfo flexCol">
        <div className="flexStartCenter userAccountDetails">
          <div className="flexStartCenter userID">
            <UserAvatar />
            <div className="userName">
              <p>
                {userRecord.profile.firstName +
                  " " +
                  userRecord.profile.lastName}
              </p>
              <span>{userRecord.accountNumber}</span>
            </div>
          </div>

          <div className="userTier">
            <p>User's Tier</p>
            <span className="flex">
              <Rating />
              <Rating />
              <Rating />
            </span>
          </div>
          <div className="userAccount">
            <p>
              {formatCurrency(
                Number(userRecord.accountBalance),
                userRecord.profile.currency
              )}
            </p>
            <span>accNumber/bank</span>
          </div>
        </div>

        <div className="userInfoMenu flexBetween">
          {usersDetailsTabs.map((tab, index) => (
            <button
              type="button"
              key={index}
              className={`${tab === "General Details" && "active"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="userDetailsRecord">
        {userDetailsRecords.map((userDetailRecord, index) => (
          <div className="record" key={index}>
            <p className="recordTitle">{userDetailRecord.title}</p>
            <div className="recordContentContainer flex">
              {userDetailRecord.details.map((details, index) => (
                <div className={`recordContent ${details.title.toLowerCase().replace(" ", '')}`} key={index}>
                  <p>{details.title}</p>
                  <p className="details">{details.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
