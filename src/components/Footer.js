import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex">
          <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 lg:w-2/5">
            <div className="px-4 sm:px-6 lg:px-8">
              <Link className="flex items-center gap-1" to="/">
                <StaticImage
                  src="../img/logo.png"
                  alt="SMK Wijayakusuma Jatilawang"
                  layout="fixed"
                  width={40}
                  height={40}
                  backgroundColor="transparent"
                  placeholder="blurred"
                />
                <div className="text-xl font-bold tracking-wide">
                  <span className="text-gray-800 font-semibold">SMK</span>
                  <span className="text-fuchsia-500">Wijayakusuma</span>
                </div>
              </Link>

              <p className="max-w-md mt-2 text-gray-600 dark:text-gray-400">
                SMK Vokasi dengan kurikulum yang up to date mengikuti perkembangan jaman.
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About
                </h3>
                <Link
                  to="/tentang-kami"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Tentang Kami
                </Link>
                <Link
                  to="/visi-misi"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Visi dan Misi
                </Link>
                <Link
                  to="/jurusan"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Jurusan
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Blog
                </h3>
                <Link
                  to="/projects"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Teknologi
                </Link>
                <Link
                  to="/projects"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Music
                </Link>
                <Link
                  to="/projects"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Videos
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Program
                </h3>
                <a
                  href="https://smkwijayakusuma.sch.id/jurusan"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Akuntansi
                </a>
                <a
                  href="https://smkwijayakusuma.sch.id/jurusan"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Manajemen Perkantoran
                </a>
                <a
                  href="https://smkwijayakusuma.sch.id/jurusan"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Desain Komunikasi Visual
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  (0281) 6848670, 6848505
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  info@smkwijayakusuma.sch.id
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white">
            © SMK Wijayakusuma Jatilawang 2023 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
