import { useRouter } from "next/navigation"
import { useCallback } from "react"

type SidebarItemProps = {
  label: string
  href?: string
  icon: JSX.Element
  onClick?: () => void
  auth?: boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  // const loginModal = useLoginModal()
  // const { data: currentUser } = useCurrentUser()
  const router = useRouter()
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick()
    }

    // if (auth && !currentUser) {
    //   loginModal.onOpen()
    // } else
    if (href) {
      router.push(href)
    }
  }, [router, onClick, href])

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        {Icon}
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        {Icon}
        <p className="hidden lg:block text-xl">{label}</p>
      </div>
    </div>
  )
}
