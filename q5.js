function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId); 
        timeoutId = setTimeout(() => {
            fn.apply(this, args); 
        }, delay);
    };
}

function pesquisarNoServidor(texto) {
    console.log(`Pesquisando por: ${texto}`);
}

const pesquisarDebounced = debounce(pesquisarNoServidor, 1000);

pesquisarDebounced("o");
pesquisarDebounced("ol");
pesquisarDebounced("ola");


