

export const Button = ({className, size = "default", children, ...props}) =>{
    const baseClasses = "relative flex items-center justify-center neo-btn font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-highlight text-foreground hover:bg-highlight/90"

    const sizeClassless ={
        sm:"px-4 py-2 text-sm",
        default:"px-6 py-3 text-base",
        lg:"px-8 py-4 text-lg"
    }
    const classes = `${baseClasses} ${sizeClassless[size]} ${className}`;
    return(
        <button className={classes} {...props}>
            <span className="relative  flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
}