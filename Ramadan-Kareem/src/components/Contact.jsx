function Contact() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-white">
            {/* Hero Section */}
            <section 
                className="relative h-[300px] flex items-center justify-center bg-cover bg-center text-white" 
                style={{ backgroundImage: "url('your-contact-hero.jpg')" }}
            >
                <div className="text-center p-6 bg-black bg-opacity-50 rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
                    <p className="text-lg mt-3">We’d love to hear from you!</p>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900 dark:text-gray-100">
                <div className="max-w-4xl mx-auto text-center dark:bg-gray-900  dark:text-gray-100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-white">Contact Us</h2>
                    <form className="bg-gray-100 p-6 rounded-lg shadow-lg dark:bg-gray-900  dark:text-gray-100">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2 dark:text-white">Name</label>
                            <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded-lg dark'text-white" 
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2 dark:text-white">Email</label>
                            <input 
                                type="email" 
                                className="w-full p-3 border border-gray-300 rounded-lg dark:text-white" 
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2 dark:text-white">Message</label>
                            <textarea 
                                className="w-full p-3 border border-gray-300 rounded-lg" 
                                placeholder="Enter your message" 
                                rows="4"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                        >
                          Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Contact Details */}
            <section className="py-12 bg-gray-100 text-center dark:bg-gray-900  dark:text-white">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Contact Information</h2>
                <p className="text-gray-600 dark:text-white">📞 Phone: +123 456 7890</p>
                <p className="text-gray-600 dark:text-white">📧 Email: contact@example.com</p>
                <p className="text-gray-600 dark:text-white">📍 Location: Your City, Country</p>
            </section>
        </div>
    );
}

export default Contact;
