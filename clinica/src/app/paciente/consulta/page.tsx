async function GetData(){
    
    try {
        const response = await fetch("http://localhost:8000/clientes/Consultas", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4MDEyNDU2LCJpYXQiOjE3MzgwMDg4NTYsImp0aSI6IjMzZjA3YTRhNWY5MTQ4OTNhYzIwODlmM2ZiY2UzMjNhIiwidXNlcl9pZCI6M30.kQPAxRFe2x6td90x4tGnL0y7NLLON6lmoly2JPE4x84'
            }
        })
        if (!response.ok) {
            const mensagens = `Erro Status ${response.status}`
            throw new Error(mensagens)
        }
        const data = await response.json() 
        return data
    }
    catch (erro ) { 
        console.error("Erro teste na Api Paciente  Erro not Authe", erro)}
}

GetData()


export default function listConsulta () {
    return (
        <ul>
            <li>
                ok
            </li>
            <li>
                teste consultas
            </li>
        </ul>
    )
} 