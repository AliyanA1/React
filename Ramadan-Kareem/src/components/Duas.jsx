function Dua() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-white">
            {/* Hero Section */}
            <section 
                className="relative h-[400px] flex items-center justify-center bg-cover bg-center text-white" 
                style={{ backgroundImage: "url('your-hero-image.jpg')" }}
            >
                <div className="text-center p-6 bg-black bg-opacity-50 rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-bold">Power of Dua</h1>
                    <p className="text-lg mt-3">The direct connection between you and Allah (SWT)</p>
                </div>
            </section>

            {/* What is Dua? */}
            <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900  dark:text-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">What is Dua?</h2>
                    <p className="text-gray-600 text-lg dark:text-white">
                        Dua is an act of supplication and the most powerful way to seek guidance, mercy, and blessings from Allah (SWT). 
                        It is a form of direct communication with the Creator.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <img 
                            className="w-full md:w-[500px] h-[300px] object-cover rounded-lg shadow-lg" 
                            src="https://i.pinimg.com/736x/1c/54/a6/1c54a654c1f2b519edf75e49c4838f31.jpg" 
                            alt="Dua Image"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Duas */}
            <section className="py-16 bg-gray-100 dark:bg-gray-900  dark:text-gray-100">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10 dark:text-white">Essential Duas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Dua for Forgiveness */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            
                            <h3 className="text-xl font-semibold">Dua for Forgiveness</h3>
                            <p className="text-gray-600 mt-2">
                                "Astaghfirullah" – Seeking Allah's mercy and forgiveness.
                            </p>
                        </div>

                        {/* Dua for Protection */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            
                            <h3 className="text-xl font-semibold">Dua for Protection</h3>
                            <p className="text-gray-600 mt-2">
                                "Bismillahillazi la yadurru..." – A powerful dua for safety.
                            </p>
                        </div>

                        {/* Dua for Gratitude */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          
                            <h3 className="text-xl font-semibold">Dua for Gratitude</h3>
                            <p className="text-gray-600 mt-2">
                                "Alhamdulillah" – A dua to express thankfulness to Allah.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 md:px-12 bg-green-600 text-white text-center">
                <h2 className="text-3xl font-bold">Learn and Recite Duas Daily</h2>
                <p className="text-lg mt-3">Strengthen your faith by making dua a regular habit.</p>
                <button className="mt-5 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-200 transition">
                   <a href="https://www.duas.org/">Explore More Duas</a> 
                </button>
            </section>
        </div>
    );
}

export default Dua;
