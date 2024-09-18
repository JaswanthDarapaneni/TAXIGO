export const CTASection = () => {
    return (<section id='cta' className="py-12 text-center bg-gradient-to-r from-white to-gray-100 dark:from-black dark:to-gray-900 text-white dark:text-gray-200">
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-8 dark:text-white relative inline-block border-b-4 border-transparent pb-2">
                Ready to Ride?
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-red-700  to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg mb-6 dark:text-white text-black">Book your ride now and experience the convenience of Taxigo.</p>
            <button className="bg-yellow-500 text-black py-3 px-6 rounded-full hover:bg-yellow-400 ">
                Book Now &rarr;
            </button>
        </div>
    </section>)
};
