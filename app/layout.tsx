import FollowBar from "@/components/FollowBar"
import Sidebar from "@/components/Sidebar"
import LoginModal from "@/modals/LoginModal"
import RegisterModal from "@/modals/RegisterModal"
import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"
import "./globals.css"

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Twitter Clone built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body>
          <Toaster />
          <LoginModal />
          <RegisterModal />
          <div className="h-screen bg-black text-white">
            <div className="container h-full mx-auto xl:px-32 max-w-6xl">
              <div className="grid grid-cols-4 h-full">
                <Sidebar />
                <div className="col-span-3 lg:col-span-2 border-x-2 border-gray-500">
                  {children}
                </div>
                <FollowBar />
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  )
}
