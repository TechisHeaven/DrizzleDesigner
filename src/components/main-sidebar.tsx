import { ChevronUp, Database, Heart, User2, Zap } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Button from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { TooltipCustom } from "./customTooltip";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Littlemove",
    url: "#",
    icon: Database,
  },
  {
    title: "Drizzle Designer",
    url: "#",
    icon: Database,
  },
];

export function MainSidebar() {
  return (
    <Sidebar
      className="left-18"
      side="left"
      key={"main-sidebar"}
      variant="floating"
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <div className="inline-flex items-center justify-between p-2">
            <h1 className="font-semibold">All Tables</h1>
            <Button>New Table</Button>
          </div>
          <div className="provider">
            <SidebarGroupLabel>Provider</SidebarGroupLabel>
            <Select defaultValue="PostgreSQL">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PostgreSQL">PostgreSQL</SelectItem>
                <SelectItem value="MySQL">MySQL</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="tables">
            <SidebarGroupLabel>Tables</SidebarGroupLabel>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <TooltipCustom
                    side="right"
                    text={item.title}
                    trigger={
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button className="w-full inline-flex bg-secondaryColor text-black">
              Sponser the Developer{" "}
              <Heart className="w-4 right-4 bottom-1/2 translate-y-1/2 absolute fill-red-500" />
            </Button>
          </SidebarMenuItem>
          {/* <SidebarMenuItem>
            <Button className="w-full inline-flex">
              Generate Schema{" "}
              <Zap className="w-4 right-4 bottom-1/2 translate-y-1/2 absolute" />
            </Button>
          </SidebarMenuItem> */}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
