export function domInject(seletor: string) {
    return function (target: any, key: string) {
        //console.log(JSON.stringify(arguments));

        let elemento : JQuery;
        const getter = function() {
            if (!elemento) {
                console.log(`== BUSCANDO ${seletor} E INJETANDO ${key}`);
                elemento = $(seletor);
            }
            return elemento;
        }

        Object.defineProperty(target, key, {
            get: getter
        });
    }
}