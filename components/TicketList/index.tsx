import React from "react";
import { TicketDropdown } from "../TicketDropdown";

export interface UsersList {
  firstName: string;
  lastName: string;
  email: string;
  ticketCode: number[];
  id: number;
}

export const TicketList = () => {
  const usersList: UsersList[] = [
    {
      firstName: "abc",
      lastName: "xyz",
      email: "abcxyz@gmail.com",
      ticketCode: [123, 236, 562, 890, 321, 234, 234, 543, 765, 234, 456, 654],
      id: 1,
    },
    {
      firstName: "abc",
      lastName: "xyz",
      email: "abcxyz@gmail.com",
      ticketCode: [654],
      id: 1,
    },
    {
      firstName: "abc",
      lastName: "xyz",
      email: "abcxyz@gmail.com",
      ticketCode: [654],
      id: 1,
    },
    {
      firstName: "abc",
      lastName: "xyz",
      email: "abcxyz@gmail.com",
      ticketCode: [123, 236, 562, 890, 321, 234, 234, 543, 765, 234, 456, 654],
      id: 1,
    },
  ];

  const hashEmail = (email: string) => {
    return email.replace(/(\S{2})(\S*)@/g, "$1***@");
  };
  return (
    <table className="w-full h-full bg-white rounded-lg shadow-lg">
      <thead className="px-6 text-[#82878C] text-sm border-b border-neutral-100 shadow-sm">
        <tr>
          <th className="py-4 px-2 w-1/12">STT</th>
          <th className="py-4 px-2 text-left">Thành Viên</th>
          <th className="py-4 px-2 text-left">Mã vé</th>
        </tr>
      </thead>
      <tbody>
        {usersList.map((user) => (
          <tr key={user.email} className="border-b border-neutral-100">
            <td className="py-3 px-2 text-center font-bold">{user.id}</td>
            <td className="py-3 px-2">
              <p className="font-bold text-lg">
                {user.firstName + " " + user.lastName}
              </p>
              <p className="text-[#82878C] pt-0.5 text-sm">
                {hashEmail(user.email)}
              </p>
            </td>
            <td className="py-3 px-2 text-lg">
              {user.ticketCode.length > 1 ? (
                <TicketDropdown ticketList={user.ticketCode} />
              ) : (
                user.ticketCode[0]
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
