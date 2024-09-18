export const FeaturesSection = () => {
    const features = [
        { content: "Convenient Booking", description: "Book your ride in just a few taps." },
        { content: "Affordable Rates", description: "Enjoy competitive pricing and great deals." },
        { content: "24/7 Support", description: "Our support team is available around the clock." },

    ]
    return (
        <section id='features' className="py-12 bg-gradient-to-r from-white to-gray-100 dark:from-black dark:to-gray-900 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 dark:text-white relative inline-block border-b-4 border-transparent pb-2">
                    Why Choose Taxigo?
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-red-700  to-yellow-400 transform translate-y-2"></span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((item,index) => (
                        <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg dark:shadow-gray-900">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.content}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )

}


