import React, { ReactNode } from 'react';

interface ContentCardSectionProps {
    children: ReactNode;
}

export default function ContentCardSection({ children } : ContentCardSectionProps) {
    return (
        <div className="flex flex-wrap justify-center gap-6 gap-y-12">
            {children}
        </div>
    );
}