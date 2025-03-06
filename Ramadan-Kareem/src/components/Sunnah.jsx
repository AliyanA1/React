function Sunnah() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-white">
            {/* Hero Section */}
            <section 
                className="relative h-[400px] flex items-center justify-center bg-cover bg-center text-white" 
                style={{ backgroundImage: "url('your-hero-image.jpg')" }}
            >
                <div className="text-center p-6 bg-black bg-opacity-50 rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-bold">Follow the Sunnah</h1>
                    <p className="text-lg mt-3">The way of the Prophet Muhammad (PBUH) for a righteous life</p>
                </div>
            </section>

            {/* What is Sunnah? */}
            <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900 dark:text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">What is Sunnah?</h2>
                    <p className="text-gray-600 text-lg dark:text-white">
                        Sunnah refers to the teachings, actions, and sayings of Prophet Muhammad (PBUH). 
                        It serves as a practical guide for Muslims, helping them follow a righteous and fulfilling life.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <img 
                            className="w-full md:w-[500px] h-[300px] object-cover rounded-lg shadow-lg" 
                            src="https://i.pinimg.com/736x/ce/28/39/ce2839f32358b30864f698a51b88d5a3.jpg" 
                            alt="Sunnah Practices"
                        />
                    </div>
                </div>
            </section>

            {/* Types of Sunnah */}
            <section className="py-16 bg-gray-100 dark:bg-gray-900 dark:text-white">
                <div className="max-w-6xl mx-auto text-center ">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10 dark:text-white">Types of Sunnah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Sunnah of Eating */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                           
                            <h3 className="text-xl font-semibold">Sunnah of Eating</h3>
                            <p className="text-gray-600 mt-2">
                                Eat with the right hand, say "Bismillah" before eating, and do not waste food.
                            </p>
                        </div>

                        {/* Sunnah of Sleeping */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            
                            <h3 className="text-xl font-semibold">Sunnah of Sleeping</h3>
                            <p className="text-gray-600 mt-2">
                                Sleep on the right side, recite Ayat-ul-Kursi, and make wudu before sleeping.
                            </p>
                        </div>

                        {/* Sunnah of Charity */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            
                            <h3 className="text-xl font-semibold">Sunnah of Charity</h3>
                            <p className="text-gray-600 mt-2">
                                Give charity regularly, help those in need, and smile at others.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 md:px-12 bg-green-600 text-white text-center">
                <h2 className="text-3xl font-bold">Follow the Sunnah in Your Life</h2>
                <p className="text-lg mt-3">Practice the Sunnah daily to seek the blessings of Allah (SWT).</p>
                <button className="mt-5 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-200 transition">
                   <a href="https://www.duas.org/">Learn More</a>
                </button>
            </section>
        </div>
    );
}

export default Sunnah;
