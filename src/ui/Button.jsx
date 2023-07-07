import PropTypes from "prop-types";

export function Button({
  variant = "default",
  color = "default",
  size = "sm",
  disabled = false,
  disableShadow = false,
  startIcon = null,
  endIcon = null,
  children,
}) {
  /*
    Dynamic Class works fine so long as its a full tailwind class name

    This doen't work
    <div class="text-{{ error ? 'red' : 'green' }}-600"></div>

    This DO work
    <div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
  */
  const buttonVariant = {
    default: {
      default: `bg-default hover:bg-default-hover hover:bg-default-hover focus:bg-default-hover text-theme-gray`,
      primary: `bg-primary hover:bg-primary-hover hover:bg-primary-hover focus:bg-primary-hover text-white`,
      secondary: `bg-secondary hover:bg-secondary-hover hover:bg-secondary-hover focus:bg-secondary-hover text-white`,
      danger: `bg-danger hover:bg-danger-hover hover:bg-danger-hover focus:bg-danger-hover text-white`,
    },
    outline: {
      default: `border border-2 border-default hover:bg-default-hover focus:bg-default-hover hover:bg-opacity-20 focus:bg-opacity-20 text-default`,
      primary: `border border-2 border-primary hover:bg-primary-hover focus:bg-primary-hover hover:bg-opacity-20 focus:bg-opacity-20 text-primary`,
      secondary: `border border-2 border-secondary hover:bg-secondary-hover focus:bg-secondary-hover hover:bg-opacity-20 focus:bg-opacity-20 text-secondary`,
      danger: `border border-2 border-danger hover:bg-danger-hover focus:bg-danger-hover hover:bg-opacity-20 focus:bg-opacity-20 text-danger`,
    },
    text: {
      default: `hover:bg-default-hover focus:bg-default-hover hover:bg-opacity-20 focus:bg-opacity-20 text-default`,
      primary: `hover:bg-primary-hover focus:bg-primary-hover hover:bg-opacity-20 focus:bg-opacity-20 text-primary`,
      secondary: `hover:bg-secondary-hover focus:bg-secondary-hover hover:bg-opacity-20 focus:bg-opacity-20 text-secondary`,
      danger: `hover:bg-danger-hover focus:bg-danger-hover hover:bg-opacity-20 focus:bg-opacity-20 text-danger`,
    },
    disabled: {
      default: `cursor-not-allowed bg-default text-gray-600`,
      outline: `cursor-not-allowed border border-2 border-default bg-default-hover bg-opacity-20 text-gray-600`,
      text: `cursor-not-allowed text-gray-600`,
    },
  };

  const buttonSize = {
    sm: "px-4 py-2",
    md: "px-5 py-2.5",
    lg: "px-6 py-3",
  };

  const buttonBaseClass =
    "flex gap-2 items-center font-medium rounded-lg transition-all ease-in text-xl text-center";

  const buttonShadow =
    disableShadow || variant !== "default" ? "" : "shadow-md";

  const buttonStyle = disabled
    ? buttonVariant["disabled"][variant]
    : buttonVariant[variant][color];

  return (
    <>
      <button
        type="button"
        className={`
        ${buttonBaseClass}
        ${buttonStyle}
        ${buttonSize[size]}    
        ${buttonShadow}
        `
          .replace(/[\r\n]+/g, "") // clear CRLF
          .replace(/\s+/g, " ")} // trim multiple whitespaces
      >
        {startIcon && (
          <span className="material-icons-round text-xl">{startIcon}</span>
        )}
        {children}
        {endIcon && (
          <span className="material-icons-round text-xl">{endIcon}</span>
        )}
      </button>
    </>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["default", "outline", "text"]),
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  children: PropTypes.node.isRequired,
};
