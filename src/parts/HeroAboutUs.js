

function HeroAboutUsSection({features}) {
    return (<div className="">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-4 my-12 bg-gradient-to-r from-white to-gray-100 dark:from-black dark:to-gray-900">
            {features.map((feature, index) => (
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg dark:shadow-gray-900" key={index}>
                    {feature.icon}
                    <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">{feature.head}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{feature.text}</p>
                </div>
            ))}

        </div>
    </div>
    )
}
export default HeroAboutUsSection;