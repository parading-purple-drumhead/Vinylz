const Navbar = () => {
  return (
    <nav className="navbar flex justify-between gap-5 px-20 py-5 font-bold uppercase">
      <div className="flex items-center gap-20">
        <div className="logo cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-12"
            viewBox="0 0 24 24"
          >
            <path d="M14 3.27a7.49 7.49 0 0 1 .66 3.35c0 2.72-1.93 6.72-3.49 9.27L9.53 2.44l-6.91.65L5.79 22h7.88c3.45-4.54 7.71-11 7.71-16a7.3 7.3 0 0 0-1.06-4z"></path>
          </svg>
        </div>
        <div className="nav-links">
          <ul className="flex gap-10">
            <li className="cursor-pointer">Discover</li>
            <li className="cursor-pointer">Search</li>
            <li className="cursor-pointer">Why Vinylz</li>
            <li className="cursor-pointer">Cart</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-5">
        <button className="font-bold uppercase">Log in</button>
        <button className="rounded-full bg-black px-10 py-3 font-bold uppercase text-white">
          Make a record
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
