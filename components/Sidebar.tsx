"use client"

import { Bell, Home, LogOut, User } from "lucide-react"
import { signOut } from "next-auth/react"
import { SidebarItem } from "./SidebarItem"
import SidebarLogo from "./SidebarLogo"
import SidebarTweetButton from "./SidebarTweetButton"

export default function Sidebar() {
  // const { data: currentUser } = useCurrentUser()

  const items = [
    {
      label: "Home",
      href: "/",
      icon: <Home />,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: <Bell />,
      auth: true,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: <User />,
      auth: true,
    },
  ]

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              auth={item.auth}
            />
          ))}
          {/* {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={<LogOut />}
              label="Logout"
            />
          )} */}
          <SidebarItem
            onClick={() => signOut()}
            icon={<LogOut />}
            label="Logout"
          />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  )
}
