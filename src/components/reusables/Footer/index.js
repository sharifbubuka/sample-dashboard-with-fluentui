import React, { useState } from 'react';

export default function Footer() {
    const [footerOpen, setFooterOpen] = useState(false);

    function handleFooterExpansion() {
        setFooterOpen(prevState => !prevState)
    }

    return (
        <div className={`${footerOpen ? 'h-20' : 'h-8'} bg-gray-500 z-10`}>
            <button onClick={() => handleFooterExpansion}>Click me</button>
        </div>
    )
}
