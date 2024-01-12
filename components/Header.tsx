"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

type HeaderProps = {
	label: string
	showBackArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
	const router = useRouter()

	const handleClick = useCallback(() => {
		router.back()
	}, [router])

	return (
		<div className="broder-b-[1px] border-neutral-800 p-5">
			<div className="flex flex-row items-center gap-2">
				{showBackArrow && (
					<ArrowLeft
						onClick={handleClick}
						className="cursor-pointer hover:opacity-70 transition"
					/>
				)}
				<h1 className="text-white text-xl font-semibold">{label}</h1>
			</div>
		</div>
	)
}
export default Header
