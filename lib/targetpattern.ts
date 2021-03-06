"use strict";

import * as r from "./utils/regexp";
import * as raw from "./raw";

export default class TargetPattern {
    pattern: RegExp;

    constructor(src: string | raw.TargetPattern) {
        if (!src) {
            throw new Error("src is requried");
        }
        if (typeof src === "string") {
            this.pattern = r.parseRegExpString(src);
            if (!this.pattern) {
                this.pattern = new RegExp(r.excapeSpecialChars(src));
            }
            this.pattern = r.addDefaultFlags(this.pattern);
            return;
        } else {
            if (!src.pattern) {
                throw new Error("pattern is requried");
            }
            this.pattern = r.parseRegExpString(src.pattern);
            if (!this.pattern) {
                this.pattern = r.addDefaultFlags(new RegExp(r.excapeSpecialChars(src.pattern)));
            }
            this.pattern = r.addDefaultFlags(this.pattern);
        }
    }

    reset() {
        this.pattern.lastIndex = 0;
    }

    toJSON() {
        var alt: any = {};
        for (var key in this) {
            if (key.indexOf("_") === 0) {
                continue;
            }
            var value = (<any>this)[key];
            if (value instanceof RegExp) {
                alt[key] = value.toString();
                continue;
            }
            alt[key] = value;
        }
        return alt;
    }
}
