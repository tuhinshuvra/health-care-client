"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const PublicNavbar = () => {
    const navItems = [
        { label: "Consultation", href: "/consultation" },
        { label: "Health Plans", href: "/healthplans" },
        { label: "Medicine", href: "/medicine" },
        { label: "Diagnostics", href: "/diagnostics" },
        { label: "NGOs", href: "/ngos" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <span className="text-xl font-bold text-primary">
                        Real HealthCare
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>



                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w=[400px] p-4">
                            <SheetTitle>Navigation Menu</SheetTitle>
                            <nav className=" flex flex-col space-y-4 mt-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-lg font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                            <SheetFooter>
                                {/* <Button type="submit">Save changes</Button> */}
                                <SheetClose asChild>
                                    <Button variant="outline">Close</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Login */}
                <div className="hidden md:flex items-center">
                    <Link href="/login">
                        <Button>Login</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default PublicNavbar;