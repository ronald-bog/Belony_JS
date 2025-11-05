// HIJO
export function Catalogo({ estudiante, edad, onClick }) {
    console.log('Este componente se re-renderizo!!!!!!!! ');
    

    return (
        <>
            <div>CATALOGO</div>
            <div>{estudiante}</div>
            <div>{edad}</div>
            <button onClick={onClick}>prueba</button>

            <br />
            <br />
            <br />
            <br />
        </>

    );
}
