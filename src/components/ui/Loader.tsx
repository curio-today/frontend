import { ComponentPropsWithRef } from "react";

export type LoaderProps = ComponentPropsWithRef<"div">;

export const Loader = ({ ref, children, ...props }: LoaderProps) => {
    return (
        <div {...props} ref={ref} className="w-200 text-center py-4 text-sm text-gray-500 dark:text-gray-400" >
            {children}
        </div>
    );
}

export default Loader;