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
import MainSidebarHeader from "./main-sidebar-header";

// Menu items.
const items = [
  {
    title: "Littlemove",
    url: "schema/littlemove",
    icon: Database,
  },
  {
    title: "Drizzle Designer",
    url: "schema/Drizzle Designer",
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
          <MainSidebarHeader />
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
