"use client";

import { Game } from "@/components/Game";
import { TicketList } from "@/components/TicketList";
import { TabController } from "@/components/TabController";
import { useState } from "react";
import Panel from "@/components/Panel";

export default function Home() {
  const [tab, setTab] = useState<number>(1);

  const renderTab = {
    1: <Game />,
    2: <TicketList />,
  };
  return (
    <div className="h-[calc(100vh-64px)] w-full flex flex-col items-center mx-auto pt-6 px-4 max-w-[1200px]">
      <Panel />
      <div className="md:min-w-[680px] w-full pb-20">
        <TabController tab={tab} setTab={setTab} />
        <div className="pt-6"> {renderTab[tab as keyof object]}</div>
      </div>
    </div>
  );
}
