import { useNavigate } from "react-router-dom";

const MenuItemMobile = ({ icon, text, active, route }) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`../${route}`);
    };

    return (
        <button
            onClick={onClick}
            className={`flex flex-col justify-center items-center gap-[1rem] ${active ? 'text-green' : 'text-dark_text'}`}
        >
            {icon}
            <p className="text-small">{text}</p>
        </button>
    );
};

export default MenuItemMobile;
