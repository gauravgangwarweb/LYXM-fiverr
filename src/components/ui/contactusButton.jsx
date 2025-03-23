"use client";

const ContactUsButton = ({text}) => {
  return (
    <button
      onClick={() => window.open("https://wa.me/18495815538", "_blank")}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border py-2.5 group border-foreground bg-transparent hover:bg-foreground hover:border-foreground/40 font-normal text-foreground hover:text-primaryDark sm:text-lg text-sm px-4 sm:py-5 h-9 max-w-36 transition-colors duration-800 ease-in-out"
    >
      <span className="flex gap-1">{text.contactUs}</span>
      <svg
        class="hidden md:block align-middle transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M133.12 611.84h803.84v51.2H133.12zM806.144 712.3968l32.9472 39.168-237.0048 199.4752-32.9728-39.168z"></path>
        <path d="M658.0992 276.4544l283.5968 336.7936-39.168 32.9728-283.5968-336.7936z"></path>
      </svg>
    </button>
  );
};

export default ContactUsButton;
