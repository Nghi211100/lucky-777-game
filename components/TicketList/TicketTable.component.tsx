import { ILotteryPrize } from "@/hook/services/listPrizeTicket.service";
import React from "react";
import { hashEmail } from ".";

export interface ITicketPrizeTableProps {
  data: ILotteryPrize[];
}

export const TicketPrizeTable: React.FC<ITicketPrizeTableProps> = ({
  data,
}) => {
  if (!data?.length) return null;

  return (
    <div className="m-4 mb-0">
      <table className="w-full h-full bg-white rounded-lg shadow-lg">
        <thead className="px-6 text-[#82878C] text-sm border-b border-neutral-100 shadow-sm">
          <tr>
            <th className="py-4 px-2 w-1/12">STT</th>
            <th className="py-4 px-2 w-1/12">Giải</th>
            <th className="py-4 px-2 text-left">Thành Viên</th>
            <th className="py-4 px-2 text-left">Mã vé</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, idx) => (
            <tr key={user.email} className="border-b border-neutral-100">
              <td className="py-3 px-2 text-center font-bold">{idx + 1}</td>
              <td className="py-3 px-2 text-center font-bold">{user.prize}</td>
              <td className="py-3 px-2">
                <p className="font-bold text-lg">{user.fullName}</p>
                <p className="text-[#82878C] pt-0.5 text-sm">
                  {hashEmail(user.email)}
                </p>
              </td>
              <td className="py-3 px-2 text-lg">{user.prizeTicket}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
