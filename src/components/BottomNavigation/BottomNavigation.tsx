import {
  HomeIcon,
  UserCircleIcon,
  DocumentTextIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import Link from "../atoms/Link";

const BottomNavigation = () => {
  return (
    <div className="sticky bottom-0 left-0 z-50 w-full h-16 border-t border-gray-200 bg-gray-100 dark:bg-gray-800 dark:shadow-blue-400 dark:border-gray-600 lg:hidden">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link
          href="/"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <HomeIcon className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Home
          </span>
        </Link>
        <Link
          href="/about"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <UserCircleIcon className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            About
          </span>
        </Link>
        <Link
          href="/blog"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <DocumentTextIcon className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Blog
          </span>
        </Link>
        <Link
          href="/projects"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <BriefcaseIcon className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Projects
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
