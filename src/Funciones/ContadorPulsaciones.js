import React, { useState, Fragment } from 'react';



const Contador = () => {

    const [numero, setNumero] = useState(0);

    const Aumentar = () =>{
        setNumero(numero + 1)
    }

    const [NewArray, setNewArray] = useState([1,2,3,5,6])

    const [num, setnum] = useState(7)

    const ModificarArray = () =>{
        setnum(num + 1)
        setNewArray([...NewArray, num])
    }


    return ( 
        <Fragment>
            <h1>Funcion Aumentar me usan dentro de el componente principal</h1>
            <h1> 
                Aumentaremos este numero cada que se haga click ({numero})
            </h1>
            <h2>Para que eso pase tienes que preionar aqui</h2>
            <button onClick={Aumentar} > Clickea </button>

            <h2>Ahora añadiremos numeros ascendetes a un array</h2>
            <h2>Este es numero array {NewArray}</h2>
         
            <h3>Clickea para modificar</h3>
            <button onClick={ModificarArray}>click</button>
        </Fragment>
     );
}
 
export default Contador;