function Home() {
    return (
        <div className="bg-gray-100  dark:bg-gray-900 dark:text-white">
            {/* Top Ramadan Image */}
            <div className="flex justify-center py-6">
                <img 
                    className="w-[300px] h-[300px] rounded-lg shadow-lg" 
                    src="https://img.freepik.com/free-vector/elegant-ramadan-kareem-decorative-moon-lanterns-greeting_1017-31069.jpg?ga=GA1.1.350092013.1740810520&semt=ais_hybrid" 
                    alt="Ramadan Kareem"
                />
            </div>

            {/* Hero Section */}
            <section 
                className="relative h-[500px] flex items-center justify-center bg-cover bg-center text-white" 
                style={{ backgroundImage: "url('videoFrame')" }}
            >
                <div className="text-center p-6 bg-black bg-opacity-50 rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-bold">Welcome to Ramadan Guide</h1>
                    <p className="text-lg mt-3">A month of fasting, prayer, and spiritual growth</p>
                </div>
            </section>

            {/* About Ramadan Section */}
            <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900 dark:text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">What is Ramadan?</h2>
                    <p className="text-gray-600 text-lg dark:text-white">
                        Ramadan is the ninth month of the Islamic calendar, observed by Muslims worldwide as a time of fasting, prayer, reflection, and community. 
                        It commemorates the first revelation of the Quran to Prophet Muhammad (PBUH).
                    </p>
                    <div className="mt-6 flex justify-center">
                        <img 
                            className="w-full md:w-[500px] h-[300px] object-cover rounded-lg shadow-lg" 
                            src="https://img.freepik.com/free-vector/realistic-eid-al-fitr-illustration_52683-59773.jpg?ga=GA1.1.350092013.1740810520&semt=ais_hybrid" 
                            alt="Ramadan Fasting"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Topics */}
            <section className="py-16 bg-gray-100 dark:bg-gray-900 dark:text-white">
                <div className="max-w-6xl mx-auto text-center dark:bg-gray-900 dark:text-white">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10 dark:text-white">Explore Ramadan Topics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                        {/* Topic 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            
                            <h3 className="text-xl font-semibold">Fasting in Ramadan</h3>
                            <p className="text-gray-600 mt-2">
                                Learn about the significance and rules of fasting during this holy month.
                            </p>
                        </div>

                        {/* Topic 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                           
                            <h3 className="text-xl font-semibold">Special Prayers (Taraweeh)</h3>
                            <p className="text-gray-600 mt-2">
                                Understand the importance of nightly Taraweeh prayers during Ramadan.
                            </p>
                        </div>

                        {/* Topic 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                           
                            <h3 className="text-xl font-semibold">Charity & Giving (Zakat)</h3>
                            <p className="text-gray-600 mt-2">
                                Discover how giving charity is a key part of Ramadan and Islam.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 md:px-12 bg-green-600 text-white text-center dark:bg-gray-900 dark:text-white">
                <h2 className="text-3xl font-bold">Join Us This Ramadan</h2>
                <p className="text-lg mt-3">Embrace the spiritual journey with daily reminders, duas, and guidance.</p>
                <button className="mt-5 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-200 transition">
                    <a href="https://www.muslimaid.org/what-we-do/religious-dues/when-is-ramadan/">Get Started</a>
                </button>
            </section>
        </div>
    );
}

export default Home;
