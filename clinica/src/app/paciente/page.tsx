import { Form } from "@/compoments/form"
import Link from "next/link"
export default function Paciente(){
    return (
        <div className="paciente">
            <div className="home-paciente">
                <Link href="/paciente/consulta">
                    <p>Consulta</p>
                </Link>
                <Link href="/paciente/consulta">
                    <p>Consulta</p>
                </Link>
                <Link href="/paciente/consulta">
                    <p>Consulta</p>
                </Link>
            </div>

            <div className="form">
                <Form/>
            </div>
        </div>
    )
}