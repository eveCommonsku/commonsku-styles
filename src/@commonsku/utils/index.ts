import ssr from './ssr';
export * from './sizes';

export const valIsValid = (val: any) => val !== null && val !== undefined && val !== ''; // not checking for 0

export const aeval = (obj:{[key: string]: any}, key: string, def: any) => {
    return obj && obj[key] ? obj[key] : def;
}

export const window = ssr.window;
export const document = ssr.document;