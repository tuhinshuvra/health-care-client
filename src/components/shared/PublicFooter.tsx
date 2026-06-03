import Link from 'next/link';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Doctors', href: '/doctors' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
];

const supportLinks = [
    { label: 'FAQ', href: '/faq' },
    { label: 'Help Center', href: '/help-center' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
];

export default function PublicFooter() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">
                            RealHealth Doc
                        </h3>

                        <p className="text-sm leading-6 text-muted-foreground">
                            We care, God heals. Dedicated to providing trusted healthcare with compassion and integrity.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-semibold">
                            Quick Links
                        </h4>

                        <ul className="space-y-3 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="mb-4 font-semibold">
                            Support
                        </h4>

                        <ul className="space-y-3 text-sm">
                            {supportLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 font-semibold">
                            Contact
                        </h4>

                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Dhaka, Bangladesh</p>
                            <p>support@realhealthdoc.com</p>
                            <p>+880 1XXX-XXXXXX</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    © 2026 RealHealth Doc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}