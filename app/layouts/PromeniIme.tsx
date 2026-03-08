import type { ReactNode } from 'react';
import "../styles/PromeniIme.scss"

interface SectionProps extends ContainerProps{
    className : string,
}

export function Section({ children, className} : SectionProps) {
    return <section className={'kto-layout-section' + ' ' + className}>
        {children}
    </section>
}

interface ContainerProps {
    children : ReactNode
}

export function Container({ children } : ContainerProps) {
    return <div className="kto-layout-container">
        {children}
    </div>
}