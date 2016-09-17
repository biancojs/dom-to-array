import isIterable from 'bianco.is-iterable'

/**
 * Converts any DOM node/s into a loopable array like object
 * @param   { HTMLElement|NodeList } els - single html element or a node list
 * @returns { Object } always a loopable object
 */
export default function domToArray(els) {
  // can this object be already looped?
  if (!isIterable(els)) {
    // is it a node list?
    if (els.length)
      return Array.from(els)
    else
      // if it's a single node
      // it will be returned as "array" with one single entry
      return Array.from({ length: 1 }, _ => els)
  } else
    // this object could be looped out of the box
    return els
}