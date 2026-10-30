function getDOMElement<T extends HTMLElement>( selector: string ): T {
    const currentElement = document.querySelector<T>( selector );

    if( ! currentElement ) throw new Error( `DOM Element not found ${ selector }` );
    return currentElement;
}

export {
    getDOMElement
};

