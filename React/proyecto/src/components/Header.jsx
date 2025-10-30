

export function Header() {
    const lenguaje1 = 'Javascript';
    const lenguaje2 = 'Python';
    const nombres = ['Belony', 'Peter', 'Hulk', 'Sofia', 'Bill', 'Steve', 'Ronald', 'Jeff'];

    function saludar() {
        return `${lenguaje1} ${lenguaje2}`;
    }

    function saludar2() {
        console.log('Este es un LOG');
    }

    return (
        <div className='header'>
            {nombres.map((elem, idx) => (
                <h6>{`valor: ${elem} - indice: ${idx}`}</h6>
            ))}
        </div>
    );
}