/* 1.0.1

Dependancy: npm install react-icons ...

  > add privacy
  > add adress etc
  > Make semantic address?
   

*/

import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

interface ContactInfoProps {
  cellphone?: string;
  email?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ cellphone, email }) => {
  return (
    <div className=" flex flex-row justify-between text-(--text-secondary) font-semibold m-5">
      {cellphone && (
        <div className="flex flex-row items-center space-x-2">
          <MdPhone className="text-md text-blue-500" />
          <span>{cellphone}</span>
        </div>
      )}
      {email && (
        <div className="flex  flex-row items-center space-x-2">
          <MdEmail className="text-md text-green-500" />
          <span>{email}</span>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
