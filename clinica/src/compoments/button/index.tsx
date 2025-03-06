import './sytle.css'

interface ButtonProps {
    name:string,
    type: string
}

export function Button({name, type}:ButtonProps) {
    return (
        <button className={type} type="submit">{name}</button>
    )
}