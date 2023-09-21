import Image from "next/image";

type Links = {
    label: string;
    button?: boolean;
    dropdown?: boolean;
}

type NavbarProps = {
    logo?: string;
    logoText?: string;
    links?: Array<Links>;
}

export default function Navbar({logo, logoText, links}: NavbarProps) {
    return(
        <nav className="h-24 px-standard sticky top-0 bg-background-color flex p">
            <div className=" flex">
                {logo && (
                    <Image
                        src={logo}
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                )}
            </div>
        </nav>
    )
}