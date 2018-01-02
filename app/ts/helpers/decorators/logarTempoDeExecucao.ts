export function logarTempoDeExecucao(emSegundos = false) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const methodOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            let divisor = 1;
            let unidade = 'milisegundos'
            if(emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }

            console.log("╔══════════════════════════════════════════════════╗");
            console.log(`Method: ${propertyKey} | Params: ${JSON.stringify(args)}\t`);
            const t1 = performance.now();
            const retorno = methodOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O Retorno foi ${retorno}`);
            let total = (t2 - t1) / divisor;
            console.log(`O tempo de execuçao ${total} ${unidade}`);
            console.log("╚══════════════════════════════════════════════════╝");
            return retorno;
        }

        return descriptor;
    }
}