import {HTMLAttributes} from "react";

export * from './hooks';
export * from './local-storage';

export const uuid = () =>
    Math.random().toString(36).substring(2, 5) +
    Math.random().toString(36).substring(2, 5);


export const classes = (str1 = '', str2 = '') =>
    `${str1} ${str2}`.trim();

export const pluck = <T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] =>
    propertyNames.map(n => o[n]);

export const getProperty = <T, K extends keyof T>(o: T, propertyName: K): T[K] =>
    o[propertyName]; // o[propertyName] is of type T[K]

export interface Dictionary<T> {
    [key: string]: T;
}

export type HtmlElement = HTMLAttributes<HTMLElement>
