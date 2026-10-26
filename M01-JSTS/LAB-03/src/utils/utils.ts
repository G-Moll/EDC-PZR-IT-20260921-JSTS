type StatusState = "is-loading" | "is-success" | "is-error";

function getElement<T extends HTMLElement>( selector: string ): T {
    const currentElement = document.querySelector<T>( selector );

    if( ! currentElement ) throw new Error( `DOM Element not found: ${ selector }` );
    return currentElement;
}

function setStatus( message: string, state: StatusState ): void {
    const statusDiv = getElement<HTMLDivElement>( "#status" );

    statusDiv.classList.remove( "is-loading", "is-success", "is-error" );
    statusDiv.classList.add( state );
    statusDiv.textContent = message;

    console.log( message );
}

function hideStatus(): void {
    const statusEl = getElement<HTMLDivElement>( "#status" );
    statusEl.classList.add( "is-hidden" );
}

function initStatus(): void {
    const closeBtn = getElement<HTMLButtonElement>( "#status .status__close" );
    closeBtn.addEventListener( "click", hideStatus );
}

export {
    getElement,
    initStatus,
    setStatus,
    hideStatus
};
export type {
    StatusState
};

