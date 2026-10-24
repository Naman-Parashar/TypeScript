import { type PropsWithChildren, type ReactNode } from 'react'

interface CardsProps extends PropsWithChildren{
    title:string;
    footer?:ReactNode
}

function Card({title,children, footer}: CardsProps) {
  return (
    <section>
        <h2>{title}</h2>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
    </section>
  )
}

export default Card