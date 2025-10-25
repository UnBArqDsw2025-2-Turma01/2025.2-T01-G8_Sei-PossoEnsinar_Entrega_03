import { Component } from "./component.abstract";



export interface TeachingMediator {

  notify(sender: Component, event: string, data?: any): void;
}