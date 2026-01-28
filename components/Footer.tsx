import Link from 'next/link'
import { Logo } from './Logo'

const footerLinks = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'Developers', href: '/developers' },
    { label: 'Richard Orlinski', href: '/brands' },
    { label: 'Concepts', href: '/projects' },
    { label: 'Press', href: '/press' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black text-offwhite mt-24">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Logo variant="silver" className="h-48" />
            <p className="text-stone text-sm max-w-xs">
              Curating branded residences and hospitality partnerships. Confidentiality, curated access.
            </p>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone hover:text-offwhite transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone hover:text-offwhite transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone/20 mt-12 pt-8 text-center text-stone text-sm">
          <p>&copy; {new Date().getFullYear()} Orlinski Realty Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
