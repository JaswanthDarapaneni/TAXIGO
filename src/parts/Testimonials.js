export const TestimonialsSection = () => {
    const testimonials = [
        { content: "Taxigo made my daily commute so much easier. Highly recommend!", writer: "Jane Doe" },
        { content: "Great service and affordable prices. Will use it again!", writer: "John Smith" }
    ];

    return (
        <section id='testimonials' className="py-12 bg-gradient-to-r from-white to-gray-100 dark:from-black dark:to-gray-900 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 dark:text-white relative inline-block border-b-4 border-transparent pb-2">
                    What Our Users Say
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-red-700  to-yellow-400 transform translate-y-2"></span>
                </h2>

                <div className="flex flex-col space-y-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg mx-4 dark:bg-gray-700 dark:text-white">
                            <p className="text-lg mb-4 font-semibold">{item.content}</p>
                            <cite className="block text-gray-300 font-bold">- {item.writer}</cite>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
