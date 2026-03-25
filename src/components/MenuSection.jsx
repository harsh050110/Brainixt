const MenuSection = ({ title, items }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-2 hover:underline cursor-pointer">
        {title}
      </h2>

      {items && (
        <ul className="space-y-2 ml-3 text-gray-600">
          {items.map((item, index) => (
            <li
              key={index}
              className="hover:text-black cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuSection;