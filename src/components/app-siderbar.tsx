import {
  Calendar,
  ChevronUp,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { TooltipCustom } from "./customTooltip";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <div className="bg-sidebar border flex flex-col m-2 mr-1 p-2 rounded-md shadow-md">
      <div className="flex-1 ">
        <div className="flex flex-col gap-2 items-center">
          <Link href={"/"} className="rounded-md border overflow-hidden">
            <Image alt="" src={"/logo-primary.png"} width={40} height={40} />
          </Link>
          <div>
            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li key={item.title}>
                  <button className="hover:bg-gray-100 rounded-md cursor-pointer p-2">
                    <Link href={item.url}>
                      <TooltipCustom
                        side="right"
                        text={item.title}
                        trigger={<item.icon />}
                      />
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer inline-flex items-center justify-center ">
        <div className="SidebarMenu">
          <div className="SidebarMenuItem ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="inline-flex hover:bg-gray-100 rounded-md cursor-pointer p-2">
                  <User2 />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" align="start">
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
