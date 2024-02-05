import Aos from "aos";
import { useEffect, useState } from "react";


const Second = () => {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const datas = [
        { title: 'How The Return Policy For Sneaker', color: 'green', description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.'},
        { title: 'How To Pay Digital Wallet', color: 'sky', description: 'Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.'},
        { title: 'Can I Buy Offline At Offline Office', color: 'purple', description: 'Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.'},
        
        { title: 'Card expired', color: 'red', description: 'We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.'}
    ];
    
    
    useEffect(() =>{
        Aos.init()
      },[])
    return (
        <div>
            <div className="container">
                <h1 className="text-4xl font-bold pb-7">Payment Process</h1>
                 <div>
                 <div className="space-y-4 p-2 md:p-6">
                {datas?.map((data, idx) => (
                    <div key={idx} className="max-w-4xl">
                        {/* header / Title */}
                        <div onClick={() => handleToggle(idx)} className={`px-4 md:px-8 py-6 ${ idx === 0 ? 'bg-green-50 border-green-500' : idx === 1 ? 'bg-sky-50 border-sky-500' : idx === 2 ? 'bg-purple-50 border-purple-500' : idx === 3 ? 'bg-amber-50 border-amber-500' : idx === 4 ? 'bg-red-50 border-red-500' : 'bg-orange-50 border-orange-500'} border-l-[3px] cursor-pointer max-w-4xl`} data-aos="fade-up">
                            <div className="flex items-center">
                                <span>
                                    <svg className={`mr-4 ${ idx === 0 ? 'fill-green-900' : idx === 1 ? 'fill-sky-900' : idx === 2 ? 'fill-purple-900' : idx === 3 ? 'fill-amber-900' : idx === 4 ? 'fill-red-900': 'fill-orange-900'} shrink-0`} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /><rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /></svg>
                                </span>
                                <h4
                                    className={`${ idx === 0 ? 'text-green-900' : idx === 1 ? 'text-sky-900' : idx === 2 ? 'text-purple-900' : idx === 3 ? 'text-amber-900' : idx === 4 ? 'text-red-900' : 'text-orange-900'} text-xl max-w-4xl`}>
                                    {data.title}
                                </h4>
                            </div>
                        </div>
                        {/* body / content  */}
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <div className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  ${ idx === 0 ? 'text-green-900 bg-green-50 border-green-500' : idx === 1 ? 'text-sky-900 bg-sky-50 border-sky-500' : idx === 2 ? 'text-purple-900 bg-purple-50 border-purple-500' : idx === 3 ? 'text-amber-900 bg-amber-50 border-amber-500' : idx === 4 ? 'text-red-900 bg-red-50 border-red-500' : 'text-orange-900 bg-orange-50 border-orange-500'} `}>
                                    {data?.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                 </div>
            </div>
        </div>
    );
};

export default Second;