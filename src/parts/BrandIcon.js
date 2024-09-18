const logo = require('../assets/images/taxi.png')

function BrandIcon({ isTextVisible }) {
    return (
        <div className=" h-9 flex items-center ">
            <img className="w-9 h-9" src={logo} alt="Logo" />
            <div className={`ml-5 ${!isTextVisible ? 'hidden' : 'flex'}`}>
                <span className="text-slate-500 text-base font-normal font-Lato">TAXI</span>
                <span className="text-red-500 text-base font-normal font-Lato">GO</span>
            </div>
        </div>
    )
}

export default BrandIcon;