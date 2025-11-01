"use client";
import { Sidebar } from "@/components/ui/sidebar";
import { Header } from "./header";
import { Footer } from "./footer";
import { Content } from "./content";

export const DashboardSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <Header />
      <Content />
      <Footer />
    </Sidebar>
  );
};
