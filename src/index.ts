// src/index.ts
/**
 * Main entry point for QuantumTrader
 */

import { QuantumTrader } from './quantumtrader';
import minimist from 'minimist';

interface Args {
    verbose?: boolean;
    input?: string;
    output?: string;
}

const args: Args = minimist(process.argv.slice(2), {
    boolean: ['verbose'],
    alias: {
        v: 'verbose',
        i: 'input',
        o: 'output'
    }
});

const app = new QuantumTrader({
    verbose: args.verbose
});

app.execute()
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
