export default function ServiceIcons({ serviceType, className = "w-32 h-32" }) {
  switch (serviceType) {
    case 'bess':
      return (
        <img
          src="/icons/Blueprint-icon.png"
          alt="BESS - Battery Energy Storage Systems"
          className={`${className} object-contain`}
        />
      );

    case 'smartHome':
      return (
        <img
          src="/icons/Construction-icon.png"
          alt="Smart Home Solutions"
          className={`${className} object-contain`}
        />
      );

    case 'securitySystems':
      return (
        <img
          src="/icons/Restoration-icon.png"
          alt="Renovation"
          className={`${className} object-contain`}
        />
      );

    case 'energySolutions':
      return (
        <img
          src="/icons/Keyshandover-icon.png"
          alt="Other Energy Solutions"
          className={`${className} object-contain`}
        />
      );

    default:
      return (
        <div className={`${className} bg-gray-600 rounded-lg flex items-center justify-center`}>
          <span className="text-white text-xs">?</span>
        </div>
      );
  }
}
