import useLotteryPlayerListAPI from "@/hook/services/lotteryPlayerList.service";
import { TicketDropdown } from "../TicketDropdown";

export interface UsersList {
  email: string;
  fullName: string;
  prize: number;
  ticketDetail: number[];
  id: number;
}

export const TicketList = () => {
  const lotteryPlayerListAPI = useLotteryPlayerListAPI();
  console.log(lotteryPlayerListAPI);

  const hashEmail = (email: string) => {
    return email.replace(/(\S{2})(\S*)@/g, "$1***@");
  };

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
        {lotteryPlayerListAPI.data.map((user: UsersList) => (
          <tr key={user.email} className="border-b border-neutral-100">
            <td className="py-3 px-2 text-center font-bold">{user.id}</td>
            <td className="py-3 px-2">
              <p className="font-bold text-lg">{user.fullName}</p>
              <p className="text-[#82878C] pt-0.5 text-sm">
                {hashEmail(user.email)}
              </p>
            </td>
            <td className="py-3 px-2 text-lg">
              {user.ticketDetail.length > 1 ? (
                <TicketDropdown ticketList={user.ticketDetail} />
              ) : (
                user.ticketDetail[0]
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
