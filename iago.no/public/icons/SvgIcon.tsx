import { ICONS } from "./icons";

type SvgIconProps = {
    name: string | undefined,
    color?: string,
    width?: string | number,
    height?: string | number,
};

// Takes the name of an svg icon, the code for which is located in icons.tsx
// Allows calling icons from a single component, rather than a unique component for each icon
export default function SvgIcon({ name, color = 'black', width = 24, height = 24 }: SvgIconProps) {
    // If component is called with no name, this means no icon is actually wanted
    if(!name) return

    const pathD = ICONS[name];

    if (!pathD) {
        console.error(`Icon with name ${name} does not exist`);
        return null;
    }

    return (
        // The viewBox is specified to work with icons downloaded from official material icons website
        // Will need adjustments if inteded to allwo for any svg file
        <svg width={width} height={height} viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
            <path d={pathD} fill={color} />
        </svg>
    );
}