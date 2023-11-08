import useLotteryPlayerListAPI from "@/hook/services/lotteryPlayerList.service";
import { TicketModal } from "../TicketModal";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export interface UsersList {
  email: string;
  fullName: string;
  prize: number;
  ticketDetail: number[];
  id: number;
}

export const hashEmail = (email: string) => {
  return email.replace(/(\S{2})(\S*)@/g, "$1***@");
};

export const TicketList = () => {
  const lotteryPlayerListAPI = useLotteryPlayerListAPI();
  const [openTicketDetail, setOpenTicketDetial] = useState(false);
  const [ticketDetailSelected, setTicketDetailSelected] = useState<number[]>(
    []
  );

  if (!lotteryPlayerListAPI.data) return null;

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
        {lotteryPlayerListAPI.data.map((user: UsersList, idx) => (
          <tr key={user.email} className="border-b border-neutral-100">
            <td className="py-3 px-2 text-center font-bold">{idx + 1}</td>
            <td className="py-3 px-2">
              <p className="font-bold text-lg">{user.fullName}</p>
              <p className="text-[#82878C] pt-0.5 text-sm">
                {hashEmail(user.email)}
              </p>
            </td>
            <td className="py-3 px-2 text-lg">
              {user.ticketDetail.length > 1 ? (
                <>
                  <button
                    onClick={() => {
                      setOpenTicketDetial(true);
                      setTicketDetailSelected(user.ticketDetail);
                    }}
                    className="text-neutral-900 flex gap-2 items-center"
                  >
                    {user.ticketDetail[0]}{" "}
                    <ChevronDownIcon width={16} height={16} />
                  </button>
                </>
              ) : (
                user.ticketDetail[0]
              )}
            </td>
          </tr>
        ))}
      </tbody>
      <TicketModal
        ticketList={ticketDetailSelected}
        open={openTicketDetail}
        setOpen={setOpenTicketDetial}
      />
    </table>
  );
};
