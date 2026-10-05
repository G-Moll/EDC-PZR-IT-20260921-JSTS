export class Calculator {
    private history: string[] = [];

    add( a: number, b: number ): number {
        const result = a + b;
        this.history.push( `${ a } + ${ b } = ${ result }` );
        return result;
    }

    subtract( a: number, b: number ): number {
        const result = a - b;
        this.history.push( `${ a } - ${ b } = ${ result }` );
        return result;
    }

    multiply( a: number, b: number ): number {
        const result = a * b;
        this.history.push( `${ a } * ${ b } = ${ result }` );
        return result;
    }

    divide( a: number, b: number ): number {
        const result = a / b;
        this.history.push( `${ a } / ${ b } = ${ result }` );
        return result;
    }

    showHistory(): void {
        console.log( "--- Historial de Operaciones ---" );
        this.history.forEach( ( operation ) => console.log( operation ) );
    }
}

export const VERSION = "1.0.0";
