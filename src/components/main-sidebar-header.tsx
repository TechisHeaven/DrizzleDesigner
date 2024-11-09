"use client";
import React from "react";
import Button from "./button";
import { usePathname } from "next/navigation";
import { isSchemaPageFunction } from "@/utils/main.utils";
import { SidebarGroupLabel } from "./ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function MainSidebarHeader() {
  const pathname = usePathname();
  const isSchemaPage = isSchemaPageFunction(pathname);
  return (
    <>
      <div className="inline-flex items-center justify-between p-2">
        <h1 className="font-semibold whitespace-nowrap">
          {isSchemaPage ? "My Schemas" : "All Tables"}
        </h1>
        <Button className="whitespace-nowrap">
          {" "}
          {isSchemaPage ? "New Schema" : "New Table"}{" "}
        </Button>
      </div>
      {isSchemaPage && (
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
      )}
    </>
  );
}
