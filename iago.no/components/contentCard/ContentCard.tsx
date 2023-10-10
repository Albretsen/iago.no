import React from "react";
import SvgIcon from "@/public/icons/SvgIcon";
import colors from "@/constants/colors";
import SectionDescription from "../SectionDescription";
import SectionTitle from "../SectionTitle";

type ContentCardProps = {
    title: string,
    text?: string,
    icon?: string,
}

export default function ContentCard({ title, text, icon} : ContentCardProps) {
    return(
        <div className="flex gap-6 flex-col items-center justify-center max-w-[300px] min-w-[300px] min-h-[300px] border border-main-color p-6 rounded-xl">
            <SvgIcon name={icon} color={colors.mainColor} height={42} width={42} />
            <SectionTitle title={title} className="text-xl mb-0" />
            <SectionDescription text={text} className="text-sm mb-0"/>
        </div>
    )
}