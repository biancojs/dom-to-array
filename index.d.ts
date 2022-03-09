type DOMElement = Window | Document | Element

export default function domToArray<T extends DOMElement, R extends DOMElement[]>(els: T | T[]): R[];

