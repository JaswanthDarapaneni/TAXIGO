import { ClockIcon, CurrencyDollarIcon, UsersIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export const features = [
    {
        head: "Safety",
        icon: <ShieldCheckIcon className="w-6 h-6 text-blue-500 mr-2" />,
        text: "The safety of our passengers is our top priority."
    },
    {
        head: "Reliability",
        icon: <ClockIcon className="w-6 h-6 text-blue-500 mr-2" />,
        text: "We strive to provide prompt and dependable service."
    },
    {
        head: "Affordability",
        icon: <CurrencyDollarIcon className="w-6 h-6 text-blue-500 mr-2" />,
        text: "Quality service doesn't have to break the bank."
    },
    {
        head: "Customer Focus",
        icon: <UsersIcon className="w-6 h-6 text-blue-500 mr-2" />,
        text: "We are committed to providing excellent customer service and support."
    },
];

