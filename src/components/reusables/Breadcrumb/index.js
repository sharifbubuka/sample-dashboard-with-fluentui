import React from 'react'

export default function Breadcrumb({ crumbs, className}) {
    return (
        <div className={className}>
            {crumbs.map((crumb, index) => {
                if (index === 0) {
                    return <pre className={`inline`}><a key={index} href={crumb.link}>{crumb.title}</a> /</pre>
                }

                if (index === crumbs.length - 1) {
                    return <pre className="inline"> <a key={index} href={crumb.link}>{crumb.title}</a></pre>
                } else {
                    return <pre className="inline"> <a key={index} href={crumb.link}>{crumb.title}</a> /</pre>
                }
            })}
        </div>
    )
}
