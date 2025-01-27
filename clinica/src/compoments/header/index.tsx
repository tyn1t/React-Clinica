import Link from "next/link"
import Image from "next/link" 
import "./styles.css"

interface MenuProps {
    buttons: string
}

export function Header({ buttons }: MenuProps) {
    return (
        <header className="nav-header">
            <ul>
                <li>
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"/paciente"}>
                        Paciente
                    </Link>
                </li>
                <li>
                    <Link href={"/medico"}>
                        Medico
                    </Link>
                </li>
                <li>
                    <Link href={"/#"}>
                        contatos
                    </Link>
                </li>

                <li className="Api-teste">
                    <Link href={"/pokemon"}>
                        Api teste pokemon
                    </Link>
                </li>
            </ul>
        </header>
    )
}