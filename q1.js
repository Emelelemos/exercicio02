function ehAnoBissexto(ano) {
    return (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);
}

function ehDataValida(dia, mes, ano) {
    if (mes < 1 || mes > 12) {
        return false;
    }
    if (dia < 1) {
        return false;
    }

    let diasNoMes;

    switch (mes) {
        case 2:
            diasNoMes = ehAnoBissexto(ano) ? 29 : 28;
            break;
        case 4: case 6: case 9: case 11:
            diasNoMes = 30;
            break;
        default:
            diasNoMes = 31;
    }

    return dia <= diasNoMes;
}

console.log(ehDataValida(29, 2, 2024)); 
console.log(ehDataValida(29, 2, 2022)); 
console.log(ehDataValida(31, 4, 2025)); 
console.log(ehDataValida(15, 10, 2025));
