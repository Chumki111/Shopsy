

const PrimaryButton = ({buttonText}) => {
    return (
        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">{buttonText}</button>
    );
};

export default PrimaryButton;