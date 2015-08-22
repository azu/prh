// Generated by dts-bundle v0.3.0

declare module 'prh' {
    import raw = require("prh/lib/raw");
    export import Config = require("prh/lib/config");
    export function fromYAMLFilePath(path: string): Config;
    export function fromYAML(yamlContent: string): Config;
    export function fromRowConfig(rawConfig: raw.Config): Config;
}

declare module 'prh/lib/raw' {
    export interface Config {
        version: number;
        targets?: Target[];
        rules?: any[];
    }
    export interface Target {
        file: string;
        includes?: any[];
        excludes?: any[];
    }
    export interface TargetPattern {
        pattern: any;
    }
    export interface Rule {
        expected: string;
        pattern?: any;
        options?: Options;
        specs?: RuleSpec[];
    }
    export interface Options {
        wordBoundary?: boolean;
    }
    export interface RuleSpec {
        from: string;
        to: string;
    }
}

declare module 'prh/lib/config' {
    import raw = require("prh/lib/raw");
    import Target = require("prh/lib/target");
    import Rule = require("prh/lib/rule");
    class Config {
        version: number;
        targets: Target[];
        rules: Rule[];
        constructor(src: raw.Config);
        merge(other: Config): void;
        replaceByRule(filePath: string, content?: string): string;
    }
    export = Config;
}

declare module 'prh/lib/target' {
    import raw = require("prh/lib/raw");
    import TargetPattern = require("prh/lib/targetpattern");
    class Target {
        file: RegExp;
        includes: TargetPattern[];
        excludes: TargetPattern[];
        constructor(src: raw.Target);
        reset(): void;
        toJSON(): any;
    }
    export = Target;
}

declare module 'prh/lib/rule' {
    import Options = require("prh/lib/options");
    import RuleSpec = require("prh/lib/rulespec");
    import raw = require("prh/lib/raw");
    class Rule {
        expected: string;
        pattern: RegExp;
        options: Options;
        specs: RuleSpec[];
        constructor(src: raw.Rule);
        _patternToRegExp(pattern: any): RegExp;
        reset(): void;
        check(): void;
        toJSON(): any;
    }
    export = Rule;
}

declare module 'prh/lib/targetpattern' {
    import raw = require("prh/lib/raw");
    class TargetPattern {
        pattern: RegExp;
        constructor(src: raw.TargetPattern);
        reset(): void;
        toJSON(): any;
    }
    export = TargetPattern;
}

declare module 'prh/lib/options' {
    import Rule = require("prh/lib/rule");
    import raw = require("prh/lib/raw");
    class Options {
        wordBoundary: boolean;
        constructor(rule: Rule, src: raw.Options);
    }
    export = Options;
}

declare module 'prh/lib/rulespec' {
    import raw = require("prh/lib/raw");
    class RuleSpec {
        from: string;
        to: string;
        constructor(src: raw.RuleSpec);
    }
    export = RuleSpec;
}
