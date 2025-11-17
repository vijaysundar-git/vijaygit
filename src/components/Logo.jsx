const Logo = ({size = "md", showText = true, className = ""}) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12", 
    lg: "h-16",
    xl: "h-20",
    xxl: "h-24"
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl", 
    xl: "text-3xl",
    xxl: "text-4xl"
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/assets/sjr-logo-updated.svg" 
        alt="SJR Tech Services Limited Logo" 
        className={`${sizeClasses[size]} w-auto flex-shrink-0`}
      />
      {showText && (
        <span className={`font-bold text-gray-900 ${textSizeClasses[size]}`}>
          SJR Tech Services Limited
        </span>
      )}
    </div>
  )
}

export default Logo