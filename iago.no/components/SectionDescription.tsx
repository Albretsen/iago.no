import React from "react";

type SectionTitleProps = {
    text: string;
    className?: string;
}

export default function SectionTitle({text, className} : SectionTitleProps) {
    return(
        <p className={
            `text-font-color text-center text-base font-regular mb-10 max-w-xl
            ${className ? className : undefined}`
        }>
            {text}
        </p>
    )
}