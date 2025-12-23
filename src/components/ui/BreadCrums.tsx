import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();

    const pathnames = location.pathname
        .split("/")
        .filter(Boolean);

    return (
        <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center text-sm text-gray-500">
                {/* Home */}
                <li>
                    <Link
                        to="/"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        Home
                    </Link>
                </li>

                {pathnames.map((value, index) => {
                    const to = "/" + pathnames.slice(0, index + 1).join("/");
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={to} className="flex items-center">
                            {/* Separator */}

                            {isLast ? (<>
                                <span className="mx-2 text-gray-400">/</span>
                                <span className="font-medium text-gray-700 capitalize">
                                    {decodeURIComponent(value)}
                                </span>
                            </>
                            ) : (
                                <>
                                    <span className="mx-2 text-gray-400">/</span>
                                    <Link
                                        to={to}
                                        className="text-blue-600 hover:text-blue-800 capitalize transition-colors"
                                    >
                                        {decodeURIComponent(value)}
                                    </Link>
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
