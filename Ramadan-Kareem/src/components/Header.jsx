import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/ThemeSlice"; // ✅ Correct function name

function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b-2 shadow-md">
      {/* Logo */}
      <img
        className="w-16 h-16 rounded-full"
        src="https://img.freepik.com/premium-vector/ramadan-kareem-mosque-moon-logo_608043-96.jpg?ga=GA1.1.350092013.1740810520&semt=ais_hybrid"
        alt="Logo"
      />

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-lg font-semibold text-gray-700 dark:text-gray-300">
          <li><a href="/" className="hover:text-blue-600 transition duration-300">Home</a></li>
          <li><a href="/Sunnah" className="hover:text-blue-600 transition duration-300">Sunnah</a></li>
          <li><a href="/Duas" className="hover:text-blue-600 transition duration-300">Dua's</a></li>
          <li><a href="/Contact" className="hover:text-blue-600 transition duration-300">Contact</a></li>
        </ul>
      </nav>

      {/* Buttons */}
      <div className="space-x-3">
        <button
          onClick={() => dispatch(toggleTheme())} // ✅ Fix function name
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition dark:text-white"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Login
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;
