function Footer() {
    return (
        <footer className=" bg-gray-900 text-white py-8 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* About Ramadan Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">About Ramadan</h2>
                    <p className="text-gray-400 text-sm">
                        Ramadan is the ninth month of the Islamic calendar, observed by Muslims worldwide 
                        as a month of fasting, prayer, reflection, and community. It commemorates the 
                        first revelation of the Quran to Prophet Muhammad (PBUH).
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Sunnah</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Dua's</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                            🟦 Facebook
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                            🟪 Instagram
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                            🟦 Twitter
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
                © 2025 Ramadan Guide. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
