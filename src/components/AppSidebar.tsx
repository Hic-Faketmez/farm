"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconHorse,
  IconFeatherFilled,
  IconMilk,
  IconHome2,
  IconBuildingCottage,
  IconArchive,
  IconPlant,
  IconFence,
  IconWheat,
  IconCirclePlusFilled,
  type Icon,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
// import { NavDocuments } from "@/components/nav-documents"
// import { NavMain } from "@/components/nav-main"
// import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import dashboard from "@/app/dashboard/page"
// import { useUser } from "@clerk/nextjs";
// import { getUserByClerkId } from "@/actions/user.action";


const data = {
  // user: {
  //   name: user.username,
  //   email: user.email,
  //   avatar: user.image,
  // },
  dashboard: {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
  navMain: [
    {
      title: "Hara",
      url: "/haras",
      icon: IconHorse,
    },
    {
      title: "Barn",
      url: "/barn",
      icon: IconMilk,
    },
    {
      title: "Sheepfold",
      url: "/sheepfold",
      icon: IconHome2,
    },
    {
      title: "Poultry",
      url: "/poultry",
      icon: IconFeatherFilled,
    },
    {
      title: "Apiary",
      url: "/apiary",
      icon: IconArchive,
    },
  ],

  // navClouds: [
  //   {
  //     title: "Capture",
  //     icon: IconCamera,
  //     isActive: true,
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Proposal",
  //     icon: IconFileDescription,
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Prompts",
  //     icon: IconFileAi,
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  // ],

  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],

  agriculture: [
    {
      name: "Field",
      url: "/field",
      icon: IconWheat,
    },
    {
      name: "Greenhouse",
      url: "/greenhouse",
      icon: IconPlant,
    },
    {
      name: "Garden",
      url: "/garden",
      icon: IconFence,
    },
  ],
}

function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
              <span>Quick Add </span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconBuildingCottage />
              <span className="sr-only">Barn</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                {data.dashboard && <data.dashboard.icon />}
                <a href={data.dashboard.url}>{data.dashboard.title}</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          <SidebarGroupLabel>Animals</SidebarGroupLabel>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <a href={item.url}>{item.title}</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
export function NavAgriculture({
  items,
}: {
  items: {
    name: string
    url: string
    icon: Icon
  }[]
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Agriculture</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: Icon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

 export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const authUser = await currentUser();
  // const user = await getUserByClerkId(authUser.id);
  // const { user } = useUser();

  return (
    <Sidebar className="sticky top-20 mt-4" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Farm Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAgriculture items={data.agriculture} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser/>
      </SidebarFooter>
    </Sidebar>
  )
}
export default AppSidebar;