export function throttle(milliseconds = 500) {
    return function(target: any, property: string, descriptor: PropertyDescriptor) {
        const methodOriginal = descriptor.value;
        let timer = 0;
        descriptor.value = function(... args: any[]) {
            if (event) event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(() => methodOriginal.apply(this, args) , milliseconds);
        }
        return descriptor;
    }
} 