import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const NAVLINK_CLASSES =
  "my-1 py-3 px-3 text-center font-medium text-gray-600 border-b-4 border-white hover:border-purple-500 md:mx-2 md:my-0"

// this link will be active when itself or deeper routes
// are current
// https://reach.tech/router/api/Link
// this is only active when the location pathname is exactly
// the same as the href.
const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: NAVLINK_CLASSES + " text-green-700 border-green-700" }
    : {}
}

const ExactNavLink = ({ children, ...rest }) => {
  return (
    <div className="flex justify-center">
      <Link className={NAVLINK_CLASSES} getProps={isActive} {...rest}>
        {children}
      </Link>
    </div>
  )
}

// this link will be active when itself or deeper routes
// are current
const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: NAVLINK_CLASSES + " text-green-700 border-green-700" }
    : {}
}

const PartialNavLink = ({ children, ...rest }) => {
  return (
    <div className="flex justify-center">
      <Link className={NAVLINK_CLASSES} getProps={isPartiallyActive} {...rest}>
        {children}
      </Link>
    </div>
  )
}

const Navbar = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`fixed top-0 w-full z-30 bg-white shadow-xl ${className}`}>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between py-2">
          <Link className="flex items-center gap-1" to="/">
            <StaticImage
              src="../img/logo.png"
              alt="SMK Wijayakusuma"
              className="w-8 h-8 sm:w-10 sm:h-10"
              layout="constrained"
              width={40}
              height={40}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <div className="text-xl font-bold tracking-wide lg:text-2xl">
              <span className="text-gray-800 font-semibold">SMK</span>
              <span className="text-fuchsia-500">Wijayakusuma</span>
              <span className="text-fuchsia-500">Jatilawang</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={
            "items-center " + (menuOpen ? "block" : "hidden") + " md:flex"
          }
        >
          <div className="flex flex-col w-full md:flex-row md:mx-6 md:my-2 items-center">
            <ExactNavLink
              to="/"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Home
            </ExactNavLink>
            <ExactNavLink
              to="/tentang-kami"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Tentang
            </ExactNavLink>
            <ExactNavLink
              to="/visi-misi"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              VisiMisi
            </ExactNavLink>
            <PartialNavLink
              to="/departemen"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Departemen
            </PartialNavLink>
            <PartialNavLink
              to="/jurusan"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Jurusan
            </PartialNavLink>
            <ExactNavLink
              to="/ulasan"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Ulasan
            </ExactNavLink>
            <PartialNavLink
              to="/projects"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Berita
            </PartialNavLink>
            <ExactNavLink
              to="/kepala-sekolah"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Kepsek
            </ExactNavLink>
            <ExactNavLink
              to="/kontak"
              onClick={() => {
                setMenuOpen(false)
              }}
            >  
              Kontak
            </ExactNavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
