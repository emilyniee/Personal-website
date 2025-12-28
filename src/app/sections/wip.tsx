import { SITE_INFO } from "../data/constants";

export default function Wip() {
  return (
    <aside className="w-full flex justify-center fixed px-2 md:px-12 pb-1 pt-1 bg-coffee-100 z-50" role="banner">
      <p className="text-xs md:text-sm text-coffee-300 text-center">
        this website is a work in progress! See previous version
        <a
          href={SITE_INFO.previousVersionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm text-coffee-300 underline hover:text-coffee-400 ml-1"
          aria-label="View previous version of website"
        >
          here
        </a>
      </p>
    </aside>
  );
}