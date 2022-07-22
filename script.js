const IVA = 1.21
const impuestoOnline= 1.75
let numeroIVA, opcionUsuario, numeroOnline
const calculadoraIVA = (numeroIVA) => numeroIVA * IVA
const calculadoraImpuestoOnline = (numeroOnline) => numeroOnline * impuestoOnline
do{
do{
    opcionUsuario = prompt("¿Desea calcular IVA o Impuesto por compras en línea?").toLowerCase()
    if(!(isNaN (opcionUsuario))){
        alert("Por favor escriba una opcion, no utilize números ahora")
    }
}while(!(isNaN(opcionUsuario)))
switch(opcionUsuario){
    case "iva":
        do{
            numeroIVA = parseFloat(prompt("Ingrese un número"))
            if( isNaN (numeroIVA)){
                alert("Por favor, ingrese un número válido")
            }
        }while(isNaN(numeroIVA))
        alert(`El precio final con IVA es de ${calculadoraIVA(numeroIVA)}`)
        break
        case "impuesto por compras en línea":
            do{
                numeroOnline = parseFloat(prompt("Ingrese un número"))
                if( isNaN (numeroOnline)){
                    alert("Por favor, ingrese un número válido")
                }
            }while(isNaN(numeroOnline))
            alert(`El precio final con los Impuestos por compras en línea es de ${calculadoraImpuestoOnline(numeroOnline)}`)
            break
            case "impuesto por compras en linea":
                do{
                    numeroOnline = parseFloat(prompt("Ingrese un número"))
                    if( isNaN (numeroOnline)){
                        alert("Por favor, ingrese un número válido")
                    }
                }while(isNaN(numeroOnline))
                alert(`El precio final con los Impuestos por compras en línea es de ${calculadoraImpuestoOnline(numeroOnline)}`)
                break
            default: alert("Opción no válida")
}
continuar = prompt("¿Desea realizar otra operación?").toLowerCase()
}while(continuar != "no")