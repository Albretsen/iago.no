import React from "react";

type SectionDescriptionProps = {
    text: string | undefined;
    className?: string;
}

export default function SectionDescription({text, className} : SectionDescriptionProps) {
    return(
        <p className={
            `text-font-color text-center text-base font-regular mb-10 max-w-xl self-center
            ${className ? className : undefined}`
        }>
            {text}
        </p>
    )
}