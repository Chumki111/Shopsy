

const SecondaryButton = ({buttonText}) => {
    return (
        <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full group-hover:bg-white group-hover:text-primary">{buttonText}</button>
    );
};

export default SecondaryButton;