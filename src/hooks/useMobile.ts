import { useEffect, useState } from 'react'

export default function useMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => {
            setIsMobile(window.innerWidth <= breakpoint)
        }

        check()

        // TODO: Find a better way
        window.addEventListener('resize', check)

        return () => window.removeEventListener('resize', check)
    }, [breakpoint])

    return isMobile
}