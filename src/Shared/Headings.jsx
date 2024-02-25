

const Headings = ({title,subtitle,center}) => {
    return (
        <div className={center ? 'text-center' :'text-start' }>
           <h2 className="text-2xl font-bold">{title}</h2>
           <div className="text-light text-neutral-500 mt-2">{subtitle}</div>
        </div>
    );
};

export default Headings;