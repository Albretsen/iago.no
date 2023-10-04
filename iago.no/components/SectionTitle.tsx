import React from "react";

type SectionTitleProps = {
    title: string;
    className?: string;
}

export default function SectionTitle({title, className} : SectionTitleProps) {
    return(
        <h2 className={
            `text-font-color text-center text-2xl font-bold mb-10
            ${className ? className : undefined}`
        }>
            {title}
        </h2>
    )
}