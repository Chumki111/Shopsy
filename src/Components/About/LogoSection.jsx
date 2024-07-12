

const LogoSection = () => {
   return (
        <>
        ,<marquee direction="">
        <div className="container">
           <div className="flex flex-wrap justify-evenly text-5xl font-semibold my-10 text-gray-500 gap-5">
           <h1 className="hover:text-primary/80 hover:transition-all hover:scale-105 duration-300">Nike</h1>
            <h1 className="hover:text-primary/80 hover:transition-all hover:scale-105 duration-300">Adidas</h1>
            <h1 className="hover:text-primary/80 hover:transition-all hover:scale-105 duration-300">Vans</h1>
            <h1 className="hover:text-primary/80 hover:transition-all hover:scale-105 duration-300">Puma</h1>
           </div>
            
        </div>
        </marquee>
        </>
    );
};

export default LogoSection;