const MainBarButton = ({ logo, text, description1, description2, classType }) => {
  return (
    <div
      className="flex items-center text-left cursor-pointer p-3 rounded transition-all duration-300 group"
      style={{ borderLeft: '2px solid transparent', transition: 'border-color 0.3s ease, background 0.3s ease' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderLeftColor = 'rgba(245,210,68,0.6)';
        e.currentTarget.style.background = 'rgba(245,210,68,0.04)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderLeftColor = 'transparent';
        e.currentTarget.style.background = 'transparent';
      }}
    >
      <div className="flex-shrink-0 transition-all duration-300 group-hover:scale-110">
        {logo}
      </div>
      <div className="ml-1">
        <p className={`text-sm font-semibold ${classType}`}>{text}</p>
        {description1 && <p className="text-xs text-gray">{description1}</p>}
        {description2 && <p className="text-xs text-lightGray">{description2}</p>}
      </div>
    </div>
  );
};

export default MainBarButton;
