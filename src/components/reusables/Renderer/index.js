import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Renderer() {
    const location = useLocation();

    switch (location.pathname) {
        case '/': return <div>Hello</div>
    
        default:
            break;
    }
}
