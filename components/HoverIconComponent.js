/* eslint-disable @next/next/no-img-element */
const HoverIconComponent = ({ file, text }) => {
  return (
    <div
      className="relative group p-24 glass rounded-lg cursor-default"
      style={{ transition: 'box-shadow 0.4s ease, border-color 0.4s ease' }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 0 28px rgba(245,210,68,0.25), inset 0 0 20px rgba(245,210,68,0.06)';
        e.currentTarget.style.borderColor = 'rgba(245,210,68,0.4)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = '';
      }}
    >
      {/* Icon visible by default, fades out on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center text-9xl text-yellow group-hover:opacity-0"
        style={{ transition: 'opacity 0.4s ease, filter 0.4s ease', filter: 'drop-shadow(0 0 12px rgba(245,210,68,0.5))' }}
      >
        {file}
      </div>

      {/* Text hidden by default, fades in on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 px-6"
        style={{ transition: 'opacity 0.4s ease' }}
      >
        <p
          className="text-yellow text-lg text-center leading-relaxed"
          style={{ textShadow: '0 0 10px rgba(245,210,68,0.6)' }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default HoverIconComponent;
