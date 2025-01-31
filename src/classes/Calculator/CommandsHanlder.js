import { ImmeidateCalcutlaot } from "./ImmeidateCalcutlaot";
import { CommandsSequentially } from "./CommandsSequentially";

export class CommandsHanlder {
    constructor(calculatorState, invoker, commands) {
        this.calculatorState = calculatorState;
        this.invoker = invoker;
        this.commands = commands;
        this.sdfsf = new CommandsSequentially(this.calculatorState, this.invoker, this.commands)
        this.immeidateCalcutlaot = new ImmeidateCalcutlaot(this.calculatorState, this.invoker, this.sdfsf.calculateExpression.bind(this), this.commands)
    }

    processOperator(command, base, power) {
        if (this.isBasicOperation(command, base, power)) {
            this.sdfsf.calculateSequentially(command);
        } else {
            this.immeidateCalcutlaot.calculateImmediately(command, base, power);
        }
    }

    isBasicOperation(command, base, power) {
        const basicOperations = [
            'sum',
            'multiply',
            'substract',
            'power',
            'root',
            'divide',
        ];
        return basicOperations.includes(command) && !base && !power;
    }
}