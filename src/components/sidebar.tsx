"use client"

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { Home, Info, BookOpen, Users, Bell, Mail, Search } from 'lucide-react'

type SidebarProps = {
    isOpen: boolean
    onClose: () => void
    navItems: Array<{ href: string; label: string }>
}

const getIconForLabel = (label: string) => {
    switch (label.toLowerCase()) {
        case 'home':
            return <Home size={20} />
        case 'about':
            return <Info size={20} />
        case 'programs':
            return <BookOpen size={20} />
        case 'faculty':
            return <Users size={20} />
        case 'news & events':
            return <Bell size={20} />
        case 'contact':
            return <Mail size={20} />
        default:
            return <Info size={20} />
    }
}

export function Sidebar({ isOpen, onClose, navItems }: SidebarProps) {
    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <motion.div
                className={cn(
                    "fixed top-0 left-0 z-50 h-full w-[280px] bg-background/95 backdrop-blur-sm border-r shadow-lg",
                    !isOpen && "pointer-events-none"
                )}
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? 0 : "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
                <div className="flex flex-col h-full p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <a href='/' className=" gap-1.5 flex items-center group" onClick={onClose}>
                            <img src="/jstnhs-logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
                            <span className="font-bold text-lg ">
                                JSTNHS
                            </span>
                        </a>
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/80" onClick={onClose}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </Button>
                    </div>

                    {/* Search */}
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-muted-foreground" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full py-2 pl-10 pr-4 bg-muted/50 border-0 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Navigation */}
                    <motion.nav
                        className="flex flex-col gap-2"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isOpen ? "visible" : "hidden"}
                    >
                        {navItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-muted/80 transition-colors group relative"
                                onClick={onClose}
                                variants={fadeInUp}
                                custom={index}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className="flex items-center justify-center w-6 h-6 text-muted-foreground group-hover:text-blue-500">
                                    {getIconForLabel(item.label)}
                                </div>
                                <span>{item.label}</span>
                                {index === 4 && (
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
                                        <span className="text-[10px] text-white font-medium">1</span>
                                    </div>
                                )}
                            </motion.a>
                        ))}
                    </motion.nav>
                </div>
            </motion.div>
        </>
    )
}