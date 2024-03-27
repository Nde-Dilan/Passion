import { Loader } from "lucide-react";

//We want to create different variant of our component so we should import this
import {cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";


const spinnerVariants = cva(
"text-muted-foregroung animate-spin",
{
    variants:{
        size: {
            default:"h-4 w-4",
            sm:"h-2 w-2",
            lg:"h-6 w-6",
            icon:"h-10 w-10",
        },
        color: {
            default:"bg-white",
            red:"bg-red-500",
            gr:"green",
            blc:"black",
        }
    },
    defaultVariants: {
        size: "default",
    }
});


interface SpinnerProps extends VariantProps<typeof spinnerVariants> {

}



export const Spinner = ({
    size,
    color
}: SpinnerProps) =>{
    return ( 
        <Loader className={cn(spinnerVariants({size,color}))}/>
    );
};