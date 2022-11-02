"use strict";
function require( path ){ return $node[ path ] };
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict";
//hyoo/hyoo.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50% , calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0% , calc( 50% - 30% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 0%, 50%, .05 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 5% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 25% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% + 25% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    let auto = null;
    function $mol_wire_auto(next = auto) {
        return auto = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if (this.cache instanceof Promise)
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if (result instanceof Promise) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || error instanceof Promise) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if (result instanceof Promise && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!(result instanceof Promise)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if (this.cache instanceof Promise) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!(this.cache instanceof Promise))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right['source'] && left.flags === right['flags'];
        if (left instanceof Error)
            return left.message === right['message'] && left.stack === right['stack'];
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (left_proto && !Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (left_keys.length !== right_keys.length)
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], Reflect.get(right, key)))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!(existen instanceof $mol_wire_task))
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        complete() {
            if (this.cache instanceof Promise)
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if (next instanceof Promise) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const key = `${host?.[Symbol.toStringTag] ?? host}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const id = `${host?.[Symbol.toStringTag] ?? host}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watch() {
            new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            if (next !== prev) {
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                this.cache = next;
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (this.sub_from < this.data.length) {
                    if (!$mol_compare_deep(prev, next)) {
                        this.emit();
                    }
                }
            }
            this.cursor = $mol_wire_cursor.fresh;
            if (next instanceof Promise)
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
    $mol_wire_atom.watch();
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if (error instanceof Promise)
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, next) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            return task();
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is equired for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise)
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (owner?.host instanceof $mol_view) {
                const suffix = owner.task.name.trim();
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.host.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.host.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            this.dom_final();
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ inline: 'start' });
                const win = this.$.$mol_dom_context;
                if (win.parent === win.self || win.document.hasFocus()) {
                    this.focused(true);
                }
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n    justify-content: center;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
//mol/type/result/result.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            overflow: 'auto',
        });
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            ':hover': {
                '::-webkit-scrollbar': {
                    width: rem(.5),
                    height: rem(.5),
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\t/* z-index: 0; */\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n[mol_book2] > * + *:not([mol_book2_placeholder]):before {\n\tdisplay: block;\n\tcontent: '=';\n\topacity: .5;\n\tposition: absolute;\n\ttop: -.5rem;\n\tleft: -.325rem;\n}\n\n[mol_book2] > *:where( :nth-child(odd):not([mol_book2_placeholder]) ) {\n\tbackground-color: var(--mol_theme_card);\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\t/* background: var(--mol_theme_back); */\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => page?.title()).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    n.bring();
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
let $hyoo_sync_revision = "1560a1c";
//hyoo/sync/-meta.tree/revision.meta.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
//mol/type/partial/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                ;
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));
//mol/jsx/jsx.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    function $mol_int62_string_ensure(str) {
        if (typeof str !== 'string')
            return null;
        return $mol_int62_from_string(str) && str;
    }
    $.$mol_int62_string_ensure = $mol_int62_string_ensure;
    $.$mol_int62_max = (2 ** 30) - 1;
    $.$mol_int62_min = -(2 ** 30);
    $.$mol_int62_range = $.$mol_int62_max - $.$mol_int62_min + 1;
    function $mol_int62_to_string({ lo, hi }) {
        lo = (lo + $.$mol_int62_range) % $.$mol_int62_range;
        hi = (hi + $.$mol_int62_range) % $.$mol_int62_range;
        return lo.toString(36) + '_' + hi.toString(36);
    }
    $.$mol_int62_to_string = $mol_int62_to_string;
    function $mol_int62_from_string(str) {
        const [str_lo, str_hi] = str.split('_');
        const int_lo = parseInt(str_lo, 36);
        const int_hi = parseInt(str_hi, 36);
        if (int_lo.toString(36) !== str_lo || int_hi.toString(36) !== str_hi) {
            return null;
        }
        return {
            lo: (int_lo - $.$mol_int62_min) % $.$mol_int62_range + $.$mol_int62_min,
            hi: (int_hi - $.$mol_int62_min) % $.$mol_int62_range + $.$mol_int62_min,
        };
    }
    $.$mol_int62_from_string = $mol_int62_from_string;
    function $mol_int62_compare(left_lo, left_hi, right_lo, right_hi) {
        return (right_hi - left_hi) || (right_lo - left_lo);
    }
    $.$mol_int62_compare = $mol_int62_compare;
    function $mol_int62_inc(lo, hi, max = $.$mol_int62_max) {
        if (lo === max) {
            return { lo: -max, hi: hi + 1 };
        }
        else {
            return { lo: lo + 1, hi };
        }
    }
    $.$mol_int62_inc = $mol_int62_inc;
    function $mol_int62_random() {
        return {
            lo: Math.floor(Math.random() * $.$mol_int62_range + $.$mol_int62_min),
            hi: Math.floor(Math.random() * $.$mol_int62_range + $.$mol_int62_min),
        };
    }
    $.$mol_int62_random = $mol_int62_random;
    function $mol_int62_hash_string(str) {
        return $mol_int62_to_string($mol_int62_hash_buffer($mol_charset_encode(str)));
    }
    $.$mol_int62_hash_string = $mol_int62_hash_string;
    function $mol_int62_hash_buffer(buf, seed = { lo: 0, hi: 0 }) {
        let h1 = 0xdeadbeef ^ seed.lo;
        let h2 = 0x41c6ce57 ^ seed.hi;
        for (const byte of buf) {
            h1 = Math.imul(h1 ^ byte, 2654435761);
            h2 = Math.imul(h2 ^ byte, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return { lo: h1 << 1 >> 1, hi: h2 << 1 >> 1 };
    }
    $.$mol_int62_hash_buffer = $mol_int62_hash_buffer;
})($ || ($ = {}));
//mol/int62/int62.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_crypto_native = crypto;
})($ || ($ = {}));
//mol/crypto/native/native.web.ts
;
"use strict";
var $;
(function ($) {
    const algorithm = {
        name: 'ECDSA',
        hash: 'SHA-256',
        namedCurve: "P-256",
    };
    async function $mol_crypto_auditor_pair() {
        const pair = await $mol_crypto_native.subtle.generateKey(algorithm, true, ['sign', 'verify']);
        return {
            public: new $mol_crypto_auditor_public(pair.publicKey),
            private: new $mol_crypto_auditor_private(pair.privateKey),
        };
    }
    $.$mol_crypto_auditor_pair = $mol_crypto_auditor_pair;
    class $mol_crypto_auditor_public extends Object {
        native;
        static size = 86;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['verify'],
                kty: "EC",
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
            }, algorithm, true, ['verify']));
        }
        async serial() {
            const { x, y } = await $mol_crypto_native.subtle.exportKey('jwk', this.native);
            return x + y;
        }
        async verify(data, sign) {
            return await $mol_crypto_native.subtle.verify(algorithm, this.native, sign, data);
        }
    }
    $.$mol_crypto_auditor_public = $mol_crypto_auditor_public;
    class $mol_crypto_auditor_private extends Object {
        native;
        static size = 129;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['sign'],
                kty: "EC",
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
                d: serial.slice(86, 129),
            }, algorithm, true, ['sign']));
        }
        async serial() {
            const { x, y, d } = await $mol_crypto_native.subtle.exportKey('jwk', this.native);
            return x + y + d;
        }
        async sign(data) {
            return await $mol_crypto_native.subtle.sign(algorithm, this.native, data);
        }
        async public() {
            return await $mol_crypto_auditor_public.from($mol_crypto_auditor_private_to_public(await this.serial()));
        }
    }
    $.$mol_crypto_auditor_private = $mol_crypto_auditor_private;
    $.$mol_crypto_auditor_sign_size = 64;
    function $mol_crypto_auditor_private_to_public(serial) {
        return serial.slice(0, 86);
    }
    $.$mol_crypto_auditor_private_to_public = $mol_crypto_auditor_private_to_public;
})($ || ($ = {}));
//mol/crypto/auditor/auditor.ts
;
"use strict";
var $;
(function ($) {
    let $hyoo_crowd_peer_level;
    (function ($hyoo_crowd_peer_level) {
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["get"] = 0] = "get";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["add"] = 1] = "add";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["mod"] = 2] = "mod";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["law"] = 3] = "law";
    })($hyoo_crowd_peer_level = $.$hyoo_crowd_peer_level || ($.$hyoo_crowd_peer_level = {}));
    class $hyoo_crowd_peer extends Object {
        key_public;
        key_public_serial;
        key_private;
        key_private_serial;
        id;
        constructor(key_public, key_public_serial, key_private, key_private_serial) {
            super();
            this.key_public = key_public;
            this.key_public_serial = key_public_serial;
            this.key_private = key_private;
            this.key_private_serial = key_private_serial;
            this.id = $mol_int62_hash_string(this.key_public_serial);
        }
        static async generate() {
            const pair = await $$.$mol_crypto_auditor_pair();
            const serial = await pair.private.serial();
            return new this(pair.public, $mol_crypto_auditor_private_to_public(serial), pair.private, serial);
        }
        static async restore(serial) {
            return new this(await $$.$mol_crypto_auditor_public.from(serial), $mol_crypto_auditor_private_to_public(serial), await $$.$mol_crypto_auditor_private.from(serial), serial);
        }
    }
    $.$hyoo_crowd_peer = $hyoo_crowd_peer;
})($ || ($ = {}));
//hyoo/crowd/peer/peer.ts
;
"use strict";
var $;
(function ($) {
    async function $hyoo_sync_peer(path) {
        let serial = $mol_state_local.value('$hyoo_sync_peer');
        if (typeof serial !== 'string') {
            serial = $mol_state_local.value(path);
            if (typeof serial === 'string') {
                $mol_state_local.value('$hyoo_sync_peer', serial);
                $mol_state_local.value(path, null);
            }
        }
        const frame = $mol_jsx("iframe", { src: "https://sync.hyoo.ru/auth/" });
        frame.style.display = 'none';
        await new Promise((done, fail) => {
            frame.onload = done;
            frame.onerror = fail;
            frame.onabort = fail;
            document.body.appendChild(frame);
        });
        const serial_ext = await new Promise((done, fail) => {
            window.addEventListener('message', event => {
                if (!Array.isArray(event.data))
                    return;
                if (event.data[0] !== '$hyoo_sync_peer')
                    return;
                done(event.data[1]);
            });
            frame.contentWindow.postMessage(['$hyoo_sync_peer', serial], '*');
            setTimeout(() => done(serial), 5000);
        });
        document.body.removeChild(frame);
        if (typeof serial_ext === 'string') {
            if (!serial)
                $mol_state_local.value('$hyoo_sync_peer', serial_ext);
            return await $hyoo_crowd_peer.restore(serial_ext);
        }
        const peer = await $hyoo_crowd_peer.generate();
        $mol_state_local.value('$hyoo_sync_peer', peer.key_private_serial);
        return peer;
    }
    $.$hyoo_sync_peer = $hyoo_sync_peer;
})($ || ($ = {}));
//hyoo/sync/peer/peer.web.tsx
;
"use strict";
//mol/data/value/value.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//mol/data/setup/setup.ts
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//mol/diff/path/path.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        errors;
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.stack), this.stack];
                const diff = $mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mol/error/mix/mix.ts
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//mol/data/error/error.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_enum(name, dict) {
        const index = {};
        for (let key in dict) {
            if (Number.isNaN(Number(key))) {
                index[dict[key]] = key;
            }
        }
        return $mol_data_setup((value) => {
            if (typeof index[value] !== 'string') {
                return $mol_fail(new $mol_data_error(`${value} is not value of ${name} enum`));
            }
            return value;
        }, { name, dict });
    }
    $.$mol_data_enum = $mol_data_enum;
})($ || ($ = {}));
//mol/data/enum/enum.ts
;
"use strict";
//mol/charset/encoding/encoding.ts
;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
var $;
(function ($) {
    const level = $mol_data_enum('level', $hyoo_crowd_peer_level);
    let $hyoo_crowd_unit_kind;
    (function ($hyoo_crowd_unit_kind) {
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["grab"] = 0] = "grab";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["join"] = 1] = "join";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["give"] = 2] = "give";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["data"] = 3] = "data";
    })($hyoo_crowd_unit_kind = $.$hyoo_crowd_unit_kind || ($.$hyoo_crowd_unit_kind = {}));
    let $hyoo_crowd_unit_group;
    (function ($hyoo_crowd_unit_group) {
        $hyoo_crowd_unit_group[$hyoo_crowd_unit_group["auth"] = 0] = "auth";
        $hyoo_crowd_unit_group[$hyoo_crowd_unit_group["data"] = 1] = "data";
    })($hyoo_crowd_unit_group = $.$hyoo_crowd_unit_group || ($.$hyoo_crowd_unit_group = {}));
    class $hyoo_crowd_unit extends Object {
        land;
        auth;
        head;
        self;
        next;
        prev;
        time;
        data;
        bin;
        constructor(land, auth, head, self, next, prev, time, data, bin) {
            super();
            this.land = land;
            this.auth = auth;
            this.head = head;
            this.self = self;
            this.next = next;
            this.prev = prev;
            this.time = time;
            this.data = data;
            this.bin = bin;
        }
        kind() {
            if (this.head === this.self && this.auth === this.self) {
                if (this.head === this.land) {
                    return $hyoo_crowd_unit_kind.grab;
                }
                else {
                    return $hyoo_crowd_unit_kind.join;
                }
            }
            if (this.head === this.land) {
                return $hyoo_crowd_unit_kind.give;
            }
            return $hyoo_crowd_unit_kind.data;
        }
        group() {
            return this.kind() === $hyoo_crowd_unit_kind.data
                ? $hyoo_crowd_unit_group.data
                : $hyoo_crowd_unit_group.auth;
        }
        level() {
            switch (this.kind()) {
                case $hyoo_crowd_unit_kind.grab: return $hyoo_crowd_peer_level.law;
                case $hyoo_crowd_unit_kind.give: return level(this.data);
                default: $mol_fail(new Error(`Wrong unit kind for getting level: ${this.kind()}`));
            }
        }
        [Symbol.toPrimitive]() {
            return JSON.stringify(this);
        }
        [$mol_dev_format_head]() {
            switch (this.kind()) {
                case $hyoo_crowd_unit_kind.grab:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), ' 👑');
                case $hyoo_crowd_unit_kind.join:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 🔑 ', this.self));
                case $hyoo_crowd_unit_kind.give:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 🏅 ', this.self, ' '), $mol_dev_format_native($hyoo_crowd_peer_level[this.data] ?? this.data));
                case $hyoo_crowd_unit_kind.data:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 📦 ', this.head, ' '), $mol_dev_format_native(this.data));
            }
        }
    }
    $.$hyoo_crowd_unit = $hyoo_crowd_unit;
    const offset = {
        land_lo: 0,
        land_hi: 4,
        auth_lo: 8,
        auth_hi: 12,
        head_lo: 16,
        head_hi: 20,
        self_lo: 24,
        self_hi: 28,
        next_lo: 32,
        next_hi: 36,
        prev_lo: 40,
        prev_hi: 44,
        time: 48,
        size: 54,
        data: 56,
    };
    class $hyoo_crowd_unit_bin extends DataView {
        static from_buffer(buffer) {
            const size = Math.ceil(Math.abs(buffer[offset.size / 2]) / 8) * 8 + offset.data + $mol_crypto_auditor_sign_size;
            return new this(buffer.slice(0, size / 2).buffer);
        }
        static from_unit(unit) {
            if (unit.bin)
                return unit.bin;
            const type = unit.data === null
                ? 0
                : unit.data instanceof Uint8Array
                    ? -1
                    : 1;
            const buff = type === 0 ? null
                : type > 0 ? $mol_charset_encode(JSON.stringify(unit.data))
                    : unit.data;
            const size = buff?.byteLength ?? 0;
            if (type > 0 && size > 2 ** 15 - 1)
                throw new Error(`Too large json data: ${size} > ${2 ** 15 - 1}`);
            if (type < 0 && size > 2 ** 15)
                throw new Error(`Too large binary data: ${size} > ${2 ** 15}`);
            const total = offset.data + Math.ceil(size / 8) * 8 + $mol_crypto_auditor_sign_size;
            const mem = new Uint8Array(total);
            const bin = new $hyoo_crowd_unit_bin(mem.buffer);
            const land = $mol_int62_from_string(unit.land);
            bin.setInt32(offset.land_lo, land.lo, true);
            bin.setInt32(offset.land_hi, land.hi, true);
            const auth = $mol_int62_from_string(unit.auth);
            bin.setInt32(offset.auth_lo, auth.lo, true);
            bin.setInt32(offset.auth_hi, auth.hi, true);
            const head = $mol_int62_from_string(unit.head);
            bin.setInt32(offset.head_lo, head.lo, true);
            bin.setInt32(offset.head_hi, head.hi, true);
            const self = $mol_int62_from_string(unit.self);
            bin.setInt32(offset.self_lo, self.lo, true);
            bin.setInt32(offset.self_hi, self.hi, true);
            const next = $mol_int62_from_string(unit.next);
            bin.setInt32(offset.next_lo, next.lo, true);
            bin.setInt32(offset.next_hi, next.hi, true);
            const prev = $mol_int62_from_string(unit.prev);
            bin.setInt32(offset.prev_lo, prev.lo, true);
            bin.setInt32(offset.prev_hi, prev.hi, true);
            bin.setInt32(offset.time, unit.time, true);
            bin.setInt16(offset.size, type * size, true);
            if (buff)
                mem.set(buff, offset.data);
            return bin;
        }
        sign(next) {
            const sign_offset = this.byteOffset + this.byteLength - $mol_crypto_auditor_sign_size;
            const buff = new Uint8Array(this.buffer, sign_offset, $mol_crypto_auditor_sign_size);
            if (!next)
                return buff;
            buff.set(next);
            return buff;
        }
        size() {
            return Math.ceil(Math.abs(this.getInt16(offset.size, true)) / 8) * 8 + offset.data + $mol_crypto_auditor_sign_size;
        }
        sens() {
            return new Uint8Array(this.buffer, this.byteOffset, this.size() - $mol_crypto_auditor_sign_size);
        }
        unit() {
            const land = $mol_int62_to_string({
                lo: this.getInt32(offset.land_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.land_hi, true) << 1 >> 1,
            });
            const auth = $mol_int62_to_string({
                lo: this.getInt32(offset.auth_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.auth_hi, true) << 1 >> 1,
            });
            const head = $mol_int62_to_string({
                lo: this.getInt32(offset.head_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.head_hi, true) << 1 >> 1,
            });
            const self = $mol_int62_to_string({
                lo: this.getInt32(offset.self_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.self_hi, true) << 1 >> 1,
            });
            const next = $mol_int62_to_string({
                lo: this.getInt32(offset.next_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.next_hi, true) << 1 >> 1,
            });
            const prev = $mol_int62_to_string({
                lo: this.getInt32(offset.prev_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.prev_hi, true) << 1 >> 1,
            });
            const time = this.getInt32(offset.time, true) << 1 >> 1;
            const type_size = this.getInt16(offset.size, true);
            let data = null;
            if (type_size) {
                try {
                    var buff = new Uint8Array(this.buffer, this.byteOffset + offset.data, Math.abs(type_size));
                }
                catch (error) {
                    error['message'] += `\nhead=${head};self=${self}`;
                    $mol_fail_hidden(error);
                }
                if (type_size < 0)
                    data = buff;
                else
                    data = JSON.parse($mol_charset_decode(buff));
            }
            return new $hyoo_crowd_unit(land, auth, head, self, next, prev, time, data, this);
        }
    }
    $.$hyoo_crowd_unit_bin = $hyoo_crowd_unit_bin;
    function $hyoo_crowd_unit_compare(left, right) {
        return (left.group() - right.group())
            || (left.time - right.time)
            || ((left.auth > right.auth) ? 1 : (left.auth < right.auth) ? -1 : 0)
            || ((left.self > right.self) ? 1 : (left.self < right.self) ? -1 : 0)
            || ((left.head > right.head) ? 1 : (left.head < right.head) ? -1 : 0)
            || ((left.prev > right.prev) ? 1 : (left.prev < right.prev) ? -1 : 0)
            || ((left.next > right.next) ? 1 : (left.next < right.next) ? -1 : 0)
            || ((left.land > right.land) ? 1 : (left.land < right.land) ? -1 : 0);
    }
    $.$hyoo_crowd_unit_compare = $hyoo_crowd_unit_compare;
})($ || ($ = {}));
//hyoo/crowd/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    function $hyoo_crowd_time_now() {
        return Math.floor(Date.now() / 100) - 1767e7;
    }
    $.$hyoo_crowd_time_now = $hyoo_crowd_time_now;
    function $hyoo_crowd_time_stamp(time) {
        return 1767e9 + time * 100;
    }
    $.$hyoo_crowd_time_stamp = $hyoo_crowd_time_stamp;
})($ || ($ = {}));
//hyoo/crowd/time/time.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_clock extends Map {
        static begin = -1 * 2 ** 30;
        last_time = $hyoo_crowd_clock.begin;
        constructor(entries) {
            super(entries);
            if (!entries)
                return;
            for (const [peer, time] of entries) {
                this.see_time(time);
            }
        }
        sync(right) {
            for (const [peer, time] of right) {
                this.see_peer(peer, time);
            }
        }
        see_time(time) {
            if (time < this.last_time)
                return;
            this.last_time = time;
        }
        see_peer(peer, time) {
            if (!this.fresh(peer, time))
                return;
            this.set(peer, time);
            this.see_time(time);
        }
        see_bin(bin, group) {
            for (let cursor = offset.clocks; cursor < bin.byteLength; cursor += 16) {
                this.see_peer($mol_int62_to_string({
                    lo: bin.getInt32(cursor + 0, true) << 1 >> 1,
                    hi: bin.getInt32(cursor + 4, true) << 1 >> 1,
                }), bin.getInt32(cursor + 8 + 4 * group, true));
            }
        }
        fresh(peer, time) {
            return time > this.time(peer);
        }
        ahead(clock) {
            for (const [peer, time] of this) {
                if (clock.fresh(peer, time))
                    return true;
            }
            return false;
        }
        time(peer) {
            return this.get(peer) ?? $hyoo_crowd_clock.begin;
        }
        now() {
            return $hyoo_crowd_time_now();
        }
        last_stamp() {
            return $hyoo_crowd_time_stamp(this.last_time);
        }
        tick(peer) {
            let time = this.now();
            if (time <= this.last_time) {
                time = this.last_time + 1;
            }
            this.see_peer(peer, time);
            return time;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade(' ' + new Date(this.last_stamp()).toISOString().replace('T', ' ')));
        }
    }
    $.$hyoo_crowd_clock = $hyoo_crowd_clock;
    const offset = {
        land_lo: 0,
        land_hi: 4,
        clocks: 8,
    };
    class $hyoo_crowd_clock_bin extends DataView {
        static from(land_id, clocks) {
            const size = offset.clocks + clocks[0].size * 16;
            const mem = new Uint8Array(size);
            const bin = new $hyoo_crowd_clock_bin(mem.buffer);
            const land = $mol_int62_from_string(land_id);
            bin.setInt32(offset.land_lo, land.lo ^ (1 << 31), true);
            bin.setInt32(offset.land_hi, land.hi, true);
            let cursor = offset.clocks;
            for (const [peer_id, time] of clocks[0]) {
                const peer = $mol_int62_from_string(peer_id);
                bin.setInt32(cursor + 0, peer.lo, true);
                bin.setInt32(cursor + 4, peer.hi, true);
                bin.setInt32(cursor + 8, time, true);
                bin.setInt32(cursor + 12, clocks[1].get(peer_id) ?? $hyoo_crowd_clock.begin, true);
                cursor += 16;
            }
            return bin;
        }
        land() {
            return $mol_int62_to_string({
                lo: this.getInt32(offset.land_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.land_hi, true) << 1 >> 1,
            });
        }
    }
    $.$hyoo_crowd_clock_bin = $hyoo_crowd_clock_bin;
})($ || ($ = {}));
//hyoo/crowd/clock/clock.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_node extends Object {
        land;
        head;
        constructor(land, head) {
            super();
            this.land = land;
            this.head = head;
        }
        static for(land, head) {
            return new this(land, head);
        }
        world() {
            return this.land.world();
        }
        as(Node) {
            return new Node(this.land, this.head);
        }
        units() {
            return this.land.unit_alives(this.head);
        }
        nodes(Node) {
            return this.units().map(unit => new Node(this.land, unit.self));
        }
        [Symbol.toPrimitive]() {
            return `${this.constructor.name}("${this.land.id()}","${this.head}")`;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade('/'), $mol_dev_format_auto(this.units().map(unit => unit.data)), $mol_dev_format_shade('/'), $mol_dev_format_auto(this.nodes($hyoo_crowd_node)));
        }
    }
    $.$hyoo_crowd_node = $hyoo_crowd_node;
})($ || ($ = {}));
//hyoo/crowd/node/node.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_reg extends $hyoo_crowd_node {
        value(next) {
            const unit = this.units()[0];
            if (next === undefined)
                return unit?.data ?? null;
            if ($mol_compare_deep(unit?.data, next))
                return next;
            this.land.put(this.head, unit?.self ?? this.land.id_new(), '0_0', next);
            return next;
        }
        str(next) {
            return String(this.value(next) ?? '');
        }
        numb(next) {
            return Number(this.value(next));
        }
        bool(next) {
            return Boolean(this.value(next));
        }
        yoke(law = [''], mod = [], add = []) {
            const world = this.world();
            let land_id = $mol_int62_string_ensure(this.value());
            if (land_id)
                return world.land_sync(land_id);
            if (this.land.level(this.land.peer().id) < $hyoo_crowd_peer_level.add)
                return null;
            const land = $mol_wire_sync(world).grab(law, mod, add);
            this.value(land.id());
            world.land_init(land);
            return land;
        }
    }
    $.$hyoo_crowd_reg = $hyoo_crowd_reg;
})($ || ($ = {}));
//hyoo/crowd/reg/reg.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub(key, Node) {
            return new Node(this.land, $mol_int62_hash_string(key + '\n' + this.head));
        }
        yoke(key, Node, law = [''], mod = [], add = []) {
            const land = this.sub(key, $hyoo_crowd_reg).yoke(law, mod, add);
            return land?.chief.sub(key, Node) ?? null;
        }
    }
    $.$hyoo_crowd_struct = $hyoo_crowd_struct;
})($ || ($ = {}));
//hyoo/crowd/struct/struct.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_land extends $mol_object {
        id() {
            return $mol_int62_to_string($mol_int62_random());
        }
        toJSON() {
            return this.id();
        }
        peer() {
            return this.world()?.peer;
        }
        peer_id() {
            return this.peer()?.id ?? '0_0';
        }
        world() {
            return null;
        }
        get clock_auth() {
            this.pub.promote();
            return this._clocks[$hyoo_crowd_unit_group.auth];
        }
        get clock_data() {
            this.pub.promote();
            return this._clocks[$hyoo_crowd_unit_group.data];
        }
        get clocks() {
            this.pub.promote();
            return this._clocks;
        }
        pub = new $mol_wire_pub;
        _clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock];
        _unit_all = new Map();
        unit(head, self) {
            return this._unit_all.get(`${head}/${self}`);
        }
        _unit_lists = new Map();
        _unit_alives = new Map();
        size() {
            return this._unit_all.size;
        }
        unit_list(head) {
            let kids = this._unit_lists.get(head);
            if (!kids)
                this._unit_lists.set(head, kids = Object.assign([], { dirty: false }));
            return kids;
        }
        unit_alives(head) {
            this.pub.promote();
            let kids = this._unit_alives.get(head);
            if (!kids) {
                const all = this.unit_list(head);
                if (all.dirty)
                    this.resort(head);
                kids = all.filter(kid => kid.data !== null);
                this._unit_alives.set(head, kids);
            }
            return kids;
        }
        node(head, Node) {
            return new Node(this, head);
        }
        chief = this.node('0_0', $hyoo_crowd_struct);
        id_new() {
            for (let i = 0; i < 1000; ++i) {
                const id = $mol_int62_to_string($mol_int62_random());
                if (id === '0_0')
                    continue;
                if (id === this.id())
                    continue;
                if (this._unit_lists.has(id))
                    continue;
                return id;
            }
            throw new Error(`Can't generate ID after 1000 times`);
        }
        fork(auth) {
            const fork = $hyoo_crowd_land.make({
                id: $mol_const(this.id()),
                peer: $mol_const(auth),
            });
            return fork.apply(this.delta());
        }
        delta(clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            this.pub.promote();
            const delta = [];
            for (const unit of this._unit_all.values()) {
                const time = clocks[unit.group()].time(unit.auth);
                if (unit.time <= time)
                    continue;
                delta.push(unit);
            }
            delta.sort($hyoo_crowd_unit_compare);
            return delta;
        }
        resort(head) {
            const kids = this._unit_lists.get(head);
            const queue = kids.splice(0).sort((left, right) => -$hyoo_crowd_unit_compare(left, right));
            const locate = (self) => {
                for (let i = kids.length - 1; i >= 0; --i) {
                    if (kids[i].self === self)
                        return i;
                }
                return -1;
            };
            for (let cursor = queue.length - 1; cursor >= 0; --cursor) {
                const kid = queue[cursor];
                let index = 0;
                if (kid.prev !== '0_0') {
                    index = locate(kid.prev) + 1;
                    if (!index) {
                        index = kids.length;
                        if (kid.next !== '0_0') {
                            index = locate(kid.next);
                            if (index === -1)
                                continue;
                        }
                    }
                }
                kids.splice(index, 0, kid);
                queue.splice(cursor, 1);
                cursor = queue.length;
            }
            this._unit_lists.set(head, kids);
            kids.dirty = false;
            return kids;
        }
        apply(delta) {
            for (const next of delta) {
                this._clocks[next.group()].see_peer(next.auth, next.time);
                const kids = this.unit_list(next.head);
                const next_id = `${next.head}/${next.self}`;
                let prev = this._unit_all.get(next_id);
                if (prev) {
                    if ($hyoo_crowd_unit_compare(prev, next) > 0)
                        continue;
                    kids.splice(kids.indexOf(prev), 1, next);
                }
                else {
                    kids.push(next);
                }
                this._unit_all.set(next_id, next);
                kids.dirty = true;
                this._unit_alives.set(next.head, undefined);
            }
            this.pub.emit();
            return this;
        }
        _joined = false;
        join() {
            if (this._joined)
                return;
            const auth = this.peer();
            if (!auth)
                return;
            if (!auth.key_public_serial)
                return;
            const auth_id = `${auth.id}/${auth.id}`;
            const auth_unit = this._unit_all.get(auth_id);
            if (auth_unit?.data)
                return this._joined = true;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(auth.id);
            const join_unit = new $hyoo_crowd_unit(this.id(), auth.id, auth.id, auth.id, '0_0', '0_0', time, auth.key_public_serial, null);
            this._unit_all.set(auth_id, join_unit);
            this._joined = true;
        }
        leave() {
            const auth = this.peer();
            if (!auth)
                return;
            if (!auth.key_public_serial)
                return;
            const auth_id = `${auth.id}/${auth.id}`;
            const auth_unit = this._unit_all.get(auth_id);
            if (!auth_unit || !auth_unit.data)
                return this._joined = false;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(auth.id);
            const join_unit = new $hyoo_crowd_unit(this.id(), auth.id, auth.id, auth.id, '0_0', '0_0', time, null, null);
            this._unit_all.set(auth_id, join_unit);
            this._joined = false;
        }
        level_base(next) {
            this.level('0_0', next);
        }
        level(peer, next) {
            if (next)
                this.join();
            else
                this.pub.promote();
            const level_id = `${this.id()}/${peer}`;
            const prev = this._unit_all.get(level_id)?.level()
                ?? this._unit_all.get(`${this.id()}/0_0`)?.level()
                ?? (this.id() === peer ? $hyoo_crowd_peer_level.law : $hyoo_crowd_peer_level.get);
            if (next === undefined)
                return prev;
            if (next <= prev)
                return prev;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(peer);
            const auth = this.peer_id();
            const level_unit = new $hyoo_crowd_unit(this.id(), auth, this.id(), peer, '0_0', '0_0', time, next, null);
            this._unit_all.set(level_id, level_unit);
            this.pub.emit();
            return next;
        }
        peers() {
            this.pub.promote();
            const lords = [];
            for (const unit of this._unit_all.values()) {
                switch (unit.kind()) {
                    case $hyoo_crowd_unit_kind.data: continue;
                    case $hyoo_crowd_unit_kind.join: continue;
                    default: lords.push(unit.self);
                }
            }
            return lords;
        }
        residents() {
            this.pub.promote();
            const lords = [];
            for (const unit of this._unit_all.values()) {
                if (unit.data === null)
                    continue;
                switch (unit.kind()) {
                    case $hyoo_crowd_unit_kind.data: continue;
                    case $hyoo_crowd_unit_kind.give: continue;
                    default: lords.push(unit.self);
                }
            }
            return lords;
        }
        authors() {
            this.pub.promote();
            const authors = new Set();
            for (const unit of this._unit_all.values()) {
                if (unit.kind() !== $hyoo_crowd_unit_kind.data)
                    continue;
                if (unit.data === null)
                    continue;
                authors.add(unit.auth);
            }
            return authors;
        }
        first_stamp() {
            const grab_unit = this._unit_all.get(`${this.id()}/${this.id()}`);
            return (grab_unit && $hyoo_crowd_time_stamp(grab_unit.time)) ?? null;
        }
        last_stamp() {
            return this.clock_data.last_stamp();
        }
        selection(peer) {
            return this.world().land_sync(peer).chief.sub('$hyoo_crowd_land..selection', $hyoo_crowd_reg);
        }
        put(head, self, prev, data) {
            this.join();
            const old_id = `${head}/${self}`;
            let unit_old = this._unit_all.get(old_id);
            let unit_prev = prev !== '0_0'
                ? this._unit_all.get(`${head}/${prev}`)
                : null;
            const unit_list = this.unit_list(head);
            if (unit_old)
                unit_list.splice(unit_list.indexOf(unit_old), 1);
            const seat = unit_prev ? unit_list.indexOf(unit_prev) + 1 : 0;
            const next = unit_list[seat]?.self ?? '0_0';
            const auth = this.peer_id();
            const time = this._clocks[$hyoo_crowd_unit_group.data].tick(auth);
            const unit_new = new $hyoo_crowd_unit(this.id(), auth, head, self, next, prev, time, data, null);
            this._unit_all.set(old_id, unit_new);
            unit_list.splice(seat, 0, unit_new);
            this._unit_alives.set(head, undefined);
            this.pub.emit();
            return unit_new;
        }
        wipe(unit) {
            if (unit.data === null)
                return unit;
            const unit_list = this.unit_list(unit.head);
            const seat = unit_list.indexOf(unit);
            const prev = seat > 0 ? unit_list[seat - 1].self : seat < 0 ? unit.prev : '0_0';
            return this.put(unit.head, unit.self, prev, null);
        }
        move(unit, head, prev) {
            this.wipe(unit);
            return this.put(head, unit.self, prev, unit.data);
        }
        insert(unit, head, seat) {
            const list = this.unit_list(head);
            const prev = seat ? list[seat - 1].self : '0_0';
            return this.move(unit, head, prev);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_crowd_land.prototype, "id", null);
    $.$hyoo_crowd_land = $hyoo_crowd_land;
})($ || ($ = {}));
//hyoo/crowd/land/land.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dict_key = $mol_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_key(key));
        }
        has(key) {
            return super.has($mol_key(key));
        }
        set(key, value) {
            return super.set($mol_key(key), value);
        }
        delete(key) {
            return super.delete($mol_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        keys() {
            const iterator = super.keys();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (iteration.done)
                        return iteration;
                    iteration.value = JSON.parse(iteration.value);
                    return iteration;
                }
            };
        }
        entries() {
            const iterator = super.entries();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (iteration.done)
                        return iteration;
                    iteration.value = [JSON.parse(iteration.value[0]), iteration.value[1]];
                    return iteration;
                }
            };
        }
        [Symbol.iterator]() {
            return this.entries();
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//mol/dict/dict.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_world extends $mol_object2 {
        peer;
        constructor(peer) {
            super();
            this.peer = peer;
            if (peer)
                this._knights.set(peer.id, peer);
        }
        lands_pub = new $mol_wire_pub;
        _lands = new Map();
        get lands() {
            this.lands_pub.promote();
            return this._lands;
        }
        land_init(id) { }
        land(id) {
            const exists = this._lands.get(id);
            if (exists)
                return exists;
            const land = $hyoo_crowd_land.make({
                id: $mol_const(id),
                world: $mol_const(this),
            });
            this._lands.set(id, land);
            this.lands_pub.emit();
            return land;
        }
        land_sync(id) {
            const land = this.land(id);
            this.land_init(land);
            return land;
        }
        home() {
            return this.land_sync(this.peer.id);
        }
        _knights = new $mol_dict();
        _signs = new WeakMap();
        async grab(law = [''], mod = [], add = []) {
            if (!law.length && !mod.length && !add.length)
                $mol_fail(new Error('Grabbing dead land'));
            const knight = await $hyoo_crowd_peer.generate();
            this._knights.set(knight.id, knight);
            const land_inner = this.land(knight.id);
            const land_outer = $hyoo_crowd_land.make({
                id: $mol_const(knight.id),
                peer: $mol_const(knight),
            });
            for (const peer of law)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.law);
            for (const peer of mod)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.mod);
            for (const peer of add)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.add);
            land_inner.apply(land_outer.delta());
            return land_inner;
        }
        sign_units(units) {
            return Promise.all(units.map(async (unit) => {
                if (unit.bin)
                    return unit;
                const bin = $hyoo_crowd_unit_bin.from_unit(unit);
                let sign = this._signs.get(unit);
                if (!sign) {
                    const knight = this._knights.get(unit.auth);
                    sign = new Uint8Array(await knight.key_private.sign(bin.sens()));
                }
                bin.sign(sign);
                unit.bin = bin;
                this._signs.set(unit, sign);
                return unit;
            }));
        }
        delta_land(land, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            return this.sign_units(land.delta(clocks));
        }
        async delta_batch(land, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            const units = await this.delta_land(land, clocks);
            let size = 0;
            const bins = [];
            for (const unit of units) {
                const bin = unit.bin;
                bins.push(bin);
                size += bin.byteLength;
            }
            const batch = new Uint8Array(size);
            let offset = 0;
            for (const bin of bins) {
                batch.set(new Uint8Array(bin.buffer, bin.byteOffset, bin.byteLength), offset);
                offset += bin.byteLength;
            }
            return batch;
        }
        async *delta(clocks = new Map()) {
            for (const land of this.lands.values()) {
                yield await this.delta_batch(land, clocks.get(land.id()));
            }
        }
        async apply(delta) {
            const units = [];
            let bin_offset = 0;
            while (bin_offset < delta.byteLength) {
                const buf = new Int16Array(delta.buffer, delta.byteOffset + bin_offset);
                const bin = $hyoo_crowd_unit_bin.from_buffer(buf);
                units.push(bin.unit());
                bin_offset += bin.size();
            }
            const land = this.land(units[0].land);
            const report = await this.audit_delta(land, units);
            land.apply(report.allow);
            return report;
        }
        async audit_delta(land, delta) {
            const all = new Map();
            const desync = 60 * 60 * 10;
            const deadline = land.clock_data.now() + desync;
            const get_unit = (id) => {
                return all.get(id) ?? land._unit_all.get(id);
            };
            const get_level = (head, self) => {
                return get_unit(`${head}/${self}`)?.level()
                    ?? get_unit(`${head}/0_0`)?.level()
                    ?? $hyoo_crowd_peer_level.get;
            };
            const check_unit = async (unit) => {
                const bin = unit.bin;
                if (unit.time > deadline)
                    return 'Far future';
                const auth_unit = get_unit(`${unit.auth}/${unit.auth}`);
                const kind = unit.kind();
                switch (kind) {
                    case $hyoo_crowd_unit_kind.grab:
                    case $hyoo_crowd_unit_kind.join: {
                        const key_str = auth_unit?.data ?? unit.data;
                        if (typeof key_str !== 'string')
                            return 'No join key';
                        const self = $mol_int62_hash_string(key_str);
                        if (unit.self !== self)
                            return 'Alien join key';
                        const key = await $mol_crypto_auditor_public.from(key_str);
                        const sign = bin.sign();
                        const valid = await key.verify(bin.sens(), sign);
                        if (!valid)
                            return 'Wrong join sign';
                        all.set(`${unit.head}/${unit.auth}`, unit);
                        this._signs.set(unit, sign);
                        return '';
                    }
                    case $hyoo_crowd_unit_kind.give: {
                        const lord_level = get_level(land.id(), unit.auth);
                        if (lord_level < $hyoo_crowd_peer_level.law)
                            return `Level too low`;
                        const peer_level = get_level(land.id(), unit.self);
                        if (peer_level > unit.level())
                            return `Cancel unsupported`;
                        break;
                    }
                    case $hyoo_crowd_unit_kind.data: {
                        const level = get_level(land.id(), unit.auth);
                        if (level >= $hyoo_crowd_peer_level.mod)
                            break;
                        if (level === $hyoo_crowd_peer_level.add) {
                            const exists = get_unit(`${unit.head}/${unit.self}`);
                            if (!exists)
                                break;
                            if (exists.auth === unit.auth)
                                break;
                        }
                        return `Level too low`;
                    }
                }
                const key_str = auth_unit?.data;
                if (typeof key_str !== 'string')
                    return 'No auth key';
                const key = await $mol_crypto_auditor_public.from(key_str);
                const sign = bin.sign();
                const valid = await key.verify(bin.sens(), sign);
                if (!valid)
                    return 'Wrong auth sign';
                all.set(`${unit.head}/${unit.self}`, unit);
                this._signs.set(unit, sign);
                return '';
            };
            const allow = [];
            const forbid = new Map();
            const proceed_unit = async (unit) => {
                const error = await check_unit(unit);
                if (error)
                    forbid.set(unit, error);
                else
                    allow.push(unit);
            };
            const tasks = [];
            for (const unit of delta) {
                const task = proceed_unit(unit);
                tasks.push(task);
                if (unit.group() === $hyoo_crowd_unit_group.auth)
                    await task;
            }
            await Promise.all(tasks);
            return { allow, forbid };
        }
    }
    $.$hyoo_crowd_world = $hyoo_crowd_world;
})($ || ($ = {}));
//hyoo/crowd/world/world.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_race(...tasks) {
        const results = tasks.map(task => {
            try {
                return task();
            }
            catch (error) {
                return error;
            }
        });
        const promises = results.filter(res => res instanceof Promise);
        if (promises.length)
            $mol_fail(Promise.race(promises));
        const error = results.find(res => res instanceof Error);
        if (error)
            $mol_fail(error);
        return results;
    }
    $.$mol_wire_race = $mol_wire_race;
})($ || ($ = {}));
//mol/wire/race/race.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//mol/log3/log3.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_web_make(level, color) {
        return function $mol_log3_logger(event) {
            const pending = this.$mol_log3_stack.pop();
            if (pending)
                pending();
            let tpl = '%c';
            const chunks = Object.values(event);
            for (let i = 0; i < chunks.length; ++i) {
                tpl += (typeof chunks[i] === 'string') ? ' ⦙ %s' : ' ⦙ %o';
            }
            const style = `color:${color};font-weight:bolder`;
            this.console[level](tpl, style, ...chunks);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_web_make = $mol_log3_web_make;
    $.$mol_log3_come = $mol_log3_web_make('info', 'royalblue');
    $.$mol_log3_done = $mol_log3_web_make('info', 'forestgreen');
    $.$mol_log3_fail = $mol_log3_web_make('error', 'orangered');
    $.$mol_log3_warn = $mol_log3_web_make('warn', 'goldenrod');
    $.$mol_log3_rise = $mol_log3_web_make('log', 'magenta');
    $.$mol_log3_area = $mol_log3_web_make('group', 'cyan');
})($ || ($ = {}));
//mol/log3/log3.web.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_sync_masters = [
        `wss://sync.hyoo.ru/`,
        'wss://sync-hyoo-ru.herokuapp.com/',
    ];
})($ || ($ = {}));
//hyoo/sync/masters/masters.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sync_yard extends $mol_object2 {
        log_pack(data) {
            return data;
        }
        peer() {
            return $mol_wire_sync($hyoo_sync_peer)(this + '.peer()');
        }
        world() {
            const world = new this.$.$hyoo_crowd_world(this.peer());
            world.land_init = land => this.db_land_init(land);
            return world;
        }
        land(id) {
            return this.world().land_sync(id);
        }
        land_grab(law = [''], mod = [], add = []) {
            return $mol_wire_sync(this.world()).grab(law, mod, add);
        }
        home() {
            return this.land(this.peer().id);
        }
        land_search(query) {
            const stat = new Map();
            for (const prefix of query.match(/\p{Letter}{2,}/gu) ?? []) {
                const caps = prefix.slice(0, 1).toUpperCase() + prefix.slice(1);
                const prefs = new Set([
                    caps, ' ' + caps,
                    prefix, ' ' + prefix,
                ]);
                const lands = new Set();
                const founds = $mol_wire_race(...[...prefs].map(pref => () => $mol_wire_sync(this).db_land_search(pref)));
                for (const found of founds) {
                    for (const land of [...found].reverse())
                        lands.add(land);
                }
                for (const land of lands) {
                    stat.set(land, (stat.get(land) ?? 0) + 1);
                }
            }
            return [...stat].sort((left, right) => right[1] - left[1]).map(pair => pair[0]);
        }
        sync() {
            this.server();
            for (const land of this.world().lands.values()) {
                this.db_land_sync(land);
            }
            const master = this.master();
            if (master)
                $mol_wire_race(...[...this.world().lands.values()].map(land => () => this.line_land_sync({ line: master, land })));
            $mol_wire_race(...this.slaves().map(line => () => this.line_sync(line)));
        }
        land_sync(land) {
            this.db_land_init(land);
            try {
                this.db_land_sync(land);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            try {
                const master = this.master();
                if (master)
                    this.line_land_sync({ line: master, land });
            }
            catch (error) {
                $mol_fail_log(error);
            }
            try {
                $mol_wire_race(...this.slaves()
                    .filter(line => this.line_lands(line).includes(land))
                    .map(line => () => this.line_land_sync({ line, land })));
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        db_land_clocks(land, next) {
            $mol_wire_solid();
            return next;
        }
        db_land_sync(land) {
            this.db_land_init(land);
            const db_clocks = this.db_land_clocks(land.id());
            land.clocks;
            const units = land.delta(db_clocks);
            if (!units.length)
                return;
            $mol_wire_sync(this.world()).sign_units(units);
            $mol_wire_sync(this).db_land_save(land, units);
            for (const unit of units) {
                db_clocks[unit.group()].see_peer(unit.auth, unit.time);
            }
            this.$.$mol_log3_rise({
                place: this,
                land: land.id(),
                message: 'Base Save',
                units: this.log_pack(units),
            });
        }
        db_land_init(land) {
            try {
                var units = $mol_wire_sync(this).db_land_load(land);
            }
            catch (error) {
                if (!(error instanceof Error))
                    $mol_fail_hidden(error);
                this.$.$mol_log3_fail({
                    place: this,
                    land: land.id(),
                    message: error.message,
                });
                units = [];
            }
            units.sort($hyoo_crowd_unit_compare);
            const clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock];
            this.db_land_clocks(land.id(), clocks);
            land.apply(units);
            for (const unit of units) {
                clocks[unit.group()].see_peer(unit.auth, unit.time);
            }
            this.$.$mol_log3_rise({
                place: this,
                land: land.id(),
                message: 'Base Load',
                units: this.log_pack(units),
            });
        }
        async db_land_load(land) {
            return [];
        }
        async db_land_search(from, to = from) {
            return new Set();
        }
        async db_land_save(land, units) { }
        master_cursor(next = 0) {
            return next;
        }
        master_link() {
            return this.$.$hyoo_sync_masters[this.master_cursor()];
        }
        master() {
            return null;
        }
        server() {
            return null;
        }
        slaves(next = []) {
            return next;
        }
        line_lands(line, next = []) {
            return next;
        }
        line_land_clocks({ line, land }, next) {
            $mol_wire_solid();
            this.master();
            return next;
        }
        line_sync(line) {
            $mol_wire_race(...this.line_lands(line).map(land => () => this.line_land_sync({ line, land })));
        }
        line_land_sync({ line, land }) {
            this.line_land_init({ line, land });
            let clocks = this.line_land_clocks({ line, land });
            if (!clocks)
                return;
            const units = land.delta(clocks);
            if (!units.length)
                return;
            $mol_wire_sync(this).line_send_units(line, units);
            this.$.$mol_log3_rise({
                place: this,
                land: land.id(),
                message: 'Sync Sent',
                line: $mol_key(line),
                units: this.log_pack(units),
            });
            for (const unit of units) {
                clocks[unit.group()].see_peer(unit.auth, unit.time);
            }
        }
        line_land_init({ line, land }) {
            this.db_land_init(land);
            this.line_send_clocks(line, land);
            this.$.$mol_log3_come({
                place: this,
                land: land.id(),
                message: 'Sync Open',
                line: $mol_key(line),
                clocks: land._clocks,
            });
        }
        line_land_neck({ line, land }, next = []) {
            return next;
        }
        async line_receive(line, message) {
            if (!message.byteLength)
                return;
            const view = new DataView(message.buffer, message.byteOffset, message.byteLength);
            const int0 = view.getInt32(0, true);
            const int1 = view.getInt32(4, true);
            const land_id = $mol_int62_to_string({
                lo: int0 << 1 >> 1,
                hi: int1 << 1 >> 1,
            });
            const handle = async (prev) => {
                if (prev)
                    await prev;
                const world = this.world();
                const land = await $mol_wire_async(this).land(land_id);
                let clocks = this.line_land_clocks({ line, land });
                if (!clocks)
                    this.line_land_clocks({ line, land }, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]);
                if (int0 << 1 >> 1 ^ int0) {
                    const bin = new $hyoo_crowd_clock_bin(message.buffer, message.byteOffset, message.byteLength);
                    for (let group = 0; group < clocks.length; ++group) {
                        clocks[group].see_bin(bin, group);
                    }
                    const lands = this.line_lands(line);
                    if (lands.includes(land)) {
                        this.$.$mol_log3_warn({
                            place: this,
                            land: land.id(),
                            message: 'Already syncing',
                            hint: 'Bug at $hyoo_sync_yard',
                            line: $mol_key(line),
                            clocks,
                        });
                    }
                    else {
                        this.line_lands(line, [...lands, land]);
                        this.$.$mol_log3_done({
                            place: this,
                            land: land.id(),
                            message: 'Sync Pair',
                            line: $mol_key(line),
                            clocks,
                        });
                    }
                    return;
                }
                const { allow, forbid } = await world.apply(message);
                for (const [unit, error] of forbid) {
                    this.$.$mol_log3_fail({
                        place: this,
                        land: land.id(),
                        message: error,
                        line: $mol_key(line),
                        unit,
                    });
                }
                if (!allow.length)
                    return;
                for (const unit of allow) {
                    clocks[unit.group()].see_peer(unit.auth, unit.time);
                }
                this.$.$mol_log3_rise({
                    place: this,
                    land: land.id(),
                    message: 'Sync Gain',
                    line: $mol_key(line),
                    units: this.log_pack(allow),
                });
            };
            this.line_land_neck({ line, land: land_id }, [
                handle(this.line_land_neck({ line, land: land_id })[0])
            ]);
        }
        line_send_clocks(line, land) { }
        async line_send_units(line, units) { }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "peer", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "world", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "land", null);
    __decorate([
        $mol_action
    ], $hyoo_sync_yard.prototype, "land_search", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_clocks", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_init", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "master_cursor", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "slaves", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_lands", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_clocks", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_init", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_neck", null);
    $.$hyoo_sync_yard = $hyoo_sync_yard;
})($ || ($ = {}));
//hyoo/sync/yard/yard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_db_response(request) {
        return new Promise((done, fail) => {
            request.onerror = () => fail(new Error(request.error.message));
            request.onsuccess = () => done(request.result);
        });
    }
    $.$mol_db_response = $mol_db_response;
})($ || ($ = {}));
//mol/db/response/response.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_store {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get path() {
            return this.native.keyPath;
        }
        get incremental() {
            return this.native.autoIncrement;
        }
        get indexes() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.indexNames],
                has: (_, name) => this.native.indexNames.contains(name),
                get: (_, name) => new $mol_db_index(this.native.index(name))
            });
        }
        index_make(name, path = [], unique = false, multiEntry = false) {
            return this.native.createIndex(name, path, { multiEntry, unique });
        }
        index_drop(name) {
            this.native.deleteIndex(name);
            return this;
        }
        get transaction() {
            return new $mol_db_transaction(this.native.transaction);
        }
        get db() {
            return this.transaction.db;
        }
        clear() {
            return $mol_db_response(this.native.clear());
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        put(doc, key) {
            return $mol_db_response(this.native.put(doc, key));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
        drop(keys) {
            return $mol_db_response(this.native.delete(keys));
        }
    }
    $.$mol_db_store = $mol_db_store;
})($ || ($ = {}));
//mol/db/store/store.ts
;
"use strict";
//mol/db/store/store_schema.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_index {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get paths() {
            return this.native.keyPath;
        }
        get unique() {
            return this.native.unique;
        }
        get multiple() {
            return this.native.multiEntry;
        }
        get store() {
            return new $mol_db_store(this.native.objectStore);
        }
        get transaction() {
            return this.store.transaction;
        }
        get db() {
            return this.store.db;
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
    }
    $.$mol_db_index = $mol_db_index;
})($ || ($ = {}));
//mol/db/index/index.ts
;
"use strict";
//mol/db/index/index_schema.ts
;
"use strict";
var $;
(function ($) {
    async function $mol_db(name, ...migrations) {
        const request = this.$mol_dom_context.indexedDB.open(name, migrations.length ? migrations.length + 1 : undefined);
        request.onupgradeneeded = event => {
            migrations.splice(0, event.oldVersion - 1);
            const transaction = new $mol_db_transaction(request.transaction);
            for (const migrate of migrations)
                migrate(transaction);
        };
        const db = await $mol_db_response(request);
        return new $mol_db_database(db);
    }
    $.$mol_db = $mol_db;
})($ || ($ = {}));
//mol/db/db.ts
;
"use strict";
//mol/db/db_schema.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_database {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get version() {
            return this.native.version;
        }
        get stores() {
            return [...this.native.objectStoreNames];
        }
        read(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readonly')).stores;
        }
        change(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readwrite'));
        }
        kill() {
            this.native.close();
            const request = $mol_dom_context.indexedDB.deleteDatabase(this.name);
            request.onblocked = console.warn;
            return $mol_db_response(request);
        }
        destructor() {
            this.native.close();
        }
    }
    $.$mol_db_database = $mol_db_database;
})($ || ($ = {}));
//mol/db/database/database.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_transaction {
        native;
        constructor(native) {
            this.native = native;
        }
        get stores() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.objectStoreNames],
                has: (_, name) => this.native.objectStoreNames.contains(name),
                get: (_, name) => new $mol_db_store(this.native.objectStore(name)),
            });
        }
        store_make(name) {
            return this.native.db.createObjectStore(name, { autoIncrement: true });
        }
        store_drop(name) {
            this.native.db.deleteObjectStore(name);
            return this;
        }
        abort() {
            if (this.native.error)
                return;
            this.native.abort();
        }
        commit() {
            this.native.commit();
            return new Promise((done, fail) => {
                this.native.onerror = () => fail(new Error(this.native.error.message));
                this.native.oncomplete = () => done();
            });
        }
        get db() {
            return new $mol_db_database(this.native.db);
        }
    }
    $.$mol_db_transaction = $mol_db_transaction;
})($ || ($ = {}));
//mol/db/transaction/transaction.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sync_client extends $hyoo_sync_yard {
        async db() {
            const db1 = await this.$.$mol_db('$hyoo_sync_client_db');
            await db1.kill();
            return await this.$.$mol_db('$hyoo_sync_client_db2', mig => mig.store_make('Unit'), mig => mig.stores.Unit.index_make('Land', ['land']), mig => mig.stores.Unit.index_make('Data', ['data']));
        }
        async db_land_load(land) {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return [];
            }
            const Unit = db.read('Unit').Unit;
            const recs = await Unit.indexes.Land.select([land.id()]);
            if (!recs)
                return [];
            const units = recs.map(rec => new $hyoo_crowd_unit(rec.land, rec.auth, rec.head, rec.self, rec.next, rec.prev, rec.time, rec.data, new $hyoo_crowd_unit_bin(rec.bin.buffer)));
            return units;
        }
        async db_land_search(from, to = from + '\uFFFF') {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return new Set();
            }
            const Unit = db.read('Unit').Unit;
            const query = IDBKeyRange.bound([from], [to]);
            const recs = await Unit.indexes.Data.select(query);
            return new Set(recs.map(rec => rec.land));
        }
        async db_land_save(land, units) {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return;
            }
            const trans = db.change('Unit');
            const Unit = trans.stores.Unit;
            for (const unit of units) {
                Unit.put(unit, [unit.land, unit.head, unit.self]);
            }
            await trans.commit();
        }
        reconnects(reset) {
            return ($mol_wire_probe(() => this.reconnects()) ?? 0) + 1;
        }
        master() {
            this.reconnects();
            const link = this.master_link();
            const line = new $mol_dom_context.WebSocket(link);
            line.binaryType = 'arraybuffer';
            line.onmessage = async (event) => {
                if (event.data instanceof ArrayBuffer) {
                    await this.line_receive(line, new Uint8Array(event.data));
                }
                else {
                    this.$.$mol_log3_fail({
                        place: this,
                        message: 'Wrong data',
                        data: event.data
                    });
                }
            };
            let interval;
            line.onclose = () => {
                clearInterval(interval);
                setTimeout(() => this.reconnects(null), 5000);
            };
            Object.assign(line, {
                destructor: () => line.close()
            });
            return new Promise((done, fail) => {
                line.onopen = () => {
                    this.$.$mol_log3_come({
                        place: this,
                        message: 'Connected to Master',
                        line: $mol_key(line),
                        server: link,
                    });
                    interval = setInterval(() => line.send(new Uint8Array), 30000);
                    done(line);
                };
                line.onerror = () => {
                    this.master_cursor((this.master_cursor() + 1) % this.$.$hyoo_sync_masters.length);
                    fail(new Error(`Master is unabailable`));
                };
            });
        }
        line_send_clocks(line, land) {
            if (line instanceof WebSocket) {
                const message = new Uint8Array($hyoo_crowd_clock_bin.from(land.id(), land._clocks).buffer);
                line.send(message);
            }
            else {
                const message = land._clocks;
                line.postMessage(['hyoo_sync_clocks', land.id(), message]);
            }
        }
        async line_send_units(line, units) {
            if (line instanceof WebSocket) {
                await this.world().sign_units(units);
                const message = new Blob(units.map(unit => unit.bin));
                line.send(message);
            }
            else {
                line.postMessage(['hyoo_sync_units', units[0].land, units]);
            }
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_sync_client.prototype, "db", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_client.prototype, "reconnects", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_client.prototype, "master", null);
    $.$hyoo_sync_client = $hyoo_sync_client;
})($ || ($ = {}));
//hyoo/sync/client/client.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_domain extends $mol_object2 {
        static yard() {
            return new this.$.$hyoo_sync_client;
        }
        yard() {
            return $hyoo_sketch_domain.yard();
        }
        user() {
            return this.person(this.yard().peer().id);
        }
        person(id) {
            return $hyoo_sketch_person.make({ id: $mol_const(id), domain: $mol_const(this) });
        }
        element(id) {
            return $hyoo_sketch_element.make({ id: $mol_const(id), domain: $mol_const(this) });
        }
        element_new(page) {
            const project_land = this.yard().land(this.page(page).project().id());
            const land = this.yard().land_grab([...project_land.peers()], [...project_land.authors()]);
            return this.element(land.id());
        }
        page(id) {
            return $hyoo_sketch_page.make({ id: $mol_const(id), domain: $mol_const(this) });
        }
        page_new(project) {
            const project_land = this.yard().land(project);
            const land = this.yard().land_grab([...project_land.peers()], [...project_land.authors()]);
            return this.page(land.id());
        }
        project(id) {
            return $hyoo_sketch_project.make({ id: $mol_const(id), domain: $mol_const(this) });
        }
        project_new() {
            return this.project(this.yard().land_grab().id());
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_domain.prototype, "user", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "person", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "element", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_domain.prototype, "element_new", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "page", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_domain.prototype, "page_new", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "project", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_domain.prototype, "project_new", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_domain, "yard", null);
    $.$hyoo_sketch_domain = $hyoo_sketch_domain;
})($ || ($ = {}));
//hyoo/sketch/domain/domain.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(val) {
            return this.Body().scroll_top(val);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            margin: 0,
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//mol/theme/auto/-view.tree/auto.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    continue;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    $.$mol_state_arg = $mol_state_arg;
    const $mol_state_arg_change = (event) => {
        $mol_state_arg.href($mol_dom_context.location.href);
    };
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));
//mol/state/arg/arg.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_media extends $mol_object2 {
        static match(query, next) {
            if (next !== undefined)
                return next;
            const res = this.$.$mol_dom_context.matchMedia?.(query) ?? {};
            res.onchange = () => this.match(query, res.matches);
            return res.matches;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_media, "match", null);
    $.$mol_media = $mol_media;
})($ || ($ = {}));
//mol/media/media.ts
;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = this.$mol_media.match('(prefers-color-scheme: light)');
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//mol/lights/lights.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/theme/auto/auto.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_entity extends $mol_object {
        id() {
            return '0_0';
        }
        head() {
            return '0_0';
        }
        domain() {
            throw new Error('Not defined');
        }
        land() {
            return this.domain().yard().land(this.id());
        }
        state() {
            return this.land().node(this.head(), $hyoo_crowd_struct);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_entity.prototype, "land", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_entity.prototype, "state", null);
    $.$hyoo_sketch_entity = $hyoo_sketch_entity;
})($ || ($ = {}));
//hyoo/sketch/entity/entity.ts
;
"use strict";
var $;
(function ($) {
    function $mol_reconcile({ prev, from, to, next, equal, drop, insert, update, }) {
        if (!update)
            update = (next, prev, lead) => insert(next, drop(prev, lead));
        let p = from;
        let n = 0;
        let lead = p ? prev[p - 1] : null;
        if (to > prev.length)
            $mol_fail(new RangeError(`To(${to}) greater then length(${prev.length})`));
        if (from > to)
            $mol_fail(new RangeError(`From(${to}) greater then to(${to})`));
        while (p < to || n < next.length) {
            if (p < to && n < next.length && equal(next[n], prev[p])) {
                lead = prev[p];
                ++p;
                ++n;
            }
            else if (next.length - n > to - p) {
                lead = insert(next[n], lead);
                ++n;
            }
            else if (next.length - n < to - p) {
                lead = drop(prev[p], lead);
                ++p;
            }
            else {
                lead = update(next[n], prev[p], lead);
                ++p;
                ++n;
            }
        }
    }
    $.$mol_reconcile = $mol_reconcile;
})($ || ($ = {}));
//mol/reconcile/reconcile.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_list extends $hyoo_crowd_node {
        list(next) {
            const units = this.units();
            if (next === undefined) {
                return units.map(unit => unit.data);
            }
            else {
                this.insert(next, 0, units.length);
                return next;
            }
        }
        set(next) {
            return new Set(this.list(next && [...next]));
        }
        insert(next, from = this.units().length, to = from) {
            $mol_reconcile({
                prev: this.units(),
                from,
                to,
                next,
                equal: (next, prev) => $mol_compare_deep(prev.data, next),
                drop: (prev, lead) => this.land.wipe(prev),
                insert: (next, lead) => this.land.put(this.head, this.land.id_new(), lead?.self ?? '0_0', next),
                update: (next, prev, lead) => this.land.put(prev.head, prev.self, lead?.self ?? '0_0', next),
            });
        }
        move(from, to) {
            const units = this.units();
            const lead = to ? units[to - 1] : null;
            return this.land.move(units[from], this.head, lead?.self ?? '0_0');
        }
        cut(seat) {
            return this.land.wipe(this.units()[seat]);
        }
        has(val) {
            for (const unit of this.units()) {
                if (unit.data === val)
                    return true;
            }
            return false;
        }
        add(val) {
            if (this.has(val))
                return;
            this.insert([val]);
        }
        drop(val) {
            for (const unit of this.units()) {
                if (unit.data !== val)
                    continue;
                this.land.wipe(unit);
            }
        }
        node_make(val, Node) {
            this.insert([val]);
            const unit = this.units().at(-1);
            return this.land.node(unit.self, Node);
        }
    }
    $.$hyoo_crowd_list = $hyoo_crowd_list;
})($ || ($ = {}));
//hyoo/crowd/list/list.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element extends $hyoo_sketch_entity {
        page(next) {
            const id = this.state().sub('page', $hyoo_crowd_reg).value(next && next.id());
            return this.domain().page(id);
        }
        name(next) {
            return this.state().sub('name', $hyoo_crowd_reg).str(next);
        }
        type(next) {
            return this.state().sub('type', $hyoo_crowd_reg).str(next) || 'base';
        }
        duplicate() {
            const obj = this.domain().element_new(this.page().id());
            obj.type(this.type());
            obj.page(this.page());
            obj.name(this.name());
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "type", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_element.prototype, "duplicate", null);
    $.$hyoo_sketch_element = $hyoo_sketch_element;
})($ || ($ = {}));
//hyoo/sketch/element/element.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_page extends $hyoo_sketch_entity {
        project(next) {
            const id = this.state().sub('project', $hyoo_crowd_reg).value(next && next.id());
            return this.domain().project(id);
        }
        name(next) {
            return this.state().sub('name', $hyoo_crowd_reg).str(next);
        }
        width(next) {
            return this.state().sub('width', $hyoo_crowd_reg).numb(next) || 340;
        }
        height(next) {
            return this.state().sub('height', $hyoo_crowd_reg).numb(next) || 640;
        }
        grid(next) {
            return this.state().sub('grid', $hyoo_crowd_reg).numb(next) || 8;
        }
        elements_node() {
            return this.state().sub('elements', $hyoo_crowd_list);
        }
        elements(next) {
            const ids = this.elements_node().list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().element(id));
        }
        element_add(obj) {
            this.elements_node().add(obj.id());
            obj.page(this);
        }
        element_delete(obj) {
            this.elements_node().drop(obj.id());
        }
        duplicate() {
            const page_copy = this.domain().page_new(this.project().id());
            const editor = new $hyoo_sketch_editor;
            editor.page = $mol_const(this);
            for (const obj of this.elements()) {
                const element = editor.Element(obj);
                element.duplicate_top_shift = $mol_const(false);
                const element_copy = element.duplicate();
                page_copy.element_add(element_copy);
            }
            page_copy.width(this.width());
            page_copy.height(this.height());
            page_copy.grid(this.grid());
            page_copy.name(this.name() + '*');
            return page_copy;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "project", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "width", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "height", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "grid", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "elements_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "elements", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_page.prototype, "element_add", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_page.prototype, "element_delete", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_page.prototype, "duplicate", null);
    $.$hyoo_sketch_page = $hyoo_sketch_page;
})($ || ($ = {}));
//hyoo/sketch/page/page.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_project extends $hyoo_sketch_entity {
        name(next) {
            return this.state().sub('name', $hyoo_crowd_reg).str(next);
        }
        pages_node() {
            return this.state().sub('pages', $hyoo_crowd_list);
        }
        pages(next) {
            const ids = this.pages_node().list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().page(id));
        }
        page_add(obj) {
            this.pages_node().add(obj.id());
            obj.project(this);
        }
        page_delete(obj) {
            this.pages_node().drop(obj.id());
        }
        page_duplicate(obj) {
            const copy = obj.duplicate();
            this.page_add(copy);
        }
        editors() {
            return [...this.land().peers()];
        }
        authors() {
            const set = this.land().authors();
            for (const page of this.pages()) {
                page.land().authors().forEach(id => set.add(id));
                for (const element of page.elements()) {
                    element.land().authors().forEach(id => set.add(id));
                }
            }
            return [...set].map(id => this.domain().person(id));
        }
        access_public() {
            return this.editors().findIndex(id => id === '0_0') !== -1;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project.prototype, "pages_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project.prototype, "pages", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_project.prototype, "page_add", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_project.prototype, "page_delete", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_project.prototype, "page_duplicate", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project.prototype, "editors", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project.prototype, "authors", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project.prototype, "access_public", null);
    $.$hyoo_sketch_project = $hyoo_sketch_project;
})($ || ($ = {}));
//hyoo/sketch/project/project.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//mol/time/base/base.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//mol/time/duration/duration.ts
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
                return String(1000 + millisecond).slice(1);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//mol/time/moment/moment.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_person extends $hyoo_sketch_entity {
        name(next) {
            return this.state().sub('title', $hyoo_crowd_reg).str(next);
        }
        avatar(next) {
            return this.state().sub('avatar', $hyoo_crowd_reg).str(next);
        }
        projects_node() {
            return this.state().sub('projects', $hyoo_crowd_list);
        }
        projects(next) {
            const ids = this.projects_node().list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().project(id));
        }
        project_add(obj) {
            this.projects_node().add(obj.id());
        }
        project_delete(obj) {
            this.projects_node().drop(obj.id());
        }
        current() {
            return this.domain().user().id() === this.id();
        }
        online() {
            const moment = this.online_time();
            if (!moment)
                return false;
            const now = this.$.$mol_state_time.now(5_000);
            console.log({ moment: moment.toString(), now, r: now - moment.valueOf() });
            return (now - moment.valueOf() < 5_000);
        }
        online_time() {
            const stamp = this.land().last_stamp();
            return stamp ? new $mol_time_moment(stamp) : null;
        }
        cursor_position(next) {
            return this.state().sub('cursor_postion', $hyoo_crowd_reg).value(next);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person.prototype, "avatar", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person.prototype, "projects_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person.prototype, "projects", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_person.prototype, "project_add", null);
    __decorate([
        $mol_action
    ], $hyoo_sketch_person.prototype, "project_delete", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person.prototype, "current", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person.prototype, "online", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person.prototype, "online_time", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person.prototype, "cursor_position", null);
    $.$hyoo_sketch_person = $hyoo_sketch_person;
})($ || ($ = {}));
//hyoo/sketch/person/person.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            let native = $mol_dom_context.fetch;
            if (!native)
                native = $node['node-fetch'];
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            const response = $mol_wire_sync(this).request(input, init);
            if (Math.floor(response.status / 100) === 2)
                return new $mol_fetch_response(response);
            throw new Error(response.statusText || `HTTP Error ${response.status}`);
        }
        static stream(input, init) {
            return this.response(input, init).stream();
        }
        static text(input, init) {
            return this.response(input, init).text();
        }
        static json(input, init) {
            return this.response(input, init).json();
        }
        static buffer(input, init) {
            return this.response(input, init).buffer();
        }
        static xml(input, init) {
            return this.response(input, init).xml();
        }
        static xhtml(input, init) {
            return this.response(input, init).xhtml();
        }
        static html(input, init) {
            return this.response(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//mol/file/file.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1rem;\n\theight: 1rem;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25rem 0;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        uri() {
            return "";
        }
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri_toggle(),
                title: this.hint_safe(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri_toggle() {
            return "";
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    const { scale } = $mol_style_func;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
            $mol_icon: {
                transform: 'scale(1.5)',
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
            $mol_icon: {
                transform: 'scale(1.5)',
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_account extends $mol_icon {
        path() {
            return "M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z";
        }
    }
    $.$mol_icon_account = $mol_icon_account;
})($ || ($ = {}));
//mol/icon/account/-view.tree/account.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//mol/icon/plus/-view.tree/plus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: 2;\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:hover [mol_icon] ,\n[mol_button_typed]:focus [mol_icon] {\n\ttransform: scale(1.5);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = (!/Gecko\//.test(navigator.userAgent)
            && this.$mol_dom_context.CSS?.supports('overflow-anchor:auto')) ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_avatar extends $mol_icon {
        view_box() {
            return "0 0 24 24";
        }
        id() {
            return "";
        }
        path() {
            return "M 12 12 l 0 0 M 0 0 l 0 0 M 24 24 l 0 0 M 0 24 l 0 0 M 24 0 l 0 0";
        }
    }
    $.$mol_avatar = $mol_avatar;
})($ || ($ = {}));
//mol/avatar/-view.tree/avatar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_hash_string(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed;
        let h2 = 0x41c6ce57 ^ seed;
        for (let i = 0; i < str.length; i++) {
            const ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (((1 << 16) - 1) & h2) + (h1 >>> 0);
    }
    $.$mol_hash_string = $mol_hash_string;
})($ || ($ = {}));
//mol/hash/string/string.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/avatar/avatar.view.css", "[mol_avatar] {\n\tstroke-linecap: round;\n\tstroke-width: 3.8px;\n\tfill: none;\n\tstroke: currentColor;\n\t/* width: 1.5rem;\n\theight: 1.5rem;\n\tmargin: 0 -.25rem; */\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n}\n");
})($ || ($ = {}));
//mol/avatar/-css/avatar.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_avatar extends $.$mol_avatar {
            path() {
                const id = $mol_hash_string(this.id());
                const p = 2.1;
                const m = 2.7;
                let path = '';
                for (let x = 0; x < 4; ++x) {
                    for (let y = 0; y < 8; ++y) {
                        if ((id >> (x + y * 7)) & 1) {
                            const mxp = Math.ceil(m * x + p);
                            const myp = Math.ceil(m * y + p);
                            path += `M ${mxp} ${myp} l 0 0 ` + `M ${24 - mxp} ${myp} l 0 0 `;
                        }
                    }
                }
                return path;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_avatar.prototype, "path", null);
        $$.$mol_avatar = $mol_avatar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/avatar/avatar.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_sync extends $mol_icon {
        path() {
            return "M12,18C8.69,18 6,15.31 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12C4,16.42 7.58,20 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6C15.31,6 18,8.69 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12C20,7.58 16.42,4 12,4Z";
        }
    }
    $.$mol_icon_sync = $mol_icon_sync;
})($ || ($ = {}));
//mol/icon/sync/-view.tree/sync.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_sync_off extends $mol_icon {
        path() {
            return "M20,4H14V10L16.24,7.76C17.32,8.85 18,10.34 18,12C18,13 17.75,13.94 17.32,14.77L18.78,16.23C19.55,15 20,13.56 20,12C20,9.79 19.09,7.8 17.64,6.36L20,4M2.86,5.41L5.22,7.77C4.45,9 4,10.44 4,12C4,14.21 4.91,16.2 6.36,17.64L4,20H10V14L7.76,16.24C6.68,15.15 6,13.66 6,12C6,11 6.25,10.06 6.68,9.23L14.76,17.31C14.5,17.44 14.26,17.56 14,17.65V19.74C14.79,19.53 15.54,19.2 16.22,18.78L18.58,21.14L19.85,19.87L4.14,4.14L2.86,5.41M10,6.35V4.26C9.2,4.47 8.45,4.8 7.77,5.22L9.23,6.68C9.5,6.56 9.73,6.44 10,6.35Z";
        }
    }
    $.$mol_icon_sync_off = $mol_icon_sync_off;
})($ || ($ = {}));
//mol/icon/sync/off/-view.tree/off.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sync_online extends $mol_link {
        minimal_width() {
            return 40;
        }
        minimal_height() {
            return 40;
        }
        yard() {
            const obj = new this.$.$hyoo_sync_yard();
            return obj;
        }
        uri() {
            return this.master_link();
        }
        sub() {
            return [
                this.Well(),
                this.Fail()
            ];
        }
        attr() {
            return {
                ...super.attr(),
                title: this.message()
            };
        }
        master_link() {
            return "";
        }
        Well() {
            const obj = new this.$.$mol_avatar();
            obj.id = () => this.master_link();
            return obj;
        }
        Fail() {
            const obj = new this.$.$mol_icon_sync_off();
            return obj;
        }
        hint() {
            return "$hyoo_sync";
        }
        message() {
            return this.hint();
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sync_online.prototype, "yard", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_online.prototype, "Well", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_online.prototype, "Fail", null);
    $.$hyoo_sync_online = $hyoo_sync_online;
})($ || ($ = {}));
//hyoo/sync/online/-view.tree/online.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/sync/online/online.view.css", "[hyoo_sync_online] {\n\tpadding: var(--mol_gap_text);\n}\n\n[hyoo_sync_online_well] {\n\tcolor: var(--mol_theme_current);\n}\n\n[hyoo_sync_online_fail] {\n\tcolor: var(--mol_theme_focus);\n}\n\n[hyoo_sync_online][mol_view_error=\"Promise\"] {\n\tanimation: hyoo_sync_online_wait 1s linear infinite;\n}\n\n@keyframes hyoo_sync_online_wait {\n\tfrom {\n\t\topacity: 1;\n\t}\n\tto {\n\t\topacity: .5;\n\t}\n}\n");
})($ || ($ = {}));
//hyoo/sync/online/-css/online.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sync_online extends $.$hyoo_sync_online {
            message() {
                try {
                    this.yard().sync();
                    return this.hint();
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    $mol_fail_log(error);
                    return String(error);
                }
            }
            sub() {
                try {
                    this.yard().sync();
                    return [this.Well()];
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    $mol_fail_log(error);
                    return [this.Fail()];
                }
            }
            hint() {
                return super.hint() + ' ' + $hyoo_sync_revision;
            }
            master_link() {
                return this.yard().master_link().replace(/^ws(s?):/, 'http$1:');
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "message", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "hint", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "master_link", null);
        $$.$hyoo_sync_online = $hyoo_sync_online;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sync/online/online.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//mol/icon/github/circle/-view.tree/circle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_source extends $mol_link {
        hint() {
            return this.$.$mol_locale.text('$mol_link_source_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_source.prototype, "Icon", null);
    $.$mol_link_source = $mol_link_source;
})($ || ($ = {}));
//mol/link/source/-view.tree/source.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//mol/check/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon][mol_check_checked] {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));
//mol/check/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_brightness_6 extends $mol_icon {
        path() {
            return "M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
        }
    }
    $.$mol_icon_brightness_6 = $mol_icon_brightness_6;
})($ || ($ = {}));
//mol/icon/brightness/6/-view.tree/6.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_lights_toggle extends $mol_check_icon {
        Icon() {
            return this.Lights_icon();
        }
        hint() {
            return this.$.$mol_locale.text('$mol_lights_toggle_hint');
        }
        checked(val) {
            return this.lights(val);
        }
        Lights_icon() {
            const obj = new this.$.$mol_icon_brightness_6();
            return obj;
        }
        lights(val) {
            if (val !== undefined)
                return val;
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "Lights_icon", null);
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "lights", null);
    $.$mol_lights_toggle = $mol_lights_toggle;
})($ || ($ = {}));
//mol/lights/toggle/-view.tree/toggle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/lights/toggle/toggle.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_project_list extends $mol_page {
        domain() {
            return this.person().domain();
        }
        person() {
            const obj = new this.$.$hyoo_sketch_person();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_sketch_project_list_title');
        }
        project_name_default() {
            return this.$.$mol_locale.text('$hyoo_sketch_project_list_project_name_default');
        }
        tools() {
            return [
                this.Person_link(),
                this.Project_add()
            ];
        }
        body() {
            return [
                this.List()
            ];
        }
        foot() {
            return [
                this.Online(),
                this.Source(),
                this.Lights()
            ];
        }
        Project(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                project: this.project_id(id),
                page: null,
                selected: null,
                preview: null
            });
            obj.title = () => this.project_name(id);
            return obj;
        }
        person_id() {
            return "0_0";
        }
        Person_icon() {
            const obj = new this.$.$mol_icon_account();
            return obj;
        }
        Person_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                person: this.person_id()
            });
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_project_list_Person_link_hint');
            obj.sub = () => [
                this.Person_icon()
            ];
            return obj;
        }
        project_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Project_add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Project_add() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_project_list_Project_add_hint');
            obj.click = (next) => this.project_add(next);
            obj.sub = () => [
                this.Project_add_icon()
            ];
            return obj;
        }
        projects() {
            return [];
        }
        List() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.projects();
            return obj;
        }
        yard() {
            const obj = new this.$.$hyoo_sync_client();
            return obj;
        }
        Online() {
            const obj = new this.$.$hyoo_sync_online();
            obj.yard = () => this.yard();
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/sketch.hyoo.ru/";
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        project_id(id) {
            return "";
        }
        project_name(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_list.prototype, "person", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_project_list.prototype, "Project", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_list.prototype, "Person_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_list.prototype, "Person_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_list.prototype, "project_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_list.prototype, "Project_add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_list.prototype, "Project_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_list.prototype, "List", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_list.prototype, "yard", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_list.prototype, "Online", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_list.prototype, "Source", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_list.prototype, "Lights", null);
    $.$hyoo_sketch_project_list = $hyoo_sketch_project_list;
})($ || ($ = {}));
//hyoo/sketch/project/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_resize extends $mol_icon {
        path() {
            return "M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z";
        }
    }
    $.$mol_icon_resize = $mol_icon_resize;
})($ || ($ = {}));
//mol/icon/resize/-view.tree/resize.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_resize_bottom_right extends $mol_icon {
        path() {
            return "M22,22H20V20H22V22M22,18H20V16H22V18M18,22H16V20H18V22M18,18H16V16H18V18M14,22H12V20H14V22M22,14H20V12H22V14Z";
        }
    }
    $.$mol_icon_resize_bottom_right = $mol_icon_resize_bottom_right;
})($ || ($ = {}));
//mol/icon/resize/bottom/right/-view.tree/right.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start(),
                inputMode: this.keyboard()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return true;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        keyboard() {
            return "text";
        }
        length_max() {
            return +Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tz-index: 0;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: 1;\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                this.value_changed(next.target.value);
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
            }
            selection_start() {
                return this.selection()[0];
            }
            selection_end() {
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_minus extends $mol_icon {
        path() {
            return "M19,13H5V11H19V13Z";
        }
    }
    $.$mol_icon_minus = $mol_icon_minus;
})($ || ($ = {}));
//mol/icon/minus/-view.tree/minus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_number extends $mol_view {
        precision_view() {
            return this.precision();
        }
        precision_change() {
            return this.precision();
        }
        value(val) {
            if (val !== undefined)
                return val;
            return +NaN;
        }
        sub() {
            return [
                this.String(),
                this.Dec(),
                this.Inc()
            ];
        }
        precision() {
            return 1;
        }
        value_string(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return " ";
        }
        enabled() {
            return true;
        }
        string_enabled() {
            return this.enabled();
        }
        String() {
            const obj = new this.$.$mol_string();
            obj.type = () => "tel";
            obj.value = (val) => this.value_string(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.string_enabled();
            return obj;
        }
        event_dec(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        dec_enabled() {
            return this.enabled();
        }
        dec_icon() {
            const obj = new this.$.$mol_icon_minus();
            return obj;
        }
        Dec() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (val) => this.event_dec(val);
            obj.enabled = () => this.dec_enabled();
            obj.sub = () => [
                this.dec_icon()
            ];
            return obj;
        }
        event_inc(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        inc_enabled() {
            return this.enabled();
        }
        inc_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Inc() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (val) => this.event_inc(val);
            obj.enabled = () => this.inc_enabled();
            obj.sub = () => [
                this.inc_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value_string", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "String", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "dec_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_inc", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "inc_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Inc", null);
    $.$mol_number = $mol_number;
})($ || ($ = {}));
//mol/number/-view.tree/number.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/number/number.css", "[mol_number] {\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tposition: relative;\n\talign-items: stretch;\n\tmax-width: 100%;\n}\n\n[mol_number]:hover {\n\tz-index: 2;\n}\n\n[mol_number_string] {\n\tappearance: textfield;\n\tflex: 1 1 7rem;\n\twidth: 7rem;\n}\n\n[mol_number_string]::-webkit-inner-spin-button {\n\tdisplay: none;\n}\n\n[mol_number_inc][disabled],\n[mol_number_dec][disabled] {\n\tvisibility: hidden;\n}\n");
})($ || ($ = {}));
//mol/number/-css/number.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_number extends $.$mol_number {
            event_dec(next) {
                this.value((Number(this.value()) || 0) - this.precision_change());
            }
            event_inc(next) {
                this.value((Number(this.value()) || 0) + this.precision_change());
            }
            value_string(next) {
                if (next !== void 0) {
                    this.value(next === '' ? null : Number(next));
                }
                const precisionView = this.precision_view();
                const value = next ? Number(next) : this.value();
                if (value === 0)
                    return '0';
                if (!value)
                    return '';
                if (precisionView >= 1) {
                    return (value / precisionView).toFixed();
                }
                else {
                    const fixedNumber = Math.log10(1 / precisionView);
                    return value.toFixed(fixedNumber);
                }
            }
        }
        $$.$mol_number = $mol_number;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/number/number.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//mol/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .375rem;\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmargin: .375rem;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/row/-css/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_option extends $mol_row {
        sub() {
            return [
                this.Name(),
                this.Control()
            ];
        }
        name() {
            return "";
        }
        Name() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.name()
            ];
            return obj;
        }
        Control() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_option.prototype, "Name", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_option.prototype, "Control", null);
    $.$hyoo_sketch_option = $hyoo_sketch_option;
})($ || ($ = {}));
//hyoo/sketch/option/-view.tree/option.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { px, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($.$hyoo_sketch_option, {
            alignItems: 'center',
            margin: 0,
            padding: 0,
            flex: {
                wrap: 'nowrap',
            },
            Name: {
                margin: {
                    right: $mol_gap.space,
                },
                flex: {
                    basis: rem(5),
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/option/option.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_base extends $mol_view {
        domain() {
            return this.element().domain();
        }
        page() {
            return this.element().page();
        }
        state() {
            return this.element().state();
        }
        element() {
            const obj = new this.$.$hyoo_sketch_element();
            return obj;
        }
        order(next) {
            return this.order_default();
        }
        grid(next) {
            if (next !== undefined)
                return next;
            return 8;
        }
        position() {
            return {
                width: this.width(),
                height: this.height(),
                left: this.left(),
                top: this.top(),
                zIndex: this.order_string()
            };
        }
        Preview() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                ...this.position()
            });
            obj.sub = () => [
                this.Element()
            ];
            return obj;
        }
        duplicate(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$hyoo_sketch_element();
            return obj;
        }
        Editor() {
            const obj = new this.$.$hyoo_sketch_element_base_editor();
            obj.duplicate = (next) => this.duplicate_event(next);
            obj.delete = (next) => this.delete(next);
            obj.move_up = (next) => this.move_up(next);
            obj.move_down = (next) => this.move_down(next);
            obj.move_left = (next) => this.move_left(next);
            obj.move_right = (next) => this.move_right(next);
            obj.event = () => ({
                pointerdown: (next) => this.pointer_down(next)
            });
            obj.style = () => ({
                ...this.position()
            });
            obj.selected = () => this.selected();
            obj.editing = () => this.editing();
            obj.sub = () => [
                this.Element_wrap(),
                this.Resize()
            ];
            return obj;
        }
        Options() {
            return {
                position: this.Position_options()
            };
        }
        duplicate_top_shift() {
            return true;
        }
        order_default() {
            return 1;
        }
        width_default() {
            return 320;
        }
        width(next) {
            return this.width_default();
        }
        height_default() {
            return 40;
        }
        height(next) {
            return this.height_default();
        }
        left_default() {
            return 0;
        }
        left(next) {
            return this.left_default();
        }
        top_default() {
            return 0;
        }
        top(next) {
            return this.top_default();
        }
        order_string(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Element() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        duplicate_event(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        delete(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        move_up(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        move_down(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        move_left(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        move_right(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        pointer_down(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        selected(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        editing() {
            return true;
        }
        Element_wrap() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Element()
            ];
            return obj;
        }
        resize_start(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Resize_icon() {
            const obj = new this.$.$mol_icon_resize_bottom_right();
            return obj;
        }
        Resize() {
            const obj = new this.$.$mol_view();
            obj.event = () => ({
                pointerdown: (next) => this.resize_start(next)
            });
            obj.sub = () => [
                this.Resize_icon()
            ];
            return obj;
        }
        Width_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.width(next);
            return obj;
        }
        Option_width() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_base_Option_width_name');
            obj.Control = () => this.Width_control();
            return obj;
        }
        Height_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.height(next);
            return obj;
        }
        Option_height() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_base_Option_height_name');
            obj.Control = () => this.Height_control();
            return obj;
        }
        Left_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.left(next);
            return obj;
        }
        Option_left() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_base_Option_left_name');
            obj.Control = () => this.Left_control();
            return obj;
        }
        Top_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.top(next);
            return obj;
        }
        Option_top() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_base_Option_top_name');
            obj.Control = () => this.Top_control();
            return obj;
        }
        Order_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.order(next);
            return obj;
        }
        Option_order() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_base_Option_order_name');
            obj.Control = () => this.Order_control();
            return obj;
        }
        Position_options() {
            return [
                this.Option_width(),
                this.Option_height(),
                this.Option_left(),
                this.Option_top(),
                this.Option_order()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "grid", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Preview", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "duplicate", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Editor", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "order_string", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "duplicate_event", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "delete", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "move_up", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "move_down", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "move_left", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "move_right", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "pointer_down", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "selected", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Element_wrap", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "resize_start", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Resize_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Resize", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Width_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Option_width", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Height_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Option_height", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Left_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Option_left", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Top_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Option_top", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Order_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base.prototype, "Option_order", null);
    $.$hyoo_sketch_element_base = $hyoo_sketch_element_base;
    class $hyoo_sketch_element_base_editor extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                hyoo_sketch_element_base_selected: this.selected(),
                hyoo_sketch_element_base_editing: this.editing(),
                tabindex: "0"
            };
        }
        plugins() {
            return [
                this.Hotkey()
            ];
        }
        selected(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        editing() {
            return true;
        }
        duplicate(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        delete(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        move_left(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        move_up(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        move_right(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        move_down(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Hotkey() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                D: (next) => this.duplicate(next),
                delete: (next) => this.delete(next),
                left: (next) => this.move_left(next),
                up: (next) => this.move_up(next),
                right: (next) => this.move_right(next),
                down: (next) => this.move_down(next)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base_editor.prototype, "selected", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base_editor.prototype, "duplicate", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base_editor.prototype, "delete", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base_editor.prototype, "move_left", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base_editor.prototype, "move_up", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base_editor.prototype, "move_right", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base_editor.prototype, "move_down", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_base_editor.prototype, "Hotkey", null);
    $.$hyoo_sketch_element_base_editor = $hyoo_sketch_element_base_editor;
})($ || ($ = {}));
//hyoo/sketch/element/base/-view.tree/base.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { px, per } = $mol_style_unit;
        $mol_style_define($.$hyoo_sketch_element_base, {
            Editor: {
                position: 'absolute',
                transition: 'none',
                outline: 'none',
                border: {
                    width: px(1),
                    style: 'dotted',
                    color: $mol_theme.control,
                },
                cursor: 'pointer',
                userSelect: 'none',
                boxSizing: 'content-box',
                '@': {
                    hyoo_sketch_element_base_selected: {
                        'true': {
                            border: {
                                style: 'solid',
                                color: $mol_theme.current,
                            },
                        },
                    },
                }
            },
            Preview: {
                position: 'absolute',
                '>': {
                    $mol_view: {
                        width: per(100),
                        height: per(100),
                    }
                }
            },
            Element_wrap: {
                width: per(100),
                height: per(100),
                pointerEvents: 'none',
                '>': {
                    $mol_view: {
                        width: per(100),
                        height: per(100),
                    }
                }
            },
            Resize: {
                position: 'absolute',
                right: px(0),
                bottom: px(0),
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'nwse-resize',
                width: px(24),
                height: px(24),
            },
            Resize_icon: {
                width: px(24),
                height: px(24),
                margin: 0,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/base/base.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_base extends $.$hyoo_sketch_element_base {
            switch() {
                return this.editing() ? [this.Editor()] : [this.Element()];
            }
            grid_near(value) {
                const grid = this.grid();
                return grid * Math.round(value / grid);
            }
            pointer_down(event) {
                if (this.editing() === false)
                    return;
                event.stopPropagation();
                this.selected(true);
                const left = this.left();
                const top = this.top();
                const node = this.Editor().dom_node();
                const move = (e) => {
                    this.left(this.grid_near(left + (e.pageX - event.pageX)));
                    this.top(this.grid_near(top + (e.pageY - event.pageY)));
                };
                const move_stop = (e) => {
                    node.onpointermove = null;
                    node.onpointerup = null;
                    node.releasePointerCapture(event.pointerId);
                };
                node.onpointermove = move;
                node.onpointerup = move_stop;
                node.setPointerCapture(event.pointerId);
            }
            resize_start(event) {
                event.stopPropagation();
                const width = this.width();
                const height = this.height();
                const node = this.Resize().dom_node();
                const resize = (e) => {
                    this.width(this.grid_near(width + (e.pageX - event.pageX)));
                    this.height(this.grid_near(height + (e.pageY - event.pageY)));
                };
                function resize_stop(e) {
                    node.onpointermove = null;
                    node.onpointerup = null;
                    node.releasePointerCapture(event.pointerId);
                }
                node.onpointermove = resize;
                node.onpointerup = resize_stop;
                node.setPointerCapture(event.pointerId);
            }
            width(next) {
                return this.state().sub('width', $hyoo_crowd_reg).numb(next) || this.width_default();
            }
            height(next) {
                return this.state().sub('height', $hyoo_crowd_reg).numb(next) || this.height_default();
            }
            top(next) {
                return this.state().sub('top', $hyoo_crowd_reg).numb(next) || this.top_default();
            }
            left(next) {
                return this.state().sub('left', $hyoo_crowd_reg).numb(next) || this.left_default();
            }
            order(next) {
                return this.state().sub('order', $hyoo_crowd_reg).numb(next) || this.order_default();
            }
            order_string() {
                return this.order().toString();
            }
            duplicate(elem) {
                const element = elem ?? this.element().duplicate();
                const obj = new this.$.$hyoo_sketch_element_base;
                obj.element = $mol_const(element);
                obj.width(this.width());
                obj.height(this.height());
                obj.top(this.duplicate_top_shift() ? this.top() + this.height() + this.page().grid() : this.top());
                obj.left(this.left());
                obj.order(this.order());
                return element;
            }
            duplicate_event() {
                const element = this.duplicate();
                this.page().element_add(element);
            }
            delete(event) {
                event.preventDefault();
                this.page().element_delete(this.element());
                this.$.$mol_state_arg.value('selected', null);
            }
            move_up(event) {
                event.preventDefault();
                this.top(this.top() - this.page().grid());
            }
            move_down(event) {
                event.preventDefault();
                this.top(this.top() + this.page().grid());
            }
            move_left(event) {
                event.preventDefault();
                this.left(this.left() - this.page().grid());
            }
            move_right(event) {
                event.preventDefault();
                this.left(this.left() + this.page().grid());
            }
        }
        $$.$hyoo_sketch_element_base = $hyoo_sketch_element_base;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/base/base.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_help extends $mol_icon {
        path() {
            return "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5C10.34,5 9,6.34 9,8H6C6,4.69 8.69,2 12,2Z";
        }
    }
    $.$mol_icon_help = $mol_icon_help;
})($ || ($ = {}));
//mol/icon/help/-view.tree/help.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_help_rhombus extends $mol_icon {
        path() {
            return "M21.5,10.8L13.2,2.5C12.5,1.8 11.5,1.8 10.8,2.5L2.5,10.8C1.8,11.5 1.8,12.5 2.5,13.2L10.8,21.5C11.5,22.2 12.5,22.2 13.2,21.5L21.5,13.2C22.1,12.5 22.1,11.5 21.5,10.8M12.5,17H11V15.5H12.5V17M14.3,11.8C13.9,12.3 13.2,12.6 12.9,13.1C12.6,13.5 12.6,14 12.6,14.5H11C11,13.7 11,13 11.3,12.5C11.6,12 12.3,11.7 12.7,11.4C13.9,10.3 13.6,8.7 11.9,8.6C11.1,8.6 10.4,9.3 10.4,10.1H9C9,8.4 10.3,7.1 12,7.1C14.7,7.1 15.9,9.8 14.3,11.8Z";
        }
    }
    $.$mol_icon_help_rhombus = $mol_icon_help_rhombus;
})($ || ($ = {}));
//mol/icon/help/rhombus/-view.tree/rhombus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_help_rhombus_outline extends $mol_icon {
        path() {
            return "M21.5,10.8L13.2,2.5C12.5,1.8 11.5,1.8 10.8,2.5L2.5,10.8C1.8,11.5 1.8,12.5 2.5,13.2L10.8,21.5C11.5,22.2 12.5,22.2 13.2,21.5L21.5,13.2C22.1,12.5 22.1,11.5 21.5,10.8M20.3,12L12,20.3L3.7,12L12,3.7L20.3,12M11,15.5H12.5V17H11V15.5M12,6.95C14.7,7.06 15.87,9.78 14.28,11.81C13.86,12.31 13.19,12.64 12.85,13.07C12.5,13.5 12.5,14 12.5,14.5H11C11,13.65 11,12.94 11.35,12.44C11.68,11.94 12.35,11.64 12.77,11.31C14,10.18 13.68,8.59 12,8.46C11.18,8.46 10.5,9.13 10.5,9.97H9C9,8.3 10.35,6.95 12,6.95Z";
        }
    }
    $.$mol_icon_help_rhombus_outline = $mol_icon_help_rhombus_outline;
})($ || ($ = {}));
//mol/icon/help/rhombus/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_magnify extends $mol_icon {
        path() {
            return "M9.5,3C13.09,3 16,5.91 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16C5.91,16 3,13.09 3,9.5C3,5.91 5.91,3 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";
        }
    }
    $.$mol_icon_magnify = $mol_icon_magnify;
})($ || ($ = {}));
//mol/icon/magnify/-view.tree/magnify.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_icon extends $hyoo_sketch_element_base {
        Element() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Icon()
            ];
            return obj;
        }
        Not_found_icon() {
            const obj = new this.$.$mol_icon_help_rhombus_outline();
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                icon: this.icon_options()
            };
        }
        icon_path() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_icon();
            obj.path = () => this.icon_path();
            return obj;
        }
        icon_name(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Icon_name_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => "$mol_icon_plus";
            obj.value = (next) => this.icon_name(next);
            return obj;
        }
        Icon_name_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_icon_Icon_name_option_name');
            obj.Control = () => this.Icon_name_control();
            return obj;
        }
        Icon_search_icon() {
            const obj = new this.$.$mol_icon_magnify();
            return obj;
        }
        Icon_search() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://nin-jin.github.io/mol_icon";
            obj.target = () => "_blank";
            obj.sub = () => [
                this.Icon_search_icon()
            ];
            return obj;
        }
        Icon_search_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_icon_Icon_search_option_name');
            obj.Control = () => this.Icon_search();
            return obj;
        }
        icon_options() {
            return [
                this.Icon_name_option(),
                this.Icon_search_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_icon.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_icon.prototype, "Not_found_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_icon.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_icon.prototype, "icon_name", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_icon.prototype, "Icon_name_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_icon.prototype, "Icon_name_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_icon.prototype, "Icon_search_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_icon.prototype, "Icon_search", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_icon.prototype, "Icon_search_option", null);
    $.$hyoo_sketch_element_icon = $hyoo_sketch_element_icon;
})($ || ($ = {}));
//hyoo/sketch/element/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = `${this.uri}#${this.row}:${this.col}/${this.length}`;
        }
        static unknown = $mol_span.begin('unknown');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, length);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message}${this}`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(`Begin value '${begin}' out of range ${this}`);
            if (end < 0 || end > len)
                this.$.$mol_fail(`End value '${end}' out of range ${this}`);
            if (end < begin)
                this.$.$mol_fail(`End value '${end}' can't be less than begin value ${this}`);
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));
//mol/span/span.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));
//mol/error/syntax/syntax.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = 'unknown') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start, pos - error_start + 1);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Undexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));
//mol/tree2/from/string/string.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));
//mol/tree2/to/string/string.ts
;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(this.struct(type, []).insert(value, ...path.slice(1)));
                }
                return this.clone(sub);
            }
            else if (typeof type === 'number') {
                const sub = this.kids.slice();
                sub[type] = (sub[type] || this.list([]))
                    .insert(value, ...path.slice(1));
                return this.clone(sub.filter(Boolean));
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .map(item => item.insert(value, ...path.slice(1)))
                    .filter(Boolean);
                return this.clone(kids);
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => {
                let handle = belt[child.type] || belt[''];
                if (!handle || handle === Object.prototype[child.type]) {
                    handle = (input, belt, context) => [
                        input.clone(input.hack(belt, context), context.span)
                    ];
                }
                try {
                    return handle(child, belt, context);
                }
                catch (error) {
                    error.message += `\n${child.clone([])}${child.span}`;
                    $mol_fail_hidden(error);
                }
            }));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));
//mol/tree2/tree2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree2_error extends Error {
        spans;
        constructor(message, spans) {
            super(message);
            this.spans = spans;
        }
        toJSON() {
            return {
                message: this.message,
                spans: this.spans
            };
        }
    }
    $.$mol_view_tree2_error = $mol_view_tree2_error;
    class $mol_view_tree2_error_suggestions {
        suggestions;
        constructor(suggestions) {
            this.suggestions = suggestions;
        }
        toString() {
            return this.suggestions.map(suggestion => `\`${suggestion}\``).join(', ');
        }
        toJSON() {
            return this.suggestions;
        }
    }
    $.$mol_view_tree2_error_suggestions = $mol_view_tree2_error_suggestions;
    function $mol_view_tree2_error_str(strings, ...parts) {
        const spans = [];
        for (const part of parts) {
            if (part instanceof $mol_span)
                spans.push(part);
            if (Array.isArray(part) && part.length > 0 && part[0] instanceof $mol_span)
                spans.push(...part);
        }
        return new $mol_view_tree2_error(join(strings, parts), spans);
    }
    $.$mol_view_tree2_error_str = $mol_view_tree2_error_str;
    function join(strings, objects) {
        let result = '';
        let obj_pos = 0;
        let obj_len = objects.length;
        for (const str of strings) {
            result += str;
            if (obj_pos < obj_len) {
                const obj = objects[obj_pos++];
                if (Array.isArray(obj))
                    result += obj.map(item => `\`${item}\``).join(', ');
                else
                    result += `\`${String(obj)}\``;
            }
        }
        return result;
    }
})($ || ($ = {}));
//mol/view/tree2/error.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_child(tree) {
        if (tree.kids.length === 0) {
            return this.$mol_fail($mol_view_tree2_error_str `Required one child at ${tree.span}`);
        }
        if (tree.kids.length > 1) {
            return this.$mol_fail($mol_view_tree2_error_str `Should be only one child at ${tree.span}`);
        }
        return tree.kids[0];
    }
    $.$mol_view_tree2_child = $mol_view_tree2_child;
})($ || ($ = {}));
//mol/view/tree2/child.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_classes(defs) {
        return defs.clone(defs.hack({
            '-': () => []
        }));
    }
    $.$mol_view_tree2_classes = $mol_view_tree2_classes;
})($ || ($ = {}));
//mol/view/tree2/classes.ts
;
"use strict";
var $;
(function ($_1) {
    class $mol_view_tree2_context extends $mol_object2 {
        parents;
        locales;
        methods;
        types;
        added_nodes;
        array;
        constructor($, parents, locales, methods, types = true, added_nodes = new Map(), array) {
            super();
            this.parents = parents;
            this.locales = locales;
            this.methods = methods;
            this.types = types;
            this.added_nodes = added_nodes;
            this.array = array;
            this.$ = $;
        }
        clone(prefixes, array) {
            return new this.$.$mol_view_tree2_context(this.$, prefixes, this.locales, this.methods, this.types, this.added_nodes, array);
        }
        parent(prefix) {
            const parents = this.parents.slice();
            parents.push(prefix);
            return this.clone(parents, this.array);
        }
        root() {
            return this.clone(this.parents.slice(0, 1));
        }
        locale_disable(array) {
            if (this.array)
                return this;
            return this.clone(this.parents, array);
        }
        get_method({ name, src, key, next }) {
            const prev = this.added_nodes.get(name.value);
            if (!prev)
                return;
            if ((prev.key && !key) || (!prev.key && key) || (prev.next && !next) || (!prev.next && next))
                return this.$.$mol_fail($mol_view_tree2_error_str `Method ${src.type} at ${src.span} is not same as ${prev.src.type} at ${prev.src.span}`);
            const current_default = src.kids.length > 0 ? src.kids[0] : undefined;
            const prev_default = prev.src.kids.length > 0 ? prev.src.kids[0] : undefined;
            if (prev_default?.toString() !== current_default?.toString())
                return this.$.$mol_fail($mol_view_tree2_error_str `Method ${name.value} at ${current_default?.span ?? name.span} already defined with another default value at ${prev_default?.span ?? prev.name.span}`);
            return prev;
        }
        check_scope_vars({ name, key, next }) {
            let finded_key;
            let finded_next;
            const parents = this.parents;
            for (let i = 1; i < parents.length; i++) {
                const parent = parents[i];
                if (next && parent.next)
                    finded_next = parent.next;
            }
            if (next && !finded_next)
                return this.$.$mol_fail($mol_view_tree2_error_str `Next ${next.value} at ${next.span} not found at ${this.parents.map(parent => parent.src.span)}`);
            const first_method = parents.length > 1 ? parents[1] : undefined;
            if (name.value === first_method?.name.value)
                return this.$.$mol_fail($mol_view_tree2_error_str `Method ${name.value} at ${name.span} already defined at ${first_method.name.span}`);
        }
        index(owner) {
            this.added_nodes.set(owner.name.value, owner);
            const index = this.methods.length;
            return index;
        }
        method(index, method) {
            this.methods.push(...method);
        }
        locale_nodes = new Map();
        locale(operator) {
            const parents = this.parents;
            const val = operator.kids.length === 1 ? operator.kids[0] : undefined;
            if (!val)
                return this.$.$mol_fail($mol_view_tree2_error_str `Need a one child at ${operator.span}, use \`some @ \\localized value\``);
            if (this.array)
                return this.$.$mol_fail($mol_view_tree2_error_str `Can\'t use \`@\` at ${operator.span} inside array at ${this.array.span}`);
            let key = '';
            const body = [];
            const last = parents.length > 0 ? parents[parents.length - 1] : undefined;
            for (const parent of parents) {
                body.push(parent.name);
                key += parent.name.value;
                if (parent === last)
                    break;
                body.push(parent.name.data('_'));
                key += '_';
            }
            const prev = this.locale_nodes.get(key);
            if (prev)
                return this.$.$mol_fail($mol_view_tree2_error_str `Locale key \`${key}\` at ${operator.span} conflicts with same at ${prev.span}`);
            this.locale_nodes.set(key, val);
            this.locales[key] = val.text();
            return operator.struct('line', body);
        }
    }
    $_1.$mol_view_tree2_context = $mol_view_tree2_context;
})($ || ($ = {}));
//mol/view/tree2/context.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_normalize(defs) {
        return defs.clone($mol_view_tree2_classes(defs).kids.map(cl => cl.clone([
            this.$mol_view_tree2_class_super(cl).clone(this.$mol_view_tree2_class_props(cl))
        ])));
    }
    $.$mol_view_tree2_normalize = $mol_view_tree2_normalize;
})($ || ($ = {}));
//mol/view/tree2/normalize.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_prop_split(src) {
        const prop_name = src.type;
        let key_pos = prop_name.indexOf('*');
        let next_pos = prop_name.indexOf('?');
        let next_pos_orig = next_pos;
        if (next_pos === -1)
            next_pos = prop_name.length;
        const name_end = (key_pos === -1) ? next_pos : key_pos;
        if (key_pos > next_pos)
            return this.$mol_fail(err `Index argument must be before next argument at ${src.span}, use ${example1}`);
        const name = prop_name.substring(0, name_end);
        const key = key_pos < 0 ? '' : prop_name.substring(key_pos + 1, next_pos);
        const next = prop_name.substring(next_pos + 1);
        if ((key && !regular_regex.test(key))
            || (next && !regular_regex.test(next)))
            return this.$mol_fail(err `Only regular chars and digits allowed ${key} ${next} at ${src.span}, use ${example2}`);
        return {
            src,
            name: $mol_tree2.data(name, [], src.span.slice(0, name.length)),
            key: key_pos >= 0 ? $mol_tree2.data(key ? JSON.stringify(key) : 'id', [], src.span.slice(key_pos, key_pos + key.length)) : undefined,
            next: next_pos_orig >= 0 ? $mol_tree2.data(next || 'next', [], src.span.slice(next_pos, next_pos + next.length)) : undefined
        };
    }
    $.$mol_view_tree2_prop_split = $mol_view_tree2_prop_split;
    const regular_regex = /^\w+$/;
    const example1 = new $mol_view_tree2_error_suggestions([
        'having!key?next <= owner!key?next'
    ]);
    const example2 = new $mol_view_tree2_error_suggestions([
        'having#',
        'having#key',
        'having#key?next',
        'having',
    ]);
})($ || ($ = {}));
//mol/view/tree2/prop/split.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_prop_name(prop) {
        return this.$mol_view_tree2_prop_split(prop).name.value;
    }
    $.$mol_view_tree2_prop_name = $mol_view_tree2_prop_name;
    function $mol_view_tree2_prop_key(prop) {
        return this.$mol_view_tree2_prop_split(prop).key?.value;
    }
    $.$mol_view_tree2_prop_key = $mol_view_tree2_prop_key;
    function $mol_view_tree2_prop_next(prop) {
        return this.$mol_view_tree2_prop_split(prop).next?.value;
    }
    $.$mol_view_tree2_prop_next = $mol_view_tree2_prop_next;
})($ || ($ = {}));
//mol/view/tree2/prop/prop.ts
;
"use strict";
var $;
(function ($) {
    const regular_regex = /^\w+$/;
    function $mol_view_tree2_prop_quote(name) {
        if (regular_regex.test(name.value))
            return name;
        return name.data(JSON.stringify(name.value));
    }
    $.$mol_view_tree2_prop_quote = $mol_view_tree2_prop_quote;
})($ || ($ = {}));
//mol/view/tree2/prop/quote.ts
;
"use strict";
var $;
(function ($) {
    const { begin, end, latin_only: letter, optional, repeat_greedy } = $mol_regexp;
    $.$mol_view_tree2_prop_signature = $mol_regexp.from([
        begin,
        { name: repeat_greedy(letter, 1) },
        { key: optional(['*', repeat_greedy(letter, 0)]) },
        { next: optional(['?', repeat_greedy(letter, 0)]) },
        end,
    ]);
})($ || ($ = {}));
//mol/view/tree2/prop/sigrature.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_class_super(klass) {
        if (!class_regex.test(klass.type))
            return this.$mol_fail(err `Wrong class name at ${klass.span}`);
        const superclass = klass.kids.length === 1 ? klass.kids[0] : undefined;
        if (!superclass)
            return this.$mol_fail(err `No super class at ${klass.span}`);
        if (!class_regex.test(superclass.type))
            return this.$mol_fail(err `Wrong super class name at ${superclass.span}`);
        return superclass;
    }
    $.$mol_view_tree2_class_super = $mol_view_tree2_class_super;
    const class_regex = /^\$\w+$/;
})($ || ($ = {}));
//mol/view/tree2/class/super.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_class_props(klass) {
        let props = this.$mol_view_tree2_class_super(klass);
        props = props.clone(props.hack({
            '': (node, belt) => {
                const normal = node.type.replace(/!\w+/, '*');
                if (node.type === normal)
                    return [node.clone(node.hack(belt))];
                return [node.struct(normal, node.hack(belt))];
            }
        }));
        const props_inner = [];
        const props_root = props.hack({
            '<=': (operator, belt) => {
                const prop = this.$mol_view_tree2_child(operator);
                const defs = prop.hack(belt);
                if (defs.length)
                    props_inner.push(prop.clone(defs));
                return [operator.clone([prop.clone([])])];
            },
            '<=>': (operator, belt) => {
                const prop = this.$mol_view_tree2_child(operator);
                const defs = prop.hack(belt);
                if (defs.length)
                    props_inner.push(prop.clone(defs));
                return [operator.clone([prop.clone([])])];
            },
        });
        return [...props_root, ...props_inner];
    }
    $.$mol_view_tree2_class_props = $mol_view_tree2_class_props;
})($ || ($ = {}));
//mol/view/tree2/class/props.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/sketch/element/icon/icon.view.css", "/* [hyoo_sketch_element_icon_icon] {\n\tmargin: 0;\n} */\n\n[hyoo_sketch_element_icon_icon]:hover {\n\ttransform: scale(1.5);\n}\n");
})($ || ($ = {}));
//hyoo/sketch/element/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_icon extends $.$hyoo_sketch_element_icon {
            icon_path() {
                const name = this.icon_name().trim();
                if (!name || !name.startsWith('$mol_icon_')) {
                    return this.Not_found_icon().path();
                }
                if (this.$[name]) {
                    return (new this.$[name]).path();
                }
                const base = 'https://raw.githubusercontent.com/nin-jin/mol_icon/master';
                const path = name.replace('$mol_icon', '').split('_');
                const uri = `${base}/${path.join('/')}/${path.slice(-1)[0]}.view.tree`;
                try {
                    const str = this.$.$mol_fetch.text(uri);
                    const tree = this.$.$mol_tree2_from_string(str);
                    const norm = this.$.$mol_view_tree2_normalize(tree);
                    const path = norm.select(name, '$mol_icon', 'path', null).kids[0].text();
                    return path;
                }
                catch (error) {
                    if (error instanceof Promise)
                        this.$.$mol_fail_hidden(error);
                    return this.Not_found_icon().path();
                }
            }
            icon_name(next) {
                return String(this.state().sub('icon_name', $hyoo_crowd_reg).value(next) ?? super.icon_name());
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_icon;
                obj.element = $mol_const(element);
                obj.icon_name(this.icon_name());
                return element;
            }
        }
        $$.$hyoo_sketch_element_icon = $hyoo_sketch_element_icon;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/icon/icon.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_list extends $mol_view {
        Option(id) {
            const obj = new this.$.$mol_check();
            obj.checked = (val) => this.option_checked(id, val);
            obj.label = () => this.option_label(id);
            obj.enabled = () => this.option_enabled(id);
            obj.hint = () => this.option_hint(id);
            obj.minimal_height = () => 24;
            return obj;
        }
        options() {
            return {};
        }
        keys() {
            return [];
        }
        sub() {
            return this.items();
        }
        option_checked(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        option_title(id) {
            return "";
        }
        option_label(id) {
            return [
                this.option_title(id)
            ];
        }
        enabled() {
            return true;
        }
        option_enabled(id) {
            return this.enabled();
        }
        option_hint(id) {
            return "";
        }
        items() {
            return [];
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "Option", null);
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "option_checked", null);
    $.$mol_check_list = $mol_check_list;
})($ || ($ = {}));
//mol/check/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 0 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"] {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"][disabled] {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_switch extends $mol_check_list {
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_switch.prototype, "value", null);
    $.$mol_switch = $mol_switch;
})($ || ($ = {}));
//mol/switch/-view.tree/switch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//mol/state/session/session.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/switch/switch.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_text extends $hyoo_sketch_element_base {
        Element() {
            const obj = new this.$.$mol_view();
            obj.style = () => this.style();
            obj.sub = () => this.text_sub();
            return obj;
        }
        icon_options() {
            return this.Icon().icon_options();
        }
        Icon() {
            const obj = new this.$.$hyoo_sketch_element_icon();
            obj.element = () => this.element();
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                text: this.text_options()
            };
        }
        padding_style() {
            return "0px";
        }
        style() {
            return {
                padding: this.padding_style(),
                justifyContent: this.align_hor(),
                alignItems: this.align_ver(),
                fontSize: this.size()
            };
        }
        Text_icon() {
            const obj = new this.$.$mol_icon();
            return obj;
        }
        text_sub() {
            return [
                this.Text_icon(),
                this.text()
            ];
        }
        text_default() {
            return "Text";
        }
        text(next) {
            return this.text_default();
        }
        Text_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.text(next);
            return obj;
        }
        Text_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_text_Text_option_name');
            obj.Control = () => this.Text_control();
            return obj;
        }
        padding_default() {
            return "text";
        }
        padding(next) {
            return this.padding_default();
        }
        Padding_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.padding(next);
            obj.options = () => ({
                none: "None",
                text: "Text",
                block: "Block",
                space: "Space"
            });
            return obj;
        }
        Padding_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_text_Padding_option_name');
            obj.Control = () => this.Padding_control();
            return obj;
        }
        align_hor_default() {
            return "start";
        }
        align_hor(next) {
            return this.align_hor_default();
        }
        Align_hor_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.align_hor(next);
            obj.options = () => this.align_options();
            return obj;
        }
        Align_hor_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_text_Align_hor_option_name');
            obj.Control = () => this.Align_hor_control();
            return obj;
        }
        align_ver_default() {
            return "start";
        }
        align_ver(next) {
            return this.align_ver_default();
        }
        align_options() {
            return {
                start: "Start",
                center: "Center",
                end: "End"
            };
        }
        Align_ver_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.align_ver(next);
            obj.options = () => this.align_options();
            return obj;
        }
        Align_ver_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_text_Align_ver_option_name');
            obj.Control = () => this.Align_ver_control();
            return obj;
        }
        size_default() {
            return "1.0rem";
        }
        size(next) {
            return this.size_default();
        }
        Size_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.size(next);
            obj.options = () => ({
                "0.75rem": "Muted",
                "1.0rem": "Normal",
                "1.25rem": "Accent"
            });
            return obj;
        }
        Size_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_text_Size_option_name');
            obj.Control = () => this.Size_control();
            return obj;
        }
        text_options() {
            return [
                this.Text_option(),
                this.Padding_option(),
                this.Align_hor_option(),
                this.Align_ver_option(),
                this.Size_option(),
                ...this.icon_options()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Text_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Text_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Text_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Padding_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Padding_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Align_hor_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Align_hor_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Align_ver_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Align_ver_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Size_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Size_option", null);
    $.$hyoo_sketch_element_text = $hyoo_sketch_element_text;
})($ || ($ = {}));
//hyoo/sketch/element/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_text extends $.$hyoo_sketch_element_text {
            text_sub() {
                return [
                    ...this.Icon().icon_name() ? [this.Icon().Icon()] : [],
                    this.text(),
                ];
            }
            padding_style() {
                if (this.padding() === 'none')
                    return '0px';
                return `var(--mol_gap_${this.padding()})`;
            }
            text(next) {
                return String(this.state().sub('text_content', $hyoo_crowd_reg).value(next) ?? this.text_default());
            }
            padding(next) {
                return String(this.state().sub('text_padding', $hyoo_crowd_reg).value(next) ?? this.padding_default());
            }
            align_ver(next) {
                return String(this.state().sub('text_align_ver', $hyoo_crowd_reg).value(next) ?? this.align_ver_default());
            }
            align_hor(next) {
                return String(this.state().sub('text_align_hor', $hyoo_crowd_reg).value(next) ?? this.align_hor_default());
            }
            size(next) {
                return String(this.state().sub('text_size', $hyoo_crowd_reg).value(next) ?? this.size_default());
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_text;
                obj.element = $mol_const(element);
                obj.text(this.text());
                obj.padding(this.padding());
                obj.align_ver(this.align_ver());
                obj.align_hor(this.align_hor());
                obj.size(this.size());
                this.Icon().duplicate(element);
                return element;
            }
        }
        $$.$hyoo_sketch_element_text = $hyoo_sketch_element_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/text/text.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $mol_view {
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $mol_scroll {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//mol/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop]:hover {\n\tz-index: 4;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: 3;\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\toverflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay;\n\tword-break: normal;\n\twidth: max-content;\n\theight: max-content;\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense\"] {\n\tdisplay: none;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//mol/pop/-css/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                return `${this.align_vert()}_${this.align_hor()}`;
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pick extends $mol_pop {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        Anchor() {
            return this.Trigger();
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        trigger_enabled() {
            return true;
        }
        trigger_content() {
            return [];
        }
        hint() {
            return "";
        }
        Trigger() {
            const obj = new this.$.$mol_check();
            obj.minimal_width = () => 40;
            obj.minimal_height = () => 40;
            obj.enabled = () => this.trigger_enabled();
            obj.checked = (val) => this.showed(val);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "Trigger", null);
    $.$mol_pick = $mol_pick;
})($ || ($ = {}));
//mol/pick/-view.tree/pick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n}\n");
})($ || ($ = {}));
//mol/pick/-css/pick.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pick/pick.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_vertical extends $mol_icon {
        path() {
            return "M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z";
        }
    }
    $.$mol_icon_dots_vertical = $mol_icon_dots_vertical;
})($ || ($ = {}));
//mol/icon/dots/vertical/-view.tree/vertical.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return +Infinity;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//mol/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_select extends $mol_pick {
        dictionary(val) {
            if (val !== undefined)
                return val;
            return {};
        }
        options() {
            return [];
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        option_label_default() {
            return "";
        }
        Option_row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.event_select(id, event);
            obj.sub = () => this.option_content(id);
            return obj;
        }
        No_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.no_options_message()
            ];
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Nav()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mol_select_hint');
        }
        bubble_content() {
            return [
                this.Filter(),
                this.Menu()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.filter_pattern(val);
            obj.hint = () => this.$.$mol_locale.text('$mol_select_Filter_hint');
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trigger_icon() {
            const obj = new this.$.$mol_icon_dots_vertical();
            return obj;
        }
        event_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        option_label(id) {
            return "";
        }
        filter_pattern(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Option_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_label(id);
            obj.needle = () => this.filter_pattern();
            return obj;
        }
        option_content(id) {
            return [
                this.Option_label(id)
            ];
        }
        no_options_message() {
            return this.$.$mol_locale.text('$mol_select_no_options_message');
        }
        nav_components() {
            return [];
        }
        option_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        nav_cycle(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.option_focused(component);
            obj.cycle = (val) => this.nav_cycle(val);
            return obj;
        }
        menu_content() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_content();
            return obj;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "dictionary", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "submit", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//mol/select/-view.tree/select.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//mol/match/text.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tz-index: 2;\n\topacity: 1 !important;\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//mol/select/-css/select.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/select.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_nav extends $hyoo_sketch_element_base {
        Element() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                "nav"
            ];
            return obj;
        }
        nav_pages_param() {
            return "demo";
        }
        Options() {
            return {
                ...super.Options(),
                nav: this.nav_options()
            };
        }
        nav_action(next) {
            if (next !== undefined)
                return next;
            return "none";
        }
        Nav_action_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.nav_action(next);
            obj.options = () => ({
                none: this.$.$mol_locale.text('$hyoo_sketch_element_nav_Nav_action_control_options_none'),
                open: this.$.$mol_locale.text('$hyoo_sketch_element_nav_Nav_action_control_options_open'),
                replace: this.$.$mol_locale.text('$hyoo_sketch_element_nav_Nav_action_control_options_replace'),
                close: this.$.$mol_locale.text('$hyoo_sketch_element_nav_Nav_action_control_options_close'),
                external: this.$.$mol_locale.text('$hyoo_sketch_element_nav_Nav_action_control_options_external')
            });
            return obj;
        }
        Nav_action_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_nav_Nav_action_option_name');
            obj.Control = () => this.Nav_action_control();
            return obj;
        }
        nav_target_page(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        project_pages() {
            return {};
        }
        Nav_target_page_control() {
            const obj = new this.$.$mol_select();
            obj.align = () => "top_right";
            obj.value = (next) => this.nav_target_page(next);
            obj.dictionary = () => this.project_pages();
            return obj;
        }
        Nav_target_page_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_nav_Nav_target_page_option_name');
            obj.Control = () => this.Nav_target_page_control();
            return obj;
        }
        nav_target_link(next) {
            if (next !== undefined)
                return next;
            return "https://mol.hyoo.ru";
        }
        Nav_target_link_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.nav_target_link(next);
            return obj;
        }
        Nav_target_link_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_nav_Nav_target_link_option_name');
            obj.Control = () => this.Nav_target_link_control();
            return obj;
        }
        nav_options() {
            return [
                this.Nav_action_option(),
                this.Nav_target_page_option(),
                this.Nav_target_link_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_nav.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_nav.prototype, "nav_action", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_nav.prototype, "Nav_action_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_nav.prototype, "Nav_action_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_nav.prototype, "nav_target_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_nav.prototype, "Nav_target_page_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_nav.prototype, "Nav_target_page_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_nav.prototype, "nav_target_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_nav.prototype, "Nav_target_link_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_nav.prototype, "Nav_target_link_option", null);
    $.$hyoo_sketch_element_nav = $hyoo_sketch_element_nav;
})($ || ($ = {}));
//hyoo/sketch/element/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_nav extends $.$hyoo_sketch_element_nav {
            project_pages() {
                const pages = this.page().project().pages();
                const dict = pages.reduce((dict, page) => {
                    dict[page.id()] = page.name();
                    return dict;
                }, {});
                return dict;
            }
            nav_options() {
                const action = this.nav_action();
                if (action === 'none')
                    return [this.Nav_action_option()];
                return [
                    this.Nav_action_option(),
                    ...action === 'external' ? [this.Nav_target_link_option()] : [this.Nav_target_page_option()],
                ];
            }
            nav_action(next) {
                return String(this.state().sub('nav_action', $hyoo_crowd_reg).value(next) ?? super.nav_action());
            }
            nav_target_page(next) {
                return String(this.state().sub('nav_target_page', $hyoo_crowd_reg).value(next) ?? super.nav_target_page());
            }
            nav_target_link(next) {
                return String(this.state().sub('nav_target_link', $hyoo_crowd_reg).value(next) ?? super.nav_target_link());
            }
            nav_pages(next) {
                return (this.$.$mol_state_arg.value(this.nav_pages_param(), next && next.join(',')) ?? '').split(',');
            }
            nav_page_close(id) {
                return this.nav_pages(this.nav_pages().filter(id2 => id2 !== id));
            }
            nav_page_open(id) {
                return this.nav_pages([...this.nav_page_close(id), id]);
            }
            nav_page_replace(id) {
                const index = this.nav_pages().indexOf(this.page().id());
                if (index === -1)
                    return this.nav_pages();
                const next = this.nav_pages();
                next.splice(index, 1, id);
                return this.nav_pages(next);
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_nav;
                obj.element = $mol_const(element);
                obj.nav_action(this.nav_action());
                obj.nav_target_page(this.nav_target_page());
                obj.nav_target_link(this.nav_target_link());
                return element;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_sketch_element_nav.prototype, "project_pages", null);
        $$.$hyoo_sketch_element_nav = $hyoo_sketch_element_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//mol/button/major/-view.tree/major.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//mol/button/major/-css/major.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_button extends $hyoo_sketch_element_base {
        nav_options() {
            return this.Nav().nav_options();
        }
        Nav() {
            const obj = new this.$.$hyoo_sketch_element_nav();
            obj.element = () => this.element();
            return obj;
        }
        text_options() {
            return this.Text().text_options();
        }
        text_sub() {
            return this.Text().text_sub();
        }
        text_style() {
            return this.Text().style();
        }
        Text_option() {
            return this.Text().Text_option();
        }
        Text() {
            const obj = new this.$.$hyoo_sketch_element_button_text();
            obj.element = () => this.element();
            return obj;
        }
        Button_major() {
            const obj = new this.$.$mol_button_major();
            obj.style = () => ({
                ...this.text_style(),
                width: "100%"
            });
            obj.click = (next) => this.click(next);
            obj.sub = () => this.text_sub();
            return obj;
        }
        Button_minor() {
            const obj = new this.$.$mol_button_minor();
            obj.style = () => ({
                ...this.text_style(),
                width: "100%"
            });
            obj.click = (next) => this.click(next);
            obj.sub = () => this.text_sub();
            return obj;
        }
        Element() {
            const obj = new this.$.$mol_button();
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                button: this.button_options(),
                text: this.text_options(),
                nav: this.nav_options()
            };
        }
        click(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        button_type(next) {
            if (next !== undefined)
                return next;
            return "major";
        }
        Button_type_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.button_type(next);
            obj.options = () => ({
                major: this.$.$mol_locale.text('$hyoo_sketch_element_button_Button_type_control_options_major'),
                minor: this.$.$mol_locale.text('$hyoo_sketch_element_button_Button_type_control_options_minor')
            });
            return obj;
        }
        Button_type_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_button_Button_type_option_name');
            obj.Control = () => this.Button_type_control();
            return obj;
        }
        button_options() {
            return [
                this.Text_option(),
                this.Button_type_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "Text", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "Button_major", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "Button_minor", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "button_type", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "Button_type_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "Button_type_option", null);
    $.$hyoo_sketch_element_button = $hyoo_sketch_element_button;
    class $hyoo_sketch_element_button_text extends $hyoo_sketch_element_text {
        text_default(next) {
            if (next !== undefined)
                return next;
            return "Button";
        }
        padding_default(next) {
            if (next !== undefined)
                return next;
            return "text";
        }
        align_hor_default(next) {
            if (next !== undefined)
                return next;
            return "center";
        }
        align_ver_default(next) {
            if (next !== undefined)
                return next;
            return "center";
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button_text.prototype, "text_default", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button_text.prototype, "padding_default", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button_text.prototype, "align_hor_default", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button_text.prototype, "align_ver_default", null);
    $.$hyoo_sketch_element_button_text = $hyoo_sketch_element_button_text;
})($ || ($ = {}));
//hyoo/sketch/element/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/sketch/element/button/button.view.css", "");
})($ || ($ = {}));
//hyoo/sketch/element/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_button extends $.$hyoo_sketch_element_button {
            Element() {
                const button = this.button_type() === 'major' ? this.Button_major() : this.Button_minor();
                return button;
            }
            button_type(next) {
                return this.state().sub('button_type', $hyoo_crowd_reg).str(next) || super.button_type();
            }
            click() {
                const action = this.Nav().nav_action();
                const target_page = this.Nav().nav_target_page();
                const target_link = this.Nav().nav_target_link();
                if (action === 'none')
                    return;
                if (action === 'open') {
                    this.Nav().nav_page_open(target_page);
                }
                if (action === 'close') {
                    this.Nav().nav_page_close(target_page || this.page().id());
                }
                if (action === 'replace') {
                    this.Nav().nav_page_replace(target_page);
                }
                if (action === 'external') {
                    $mol_dom_context.open(target_link, '_blank');
                }
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_button;
                obj.element = $mol_const(element);
                obj.button_type(this.button_type());
                this.Text().duplicate(element);
                this.Nav().duplicate(element);
                return element;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_sketch_element_button.prototype, "Element", null);
        $$.$hyoo_sketch_element_button = $hyoo_sketch_element_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_eye extends $mol_icon {
        path() {
            return "M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z";
        }
    }
    $.$mol_icon_eye = $mol_icon_eye;
})($ || ($ = {}));
//mol/icon/eye/-view.tree/eye.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_password extends $mol_view {
        type(val) {
            if (val !== undefined)
                return val;
            return "password";
        }
        sub() {
            return this.content();
        }
        hint() {
            return "";
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        Pass() {
            const obj = new this.$.$mol_string();
            obj.type = () => this.type();
            obj.hint = () => this.hint();
            obj.value = (val) => this.value(val);
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Show_icon() {
            const obj = new this.$.$mol_icon_eye();
            return obj;
        }
        Show() {
            const obj = new this.$.$mol_check_icon();
            obj.checked = (val) => this.checked(val);
            obj.Icon = () => this.Show_icon();
            return obj;
        }
        content() {
            return [
                this.Pass(),
                this.Show()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "Pass", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "Show_icon", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "Show", null);
    $.$mol_password = $mol_password;
})($ || ($ = {}));
//mol/password/-view.tree/password.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_password extends $.$mol_password {
            checked(next) {
                this.type(next ? 'text' : 'password');
                return next ?? false;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_password.prototype, "checked", null);
        $$.$mol_password = $mol_password;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/password/password.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//mol/icon/cross/-view.tree/cross.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_search extends $mol_pop {
        query(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        suggests() {
            return [];
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Hotkey(),
                this.Nav()
            ];
        }
        showed(val) {
            return this.suggests_showed(val);
        }
        align_hor() {
            return "right";
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.anchor_content();
            return obj;
        }
        bubble_content() {
            return [
                this.Menu()
            ];
        }
        Suggest(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.suggest_select(id, event);
            obj.sub = () => this.suggest_content(id);
            return obj;
        }
        clear(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Hotkey() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                escape: (val) => this.clear(val)
            });
            return obj;
        }
        nav_components() {
            return [];
        }
        nav_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.nav_focused(component);
            return obj;
        }
        suggests_showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_search_hint');
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        bring() {
            return this.Query().bring();
        }
        Query() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.query(val);
            obj.hint = () => this.hint();
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Clear_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Clear() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$mol_search_Clear_hint');
            obj.click = (event) => this.clear(event);
            obj.sub = () => [
                this.Clear_icon()
            ];
            return obj;
        }
        anchor_content() {
            return [
                this.Query(),
                this.Clear()
            ];
        }
        menu_items() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        suggest_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        suggest_label(id) {
            return "";
        }
        Suggest_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.suggest_label(id);
            obj.needle = () => this.query();
            return obj;
        }
        suggest_content(id) {
            return [
                this.Suggest_label(id)
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Anchor", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Hotkey", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "nav_focused", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "suggests_showed", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "suggest_select", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest_label", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//mol/search/-view.tree/search.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const host = {};
        const fiber = new $mol_wire_task(calculate.name, calculate, host, []);
        fiber.plan();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_wire_task(this + '.' + calculate.name, calculate, this, args);
            return fiber.async();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_sync(request) {
        throw new Error('Use $mol_wire_sync instead');
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        $mol_wire_fiber.sync();
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    class $mol_fiber_solid extends $mol_wrapper {
        static func(task) {
            return task;
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber {
        static method = $mol_action;
    }
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//mol/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));
//mol/search/-css/search.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                $mol_fiber_defer(() => {
                    this.Query().focused(true);
                });
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/search/search.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_input extends $hyoo_sketch_element_base {
        String() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.input_hint();
            obj.value = (next) => this.input_text(next);
            obj.enabled = () => this.input_enabled_bool();
            return obj;
        }
        Number() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.input_number(next);
            obj.enabled = () => this.input_enabled_bool();
            return obj;
        }
        Password() {
            const obj = new this.$.$mol_password();
            obj.hint = () => this.input_hint();
            obj.value = (next) => this.input_text(next);
            obj.enabled = () => this.input_enabled_bool();
            return obj;
        }
        Search() {
            const obj = new this.$.$mol_search();
            obj.query = (next) => this.input_text(next);
            obj.enabled = () => this.input_enabled_bool();
            return obj;
        }
        Element() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                input: this.input_options()
            };
        }
        input_enabled_bool() {
            return true;
        }
        input_number(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        input_type(next) {
            if (next !== undefined)
                return next;
            return "String";
        }
        Input_type_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.input_type(next);
            obj.options = () => ({
                String: this.$.$mol_locale.text('$hyoo_sketch_element_input_Input_type_control_options_String'),
                Number: this.$.$mol_locale.text('$hyoo_sketch_element_input_Input_type_control_options_Number'),
                Password: this.$.$mol_locale.text('$hyoo_sketch_element_input_Input_type_control_options_Password'),
                Search: this.$.$mol_locale.text('$hyoo_sketch_element_input_Input_type_control_options_Search')
            });
            return obj;
        }
        Input_type_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_input_Input_type_option_name');
            obj.Control = () => this.Input_type_control();
            return obj;
        }
        input_hint(next) {
            if (next !== undefined)
                return next;
            return "Type here";
        }
        Input_hint_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.input_hint(next);
            return obj;
        }
        Input_hint_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_input_Input_hint_option_name');
            obj.Control = () => this.Input_hint_control();
            return obj;
        }
        input_text(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Input_text_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.input_text(next);
            return obj;
        }
        Input_text_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_input_Input_text_option_name');
            obj.Control = () => this.Input_text_control();
            return obj;
        }
        input_enabled(next) {
            if (next !== undefined)
                return next;
            return "on";
        }
        Input_enabled_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.input_enabled(next);
            obj.options = () => ({
                on: this.$.$mol_locale.text('$hyoo_sketch_element_input_Input_enabled_control_options_on'),
                off: this.$.$mol_locale.text('$hyoo_sketch_element_input_Input_enabled_control_options_off')
            });
            return obj;
        }
        Input_enabled_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_input_Input_enabled_option_name');
            obj.Control = () => this.Input_enabled_control();
            return obj;
        }
        input_options() {
            return [
                this.Input_type_option(),
                this.Input_hint_option(),
                this.Input_text_option(),
                this.Input_enabled_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "String", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Number", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Password", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Search", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "input_number", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "input_type", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Input_type_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Input_type_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "input_hint", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Input_hint_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Input_hint_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "input_text", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Input_text_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Input_text_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "input_enabled", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Input_enabled_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_input.prototype, "Input_enabled_option", null);
    $.$hyoo_sketch_element_input = $hyoo_sketch_element_input;
})($ || ($ = {}));
//hyoo/sketch/element/input/-view.tree/input.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_input extends $.$hyoo_sketch_element_input {
            Element() {
                const type = this.input_type();
                return this[type]();
            }
            input_number(next) {
                return Number(this.input_text(String(next)));
            }
            input_type(next) {
                return String(this.state().sub('input_type', $hyoo_crowd_reg).value(next) ?? super.input_type());
            }
            input_hint(next) {
                return String(this.state().sub('input_hint', $hyoo_crowd_reg).value(next) ?? super.input_hint());
            }
            input_text(next) {
                return String(this.state().sub('input_text', $hyoo_crowd_reg).value(next) ?? super.input_text());
            }
            input_enabled(next) {
                return String(this.state().sub('input_enabled', $hyoo_crowd_reg).value(next) ?? super.input_enabled());
            }
            input_enabled_bool() {
                return this.input_enabled() === 'on';
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_input;
                obj.element = $mol_const(element);
                obj.input_type(this.input_type());
                obj.input_hint(this.input_hint());
                obj.input_text(this.input_text());
                obj.input_enabled(this.input_enabled());
                return element;
            }
        }
        $$.$hyoo_sketch_element_input = $hyoo_sketch_element_input;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/input/input.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_link extends $hyoo_sketch_element_base {
        nav_options() {
            return this.Nav().nav_options();
        }
        Nav() {
            const obj = new this.$.$hyoo_sketch_element_nav();
            obj.element = () => this.element();
            return obj;
        }
        text_options() {
            return this.Text().text_options();
        }
        text_sub() {
            return this.Text().text_sub();
        }
        text_style() {
            return this.Text().style();
        }
        Text_option() {
            return this.Text().Text_option();
        }
        Text() {
            const obj = new this.$.$hyoo_sketch_element_link_text();
            obj.element = () => this.element();
            return obj;
        }
        Link_external() {
            const obj = new this.$.$mol_link();
            obj.style = () => ({
                ...this.text_style()
            });
            obj.uri = () => this.link_uri();
            obj.hint = () => this.link_hint();
            obj.sub = () => this.text_sub();
            return obj;
        }
        Link_internal() {
            const obj = new this.$.$mol_link();
            obj.style = () => ({
                ...this.text_style()
            });
            obj.arg = () => this.link_arg();
            obj.hint = () => this.link_hint();
            obj.sub = () => this.text_sub();
            return obj;
        }
        Element() {
            const obj = new this.$.$mol_link();
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                link: this.link_options(),
                nav: this.nav_options(),
                text: this.text_options()
            };
        }
        link_uri() {
            return "";
        }
        link_arg() {
            return {};
        }
        link_hint(next) {
            if (next !== undefined)
                return next;
            return "I am link";
        }
        Link_hint_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.link_hint(next);
            return obj;
        }
        Link_hint_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_link_Link_hint_option_name');
            obj.Control = () => this.Link_hint_control();
            return obj;
        }
        link_options() {
            return [
                this.Link_hint_option(),
                this.Text_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Text", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Link_external", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Link_internal", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "link_hint", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Link_hint_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Link_hint_option", null);
    $.$hyoo_sketch_element_link = $hyoo_sketch_element_link;
    class $hyoo_sketch_element_link_text extends $hyoo_sketch_element_text {
        text_default(next) {
            if (next !== undefined)
                return next;
            return "Link";
        }
        padding_default(next) {
            if (next !== undefined)
                return next;
            return "text";
        }
        align_hor_default(next) {
            if (next !== undefined)
                return next;
            return "start";
        }
        align_ver_default(next) {
            if (next !== undefined)
                return next;
            return "center";
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link_text.prototype, "text_default", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link_text.prototype, "padding_default", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link_text.prototype, "align_hor_default", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link_text.prototype, "align_ver_default", null);
    $.$hyoo_sketch_element_link_text = $hyoo_sketch_element_link_text;
})($ || ($ = {}));
//hyoo/sketch/element/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_sketch_element_link, {
            Element: {
                alignItems: 'center',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_link extends $.$hyoo_sketch_element_link {
            Element() {
                const action = this.Nav().nav_action();
                return action === 'external' || action === 'none' ? this.Link_external() : this.Link_internal();
            }
            link_hint(next) {
                return String(this.state().sub('link_hint', $hyoo_crowd_reg).value(next) ?? super.link_hint());
            }
            link_arg() {
                const action = this.Nav().nav_action();
                const target_page = this.Nav().nav_target_page();
                const target_link = this.Nav().nav_target_link();
                let link = [];
                const pages = this.Nav().nav_pages();
                if (action === 'open') {
                    link = [...pages.filter(id => id !== target_page), target_page];
                }
                if (action === 'close') {
                    link = pages.filter(id => id !== target_page);
                }
                if (action === 'replace') {
                    link = pages.map(id => id === this.page().id() ? target_page : id);
                }
                console.log({ link });
                return {
                    [this.Nav().nav_pages_param()]: link.join(','),
                };
            }
            link_uri() {
                return this.Nav().nav_action() === 'external' ? this.Nav().nav_target_link() : '#';
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_link;
                obj.element = $mol_const(element);
                obj.link_hint(this.link_hint());
                this.Text().duplicate(element);
                this.Nav().duplicate(element);
                return element;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_sketch_element_link.prototype, "link_arg", null);
        __decorate([
            $mol_mem
        ], $hyoo_sketch_element_link.prototype, "link_uri", null);
        $$.$hyoo_sketch_element_link = $hyoo_sketch_element_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_image2 extends $mol_view {
        links() {
            return [];
        }
        aspect() {
            return 1;
        }
        sub() {
            return [
                this.Content()
            ];
        }
        height() {
            return "100%";
        }
        background() {
            return "";
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.height(),
                backgroundImage: this.background()
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_image2.prototype, "Content", null);
    $.$mol_image2 = $mol_image2;
})($ || ($ = {}));
//mol/image2/-view.tree/image2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image2/image2.view.css", "[mol_image2] {\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n}\n\n[mol_image2_content] {\n\tdisplay: block;\n\tbackground-size: cover;\n\tbackground-position: top center;\n\tflex: auto;\n}\n");
})($ || ($ = {}));
//mol/image2/-css/image2.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image2 extends $.$mol_image2 {
            background() {
                return this.links().map(link => `url("${link}")`).join(' , ');
            }
            height() {
                return `${100 / this.aspect()}%`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_image2.prototype, "background", null);
        __decorate([
            $mol_mem
        ], $mol_image2.prototype, "height", null);
        $$.$mol_image2 = $mol_image2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/image2/image2.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//mol/icon/tick/-view.tree/tick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_box extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_tick();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//mol/check/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_check_box_title] {\n\tmargin-left: .5rem;\n}\n");
})($ || ($ = {}));
//mol/check/box/-css/box.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_image extends $hyoo_sketch_element_base {
        Element() {
            const obj = new this.$.$mol_image2();
            obj.style = () => ({
                borderRadius: this.round()
            });
            obj.links = () => [
                this.image_link()
            ];
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                image: this.image_options()
            };
        }
        width_default() {
            return 128;
        }
        height_default() {
            return 128;
        }
        round() {
            return "unset";
        }
        image_link_default() {
            return "https://thiscatdoesnotexist.com";
        }
        image_link(next) {
            return this.image_link_default();
        }
        Image_link_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.image_link(next);
            return obj;
        }
        Image_link_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_image_Image_link_option_name');
            obj.Control = () => this.Image_link_control();
            return obj;
        }
        image_round(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Image_round_control() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.$.$mol_locale.text('$hyoo_sketch_element_image_Image_round_control_title');
            obj.checked = (next) => this.image_round(next);
            return obj;
        }
        Image_round_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_image_Image_round_option_name');
            obj.Control = () => this.Image_round_control();
            return obj;
        }
        image_options() {
            return [
                this.Image_link_option(),
                this.Image_round_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_image.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_image.prototype, "Image_link_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_image.prototype, "Image_link_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_image.prototype, "image_round", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_image.prototype, "Image_round_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_image.prototype, "Image_round_option", null);
    $.$hyoo_sketch_element_image = $hyoo_sketch_element_image;
})($ || ($ = {}));
//hyoo/sketch/element/image/-view.tree/image.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_image extends $.$hyoo_sketch_element_image {
            image_link(next) {
                return String((this.state().sub('image_link', $hyoo_crowd_reg).value(next) ?? this.image_link_default()) || this.image_link_placeholder());
            }
            image_round(next) {
                return Boolean(this.state().sub('image_round', $hyoo_crowd_reg).value(next) ?? false);
            }
            round() {
                return this.image_round() ? '50%' : 'unset';
            }
            image_link_placeholder() {
                return `http://placehold.jp/${this.width()}x${this.height()}.png`;
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_image;
                obj.element = $mol_const(element);
                obj.image_link(this.image_link());
                return element;
            }
        }
        $$.$hyoo_sketch_element_image = $hyoo_sketch_element_image;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/image/image.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_options extends $hyoo_sketch_element_base {
        option_list_default() {
            return [
                "one",
                "two",
                "three"
            ];
        }
        option_current(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Options() {
            return {
                ...super.Options(),
                options: this.options()
            };
        }
        option_clear(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Row_clear_icon(id) {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Row_clear(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.option_clear(id, next);
            obj.sub = () => [
                this.Row_clear_icon(id)
            ];
            return obj;
        }
        option_row(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Row_string(id) {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.option_row(id, next);
            return obj;
        }
        row_sub(id) {
            return [
                this.Row_clear(id),
                this.Row_string(id)
            ];
        }
        Row(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.row_sub(id);
            return obj;
        }
        rows() {
            return [
                this.Row("0")
            ];
        }
        Option_list_control() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.rows();
            return obj;
        }
        Option_list_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_options_Option_list_option_name');
            obj.Control = () => this.Option_list_control();
            return obj;
        }
        option_dict() {
            return {};
        }
        Option_current_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.option_current(next);
            obj.options = () => this.option_dict();
            return obj;
        }
        Option_current_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_options_Option_current_option_name');
            obj.Control = () => this.Option_current_control();
            return obj;
        }
        options() {
            return [
                this.Option_list_option(),
                this.Option_current_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_options.prototype, "option_current", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_element_options.prototype, "option_clear", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_element_options.prototype, "Row_clear_icon", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_element_options.prototype, "Row_clear", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_element_options.prototype, "option_row", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_element_options.prototype, "Row_string", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_element_options.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_options.prototype, "Option_list_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_options.prototype, "Option_list_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_options.prototype, "Option_current_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_options.prototype, "Option_current_option", null);
    $.$hyoo_sketch_element_options = $hyoo_sketch_element_options;
})($ || ($ = {}));
//hyoo/sketch/element/options/-view.tree/options.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$hyoo_sketch_element_options, {
            Row: {
                margin: {
                    bottom: $mol_gap.space,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/options/options.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_options extends $.$hyoo_sketch_element_options {
            option_list(next) {
                const list = this.state().sub('option_list', $hyoo_crowd_list).list(next);
                return (list.length ? list : this.option_list_default()).map(val => String(val));
            }
            option_current(next) {
                return String(this.state().sub('option_current', $hyoo_crowd_reg).value(next) ?? this.option_list()[0] ?? '');
            }
            option_dict() {
                return this.option_list().reduce((dict, val) => {
                    dict[val] = val;
                    return dict;
                }, {});
            }
            rows() {
                const list = this.option_list();
                return [...list, ''].map((_, i) => this.Row(i));
            }
            row_sub(index) {
                return [
                    ...this.option_list()[index] ? [this.Row_clear(index)] : [],
                    this.Row_string(index),
                ];
            }
            option_row(index, next) {
                if (next === undefined) {
                    return this.option_list()[index] ?? '';
                }
                let list = this.option_list().slice();
                list[index] = next;
                if (!next) {
                    list.splice(index, 1);
                }
                this.option_list(list);
                return next;
            }
            option_clear(index) {
                this.option_row(index, '');
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_options;
                obj.element = $mol_const(element);
                obj.option_list(this.option_list());
                obj.option_current(this.option_current());
                return element;
            }
        }
        $$.$hyoo_sketch_element_options = $hyoo_sketch_element_options;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/options/options.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_select_list extends $mol_view {
        value(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        dictionary() {
            return {};
        }
        Badge(id) {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.badge_title(id);
            obj.click = (event) => this.remove(id, event);
            obj.hint = () => this.badge_hint();
            obj.enabled = () => this.drop_enabled();
            return obj;
        }
        Pick() {
            const obj = new this.$.$mol_select();
            obj.align_hor = () => this.align_hor();
            obj.options = () => this.options_pickable();
            obj.value = (val) => this.pick(val);
            obj.option_label = (id) => this.option_title(id);
            obj.trigger_enabled = () => this.pick_enabled();
            obj.hint = () => this.pick_hint();
            obj.Trigger_icon = () => this.Pick_icon();
            return obj;
        }
        badge_title(id) {
            return "badge";
        }
        remove(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        badge_hint() {
            return this.$.$mol_locale.text('$mol_select_list_badge_hint');
        }
        enabled() {
            return true;
        }
        drop_enabled() {
            return this.enabled();
        }
        align_hor() {
            return "right";
        }
        options() {
            return [];
        }
        options_pickable() {
            return this.options();
        }
        pick(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        option_title(id) {
            return "";
        }
        pick_enabled() {
            return this.enabled();
        }
        pick_hint() {
            return this.$.$mol_locale.text('$mol_select_list_pick_hint');
        }
        Pick_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_select_list.prototype, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_select_list.prototype, "Badge", null);
    __decorate([
        $mol_mem
    ], $mol_select_list.prototype, "Pick", null);
    __decorate([
        $mol_mem_key
    ], $mol_select_list.prototype, "remove", null);
    __decorate([
        $mol_mem
    ], $mol_select_list.prototype, "pick", null);
    __decorate([
        $mol_mem
    ], $mol_select_list.prototype, "Pick_icon", null);
    $.$mol_select_list = $mol_select_list;
})($ || ($ = {}));
//mol/select/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_select_list, {
            flex: {
                wrap: 'wrap',
                shrink: 1,
                grow: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/list/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select_list extends $.$mol_select_list {
            value(val) {
                return super.value(val);
            }
            pick(key) {
                if (!key)
                    return '';
                this.value([...this.value(), key]);
                new $mol_after_frame(() => {
                    if (!this.pick_enabled())
                        return;
                    this.Pick().Trigger().focused(true);
                    this.Pick().open();
                });
                return '';
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_pickable() {
                if (!this.enabled())
                    return [];
                const exists = new Set(this.value());
                return this.options().filter(key => !exists.has(key));
            }
            option_title(key) {
                const value = this.dictionary()[key];
                return value == null ? key : value;
            }
            badge_title(index) {
                return this.option_title(this.value()[index]);
            }
            pick_enabled() {
                return this.options_pickable().length > 0;
            }
            sub() {
                return [
                    this.Pick(),
                    ...this.value()
                        .map((_, index) => this.Badge(index))
                        .reverse(),
                ];
            }
            title() {
                return this.value().map(key => this.option_title(key)).join(' + ');
            }
            remove(index) {
                const value = this.value();
                this.value([
                    ...value.slice(0, index),
                    ...value.slice(index + 1),
                ]);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "pick", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "options_pickable", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "pick_enabled", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "title", null);
        __decorate([
            $mol_action
        ], $mol_select_list.prototype, "remove", null);
        $$.$mol_select_list = $mol_select_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_select extends $hyoo_sketch_element_base {
        option_list() {
            return this.Option_list().option_list();
        }
        option_dict() {
            return this.Option_list().option_dict();
        }
        options() {
            return this.Option_list().options();
        }
        Option_list() {
            const obj = new this.$.$hyoo_sketch_element_options();
            obj.element = () => this.element();
            return obj;
        }
        List() {
            const obj = new this.$.$mol_select_list();
            obj.value = (next) => this.select_list_value(next);
            obj.dictionary = () => this.option_dict();
            return obj;
        }
        Single() {
            const obj = new this.$.$mol_select();
            obj.value = (next) => this.select_single_value(next);
            obj.options = () => this.option_list();
            return obj;
        }
        Elemet() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                select: this.select_options()
            };
        }
        select_list_value(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        select_single_value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        select_type_default() {
            return "Single";
        }
        select_type(next) {
            return this.select_type_default();
        }
        Select_type_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.select_type(next);
            obj.options = () => ({
                Single: this.$.$mol_locale.text('$hyoo_sketch_element_select_Select_type_control_options_Single'),
                List: this.$.$mol_locale.text('$hyoo_sketch_element_select_Select_type_control_options_List')
            });
            return obj;
        }
        Select_type_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_select_Select_type_option_name');
            obj.Control = () => this.Select_type_control();
            return obj;
        }
        select_options() {
            return [
                this.Select_type_option(),
                ...this.options()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_select.prototype, "Option_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_select.prototype, "List", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_select.prototype, "Single", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_select.prototype, "Elemet", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_select.prototype, "select_list_value", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_select.prototype, "select_single_value", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_select.prototype, "Select_type_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_select.prototype, "Select_type_option", null);
    $.$hyoo_sketch_element_select = $hyoo_sketch_element_select;
})($ || ($ = {}));
//hyoo/sketch/element/select/-view.tree/select.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_select extends $.$hyoo_sketch_element_select {
            Element() {
                return this[this.select_type()]();
            }
            select_type(next) {
                return String(this.state().sub('select_type', $hyoo_crowd_reg).value(next) ?? this.select_type_default());
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_select;
                obj.element = $mol_const(element);
                obj.select_type(this.select_type());
                this.Option_list().duplicate(element);
                return element;
            }
        }
        $$.$hyoo_sketch_element_select = $hyoo_sketch_element_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/select/select.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_check extends $hyoo_sketch_element_base {
        Check_box() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.check_title();
            obj.checked = (next) => this.check_checked(next);
            return obj;
        }
        Check_icon() {
            const obj = new this.$.$mol_check_icon();
            obj.Icon = () => this.Checked_icon();
            obj.checked = (next) => this.check_checked(next);
            return obj;
        }
        Element() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Checked_icon() {
            return this.Icon().Icon();
        }
        icon_options() {
            return this.Icon().icon_options();
        }
        Icon() {
            const obj = new this.$.$hyoo_sketch_element_icon();
            obj.element = () => this.element();
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                check: this.check_options()
            };
        }
        width_default() {
            return 128;
        }
        check_type_default() {
            return "Check_box";
        }
        check_type(next) {
            return this.check_type_default();
        }
        Check_type_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.check_type(next);
            obj.options = () => ({
                Check_box: "Box",
                Check_icon: "Icon"
            });
            return obj;
        }
        Check_type_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_check_Check_type_option_name');
            obj.Control = () => this.Check_type_control();
            return obj;
        }
        check_checked_default() {
            return true;
        }
        check_checked(next) {
            return this.check_checked_default();
        }
        Check_checked_control() {
            const obj = new this.$.$mol_check_box();
            obj.checked = (next) => this.check_checked(next);
            return obj;
        }
        Check_checked_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_check_Check_checked_option_name');
            obj.Control = () => this.Check_checked_control();
            return obj;
        }
        check_title_default() {
            return "Check";
        }
        check_title(next) {
            return this.check_title_default();
        }
        Check_title_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.check_title(next);
            return obj;
        }
        Check_title_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_check_Check_title_option_name');
            obj.Control = () => this.Check_title_control();
            return obj;
        }
        check_options() {
            return [
                this.Check_type_option(),
                this.Check_checked_option(),
                this.Check_title_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_check.prototype, "Check_box", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_check.prototype, "Check_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_check.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_check.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_check.prototype, "Check_type_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_check.prototype, "Check_type_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_check.prototype, "Check_checked_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_check.prototype, "Check_checked_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_check.prototype, "Check_title_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_check.prototype, "Check_title_option", null);
    $.$hyoo_sketch_element_check = $hyoo_sketch_element_check;
})($ || ($ = {}));
//hyoo/sketch/element/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_check extends $.$hyoo_sketch_element_check {
            Element() {
                return this[this.check_type()]();
            }
            check_type(next) {
                return String(this.state().sub('check_type', $hyoo_crowd_reg).value(next) ?? this.check_type_default());
            }
            check_title(next) {
                return String(this.state().sub('check_title', $hyoo_crowd_reg).value(next) ?? this.check_title_default());
            }
            check_checked(next) {
                return Boolean(this.state().sub('check_checked', $hyoo_crowd_reg).value(next) ?? this.check_checked_default());
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_check;
                obj.element = $mol_const(element);
                obj.check_type(this.check_type());
                obj.check_title(this.check_title());
                obj.check_checked(this.check_checked());
                this.Icon().duplicate(element);
                return element;
            }
            check_options() {
                const type = this.check_type();
                return [
                    this.Check_type_option(),
                    this.Check_checked_option(),
                    ...type === 'Check_box' ? [this.Check_title_option()] : this.icon_options(),
                ];
            }
        }
        $$.$hyoo_sketch_element_check = $hyoo_sketch_element_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_switch extends $hyoo_sketch_element_base {
        option_dict() {
            return this.Option_list().option_dict();
        }
        value(next) {
            return this.Option_list().option_current(next);
        }
        options() {
            return this.Option_list().options();
        }
        Option_list() {
            const obj = new this.$.$hyoo_sketch_element_options();
            obj.element = () => this.element();
            return obj;
        }
        Element() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.value(next);
            obj.options = () => this.option_dict();
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                switch: this.options()
            };
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_switch.prototype, "Option_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_switch.prototype, "Element", null);
    $.$hyoo_sketch_element_switch = $hyoo_sketch_element_switch;
})($ || ($ = {}));
//hyoo/sketch/element/switch/-view.tree/switch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_switch extends $.$hyoo_sketch_element_switch {
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                this.Option_list().duplicate(element);
                return element;
            }
        }
        $$.$hyoo_sketch_element_switch = $hyoo_sketch_element_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/switch/switch.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_stack extends $mol_view {
    }
    $.$mol_stack = $mol_stack;
})($ || ($ = {}));
//mol/stack/-view.tree/stack.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));
//mol/stack/-css/stack.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $mol_dimmer {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_token_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_code_token = $mol_text_code_token;
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name() {
            return "a";
        }
        type() {
            return "code-link";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.haystack(),
                target: "_blank"
            };
        }
        haystack() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//mol/text/code/token/-view.tree/token.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(60, 70, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/token/token.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        Numb() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.numb()
            ];
            return obj;
        }
        Token(id) {
            const obj = new this.$.$mol_text_code_token();
            obj.type = () => this.token_type(id);
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        Token_link(id) {
            const obj = new this.$.$mol_text_code_token_link();
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        find_pos(id) {
            return null;
        }
        numb() {
            return 0;
        }
        token_type(id) {
            return "";
        }
        token_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//mol/text/code/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gmu');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//mol/syntax2/syntax2.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?: ?[*+-]|\d+\.) +(?:[^]*?)$(?:\r?\n?)(?:  (?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```\s*)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[dygimsu]*(?!\p{Letter})|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+ *(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?:\.|::|->)\w+|[\w-]+\??\s*:(?!\/\/|:))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));
//mol/syntax2/md/md.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_row, {
            display: 'block',
            position: 'relative',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'right',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    left: rem(-4),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_token_pos", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_content_copy extends $mol_icon {
        path() {
            return "M19,21H8V7H19M19,5H8C6.9,5 6,5.9 6,7V21C6,22.1 6.9,23 8,23H19C20.1,23 21,22.1 21,21V7C21,5.9 20.1,5 19,5M16,1H4C2.9,1 2,1.9 2,3V17H4V3H16V1Z";
        }
    }
    $.$mol_icon_content_copy = $mol_icon_content_copy;
})($ || ($ = {}));
//mol/icon/content/copy/-view.tree/copy.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_copy extends $mol_button_minor {
        text() {
            return "";
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_content_copy();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_copy.prototype, "Icon", null);
    $.$mol_button_copy = $mol_button_copy;
})($ || ($ = {}));
//mol/button/copy/-view.tree/copy.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_copy extends $.$mol_button_copy {
            click(event) {
                this.$.$mol_dom_context.navigator.clipboard.writeText(this.text());
            }
        }
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/copy/copy.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $mol_stack {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_sidebar_showed: this.sidebar_showed()
            };
        }
        text() {
            return "";
        }
        text_lines() {
            return [];
        }
        find_pos(id) {
            return null;
        }
        sub() {
            return [
                this.Rows(),
                this.Copy()
            ];
        }
        sidebar_showed() {
            return false;
        }
        render_visible_only() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        rows() {
            return [
                this.Row("0")
            ];
        }
        Rows() {
            const obj = new this.$.$mol_list();
            obj.render_visible_only = () => this.render_visible_only();
            obj.rows = () => this.rows();
            return obj;
        }
        Copy() {
            const obj = new this.$.$mol_button_copy();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_code_Copy_hint');
            obj.text = () => this.text();
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Rows", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Copy", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//mol/text/code/-view.tree/code.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            Rows: {
                padding: $mol_gap.text,
            },
            Copy: {
                position: 'sticky',
                alignSelf: 'flex-start',
                justifySelf: 'flex-start',
                top: 0,
                left: 0,
                Icon: {
                    background: {
                        color: $mol_theme.card,
                    },
                },
                transform: 'translate(-6px,-1px)',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_row: {
                            margin: {
                                left: rem(1.5),
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            text_lines() {
                return this.text().split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_textarea extends $mol_stack {
        attr() {
            return {
                ...super.attr(),
                mol_textarea_clickable: this.clickable(),
                mol_textarea_sidebar_showed: this.sidebar_showed()
            };
        }
        event() {
            return {
                keydown: (event) => this.press(event),
                pointermove: (event) => this.hover(event)
            };
        }
        sub() {
            return [
                this.Edit(),
                this.View()
            ];
        }
        clickable(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        sidebar_showed() {
            return false;
        }
        press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        hover(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return " ";
        }
        enabled() {
            return true;
        }
        spellcheck() {
            return true;
        }
        length_max() {
            return +Infinity;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        bring() {
            return this.Edit().bring();
        }
        Edit() {
            const obj = new this.$.$mol_textarea_edit();
            obj.value = (val) => this.value(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            obj.spellcheck = () => this.spellcheck();
            obj.length_max = () => this.length_max();
            obj.selection = (val) => this.selection(val);
            return obj;
        }
        row_numb(id) {
            return 0;
        }
        highlight() {
            return "";
        }
        View() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.value();
            obj.render_visible_only = () => false;
            obj.row_numb = (id) => this.row_numb(id);
            obj.sidebar_showed = () => this.sidebar_showed();
            obj.highlight = () => this.highlight();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "clickable", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "hover", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
    class $mol_textarea_edit extends $mol_string {
        dom_name() {
            return "textarea";
        }
        field() {
            return {
                ...super.field(),
                scrollTop: 0
            };
        }
    }
    $.$mol_textarea_edit = $mol_textarea_edit;
})($ || ($ = {}));
//mol/textarea/-view.tree/textarea.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tflex-direction: column;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_gap_round);\n\tfont-family: monospace;\n\tposition: relative;\n\ttab-size: 4;\n}\n\n[mol_textarea_view] {\n\tz-index: 1;\n\tpointer-events: none;\n\twhite-space: inherit;\n\tfont-family: inherit;\n\ttab-size: inherit;\n}\n\n[mol_textarea_view_copy] {\n\tpointer-events: all;\n}\n\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n}\n\n[mol_textarea_edit] {\n\tfont-family: inherit;\n\tpadding: var(--mol_gap_text);\n\tcolor: transparent !important;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\ttext-align: inherit;\n\twhite-space: inherit;\n\tborder-radius: inherit;\n\toverflow-anchor: none;\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\ttab-size: inherit;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 1.5rem;\n\twidth: calc( 100% - 1.5rem );\n}\n");
})($ || ($ = {}));
//mol/textarea/-css/textarea.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                document.execCommand('insertText', false, '\t');
            }
            indent_dec() {
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                switch (event.keyCode) {
                    case $mol_keyboard_code.tab:
                        this.indent_inc();
                        break;
                    case event.shiftKey && $mol_keyboard_code.tab:
                        this.indent_dec();
                        break;
                    default: return;
                }
                event.preventDefault();
            }
            row_numb(index) {
                return index;
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/textarea/textarea.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_textarea extends $hyoo_sketch_element_base {
        Element() {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => this.hint();
            obj.value = (next) => this.text(next);
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                textarea: this.textarea_options()
            };
        }
        text(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Text_control() {
            const obj = new this.$.$mol_textarea();
            obj.style = () => ({
                height: "120px"
            });
            obj.value = (next) => this.text(next);
            return obj;
        }
        Text_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_textarea_Text_option_name');
            obj.Control = () => this.Text_control();
            return obj;
        }
        hint(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Hint_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.hint(next);
            return obj;
        }
        Hint_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_textarea_Hint_option_name');
            obj.Control = () => this.Hint_control();
            return obj;
        }
        textarea_options() {
            return [
                this.Text_option(),
                this.Hint_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_textarea.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_textarea.prototype, "text", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_textarea.prototype, "Text_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_textarea.prototype, "Text_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_textarea.prototype, "hint", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_textarea.prototype, "Hint_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_textarea.prototype, "Hint_option", null);
    $.$hyoo_sketch_element_textarea = $hyoo_sketch_element_textarea;
})($ || ($ = {}));
//hyoo/sketch/element/textarea/-view.tree/textarea.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const { unicode_only, line_end, tab, repeat_greedy, optional, forbid_after, force_after, char_only, char_except } = $mol_regexp;
    $.$hyoo_crowd_tokenizer = $mol_regexp.from({
        token: {
            'line-break': line_end,
            'indents': repeat_greedy(tab, 1),
            'emoji': [
                unicode_only('Extended_Pictographic'),
                optional(unicode_only('Emoji_Modifier')),
                repeat_greedy([
                    unicode_only('Emoji_Component'),
                    unicode_only('Extended_Pictographic'),
                    optional(unicode_only('Emoji_Modifier')),
                ]),
            ],
            'link': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
            'Word': [
                [
                    forbid_after(line_end),
                    unicode_only('White_Space'),
                ],
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]), 1),
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ])),
            ],
            'word': [
                [
                    forbid_after(line_end),
                    unicode_only('White_Space'),
                ],
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]), 1),
            ],
            'spaces': [
                forbid_after(line_end),
                repeat_greedy(unicode_only('White_Space'), 1),
                force_after(unicode_only('White_Space')),
            ],
            'space': [
                forbid_after(line_end),
                unicode_only('White_Space'),
                forbid_after([
                    unicode_only('White_Space'),
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]),
            ],
            'others': [
                repeat_greedy(char_except([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                    unicode_only('White_Space'),
                ]), 1),
            ],
        },
    }).native;
})($ || ($ = {}));
//hyoo/crowd/tokenizer/tokenizer.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_text extends $hyoo_crowd_node {
        text(next) {
            if (next === undefined) {
                return this.str();
            }
            else {
                const prev = this.units();
                const lines = next.match(/.*\n|.+$/g) ?? [];
                $mol_reconcile({
                    prev,
                    from: 0,
                    to: prev.length,
                    next: lines,
                    equal: (next, prev) => {
                        if (typeof prev.data === 'string')
                            return false;
                        return this.land.node(prev.self, $hyoo_crowd_text).str() === next;
                    },
                    drop: (prev, lead) => this.land.wipe(prev),
                    insert: (next, lead) => {
                        const unit = this.land.put(this.head, this.land.id_new(), lead?.self ?? '0_0', []);
                        this.land.node(unit.self, $hyoo_crowd_text).str(next);
                        return unit;
                    },
                    update: (next, prev, lead) => {
                        this.land.node(prev.self, $hyoo_crowd_text).str(next);
                        return prev;
                    },
                });
                return next;
            }
        }
        str(next) {
            if (next === undefined) {
                let str = '';
                for (const unit of this.units()) {
                    if (typeof unit.data === 'string')
                        str += unit.data;
                    else
                        str += this.land.node(unit.self, $hyoo_crowd_text).str();
                }
                return str;
            }
            else {
                this.write(next, 0, -1);
                return next;
            }
        }
        write(next, str_from = -1, str_to = str_from) {
            const list = this.units();
            let from = str_from < 0 ? list.length : 0;
            let word = '';
            while (from < list.length) {
                word = String(list[from].data);
                if (str_from <= word.length) {
                    next = word.slice(0, str_from) + next;
                    break;
                }
                str_from -= word.length;
                if (str_to > 0)
                    str_to -= word.length;
                from++;
            }
            let to = str_to < 0 ? list.length : from;
            while (to < list.length) {
                word = String(list[to].data);
                to++;
                if (str_to < word.length) {
                    next = next + word.slice(str_to);
                    break;
                }
                str_to -= word.length;
            }
            if (from && from === list.length) {
                --from;
                next = String(list[from].data) + next;
            }
            const words = next.match($hyoo_crowd_tokenizer) ?? [];
            this.as($hyoo_crowd_list).insert(words, from, to);
            return this;
        }
        point_by_offset(offset) {
            let off = offset;
            for (const unit of this.units()) {
                if (typeof unit.data === 'string') {
                    const len = String(unit.data).length;
                    if (off <= len)
                        return [unit.self, off];
                    else
                        off -= len;
                }
                else {
                    const found = this.land.node(unit.self, $hyoo_crowd_text).point_by_offset(off);
                    if (found[0] !== '0_0')
                        return found;
                    off = found[1];
                }
            }
            return ['0_0', off];
        }
        offset_by_point([self, offset]) {
            for (const unit of this.units()) {
                if (unit.self === self)
                    return [self, offset];
                if (typeof unit.data === 'string') {
                    offset += unit.data.length;
                }
                else {
                    const found = this.land.node(unit.self, $hyoo_crowd_text).offset_by_point([self, offset]);
                    if (found[0] !== '0_0')
                        return [self, found[1]];
                    offset = found[1];
                }
            }
            return ['0_0', offset];
        }
        selection(peer, next) {
            const reg = this.land.selection(peer);
            if (next) {
                reg.value(next.map(offset => this.point_by_offset(offset)));
                return next;
            }
            else {
                this.units();
                return reg.value()
                    ?.map(point => this.offset_by_point(point)[1]) ?? [0, 0];
            }
        }
    }
    $.$hyoo_crowd_text = $hyoo_crowd_text;
})($ || ($ = {}));
//hyoo/crowd/text/text.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_textarea extends $.$hyoo_sketch_element_textarea {
            text(next) {
                return this.state().sub('textarea_text', $hyoo_crowd_text).text(next);
            }
            hint(next) {
                return String(this.state().sub('textarea_hint', $hyoo_crowd_reg).value(next) ?? '');
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_textarea;
                obj.element = $mol_const(element);
                obj.text(this.text());
                obj.hint(this.hint());
                return element;
            }
        }
        $$.$hyoo_sketch_element_textarea = $hyoo_sketch_element_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/textarea/textarea.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_calendar extends $mol_icon {
        path() {
            return "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z";
        }
    }
    $.$mol_icon_calendar = $mol_icon_calendar;
})($ || ($ = {}));
//mol/icon/calendar/-view.tree/calendar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//mol/icon/chevron/-view.tree/chevron.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_left extends $mol_icon {
        path() {
            return "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
        }
    }
    $.$mol_icon_chevron_left = $mol_icon_chevron_left;
})($ || ($ = {}));
//mol/icon/chevron/left/-view.tree/left.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_right extends $mol_icon {
        path() {
            return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
        }
    }
    $.$mol_icon_chevron_right = $mol_icon_chevron_right;
})($ || ($ = {}));
//mol/icon/chevron/right/-view.tree/right.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hor extends $mol_view {
    }
    $.$mol_hor = $mol_hor;
})($ || ($ = {}));
//mol/hor/-view.tree/hor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_hor, {
        display: 'flex',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flex: {
            grow: 1,
            shrink: 0,
            basis: 'auto',
        },
    });
})($ || ($ = {}));
//mol/hor/hor.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hor extends $.$mol_hor {
            minimal_width() {
                let min = 0;
                for (const view of this.sub()) {
                    if (!(view instanceof $mol_view))
                        continue;
                    min += view.minimal_width();
                }
                return min;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_hor.prototype, "minimal_width", null);
        $$.$mol_hor = $mol_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hor/hor.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_calendar extends $mol_list {
        sub() {
            return [
                this.Head(),
                this.Weekdays()
            ];
        }
        weeks() {
            return [];
        }
        Weekday(id) {
            const obj = new this.$.$mol_calendar_day();
            obj.holiday = () => this.weekend(id);
            obj.sub = () => [
                this.weekday(id)
            ];
            return obj;
        }
        Week(id) {
            const obj = new this.$.$mol_hor();
            obj.sub = () => this.week_days(id);
            return obj;
        }
        Day(id) {
            const obj = new this.$.$mol_calendar_day();
            obj.ghost = () => this.day_ghost(id);
            obj.holiday = () => this.day_holiday(id);
            obj.selected = () => this.day_selected(id);
            obj.theme = () => this.day_theme(id);
            obj.sub = () => this.day_content(id);
            return obj;
        }
        month_string() {
            return "";
        }
        month_moment() {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        head() {
            return [
                this.Title()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.head();
            return obj;
        }
        weekdays() {
            return [];
        }
        Weekdays() {
            const obj = new this.$.$mol_hor();
            obj.sub = () => this.weekdays();
            return obj;
        }
        weekend(id) {
            return false;
        }
        weekday(id) {
            return "";
        }
        week_days(id) {
            return [];
        }
        day_ghost(id) {
            return false;
        }
        day_holiday(id) {
            return false;
        }
        day_selected(id) {
            return false;
        }
        day_theme(id) {
            return "";
        }
        day_text(id) {
            return "";
        }
        day_content(id) {
            return [
                this.day_text(id)
            ];
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Weekday", null);
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Week", null);
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Day", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "month_moment", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Weekdays", null);
    $.$mol_calendar = $mol_calendar;
    class $mol_calendar_day extends $mol_view {
        minimal_height() {
            return 24;
        }
        minimal_width() {
            return 36;
        }
        attr() {
            return {
                mol_calendar_holiday: this.holiday(),
                mol_calendar_ghost: this.ghost(),
                mol_calendar_selected: this.selected(),
                mol_theme: this.theme()
            };
        }
        holiday() {
            return false;
        }
        ghost() {
            return false;
        }
        selected() {
            return false;
        }
        theme() {
            return "";
        }
    }
    $.$mol_calendar_day = $mol_calendar_day;
})($ || ($ = {}));
//mol/calendar/-view.tree/calendar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $mol_time_duration(config.duration);
        }
        _start;
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        _end;
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        _duration;
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
        [Symbol.toPrimitive](mode) {
            return this.toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));
//mol/time/interval/interval.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/calendar/calendar.view.css", "[mol_calendar] {\n\tdisplay: table;\n\tfont-family: monospace;\n}\n\n[mol_calendar_head] {\n\tdisplay: table-caption;\n}\n\n[mol_calendar_title] {\n\tjustify-content: center;\n}\n\n[mol_calendar_weekdays] ,\n[mol_calendar_week] {\n\tdisplay: table-row;\n\tpadding: 0;\n}\n\n[mol_calendar_day] {\n\tdisplay: table-cell;\n\tpadding: .25rem .5rem;\n\ttext-align: center;\n\tword-break: normal;\n\tbox-shadow: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_calendar_weekday] {\n\tcolor: var(--mol_theme_shade);\n\tborder-bottom: 1px solid var(--mol_theme_line);\n}\n\n[mol_calendar_holiday] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_calendar_ghost] {\n\topacity: .2;\n}\n");
})($ || ($ = {}));
//mol/calendar/-css/calendar.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar extends $.$mol_calendar {
            month_moment() {
                const moment = new $mol_time_moment(this.month_string() || undefined);
                return new $mol_time_moment({ year: moment.year, month: moment.month });
            }
            title() {
                return this.month_moment().toString('Month YYYY');
            }
            day_first() {
                return this.month_moment().merge({ day: 0 });
            }
            day_last() {
                return this.day_first().shift('P1M');
            }
            day_draw_from() {
                let weekday = this.day_first().weekday;
                return this.day_first().shift({ day: -weekday });
            }
            weekdays() {
                const next = [];
                for (let index = 0; index < 7; ++index) {
                    next.push(this.Weekday(index));
                }
                return next;
            }
            weekday(index) {
                return this.day_draw_from().shift({ day: index }).toString('WD');
            }
            weekend(index) {
                return [5, 6].indexOf(index) >= 0;
            }
            weeks_count() {
                const interval = new $mol_time_interval({
                    start: this.day_draw_from(),
                    end: this.day_last(),
                });
                return Math.ceil(interval.duration.count({ day: 7 }));
            }
            sub() {
                return [
                    ...super.sub(),
                    ...this.weeks(),
                ];
            }
            weeks() {
                const weeks = [];
                let count = this.weeks_count();
                for (let i = 0; i < count; ++i) {
                    weeks.push(this.Week(i));
                }
                return weeks;
            }
            week_days(index) {
                const days = [];
                let start = this.day_draw_from().shift({ day: index * 7 });
                for (let i = 0; i < 7; ++i) {
                    days.push(this.Day(start.shift({ day: i }).toString('YYYY-MM-DD')));
                }
                return days;
            }
            day_text(day) {
                return new $mol_time_moment(day).toString("D");
            }
            day_holiday(day) {
                return this.weekend(new $mol_time_moment(day).weekday);
            }
            day_ghost(day) {
                return new $mol_time_moment(day).toString('YYYY-MM') !== this.day_first().toString('YYYY-MM');
            }
            day_selected(day) {
                return new $mol_time_moment().toString('YYYY-MM-DD') === day;
            }
            day_theme(day) {
                return this.day_selected(day) ? '$mol_theme_current' : super.day_theme(day);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "month_moment", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_first", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_last", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_draw_from", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weekdays", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "weekday", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weeks_count", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weeks", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "week_days", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_holiday", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_ghost", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_selected", null);
        $$.$mol_calendar = $mol_calendar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/calendar/calendar.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_date extends $mol_pick {
        Icon() {
            const obj = new this.$.$mol_icon_calendar();
            return obj;
        }
        bubble_content() {
            return [
                this.Input(),
                this.Calendar()
            ];
        }
        value_number(val) {
            if (val !== undefined)
                return val;
            return +NaN;
        }
        value_moment(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        input_hint() {
            return "YYYY-MM-DD hh:mm";
        }
        enabled() {
            return true;
        }
        Input() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.value(val);
            obj.hint = () => this.input_hint();
            obj.enabled = () => this.enabled();
            return obj;
        }
        month_moment() {
            return this.value_moment();
        }
        day_selected(id) {
            return false;
        }
        day_click(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        prev_hint() {
            return this.$.$mol_locale.text('$mol_date_prev_hint');
        }
        prev(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Prev_icon() {
            const obj = new this.$.$mol_icon_chevron_left();
            return obj;
        }
        Prev() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.prev_hint();
            obj.click = (event) => this.prev(event);
            obj.sub = () => [
                this.Prev_icon()
            ];
            return obj;
        }
        next_hint() {
            return this.$.$mol_locale.text('$mol_date_next_hint');
        }
        next(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Next_icon() {
            const obj = new this.$.$mol_icon_chevron_right();
            return obj;
        }
        Next() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.next_hint();
            obj.click = (event) => this.next(event);
            obj.sub = () => [
                this.Next_icon()
            ];
            return obj;
        }
        Calendar_tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Prev(),
                this.Calendar_title(),
                this.Next()
            ];
            return obj;
        }
        Calendar_title() {
            return this.Calendar().Title();
        }
        Calendar() {
            const obj = new this.$.$mol_date_calendar();
            obj.month_moment = () => this.month_moment();
            obj.day_selected = (id) => this.day_selected(id);
            obj.day_click = (id, event) => this.day_click(id, event);
            obj.head = () => [
                this.Calendar_tools()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value_number", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value_moment", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Input", null);
    __decorate([
        $mol_mem_key
    ], $mol_date.prototype, "day_click", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "prev", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Prev_icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Prev", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "next", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Next_icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Next", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Calendar_tools", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Calendar", null);
    $.$mol_date = $mol_date;
    class $mol_date_calendar extends $mol_calendar {
        day_content(id) {
            return [
                this.Day_button(id)
            ];
        }
        day_click(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Day_button(id) {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.day_text(id);
            obj.event_click = (event) => this.day_click(id, event);
            obj.minimal_height = () => 24;
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_date_calendar.prototype, "day_click", null);
    __decorate([
        $mol_mem_key
    ], $mol_date_calendar.prototype, "Day_button", null);
    $.$mol_date_calendar = $mol_date_calendar;
})($ || ($ = {}));
//mol/date/-view.tree/date.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let error;
    let result;
    let handler;
    function $mol_try(handler2) {
        handler = handler2;
        error = undefined;
        result = undefined;
        window.dispatchEvent(new Event('$mol_try'));
        const error2 = error;
        const result2 = result;
        error = undefined;
        result = undefined;
        return error2 || result2;
    }
    $.$mol_try = $mol_try;
    self.addEventListener('$mol_try', (event) => {
        result = handler();
    }, true);
    self.addEventListener('error', (event) => {
        error = event.error;
    }, true);
})($ || ($ = {}));
//mol/try/try.web.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/date/date.view.css", "[mol_date_bubble] {\n\tpadding: .5rem;\n}\n\n[mol_date_prev] ,\n[mol_date_next] {\n\tflex-grow: 1;\n}\n[mol_date_prev] {\n\tjustify-content: flex-end;\n}\n\n[mol_date_calendar_title] {\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_date_calendar_day] {\n\tpadding: 0;\n}\n\n[mol_date_calendar_day_button] {\n\twidth: 100%;\n\tpadding: .25rem .5rem;\n\tjustify-content: center;\n\tcursor: pointer;\n\tcolor: inherit;\n}\n");
})($ || ($ = {}));
//mol/date/-css/date.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_date extends $.$mol_date {
            trigger_content() {
                return [this.value_moment()?.toString('YYYY-MM-DD hh:mm') ?? this.Icon()];
            }
            value(val) {
                const moment = this.value_moment();
                if (val === undefined)
                    return moment?.toString('YYYY-MM-DD hh:mm') ?? '';
                const moment2 = $mol_try(() => val && new $mol_time_moment(val)) || null;
                if (moment2 instanceof Error)
                    return val;
                this.value_moment(moment2);
                return val;
            }
            value_moment(val) {
                const stamp = this.value_number(val && val.valueOf());
                return isNaN(stamp) ? null : new $mol_time_moment(stamp);
            }
            month_moment(next) {
                if (next)
                    return next;
                let moment = $mol_try(() => new $mol_time_moment(this.value()));
                if (moment instanceof Error || !moment.year)
                    return new $mol_time_moment;
                if (moment.month === undefined) {
                    moment = moment.merge({ month: 0 });
                }
                return moment;
            }
            day_selected(day) {
                return this.value_moment()?.toString('YYYY-MM-DD') === day;
            }
            day_click(day) {
                const moment = new $mol_time_moment(day);
                this.value_moment(this.value_moment()?.merge(moment) ?? moment);
                this.showed(false);
            }
            prev() {
                this.month_moment(this.month_moment().shift({ month: -1 }));
            }
            next() {
                this.month_moment(this.month_moment().shift({ month: +1 }));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value_moment", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "month_moment", null);
        $$.$mol_date = $mol_date;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/date/date.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_date extends $hyoo_sketch_element_base {
        Picker() {
            const obj = new this.$.$mol_date();
            obj.value_moment = (next) => this.date(next);
            return obj;
        }
        View() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.formated_date()
            ];
            return obj;
        }
        Element() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                date: this.date_options()
            };
        }
        date(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        formated_date() {
            return "";
        }
        Date_control() {
            const obj = new this.$.$mol_date();
            obj.align = () => "bottom_center";
            obj.value_moment = (next) => this.date(next);
            return obj;
        }
        Date_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_date_Date_option_name');
            obj.Control = () => this.Date_control();
            return obj;
        }
        type_default() {
            return "Picker";
        }
        type(next) {
            return this.type_default();
        }
        Type_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.type(next);
            obj.options = () => ({
                Picker: this.$.$mol_locale.text('$hyoo_sketch_element_date_Type_control_options_Picker'),
                View: this.$.$mol_locale.text('$hyoo_sketch_element_date_Type_control_options_View')
            });
            return obj;
        }
        Type_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_date_Type_option_name');
            obj.Control = () => this.Type_control();
            return obj;
        }
        format_default() {
            return "Month DD hh:mm";
        }
        format(next) {
            return this.format_default();
        }
        Format_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.format(next);
            return obj;
        }
        Format_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_date_Format_option_name');
            obj.Control = () => this.Format_control();
            return obj;
        }
        date_options() {
            return [
                this.Date_option(),
                this.Type_option(),
                this.Format_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_date.prototype, "Picker", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_date.prototype, "View", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_date.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_date.prototype, "date", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_date.prototype, "Date_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_date.prototype, "Date_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_date.prototype, "Type_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_date.prototype, "Type_option", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_date.prototype, "Format_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_date.prototype, "Format_option", null);
    $.$hyoo_sketch_element_date = $hyoo_sketch_element_date;
})($ || ($ = {}));
//hyoo/sketch/element/date/-view.tree/date.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_sketch_element_date, {
            View: {
                padding: $mol_gap.text,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/date/date.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_date extends $.$hyoo_sketch_element_date {
            Element() {
                return this[this.type()]();
            }
            formated_date() {
                return this.date().toString(this.format());
            }
            date(next) {
                const str = this.state().sub('date_value', $hyoo_crowd_reg).value(next && next.toString());
                return new $mol_time_moment(str ? String(str) : undefined);
            }
            type(next) {
                return String(this.state().sub('date_type', $hyoo_crowd_reg).value(next) ?? this.type_default());
            }
            format(next) {
                return String(this.state().sub('date_format', $hyoo_crowd_reg).value(next) ?? this.format_default());
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_date;
                obj.element = $mol_const(element);
                obj.date(this.date());
                obj.type(this.type());
                obj.format(this.format());
                return element;
            }
        }
        $$.$hyoo_sketch_element_date = $hyoo_sketch_element_date;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/date/date.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_upload extends $mol_icon {
        path() {
            return "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z";
        }
    }
    $.$mol_icon_upload = $mol_icon_upload;
})($ || ($ = {}));
//mol/icon/upload/-view.tree/upload.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_open extends $mol_button_minor {
        sub() {
            return [
                this.Icon(),
                this.Native()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_upload();
            return obj;
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        Native() {
            const obj = new this.$.$mol_button_open_native();
            obj.files = (next) => this.files(next);
            obj.accept = () => this.accept();
            obj.multiple = () => this.multiple();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "files", null);
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "Native", null);
    $.$mol_button_open = $mol_button_open;
    class $mol_button_open_native extends $mol_view {
        dom_name() {
            return "input";
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        attr() {
            return {
                type: "file",
                accept: this.accept(),
                multiple: this.multiple()
            };
        }
        event() {
            return {
                change: (next) => this.picked(next)
            };
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        picked(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_open_native.prototype, "files", null);
    __decorate([
        $mol_mem
    ], $mol_button_open_native.prototype, "picked", null);
    $.$mol_button_open_native = $mol_button_open_native;
})($ || ($ = {}));
//mol/button/open/-view.tree/open.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/open/open.view.css", "[mol_button_open_native] {\n\tposition: absolute;\n\tleft: 0;\n\ttop: -100%;\n\twidth: 100%;\n\theight: 200%;\n\tcursor: pointer;\n\topacity: 0;\n}\n");
})($ || ($ = {}));
//mol/button/open/-css/open.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_open_native extends $.$mol_button_open_native {
            dom_node() {
                return super.dom_node();
            }
            picked() {
                const files = this.dom_node().files;
                if (!files || !files.length)
                    return;
                this.files([...files]);
            }
        }
        $$.$mol_button_open_native = $mol_button_open_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/open/open.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title(),
                loading: this.loading()
            };
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        uri() {
            return "";
        }
        loading() {
            return "eager";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//mol/image/-view.tree/image.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n}\n");
})($ || ($ = {}));
//mol/image/-css/image.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_attach extends $mol_view {
        items(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        sub() {
            return [
                this.Content()
            ];
        }
        Add() {
            const obj = new this.$.$mol_button_open();
            obj.title = () => this.attach_title();
            obj.files = (val) => this.attach_new(val);
            return obj;
        }
        Item(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.item_drop(id, event);
            obj.sub = () => [
                this.Image(id)
            ];
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.content();
            return obj;
        }
        attach_title() {
            return "";
        }
        attach_new(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        item_drop(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        item_uri(id) {
            return "";
        }
        Image(id) {
            const obj = new this.$.$mol_image();
            obj.title = () => "";
            obj.uri = () => this.item_uri(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "items", null);
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "Add", null);
    __decorate([
        $mol_mem_key
    ], $mol_attach.prototype, "Item", null);
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "attach_new", null);
    __decorate([
        $mol_mem_key
    ], $mol_attach.prototype, "item_drop", null);
    __decorate([
        $mol_mem_key
    ], $mol_attach.prototype, "Image", null);
    $.$mol_attach = $mol_attach;
})($ || ($ = {}));
//mol/attach/-view.tree/attach.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/attach/attach.view.css", "[mol_attach_item] {\n\twidth: 6rem;\n\theight: 6rem;\n\tborder-radius: var(--mol_gap_round);\n\tpadding: 0;\n}\n\n[mol_attach_image] {\n\tbackground: var(--mol_theme_card);\n\twidth: 100%;\n\theight: 100%;\n}\n\n[mol_attach_add] {\n\tmargin: .375rem;\n\tbackground: var(--mol_theme_card);\n\twidth: 6rem;\n\theight: 6rem;\n\talign-items: center;\n\tjustify-content: center;\n\toverflow: hidden;\n}\n\n[mol_attach_add_icon] {\n\twidth: 50%;\n\theight: 50%;\n}\n");
})($ || ($ = {}));
//mol/attach/-css/attach.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_attach extends $.$mol_attach {
            attach_new(files) {
                this.items([
                    ...this.items(),
                    ...files.map(file => URL.createObjectURL(file)),
                ]);
            }
            content() {
                return [...this.items().map((_, i) => this.Item(i)), this.Add()];
            }
            item_uri(index) {
                return this.items()[index];
            }
            item_drop(index, event) {
                const items = this.items();
                this.items([
                    ...items.slice(0, index),
                    ...items.slice(index + 1),
                ]);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_attach.prototype, "content", null);
        $$.$mol_attach = $mol_attach;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/attach/attach.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_attach extends $hyoo_sketch_element_base {
        Element() {
            const obj = new this.$.$mol_attach();
            obj.items = (next) => this.files(next);
            return obj;
        }
        width_default() {
            return 336;
        }
        height_default() {
            return 120;
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_attach.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_attach.prototype, "files", null);
    $.$hyoo_sketch_element_attach = $hyoo_sketch_element_attach;
})($ || ($ = {}));
//hyoo/sketch/element/attach/-view.tree/attach.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$hyoo_sketch_element_attach, {});
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/attach/attach.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $mol_view {
        style() {
            return {
                ...super.style(),
                minHeight: "auto"
            };
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//mol/float/-view.tree/float.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//mol/float/-css/float.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_chevron();
            return obj;
        }
        level() {
            return 0;
        }
        style() {
            return {
                ...super.style(),
                paddingLeft: this.level_style()
            };
        }
        checked(val) {
            return this.expanded(val);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//mol/check/expand/-view.tree/expand.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin: .25rem -.25rem;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon_path] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//mol/check/expand/-css/expand.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/expand/expand.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $mol_view {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(id) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return {};
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        minimal_width() {
            return 0;
        }
        sub() {
            return [
                this.Head(),
                this.Table()
            ];
        }
        Head() {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.head_cells();
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.minimal_height = () => this.row_height();
            obj.minimal_width = () => this.minimal_width();
            obj.cells = () => this.cells(id);
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.cell_content_text(id);
            return obj;
        }
        Cell_number(id) {
            const obj = new this.$.$mol_grid_number();
            obj.sub = () => this.cell_content_number(id);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        Cell_branch(id) {
            const obj = new this.$.$mol_check_expand();
            obj.level = () => this.cell_level(id);
            obj.label = () => this.cell_content(id);
            obj.expanded = (val) => this.cell_expanded(id, val);
            return obj;
        }
        Cell_content(id) {
            return [
                this.Cell_dimmer(id)
            ];
        }
        rows() {
            return [];
        }
        Table() {
            const obj = new this.$.$mol_grid_table();
            obj.sub = () => this.rows();
            return obj;
        }
        head_cells() {
            return [];
        }
        cells(id) {
            return [];
        }
        cell_content(id) {
            return [];
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        col_head_content(id) {
            return [];
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
        Cell_dimmer(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.needle();
            obj.haystack = () => this.cell_value(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $mol_list {
        dom_name() {
            return "table";
        }
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $mol_view {
        dom_name() {
            return "tr";
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $mol_view {
        dom_name() {
            return "td";
        }
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//mol/grid/-view.tree/grid.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > * ,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 1px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > * {\n\tbox-shadow: inset 1px 0 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > *:first-child {\n\tbox-shadow: none;\n}\n\n[mol_grid_table] > * > *:first-child {\n\tbox-shadow: inset 0px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n[mol_grid_cell_number] {\n\ttext-align: right;\n}\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//mol/grid/-css/grid.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/grid/grid.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $mol_link {
        sub() {
            return [
                this.Icon()
            ];
        }
        content() {
            return [
                this.title()
            ];
        }
        host() {
            return "";
        }
        icon() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.icon();
            obj.title = () => "";
            return obj;
        }
        title() {
            return this.uri();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//mol/link/iconed/-view.tree/iconed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: baseline;\n\tdisplay: inline-flex;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1rem;\n\twidth: 1rem;\n\tflex: 0 0 auto;\n\tdisplay: inline-block;\n\tmargin: .25rem 0;\n\talign-self: normal;\n\tvertical-align: text-top;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));
//mol/link/iconed/-css/iconed.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                const uri = this.uri();
                const host = this.host();
                const suffix = (host ? uri.split(this.host(), 2)[1] : uri).replace(/^[\/\?#!]+/, '');
                return decodeURIComponent(suffix || host).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "icon", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "sub", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/iconed/iconed.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $mol_view {
        Sub() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//mol/ghost/-view.tree/ghost.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node(next) {
                const node = this.Sub().dom_node(next);
                $mol_dom_render_attributes(node, this.attr_static());
                $mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $mol_dom_render_attributes(node, attr);
                $mol_dom_render_styles(node, style);
                $mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                try {
                    this.dom_node_actual();
                    this.auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/ghost/ghost.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_native extends $mol_scroll {
        uri(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        dom_name() {
            return "object";
        }
        window() {
            return null;
        }
        attr() {
            return {
                ...super.attr(),
                data: this.uri(),
                type: this.mime()
            };
        }
        sub() {
            return [
                this.Fallback()
            ];
        }
        message() {
            return {
                hashchange: (next) => this.uri_change(next)
            };
        }
        mime() {
            return "";
        }
        title() {
            return "";
        }
        Fallback() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.uri();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        uri_change(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "uri", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "Fallback", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "uri_change", null);
    $.$mol_embed_native = $mol_embed_native;
})($ || ($ = {}));
//mol/embed/native/-view.tree/native.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise() {
        let done;
        let fail;
        const promise = new Promise((d, f) => {
            done = d;
            fail = f;
        });
        return Object.assign(promise, {
            done,
            fail,
        });
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));
//mol/promise/promise.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));
//mol/wait/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmax-width: 100%;\n\tmax-height: 100vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n}\n");
})($ || ($ = {}));
//mol/embed/native/-css/native.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            window() {
                $mol_wire_solid();
                return $mol_wire_sync(this).load(this.dom_node_actual());
            }
            load(frame) {
                return new Promise((done, fail) => {
                    frame.onload = () => {
                        try {
                            if (frame.contentWindow.location.href === 'about:blank') {
                                return;
                            }
                        }
                        catch { }
                        done(frame.contentWindow);
                    };
                    frame.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                });
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            message_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async(this).message_receive);
            }
            message_receive(event) {
                if (!event)
                    return;
                if (event.source !== this.window())
                    return;
                if (!Array.isArray(event.data))
                    return;
                this.message()[event.data[0]]?.(event);
            }
            uri_change(event) {
                this.$.$mol_wait_timeout(1000);
                this.uri(event.data[1]);
            }
            auto() {
                return [
                    this.message_listener(),
                    this.window(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "window", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "message_listener", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/native/native.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_frame extends $mol_embed_native {
        dom_name() {
            return "iframe";
        }
        attr() {
            return {
                ...super.attr(),
                data: null,
                type: null,
                src: this.uri(),
                srcdoc: this.html(),
                allow: this.allow(),
                allowfullscreen: this.fullscreen()
            };
        }
        accelerometer() {
            return true;
        }
        autoplay() {
            return true;
        }
        encription() {
            return true;
        }
        gyroscope() {
            return true;
        }
        pip() {
            return true;
        }
        uri(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        html() {
            return null;
        }
        allow() {
            return "";
        }
        fullscreen() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_frame.prototype, "uri", null);
    $.$mol_frame = $mol_frame;
})($ || ($ = {}));
//mol/frame/-view.tree/frame.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_frame, {
        border: {
            style: 'none',
        },
        maxHeight: $mol_style_unit.vh(100),
    });
})($ || ($ = {}));
//mol/frame/frame.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_frame extends $.$mol_frame {
            window() {
                if (this.html())
                    return this.dom_node().contentWindow;
                return super.window();
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                ].join(';');
            }
        }
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/frame/frame.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_youtube extends $mol_check {
        uri() {
            return "";
        }
        video_preview() {
            return "";
        }
        video_id() {
            return "";
        }
        checked(next) {
            return this.active(next);
        }
        sub() {
            return [
                this.Image(),
                this.Frame()
            ];
        }
        active(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        title() {
            return "";
        }
        Image() {
            const obj = new this.$.$mol_image();
            obj.title = () => this.title();
            obj.uri = () => this.video_preview();
            return obj;
        }
        video_embed() {
            return "";
        }
        Frame() {
            const obj = new this.$.$mol_frame();
            obj.title = () => this.title();
            obj.uri = () => this.video_embed();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "active", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Frame", null);
    $.$mol_embed_youtube = $mol_embed_youtube;
})($ || ($ = {}));
//mol/embed/youtube/-view.tree/youtube.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/youtube/youtube.view.css", "[mol_embed_youtube] {\n\tpadding: 0;\n}\n\n[mol_embed_youtube_image]:not(:hover):not(:focus) {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//mol/embed/youtube/-css/youtube.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_youtube extends $.$mol_embed_youtube {
            video_embed() {
                return `https://www.youtube.com/embed/${encodeURIComponent(this.video_id())}?autoplay=1&loop=1`;
            }
            video_id() {
                return this.uri().match(/^https\:\/\/www\.youtube\.com\/(?:embed\/|watch\?v=)([^\/&?#]+)/)?.[1] ?? 'about:blank';
            }
            video_preview() {
                return `https://i.ytimg.com/vi_webp/${this.video_id()}/sddefault.webp`;
            }
            sub() {
                return [this.active() ? this.Frame() : this.Image()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_preview", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "sub", null);
        $$.$mol_embed_youtube = $mol_embed_youtube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/youtube/youtube.view.tsx
;
"use strict";
var $;
(function ($) {
    class $mol_embed_any extends $mol_ghost {
        Image() {
            const obj = new this.$.$mol_image();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        Object() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        Youtube() {
            const obj = new this.$.$mol_embed_youtube();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        title() {
            return "";
        }
        uri() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Object", null);
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Youtube", null);
    $.$mol_embed_any = $mol_embed_any;
})($ || ($ = {}));
//mol/embed/any/-view.tree/any.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_any extends $.$mol_embed_any {
            type() {
                try {
                    const uri = this.uri();
                    if (/\.(png|gif|jpg|jpeg|webp|svg)$/.test(uri))
                        return 'image';
                    if (/^https:\/\/www\.youtube\.com\//.test(uri))
                        return 'youtube';
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 'image';
                }
                return 'object';
            }
            Sub() {
                switch (this.type()) {
                    case 'image': return this.Image();
                    case 'youtube': return this.Youtube();
                    default: return this.Object();
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "type", null);
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "Sub", null);
        $$.$mol_embed_any = $mol_embed_any;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/any/any.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        param() {
            return "";
        }
        flow_tokens() {
            return [];
        }
        auto() {
            return [
                this.auto_scroll()
            ];
        }
        Paragraph(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.block_content(id);
            return obj;
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.quote_text(id);
            obj.highlight = () => this.highlight();
            obj.auto_scroll = () => null;
            return obj;
        }
        List(id) {
            const obj = new this.$.$mol_text();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.list_text(id);
            obj.highlight = () => this.highlight();
            obj.auto_scroll = () => null;
            return obj;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.minimal_height = () => 40;
            obj.dom_name = () => this.header_level(id);
            obj.content = () => this.block_content(id);
            obj.arg = () => this.header_arg(id);
            return obj;
        }
        Pre(id) {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.pre_text(id);
            obj.highlight = () => this.highlight();
            obj.sidebar_showed = () => this.pre_sidebar_showed();
            return obj;
        }
        Table(id) {
            const obj = new this.$.$mol_grid();
            obj.head_cells = () => this.table_head_cells(id);
            obj.rows = () => this.table_rows(id);
            return obj;
        }
        Table_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.table_cells(id);
            return obj;
        }
        Table_cell(id) {
            const obj = new this.$.$mol_text();
            obj.auto_scroll = () => null;
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.table_cell_text(id);
            return obj;
        }
        String(id) {
            const obj = new this.$.$mol_dimmer();
            obj.dom_name = () => "span";
            obj.needle = () => this.highlight();
            obj.haystack = () => this.line_text(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            obj.dom_name = () => "span";
            obj.type = () => this.line_type(id);
            obj.sub = () => this.line_content(id);
            return obj;
        }
        Code_line(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => false;
            obj.highlight = () => this.highlight();
            obj.text = () => this.line_text(id);
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => this.line_content(id);
            return obj;
        }
        Link_http(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => [
                this.link_host(id)
            ];
            return obj;
        }
        Embed(id) {
            const obj = new this.$.$mol_embed_any();
            obj.uri = () => this.link_uri(id);
            obj.title = () => this.line_text(id);
            return obj;
        }
        auto_scroll() {
            return null;
        }
        block_content(id) {
            return [];
        }
        uri_resolve(id) {
            return null;
        }
        quote_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        list_text(id) {
            return "";
        }
        header_level(id) {
            return "h";
        }
        header_arg(id) {
            return {};
        }
        pre_text(id) {
            return "";
        }
        code_sidebar_showed() {
            return true;
        }
        pre_sidebar_showed() {
            return this.code_sidebar_showed();
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        table_cells(id) {
            return [];
        }
        table_cell_text(id) {
            return "";
        }
        line_text(id) {
            return "";
        }
        line_type(id) {
            return "";
        }
        line_content(id) {
            return [];
        }
        link_uri(id) {
            return "";
        }
        link_host(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Paragraph", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "List", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Pre", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "String", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Code_line", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link_http", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Embed", null);
    $.$mol_text = $mol_text;
    class $mol_text_header extends $mol_paragraph {
        sub() {
            return [
                this.Link()
            ];
        }
        arg() {
            return {};
        }
        content() {
            return [];
        }
        Link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.arg();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_header_Link_hint');
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_header.prototype, "Link", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
//mol/text/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tmax-width: 50rem;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\tmax-width: 100%;\n\tdisplay: block;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n\twhite-space: normal;\n}\n\n[mol_text_quote] {\n\tmargin: var(--mol_gap_block);\n\tpadding: var(--mol_gap_block);\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_header_link] {\n\tcolor: inherit;\n}\n\n[mol_text_list] {\n\tpadding-left: 1.5rem;\n}\n\n[mol_text_list_paragraph] {\n\tdisplay: list-item;\n}\n\n[mol_text_list_paragraph]::before {\n\tcontent: '•';\n\twidth: 1.5rem;\n\tdisplay: inline-block;\n\tposition: absolute;\n\tmargin-left: -1rem;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n\tdisplay: inline;\n\twhite-space: nowrap;\n}\n\n[mol_text_link_http_icon],\n[mol_text_link_icon] {\n\tmargin: .25rem;\n}\n\n[mol_text_embed_youtube_image],\n[mol_text_embed_youtube_frame],\n[mol_text_embed_object] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\twidth: 100vw;\n\tmax-height: calc( 100vh - 6rem );\n\tvertical-align: top;\n}\n[mol_text_embed_object_fallback] {\n\tpadding: 0;\n}\n[mol_text_embed_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\tmax-height: calc( 100vh - 6rem );\n\tvertical-align: top;\n}\n\n[mol_text_pre] {\n\twhite-space: pre;\n\toverflow-x: auto;\n\ttab-size: 2;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));
//mol/text/text/-css/text.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            flow_tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            block_type(index) {
                return this.flow_tokens()[index].name;
            }
            rows() {
                return this.flow_tokens().map(({ name }, index) => {
                    switch (name) {
                        case 'quote': return this.Quote(index);
                        case 'header': return this.Header(index);
                        case 'list': return this.List(index);
                        case 'code': return this.Pre(index);
                        case 'code-indent': return this.Pre(index);
                        case 'table': return this.Table(index);
                        default: return this.Paragraph(index);
                    }
                });
            }
            param() {
                return this.toString().replace(/^.*?\)\./, '').replace(/[()]/g, '');
            }
            header_level(index) {
                return 'h' + this.flow_tokens()[index].chunks[0].length;
            }
            header_arg(index) {
                return {
                    [this.param()]: this.flow_tokens()[index].chunks[2]
                };
            }
            pre_text(index) {
                const token = this.flow_tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^(\t|    )/gm, '')).replace(/[\n\r]*$/, '');
            }
            quote_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            list_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^([-*+ ]|\d+\.) ?/mg, '').replace(/^  /mg, '');
            }
            cell_content(indexBlock) {
                return this.flow_tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_content(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_content(blockId)[0]
                    .map((cell, cellId) => this.Table_cell({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_content(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_text(id) {
                return this.cell_content(id.block)[id.row][id.cell];
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            block_text(index) {
                const token = this.flow_tokens()[index];
                switch (token.name) {
                    case 'header': return token.chunks[2];
                    default: return token.chunks[0];
                }
            }
            block_content(index) {
                return this.line_content([index]);
            }
            line_tokens(path) {
                const tokens = [];
                this.$.$mol_syntax2_md_line.tokenize(this.line_text(path), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            line_token(path) {
                const tokens = this.line_tokens(path.slice(0, path.length - 1));
                return tokens[path[path.length - 1]];
            }
            line_type(path) {
                return this.line_token(path).name;
            }
            line_text(path) {
                if (path.length === 1)
                    return this.block_text(path[0]);
                const { name, found, chunks } = this.line_token(path);
                switch (name) {
                    default: return (chunks[0] || chunks[1]) ?? found;
                }
            }
            line_content(path) {
                return this.line_tokens(path).map(({ name, chunks }, index) => {
                    const path2 = [...path, index];
                    switch (name) {
                        case 'text-link-http': return this.Link_http(path2);
                        case 'text-link': return this.Link(path2);
                        case 'image-link': return this.Embed(path2);
                        case 'code3': return this.Code_line(path2);
                        case 'code': return this.Code_line(path2);
                        case '': return this.String(path2);
                        default: return this.Span(path2);
                    }
                });
            }
            link_uri(path) {
                const token = this.line_token(path);
                const uri = this.uri_resolve(token.chunks[1] ?? token.found);
                if (!uri)
                    throw new Error('Bad link');
                return uri;
            }
            link_host(path) {
                return this.link_uri(path).replace(/^.*?\/\/|\/.*$/g, '');
            }
            auto_scroll() {
                for (const [index, token] of this.flow_tokens().entries()) {
                    if (token.name !== 'header')
                        continue;
                    const header = this.Header(index);
                    if (!header.Link().current())
                        continue;
                    new $mol_after_tick(() => this.ensure_visible(header));
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "flow_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "param", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_level", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_arg", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "quote_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "list_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "cell_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "uri_resolve", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_token", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_host", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "auto_scroll", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/text/text.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_markdown extends $hyoo_sketch_element_base {
        Element() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.text();
            return obj;
        }
        Options() {
            return {
                ...super.Options(),
                markdown: this.markdown_options()
            };
        }
        text_default() {
            return "# Hello world!\nHow are you?\n**use markdwon here**";
        }
        text(next) {
            return this.text_default();
        }
        Text_option() {
            const obj = new this.$.$mol_textarea();
            obj.style = () => ({
                height: "150px"
            });
            obj.value = (next) => this.text(next);
            return obj;
        }
        markdown_options() {
            return [
                this.Text_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_markdown.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_markdown.prototype, "Text_option", null);
    $.$hyoo_sketch_element_markdown = $hyoo_sketch_element_markdown;
})($ || ($ = {}));
//hyoo/sketch/element/markdown/-view.tree/markdown.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_markdown extends $.$hyoo_sketch_element_markdown {
            text(next) {
                return this.state().sub('markdown_text', $hyoo_crowd_text).text(next) || this.text_default();
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_markdown;
                obj.element = $mol_const(element);
                obj.text(this.text());
                return element;
            }
        }
        $$.$hyoo_sketch_element_markdown = $hyoo_sketch_element_markdown;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/markdown/markdown.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_speck extends $hyoo_sketch_element_base {
        Resize() {
            return null;
        }
        Element() {
            const obj = new this.$.$mol_speck();
            obj.style = () => ({
                width: "auto",
                height: "auto",
                minWidth: 10,
                minHeight: this.min_height()
            });
            obj.value = () => this.speck_value();
            return obj;
        }
        Position_options() {
            return [
                this.Option_left(),
                this.Option_top(),
                this.Option_order()
            ];
        }
        Options() {
            return {
                ...super.Options(),
                speck: this.speck_options()
            };
        }
        width_default() {
            return 20;
        }
        height_default() {
            return 20;
        }
        min_height() {
            return "10";
        }
        speck_value_default() {
            return "8";
        }
        speck_value(next) {
            return this.speck_value_default();
        }
        Speck_value_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.speck_value(next);
            return obj;
        }
        Speck_value_options() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_speck_Speck_value_options_name');
            obj.Control = () => this.Speck_value_control();
            return obj;
        }
        speck_options() {
            return [
                this.Speck_value_options()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_speck.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_speck.prototype, "Speck_value_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_speck.prototype, "Speck_value_options", null);
    $.$hyoo_sketch_element_speck = $hyoo_sketch_element_speck;
})($ || ($ = {}));
//hyoo/sketch/element/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_speck extends $.$hyoo_sketch_element_speck {
            speck_value(next) {
                return String(this.state().sub('speck_value', $hyoo_crowd_reg).value(next) ?? this.speck_value_default());
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_speck;
                obj.element = $mol_const(element);
                obj.speck_value(this.speck_value());
                return element;
            }
            min_height() {
                return 10;
            }
        }
        $$.$hyoo_sketch_element_speck = $hyoo_sketch_element_speck;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/speck/speck.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_vector extends Array {
        get length() {
            return super.length;
        }
        constructor(...values) { super(...values); }
        map(convert, self) {
            return super.map(convert, self);
        }
        merged(patches, combine) {
            return this.map((value, index) => combine(value, patches[index]));
        }
        limited(limits) {
            return this.merged(limits, (value, [min, max]) => (value < min) ? min : (value > max) ? max : value);
        }
        added0(diff) {
            return this.map(value => value + diff);
        }
        added1(diff) {
            return this.merged(diff, (a, b) => a + b);
        }
        multed0(mult) {
            return this.map(value => value * mult);
        }
        multed1(mults) {
            return this.merged(mults, (a, b) => a * b);
        }
        powered0(mult) {
            return this.map(value => value ** mult);
        }
        expanded1(point) {
            return this.merged(point, (range, value) => range.expanded0(value));
        }
        expanded2(point) {
            return this.merged(point, (range1, range2) => {
                let next = range1;
                const Range = range1.constructor;
                if (range1[0] > range2[0])
                    next = new Range(range2[0], next.max);
                if (range1[1] < range2[1])
                    next = new Range(next.min, range2[1]);
                return next;
            });
        }
        center() {
            const Result = this[0].constructor;
            return new Result(...this[0].map((_, i) => this.reduce((sum, point) => sum + point[i], 0) / this.length));
        }
        distance() {
            let distance = 0;
            for (let i = 1; i < this.length; ++i) {
                distance += this[i - 1].reduce((sum, min, j) => sum + (min - this[i][j]) ** 2, 0) ** (1 / this[i].length);
            }
            return distance;
        }
        transponed() {
            return this[0].map((_, i) => this.map(row => row[i]));
        }
        get x() { return this[0]; }
        set x(next) { this[0] = next; }
        get y() { return this[1]; }
        set y(next) { this[1] = next; }
        get z() { return this[2]; }
        set z(next) { this[2] = next; }
    }
    $.$mol_vector = $mol_vector;
    class $mol_vector_1d extends $mol_vector {
    }
    $.$mol_vector_1d = $mol_vector_1d;
    class $mol_vector_2d extends $mol_vector {
    }
    $.$mol_vector_2d = $mol_vector_2d;
    class $mol_vector_3d extends $mol_vector {
    }
    $.$mol_vector_3d = $mol_vector_3d;
    class $mol_vector_range extends $mol_vector {
        0;
        1;
        constructor(min, max = min) {
            super(min, max);
            this[0] = min;
            this[1] = max;
        }
        get min() { return this[0]; }
        set min(next) { this[0] = next; }
        get max() { return this[1]; }
        set max(next) { this[1] = next; }
        get inversed() {
            return new this.constructor(this.max, this.min);
        }
        expanded0(value) {
            const Range = this.constructor;
            let range = this;
            if (value > range.max)
                range = new Range(range.min, value);
            if (value < range.min)
                range = new Range(value, range.max);
            return range;
        }
    }
    $.$mol_vector_range = $mol_vector_range;
    $.$mol_vector_range_full = new $mol_vector_range(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    class $mol_vector_matrix extends $mol_vector {
        added2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 + b[index]));
        }
        multed2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 * b[index]));
        }
    }
    $.$mol_vector_matrix = $mol_vector_matrix;
})($ || ($ = {}));
//mol/vector/vector.ts
;
"use strict";
var $;
(function ($) {
    class $mol_map_yandex_mark extends $mol_object {
        pos() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        box() {
            const obj = new this.$.$mol_vector_2d(this.box_lat(), this.box_lon());
            return obj;
        }
        hint() {
            return "";
        }
        title() {
            return this.address();
        }
        content() {
            return "";
        }
        object() {
            return null;
        }
        box_lat() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        box_lon() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        address() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_map_yandex_mark.prototype, "pos", null);
    __decorate([
        $mol_mem
    ], $mol_map_yandex_mark.prototype, "box", null);
    __decorate([
        $mol_mem
    ], $mol_map_yandex_mark.prototype, "box_lat", null);
    __decorate([
        $mol_mem
    ], $mol_map_yandex_mark.prototype, "box_lon", null);
    $.$mol_map_yandex_mark = $mol_map_yandex_mark;
})($ || ($ = {}));
//mol/map/yandex/mark/-view.tree/mark.view.tree.ts
;
"use strict";
//mol/type/unary/unary.ts
;
"use strict";
//mol/type/param/param.ts
;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        return Object.getOwnPropertyDescriptor(func, 'prototype')?.writable === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));
//mol/func/is/class/class.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_pipe(...funcs) {
        return $mol_data_setup(function (input) {
            let value = input;
            for (const func of funcs)
                value = $mol_func_is_class(func) ? new func(value) : func.call(this, value);
            return value;
        }, { funcs });
    }
    $.$mol_data_pipe = $mol_data_pipe;
})($ || ($ = {}));
//mol/data/pipe/pipe.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));
//mol/data/string/string.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_array(sub) {
        return $mol_data_setup((val) => {
            if (!Array.isArray(val))
                return $mol_fail(new $mol_data_error(`${val} is not an array`));
            return val.map((item, index) => {
                try {
                    return sub(item);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${index}] ${error.message}`;
                    return $mol_fail(error);
                }
            });
        }, sub);
    }
    $.$mol_data_array = $mol_data_array;
})($ || ($ = {}));
//mol/data/array/array.ts
;
"use strict";
//mol/type/partial/undefined/undefined.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_record(sub) {
        return $mol_data_setup((val) => {
            let res = {};
            for (const field in sub) {
                try {
                    res[field] = sub[field](val[field]);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_record = $mol_data_record;
})($ || ($ = {}));
//mol/data/record/record.ts
;
"use strict";
var $;
(function ($) {
    const Numb = $mol_data_pipe($mol_data_string, parseFloat);
    const Response = $mol_data_array($mol_data_record({
        boundingbox: $mol_data_array(Numb),
        lat: Numb,
        lon: Numb,
    }));
    $.$mol_geo_search_attribution = 'https://osm.org/copyright';
    function $mol_geo_search({ query, count = 1 }) {
        const url = new URL('https://nominatim.openstreetmap.org/search');
        url.searchParams.set('q', query);
        url.searchParams.set('limit', count.toString());
        url.searchParams.set('format', 'jsonv2');
        const json = $mol_fetch.json(url.toString());
        return Response(json).map(({ lon, lat, boundingbox: box }) => {
            return {
                coord: new $mol_vector_2d(lon, lat),
                box: new $mol_vector_2d(new $mol_vector_range(box[2], box[3]), new $mol_vector_range(box[0], box[1])),
            };
        });
    }
    $.$mol_geo_search = $mol_geo_search;
})($ || ($ = {}));
//mol/geo/search/search.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_map_yandex_mark extends $.$mol_map_yandex_mark {
            object() {
                const ymaps = $mol_map_yandex.api();
                return new ymaps.Placemark(this.pos(), {
                    hintContent: this.hint(),
                    iconContent: this.title(),
                    balloonContent: this.content(),
                }, {
                    preset: "islands#redStretchyIcon",
                });
            }
            found() {
                return $mol_geo_search({ query: this.address() })[0] ?? null;
            }
            pos() {
                return this.found()?.coord ?? super.pos();
            }
            box() {
                return this.found()?.box ?? super.pos();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_map_yandex_mark.prototype, "object", null);
        __decorate([
            $mol_mem
        ], $mol_map_yandex_mark.prototype, "found", null);
        __decorate([
            $mol_mem
        ], $mol_map_yandex_mark.prototype, "box", null);
        $$.$mol_map_yandex_mark = $mol_map_yandex_mark;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/map/yandex/mark/mark.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_map_yandex extends $mol_view {
        zoom(val) {
            if (val !== undefined)
                return val;
            return 2;
        }
        center(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        objects() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_map_yandex.prototype, "zoom", null);
    __decorate([
        $mol_mem
    ], $mol_map_yandex.prototype, "center", null);
    $.$mol_map_yandex = $mol_map_yandex;
})($ || ($ = {}));
//mol/map/yandex/-view.tree/yandex.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_import extends $mol_object2 {
        static module(uri) {
            return $mol_wire_sync(this).module_async(uri);
        }
        static module_async(uri) {
            return import(uri);
        }
        static script(uri) {
            return $mol_wire_sync(this).script_async(uri);
        }
        static script_async(uri) {
            const doc = $mol_dom_context.document;
            const script = doc.createElement('script');
            script.src = uri;
            doc.head.appendChild(script);
            return new Promise((done, fail) => {
                script.onload = () => done($mol_dom_context);
                script.onerror = () => fail(new Error(`Can not import ${uri}`));
            });
        }
        static style(uri) {
            return $mol_wire_sync(this).style_async(uri);
        }
        static style_async(uri) {
            const doc = $mol_dom_context.document;
            const style = doc.createElement('link');
            style.rel = 'stylesheet';
            style.href = uri;
            doc.head.appendChild(style);
            return new Promise((done, fail) => {
                style.onload = () => done(style.sheet);
                style.onerror = () => fail(new Error(`Can not import ${uri}`));
            });
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_import, "module", null);
    __decorate([
        $mol_mem_key
    ], $mol_import, "script", null);
    __decorate([
        $mol_mem_key
    ], $mol_import, "style", null);
    $.$mol_import = $mol_import;
})($ || ($ = {}));
//mol/import/import.ts
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() { super(); }
        $mol_mem_force = true;
        static $mol_mem_force = true;
        static toString() { return this.name; }
    }
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//mol/mem/force/force.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/map/yandex/yandex.view.css", "[mol_map_yandex] {\n\tflex: auto;\n\talign-self: stretch;\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));
//mol/map/yandex/-css/yandex.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_map_yandex extends $.$mol_map_yandex {
            static api() {
                return $mol_import.script(`https://api-maps.yandex.ru/2.1/?lang=${$mol_locale.lang()}`).ymaps;
            }
            wait_ready(ymaps) {
                return new Promise(done => ymaps.ready(done));
            }
            api(next, force) {
                const ymaps = $mol_map_yandex.api();
                $mol_wire_sync(this).wait_ready(ymaps);
                const api = new ymaps.Map(this.dom_node(), {
                    center: [0, 0],
                    zoom: 0,
                });
                api.copyrights.add($mol_geo_search_attribution);
                api.controls.remove('fullscreenControl');
                api.controls.remove('typeSelector');
                api.events.add(['actionend'], (event) => {
                    new $mol_after_tick($mol_fiber_root(() => {
                        this.update(event);
                    }));
                });
                return api;
            }
            update(event) {
                this.zoom(this.api().getZoom());
                this.center(this.api().getCenter());
            }
            bounds_updated() {
                const box = this.objects()[0]?.box();
                if (box) {
                    this.api().setBounds([
                        [box.x.min, box.y.min],
                        [box.x.max, box.y.max],
                    ]);
                }
                return true;
            }
            center(next, force) {
                if (next !== undefined)
                    return next;
                const pos = this.objects()[0]?.pos();
                if (pos)
                    return pos;
                return [0, 0];
            }
            render() {
                const api = this.api();
                api.setCenter(this.center(), this.zoom());
                api.geoObjects.removeAll();
                for (let obj of this.objects()) {
                    api.geoObjects.add(obj.object());
                }
                this.dom_node_actual();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_map_yandex.prototype, "api", null);
        __decorate([
            $mol_mem
        ], $mol_map_yandex.prototype, "bounds_updated", null);
        __decorate([
            $mol_mem
        ], $mol_map_yandex.prototype, "center", null);
        $$.$mol_map_yandex = $mol_map_yandex;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/map/yandex/yandex.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_map extends $hyoo_sketch_element_base {
        Element() {
            const obj = new this.$.$hyoo_sketch_element_map_my();
            obj.center = () => [
                55.755058875094946,
                37.63368014294435
            ];
            obj.zoom = () => 11;
            obj.objects = () => [
                this.Place()
            ];
            return obj;
        }
        width_default() {
            return 336;
        }
        height_default() {
            return 224;
        }
        place_title() {
            return "";
        }
        place_addres() {
            return "Moscow";
        }
        place_content() {
            return "Its Moscow";
        }
        Place() {
            const obj = new this.$.$mol_map_yandex_mark();
            obj.title = () => this.place_title();
            obj.address = () => this.place_addres();
            obj.content = () => this.place_content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_map.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_map.prototype, "Place", null);
    $.$hyoo_sketch_element_map = $hyoo_sketch_element_map;
    class $hyoo_sketch_element_map_my extends $mol_map_yandex {
    }
    $.$hyoo_sketch_element_map_my = $hyoo_sketch_element_map_my;
})($ || ($ = {}));
//hyoo/sketch/element/map/-view.tree/map.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_map extends $.$hyoo_sketch_element_map {
        }
        $$.$hyoo_sketch_element_map = $hyoo_sketch_element_map;
        class $hyoo_sketch_element_map_my extends $.$hyoo_sketch_element_map_my {
            api(next, force) {
                const ymaps = $mol_map_yandex.api();
                $mol_wire_sync(this).wait_ready(ymaps);
                const api = new ymaps.Map(this.dom_node(), {
                    center: [0, 0],
                    zoom: 0,
                }, {
                    autoFitToViewport: 'always',
                });
                api.copyrights.add($mol_geo_search_attribution);
                api.controls.remove('fullscreenControl');
                api.controls.remove('typeSelector');
                api.events.add(['actionend'], (event) => {
                    new $mol_after_tick($mol_fiber_root(() => {
                        this.update(event);
                    }));
                });
                return api;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_sketch_element_map_my.prototype, "api", null);
        $$.$hyoo_sketch_element_map_my = $hyoo_sketch_element_map_my;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/map/map.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_header extends $hyoo_sketch_element_base {
        Head() {
            return this.Page().Head();
        }
        Page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.title();
            return obj;
        }
        Element() {
            return this.Head();
        }
        height_default() {
            return 64;
        }
        width_default() {
            return 340;
        }
        Options() {
            return {
                ...super.Options(),
                header: this.header_options()
            };
        }
        title_default() {
            return "Page title";
        }
        title(next) {
            return this.title_default();
        }
        Title_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.title(next);
            return obj;
        }
        Title_option() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_header_Title_option_name');
            obj.Control = () => this.Title_control();
            return obj;
        }
        header_options() {
            return [
                this.Title_option()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_header.prototype, "Page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_header.prototype, "Title_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_header.prototype, "Title_option", null);
    $.$hyoo_sketch_element_header = $hyoo_sketch_element_header;
})($ || ($ = {}));
//hyoo/sketch/element/header/-view.tree/header.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_header extends $.$hyoo_sketch_element_header {
            title(next) {
                return String(this.state().sub('header_title', $hyoo_crowd_reg).value(next) ?? this.title_default());
            }
            title_default() {
                return this.page().name() ?? super.title_default();
            }
            duplicate(elem) {
                const element = elem ?? super.duplicate();
                const obj = new $hyoo_sketch_element_header;
                obj.element = $mol_const(element);
                obj.title(this.title());
                return element;
            }
        }
        $$.$hyoo_sketch_element_header = $hyoo_sketch_element_header;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/header/header.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_television extends $mol_icon {
        path() {
            return "M21,17H3V5H21M21,3H3C1.9,3 1,3.9 1,5V17C1,18.1 1.9,19 3,19H8V21H16V19H21C22.1,19 23,18.1 23,17V5C23,3.9 22.1,3 21,3Z";
        }
    }
    $.$mol_icon_television = $mol_icon_television;
})($ || ($ = {}));
//mol/icon/television/-view.tree/television.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_television_play extends $mol_icon {
        path() {
            return "M21,3H3C1.89,3 1,3.89 1,5V17C1,18.1 1.9,19 3,19H8V21H16V19H21C22.1,19 23,18.1 23,17V5C23,3.89 22.1,3 21,3M21,17H3V5H21M16,11L9,15V7";
        }
    }
    $.$mol_icon_television_play = $mol_icon_television_play;
})($ || ($ = {}));
//mol/icon/television/play/-view.tree/play.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_play extends $mol_icon {
        path() {
            return "M8,5.14V19.14L19,12.14L8,5.14Z";
        }
    }
    $.$mol_icon_play = $mol_icon_play;
})($ || ($ = {}));
//mol/icon/play/-view.tree/play.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_play_circle extends $mol_icon {
        path() {
            return "M10,16.5V7.5L16,12M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_play_circle = $mol_icon_play_circle;
})($ || ($ = {}));
//mol/icon/play/circle/-view.tree/circle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_person_avatar extends $mol_view {
        id() {
            return this.person().id();
        }
        name() {
            return this.person().name();
        }
        online() {
            return this.person().online();
        }
        person() {
            const obj = new this.$.$hyoo_sketch_person();
            return obj;
        }
        sub() {
            return [
                this.Avatar(),
                this.Name(),
                this.Online()
            ];
        }
        Avatar() {
            const obj = new this.$.$mol_avatar();
            obj.id = () => this.id();
            return obj;
        }
        Name() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.name();
            return obj;
        }
        Online() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.$.$mol_locale.text('$hyoo_sketch_person_avatar_Online_value');
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_avatar.prototype, "person", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_avatar.prototype, "Avatar", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_avatar.prototype, "Name", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_avatar.prototype, "Online", null);
    $.$hyoo_sketch_person_avatar = $hyoo_sketch_person_avatar;
})($ || ($ = {}));
//hyoo/sketch/person/avatar/-view.tree/avatar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_sketch_person_avatar, {
            Online: {
                position: 'static',
            },
            Avatar: {
                margin: {
                    right: $mol_gap.space,
                }
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/person/avatar/avatar.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_person_avatar extends $.$hyoo_sketch_person_avatar {
            name_content() {
                return [
                    this.name(),
                    ...this.person().online() ? [this.Online()] : []
                ];
            }
        }
        $$.$hyoo_sketch_person_avatar = $hyoo_sketch_person_avatar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/person/avatar/avatar.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cursor_default extends $mol_icon {
        path() {
            return "M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19C6.45,19 6,18.55 6,18V3C6,2.45 6.45,2 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z";
        }
    }
    $.$mol_icon_cursor_default = $mol_icon_cursor_default;
})($ || ($ = {}));
//mol/icon/cursor/default/-view.tree/default.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_person_cursor extends $hyoo_sketch_person_avatar {
        sub() {
            return [
                this.Cursor(),
                this.Avatar(),
                this.Name()
            ];
        }
        Cursor() {
            const obj = new this.$.$mol_icon_cursor_default();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_cursor.prototype, "Cursor", null);
    $.$hyoo_sketch_person_cursor = $hyoo_sketch_person_cursor;
})($ || ($ = {}));
//hyoo/sketch/person/cursor/-view.tree/cursor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($hyoo_sketch_person_cursor, {
            position: 'absolute',
            pointerEvents: 'none',
            alignItems: 'flex-end',
            transition: 'all 0.5s ease-out 0s',
            Cursor: {
                height: rem(1.5),
                width: rem(1.5),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/person/cursor/cursor.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_person_cursor extends $.$hyoo_sketch_person_cursor {
            position_set() {
                const node = this.dom_node();
                const pos = this.person().cursor_position();
                node.style.left = pos.x + 'px';
                node.style.top = pos.y + 'px';
            }
            auto() {
                this.position_set();
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_sketch_person_cursor.prototype, "position_set", null);
        $$.$hyoo_sketch_person_cursor = $hyoo_sketch_person_cursor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/person/cursor/cursor.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_editor_paper extends $mol_view {
        page() {
            const obj = new this.$.$hyoo_sketch_page();
            return obj;
        }
        grid() {
            return +NaN;
        }
        event() {
            return {
                ...super.event(),
                pointerdown: (next) => this.pointer_down(next),
                pointerenter: (next) => this.pointer_enter(next)
            };
        }
        style() {
            return {
                ...super.style(),
                width: this.width(),
                height: this.height(),
                backgroundSize: this.background_size()
            };
        }
        attr() {
            return {
                ...super.attr(),
                hyoo_sketch_editor_paper_preview: this.preview(),
                hyoo_sketch_editor_paper_focused: this.selected()
            };
        }
        sub() {
            return [
                this.Content(),
                this.Cursors()
            ];
        }
        pointer_down(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        pointer_enter(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        width() {
            return +NaN;
        }
        height() {
            return +NaN;
        }
        background_size() {
            return "";
        }
        preview() {
            return false;
        }
        selected(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.content();
            return obj;
        }
        person(id) {
            const obj = new this.$.$hyoo_sketch_person();
            return obj;
        }
        Cursor(id) {
            const obj = new this.$.$hyoo_sketch_person_cursor();
            obj.person = () => this.person(id);
            return obj;
        }
        cursors() {
            return [
                this.Cursor("0_0")
            ];
        }
        Cursors() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.cursors();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor_paper.prototype, "page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor_paper.prototype, "pointer_down", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor_paper.prototype, "pointer_enter", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor_paper.prototype, "selected", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor_paper.prototype, "Content", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor_paper.prototype, "person", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor_paper.prototype, "Cursor", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor_paper.prototype, "Cursors", null);
    $.$hyoo_sketch_editor_paper = $hyoo_sketch_editor_paper;
})($ || ($ = {}));
//hyoo/sketch/editor/paper/-view.tree/paper.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/sketch/editor/paper/paper.view.css", "[hyoo_sketch_editor_paper]:where(:not([hyoo_sketch_editor_paper_preview=\"true\"])) {\n\tbackground-image:\n\t\tlinear-gradient(var(--mol_theme_line), transparent 1px),\n\t\tlinear-gradient(90deg, var(--mol_theme_line) , transparent 1px);\n}\n");
})($ || ($ = {}));
//hyoo/sketch/editor/paper/-css/paper.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { px, per } = $mol_style_unit;
        $mol_style_define($.$hyoo_sketch_editor_paper, {
            boxSizing: 'content-box',
            position: 'relative',
            background: {
                color: $mol_theme.back,
            },
            border: {
                width: px(1),
                style: 'solid',
                color: $mol_theme.control,
            },
            Content: {
                width: per(100),
                height: per(100),
            },
            Cursors: {
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/editor/paper/paper.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_editor_paper extends $.$hyoo_sketch_editor_paper {
            person(id) {
                return this.page().domain().person(id);
            }
            background_size() {
                return `${this.grid()}px ${this.grid()}px`;
            }
            pointer_down() {
                this.selected(true);
            }
            pointer_enter(e) {
                const node = this.dom_node();
                const rect = node.getBoundingClientRect();
                const move = (event) => {
                    this.cursor_sync(event.clientX - rect.left, event.clientY - rect.top, this.page().id());
                };
                const leave = (event) => {
                    this.cursor_sync(0, 0, null);
                    node.onpointermove = null;
                    node.onpointerleave = null;
                    node.releasePointerCapture(e.pointerId);
                };
                node.onpointermove = move;
                node.onpointerleave = leave;
                node.setPointerCapture(e.pointerId);
            }
            cursor_sync(x, y, page) {
                this.page().domain().user().cursor_position({ x, y, page });
            }
            cursors() {
                return this.page().project().authors()
                    .filter(obj => obj.id() !== this.page().domain().user().id()
                    && !!obj.cursor_position()
                    && obj.cursor_position().page === this.page()?.id())
                    .map(person => this.Cursor(person.id()));
            }
        }
        __decorate([
            $mol_action
        ], $hyoo_sketch_editor_paper.prototype, "cursor_sync", null);
        __decorate([
            $mol_mem
        ], $hyoo_sketch_editor_paper.prototype, "cursors", null);
        $$.$hyoo_sketch_editor_paper = $hyoo_sketch_editor_paper;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/editor/paper/paper.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_editor extends $mol_page {
        domain() {
            return this.page().domain();
        }
        project() {
            return this.page().project();
        }
        width(next) {
            return this.page().width(next);
        }
        height(next) {
            return this.page().height(next);
        }
        grid(next) {
            return this.page().grid(next);
        }
        page() {
            const obj = new this.$.$hyoo_sketch_page();
            return obj;
        }
        Element(id) {
            const obj = new this.$.$hyoo_sketch_element_base();
            return obj;
        }
        style() {
            return {
                ...super.style(),
                minWidth: 340
            };
        }
        selected(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        title() {
            return this.editor_title();
        }
        tools() {
            return [
                this.Project_demo(),
                this.Page_preview()
            ];
        }
        Page_options() {
            return [
                this.Page_name(),
                this.Page_width(),
                this.Page_height(),
                this.Page_grid()
            ];
        }
        Delete_options() {
            return [
                this.Page_delete()
            ];
        }
        Options() {
            return {};
        }
        body() {
            return [
                this.Paper()
            ];
        }
        Element_base(id) {
            const obj = new this.$.$hyoo_sketch_element_base();
            return obj;
        }
        Element_text(id) {
            const obj = new this.$.$hyoo_sketch_element_text();
            return obj;
        }
        Element_icon(id) {
            const obj = new this.$.$hyoo_sketch_element_icon();
            return obj;
        }
        Element_nav(id) {
            const obj = new this.$.$hyoo_sketch_element_nav();
            return obj;
        }
        Element_button(id) {
            const obj = new this.$.$hyoo_sketch_element_button();
            return obj;
        }
        Element_input(id) {
            const obj = new this.$.$hyoo_sketch_element_input();
            return obj;
        }
        Element_link(id) {
            const obj = new this.$.$hyoo_sketch_element_link();
            return obj;
        }
        Element_image(id) {
            const obj = new this.$.$hyoo_sketch_element_image();
            return obj;
        }
        Element_select(id) {
            const obj = new this.$.$hyoo_sketch_element_select();
            return obj;
        }
        Element_check(id) {
            const obj = new this.$.$hyoo_sketch_element_check();
            return obj;
        }
        Element_switch(id) {
            const obj = new this.$.$hyoo_sketch_element_switch();
            return obj;
        }
        Element_options(id) {
            const obj = new this.$.$hyoo_sketch_element_options();
            return obj;
        }
        Element_textarea(id) {
            const obj = new this.$.$hyoo_sketch_element_textarea();
            return obj;
        }
        Element_date(id) {
            const obj = new this.$.$hyoo_sketch_element_date();
            return obj;
        }
        Element_attach(id) {
            const obj = new this.$.$hyoo_sketch_element_attach();
            return obj;
        }
        Element_markdown(id) {
            const obj = new this.$.$hyoo_sketch_element_markdown();
            return obj;
        }
        Element_speck(id) {
            const obj = new this.$.$hyoo_sketch_element_speck();
            return obj;
        }
        Element_map(id) {
            const obj = new this.$.$hyoo_sketch_element_map();
            return obj;
        }
        Element_header(id) {
            const obj = new this.$.$hyoo_sketch_element_header();
            return obj;
        }
        editor_title() {
            return "";
        }
        Project_demo_icon() {
            const obj = new this.$.$mol_icon_television_play();
            return obj;
        }
        page_current_id() {
            return "";
        }
        Project_demo() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_editor_Project_demo_hint');
            obj.sub = () => [
                this.Project_demo_icon()
            ];
            obj.target = () => "_blank";
            obj.arg = () => ({
                demo: this.page_current_id()
            });
            return obj;
        }
        Page_preview_icon() {
            const obj = new this.$.$mol_icon_play_circle();
            return obj;
        }
        preview(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Page_preview() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_editor_Page_preview_hint');
            obj.Icon = () => this.Page_preview_icon();
            obj.checked = (val) => this.preview(val);
            return obj;
        }
        page_name(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Name() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.page_name(next);
            return obj;
        }
        Page_name() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_editor_Page_name_name');
            obj.Control = () => this.Name();
            return obj;
        }
        Width() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.width(next);
            return obj;
        }
        Page_width() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_editor_Page_width_name');
            obj.Control = () => this.Width();
            return obj;
        }
        Height() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.height(next);
            return obj;
        }
        Page_height() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_editor_Page_height_name');
            obj.Control = () => this.Height();
            return obj;
        }
        Grid() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.grid(next);
            obj.options = () => ({
                4: "4",
                8: "8",
                16: "16",
                32: "32"
            });
            return obj;
        }
        Page_grid() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_editor_Page_grid_name');
            obj.Control = () => this.Grid();
            return obj;
        }
        page_delete(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Delete_control() {
            const obj = new this.$.$mol_button_major();
            obj.click = (next) => this.page_delete(next);
            obj.title = () => this.$.$mol_locale.text('$hyoo_sketch_editor_Delete_control_title');
            return obj;
        }
        Page_delete() {
            const obj = new this.$.$hyoo_sketch_option();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_editor_Page_delete_name');
            obj.Control = () => this.Delete_control();
            return obj;
        }
        paper_selected(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        elements() {
            return [];
        }
        Elements() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.elements();
            return obj;
        }
        Paper() {
            const obj = new this.$.$hyoo_sketch_editor_paper();
            obj.page = () => this.page();
            obj.width = () => this.width();
            obj.height = () => this.height();
            obj.grid = () => this.grid();
            obj.preview = () => this.preview();
            obj.selected = (next) => this.paper_selected(next);
            obj.content = () => [
                this.Elements()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "page", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "selected", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_base", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_text", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_icon", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_nav", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_button", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_input", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_link", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_image", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_select", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_check", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_switch", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_options", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_textarea", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_date", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_attach", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_markdown", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_speck", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_map", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_editor.prototype, "Element_header", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Project_demo_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Project_demo", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Page_preview_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "preview", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Page_preview", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "page_name", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Name", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Page_name", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Width", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Page_width", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Height", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Page_height", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Grid", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Page_grid", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "page_delete", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Delete_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Page_delete", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "paper_selected", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Elements", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_editor.prototype, "Paper", null);
    $.$hyoo_sketch_editor = $hyoo_sketch_editor;
})($ || ($ = {}));
//hyoo/sketch/editor/-view.tree/editor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { px, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($.$hyoo_sketch_editor, {
            Body: {
                padding: $mol_gap.block,
                alignItems: 'center',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/editor/editor.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_editor extends $.$hyoo_sketch_editor {
            element(id) {
                return this.domain().element(id);
            }
            Element(id) {
                const type = this.element(id).type();
                const obj = this[`Element_${type}`](id);
                obj.element = () => this.element(id);
                obj.grid = () => this.grid();
                obj.selected = (next) => this.element_selected(id, next);
                obj.editing = () => this.editing();
                return obj;
            }
            element_render(obj) {
                return this.preview() ? obj.Preview() : obj.Editor();
            }
            elements() {
                return this.page().elements().map(obj => this.element_render(this.Element(obj.id())));
            }
            page_name(next) {
                return this.page().name(next);
            }
            editor_title() {
                return `${this.project().name()} - ${this.page().name()}`;
            }
            selected(id) {
                return (this.$.$mol_state_arg.value('selected', id) ?? '');
            }
            paper_selected(next) {
                return this.element_selected(this.page().id(), next);
            }
            element_selected(id, next) {
                if (this.preview())
                    return false;
                if (next !== undefined) {
                    if (next)
                        this.selected(id);
                    return true;
                }
                return id === this.selected();
            }
            Options() {
                if (this.paper_selected() || !this.selected()) {
                    return {
                        'page': this.Page_options(),
                        'delete': this.Delete_options(),
                    };
                }
                if (this.selected()) {
                    return this.Element(this.selected()).Options();
                }
                return {};
            }
            preview(next) {
                return this.$.$mol_state_arg.value('preview', next ? '' : null) === '';
            }
            editing() {
                return !this.preview();
            }
            page_current_id() {
                return this.page().id();
            }
            project_name(next) {
                return this.project().name(next);
            }
            page_delete() {
                this.project().page_delete(this.page());
                this.$.$mol_state_arg.value('page', null);
            }
        }
        __decorate([
            $mol_mem_key
        ], $hyoo_sketch_editor.prototype, "Element", null);
        __decorate([
            $mol_mem
        ], $hyoo_sketch_editor.prototype, "elements", null);
        __decorate([
            $mol_mem
        ], $hyoo_sketch_editor.prototype, "selected", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_sketch_editor.prototype, "element_selected", null);
        __decorate([
            $mol_mem
        ], $hyoo_sketch_editor.prototype, "preview", null);
        $$.$hyoo_sketch_editor = $hyoo_sketch_editor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/editor/editor.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_project_list extends $.$hyoo_sketch_project_list {
            project_add() {
                const obj = this.domain().project_new();
                obj.name(this.project_name_default());
                this.person().project_add(obj);
            }
            projects() {
                return this.person().projects().map(obj => this.Project(obj.id()));
            }
            project_id(id) {
                return id;
            }
            project_name(id) {
                return this.domain().project(id).name();
            }
            yard() {
                return this.domain().yard();
            }
            person_id() {
                return this.domain().user().id();
            }
        }
        __decorate([
            $mol_action
        ], $hyoo_sketch_project_list.prototype, "project_add", null);
        __decorate([
            $mol_mem
        ], $hyoo_sketch_project_list.prototype, "projects", null);
        $$.$hyoo_sketch_project_list = $hyoo_sketch_project_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/project/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//mol/bar/-view.tree/bar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/bar/bar.view.css", "[mol_bar] {\n\tdisplay: flex;\n\t/* box-shadow: inset 0 0 0 1px var(--mol_theme_line); */\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/bar/-css/bar.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_expander extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        label() {
            return [
                this.title()
            ];
        }
        Trigger() {
            const obj = new this.$.$mol_check_expand();
            obj.checked = (val) => this.expanded(val);
            obj.label = () => this.label();
            return obj;
        }
        Tools() {
            return null;
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Trigger(),
                this.Tools()
            ];
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "expanded", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Trigger", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Content", null);
    $.$mol_expander = $mol_expander;
})($ || ($ = {}));
//mol/expander/-view.tree/expander.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n\tposition: relative;\n}\n\n[mol_expander_trigger_icon] {\n\tposition: absolute;\n\tmargin-left: -1rem;\n}\n");
})($ || ($ = {}));
//mol/expander/-css/expander.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
        }
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/expander/expander.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 32;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tz-index: 1;\n\tpadding: .75rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $mol_labeler {
        bids() {
            return [];
        }
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        Content() {
            return this.control();
        }
        name() {
            return "";
        }
        bid() {
            return "";
        }
        Bid() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.bid()
            ];
            return obj;
        }
        control() {
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//mol/form/field/-view.tree/field.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n\tpadding: var(--mol_gap_block);\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tdisplay: inline-block;\n\ttext-shadow: 0 0;\n}\n\n[mol_form_field_content] {\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/form/field/-css/field.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form_field extends $.$mol_form_field {
            bid() {
                return this.bids().filter(Boolean)[0] ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form_field.prototype, "bid", null);
        $$.$mol_form_field = $mol_form_field;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/field/field.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_project_page extends $mol_page {
        project_name(next) {
            return this.project().name(next);
        }
        domain() {
            return this.project().domain();
        }
        project() {
            const obj = new this.$.$hyoo_sketch_project();
            return obj;
        }
        title() {
            return this.project_name();
        }
        page_name_default() {
            return this.$.$mol_locale.text('$hyoo_sketch_project_page_page_name_default');
        }
        tools() {
            return [
                this.Project_pin(),
                this.Project_close()
            ];
        }
        body() {
            return [
                this.Pages(),
                this.Settings()
            ];
        }
        label_allowed_anyone() {
            return this.$.$mol_locale.text('$hyoo_sketch_project_page_label_allowed_anyone');
        }
        Row(id) {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Link(id),
                this.Copy(id)
            ];
            return obj;
        }
        Project_pin_icon() {
            const obj = new this.$.$mol_icon_eye();
            return obj;
        }
        project_pin(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Project_pin() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_project_page_Project_pin_hint');
            obj.Icon = () => this.Project_pin_icon();
            obj.checked = (val) => this.project_pin(val);
            return obj;
        }
        Project_close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Project_close() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_project_page_Project_close_hint');
            obj.arg = () => ({
                page: null,
                project: null,
                selected: null
            });
            obj.sub = () => [
                this.Project_close_icon()
            ];
            return obj;
        }
        pages() {
            return [];
        }
        List() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.pages();
            return obj;
        }
        pages_expanded(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        page_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Page_add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Page_add() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_project_page_Page_add_hint');
            obj.click = (next) => this.page_add(next);
            obj.sub = () => [
                this.Page_add_icon()
            ];
            return obj;
        }
        Settings_tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Page_add()
            ];
            return obj;
        }
        Pages() {
            const obj = new this.$.$mol_expander();
            obj.title = () => this.$.$mol_locale.text('$hyoo_sketch_project_page_Pages_title');
            obj.content = () => [
                this.List()
            ];
            obj.expanded = (next) => this.pages_expanded(next);
            obj.Tools = () => this.Settings_tools();
            return obj;
        }
        settings_expanded(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        Project_name_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.project_name(next);
            return obj;
        }
        Project_name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_project_page_Project_name_field_name');
            obj.control = () => this.Project_name_control();
            return obj;
        }
        editor_add_bid() {
            return this.$.$mol_locale.text('$hyoo_sketch_project_page_editor_add_bid');
        }
        editor_add_id(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Editor_add_id() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_project_page_Editor_add_id_hint');
            obj.value = (next) => this.editor_add_id(next);
            return obj;
        }
        editor_add_submut_enabled() {
            return false;
        }
        editor_add_submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Editor_add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Editor_add_submit() {
            const obj = new this.$.$mol_button_major();
            obj.enabled = () => this.editor_add_submut_enabled();
            obj.click = (next) => this.editor_add_submit(next);
            obj.sub = () => [
                this.Editor_add_icon()
            ];
            return obj;
        }
        Editor_add_bar() {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Editor_add_id(),
                this.Editor_add_submit()
            ];
            return obj;
        }
        editor_fill_all(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Editor_fill_all() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.$.$mol_locale.text('$hyoo_sketch_project_page_Editor_fill_all_title');
            obj.click = (next) => this.editor_fill_all(next);
            return obj;
        }
        editor_add_rows() {
            return [
                this.Editor_add_bar(),
                this.Editor_fill_all()
            ];
        }
        Editor_add_form() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.editor_add_rows();
            return obj;
        }
        Editor_add_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_project_page_Editor_add_field_name');
            obj.bid = () => this.editor_add_bid();
            obj.Content = () => this.Editor_add_form();
            return obj;
        }
        editor_id(id) {
            return "";
        }
        person(id) {
            const obj = new this.$.$hyoo_sketch_person();
            return obj;
        }
        Editor_avatar(id) {
            const obj = new this.$.$hyoo_sketch_person_avatar();
            obj.person = () => this.person(id);
            return obj;
        }
        Editor_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                person: this.editor_id(id)
            });
            obj.sub = () => [
                this.Editor_avatar(id)
            ];
            return obj;
        }
        editor_list() {
            return [
                this.Editor_link("0_0")
            ];
        }
        Editor_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.editor_list();
            return obj;
        }
        Editor_list_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_project_page_Editor_list_field_name');
            obj.Content = () => this.Editor_list();
            return obj;
        }
        Settings() {
            const obj = new this.$.$mol_expander();
            obj.title = () => this.$.$mol_locale.text('$hyoo_sketch_project_page_Settings_title');
            obj.expanded = (next) => this.settings_expanded(next);
            obj.content = () => [
                this.Project_name_field(),
                this.Editor_add_field(),
                this.Editor_list_field()
            ];
            return obj;
        }
        page_id(id) {
            return "";
        }
        page_name(id) {
            return "";
        }
        Link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                page: this.page_id(id),
                selected: null
            });
            obj.title = () => this.page_name(id);
            return obj;
        }
        page_copy(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Copy_icon(id) {
            const obj = new this.$.$mol_icon_content_copy();
            return obj;
        }
        Copy(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.page_copy(id, next);
            obj.sub = () => [
                this.Copy_icon(id)
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "project", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_project_page.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Project_pin_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "project_pin", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Project_pin", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Project_close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Project_close", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "List", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "pages_expanded", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "page_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Page_add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Page_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Settings_tools", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Pages", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "settings_expanded", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Project_name_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Project_name_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "editor_add_id", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Editor_add_id", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "editor_add_submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Editor_add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Editor_add_submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Editor_add_bar", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "editor_fill_all", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Editor_fill_all", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Editor_add_form", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Editor_add_field", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_project_page.prototype, "person", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_project_page.prototype, "Editor_avatar", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_project_page.prototype, "Editor_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Editor_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Editor_list_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_page.prototype, "Settings", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_project_page.prototype, "Link", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_project_page.prototype, "page_copy", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_project_page.prototype, "Copy_icon", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_project_page.prototype, "Copy", null);
    $.$hyoo_sketch_project_page = $hyoo_sketch_project_page;
})($ || ($ = {}));
//hyoo/sketch/project/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $mol_list {
        submit_blocked() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        rows() {
            return [
                this.Body(),
                this.Foot()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        form_fields() {
            return [];
        }
        body() {
            return this.form_fields();
        }
        Body() {
            const obj = new this.$.$mol_list();
            obj.sub = () => this.body();
            return obj;
        }
        buttons() {
            return [];
        }
        foot() {
            return this.buttons();
        }
        Foot() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Foot", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//mol/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/form.css", "[mol_form_foot] {\n\tmargin: var(--mol_gap_block);\n}\n");
})($ || ($ = {}));
//mol/form/-css/form.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            form_fields() {
                return [...this.view_find(view => view instanceof $mol_form_field)]
                    .map(path => path[path.length - 1]);
            }
            submit_allowed() {
                return this.form_fields().every(field => !field.bid());
            }
            submit_blocked() {
                return !this.submit_allowed();
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "form_fields", null);
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "submit_allowed", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/form.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($hyoo_sketch_project_page, {
            Head: {
                flex: {
                    wrap: 'nowrap',
                }
            },
            Tools: {
                flex: {
                    wrap: 'nowrap',
                    shrink: 0,
                }
            },
            Link: {
                flex: {
                    grow: 1,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/project/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_project_page extends $.$hyoo_sketch_project_page {
            user() {
                return this.domain().user();
            }
            person(id) {
                return this.domain().person(id);
            }
            pages() {
                return this.project().pages().map(obj => this.Row(obj.id()));
            }
            page_id(id) {
                return id;
            }
            page_name(id) {
                return this.domain().page(id).name();
            }
            project_name(next) {
                return this.project().name(next);
            }
            page_add() {
                const obj = this.domain().page_new(this.project().id());
                obj.name(this.page_name_default());
                this.project().page_add(obj);
            }
            project_pin(next) {
                const pinned = this.user().projects().indexOf(this.project()) !== -1;
                if (next === undefined)
                    return pinned;
                if (next) {
                    this.user().project_add(this.project());
                }
                else {
                    this.user().project_delete(this.project());
                }
                return next;
            }
            page_copy(id) {
                const page = this.domain().page(id);
                const copy = page.duplicate();
                this.project().page_add(copy);
            }
            editor_list() {
                const list = this.project().authors();
                return list.filter(obj => obj.id() !== '0_0').map(obj => this.Editor_link(obj.id()));
            }
            editor_id(id) {
                return id;
            }
            editor_add_bid() {
                if (this.project().access_public())
                    return this.label_allowed_anyone();
                return this.editor_add_id() ? super.editor_add_bid() : '';
            }
            editor_fill_all() {
                this.editor_add_id('0_0');
            }
            editor_add_submit_enabled() {
                return this.editor_add_id().length > 0 && this.project().access_public() === false;
            }
            editor_add_rows() {
                return [
                    this.Editor_add_bar(),
                    ...this.project().access_public() ? [] : [this.Editor_fill_all()]
                ];
            }
            editor_add_submit() {
                const peer = this.editor_add_id();
                this.project().land().level(peer, $hyoo_crowd_peer_level.mod);
                for (const page of this.project().pages()) {
                    page.land().level(peer, $hyoo_crowd_peer_level.mod);
                    for (const element of page.elements()) {
                        element.land().level(peer, $hyoo_crowd_peer_level.mod);
                    }
                }
                this.editor_add_id('');
            }
        }
        $$.$hyoo_sketch_project_page = $hyoo_sketch_project_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/project/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_deck extends $mol_list {
        items() {
            return [];
        }
        rows() {
            return [
                this.Switch(),
                this.Content()
            ];
        }
        current(val) {
            if (val !== undefined)
                return val;
            return "0";
        }
        switch_options() {
            return {};
        }
        Switch() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.current(val);
            obj.options = () => this.switch_options();
            return obj;
        }
        Content() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "current", null);
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "Switch", null);
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "Content", null);
    $.$mol_deck = $mol_deck;
})($ || ($ = {}));
//mol/deck/-view.tree/deck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_deck extends $.$mol_deck {
            current(next) {
                return $mol_state_session.value(`${this}.current()`, next) || '0';
            }
            switch_options() {
                let options = {};
                this.items().forEach((item, index) => {
                    options[String(index)] = item.title();
                });
                return options;
            }
            Content() {
                return this.items()[this.current()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_deck.prototype, "Content", null);
        $$.$mol_deck = $mol_deck;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/deck/deck.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_option_page extends $mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_sketch_option_page_title');
        }
        Options() {
            return {};
        }
        body() {
            return [
                this.Tabs()
            ];
        }
        Tab(id) {
            const obj = new this.$.$mol_list();
            obj.title = () => this.tab_title(id);
            obj.rows = () => this.tab_rows(id);
            return obj;
        }
        items() {
            return [];
        }
        Tabs() {
            const obj = new this.$.$mol_deck();
            obj.items = () => this.items();
            return obj;
        }
        tab_title(id) {
            return "";
        }
        tab_rows(id) {
            return [];
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_option_page.prototype, "Tab", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_option_page.prototype, "Tabs", null);
    $.$hyoo_sketch_option_page = $hyoo_sketch_option_page;
})($ || ($ = {}));
//hyoo/sketch/option/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$hyoo_sketch_option_page, {
            Tab: {
                padding: $mol_gap.block,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/option/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_option_page extends $.$hyoo_sketch_option_page {
            keys() {
                return Object.keys(this.Options());
            }
            items() {
                if (!this.keys().length)
                    return [];
                return this.keys().map(key => this.Tab(key));
            }
            tab_title(key) {
                return key;
            }
            tab_rows(key) {
                return this.Options()[key];
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_sketch_option_page.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $hyoo_sketch_option_page.prototype, "items", null);
        $$.$hyoo_sketch_option_page = $hyoo_sketch_option_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/option/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_palette extends $mol_page {
        domain() {
            return this.page().domain();
        }
        page() {
            const obj = new this.$.$hyoo_sketch_page();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_sketch_palette_title');
        }
        body() {
            return [
                this.List()
            ];
        }
        type_list() {
            return [
                "attach",
                "button",
                "check",
                "date",
                "header",
                "image",
                "input",
                "link",
                "markdown",
                "map",
                "select",
                "speck",
                "switch",
                "text",
                "textarea"
            ];
        }
        row_title(id) {
            return "";
        }
        element_add(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.row_title(id);
            obj.click = (next) => this.element_add(id, next);
            return obj;
        }
        rows() {
            return [
                this.Row("0")
            ];
        }
        List() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.rows();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_palette.prototype, "page", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_palette.prototype, "element_add", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_palette.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_palette.prototype, "List", null);
    $.$hyoo_sketch_palette = $hyoo_sketch_palette;
})($ || ($ = {}));
//hyoo/sketch/palette/-view.tree/palette.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_palette extends $.$hyoo_sketch_palette {
            rows() {
                return this.type_list().map(type => this.Row(type));
            }
            row_title(type) {
                return type;
            }
            Element_base(element) {
                const obj = new $hyoo_sketch_element_base;
                obj.element = $mol_const(element);
                return obj;
            }
            highest_top() {
                const copy = this.page().elements().slice();
                const top_list = copy.map(obj => this.Element_base(obj).top() + this.Element_base(obj).height());
                const sort = top_list.sort((a, b) => b - a);
                return sort[0];
            }
            element_add(type) {
                const obj = this.domain().element_new(this.page().id());
                obj.type(type);
                this.Element_base(obj).top(this.highest_top() + this.page().grid());
                this.Element_base(obj).left(this.page().grid());
                this.page().element_add(obj);
                this.$.$mol_state_arg.value('selected', obj.id());
            }
        }
        __decorate([
            $mol_mem_key
        ], $hyoo_sketch_palette.prototype, "Element_base", null);
        __decorate([
            $mol_mem
        ], $hyoo_sketch_palette.prototype, "highest_top", null);
        $$.$hyoo_sketch_palette = $hyoo_sketch_palette;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/palette/palette.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_person_page extends $mol_page {
        name(next) {
            return this.person().name(next);
        }
        id() {
            return this.person().id();
        }
        domain() {
            return this.person().domain();
        }
        person() {
            const obj = new this.$.$hyoo_sketch_person();
            return obj;
        }
        tools() {
            return [
                this.Id_copy(),
                this.Close()
            ];
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_sketch_person_page_title');
        }
        body() {
            return [
                this.Name()
            ];
        }
        Id_copy() {
            const obj = new this.$.$mol_button_copy();
            obj.text = () => this.id();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_person_page_Id_copy_hint');
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                person: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        editable() {
            return false;
        }
        Name_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.name(next);
            obj.enabled = () => this.editable();
            return obj;
        }
        Name() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_person_page_Name_name');
            obj.control = () => this.Name_control();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_page.prototype, "person", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_page.prototype, "Id_copy", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_page.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_page.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_page.prototype, "Name_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_page.prototype, "Name", null);
    $.$hyoo_sketch_person_page = $hyoo_sketch_person_page;
})($ || ($ = {}));
//hyoo/sketch/person/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_person_page extends $.$hyoo_sketch_person_page {
            editable() {
                const peer_id = this.domain().user().id();
                return this.domain().yard().land(this.person().id()).level(peer_id) >= $hyoo_crowd_peer_level.add;
            }
        }
        $$.$hyoo_sketch_person_page = $hyoo_sketch_person_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/person/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch extends $mol_book2 {
        user() {
            return this.domain().user();
        }
        project(id) {
            return this.domain().project(id);
        }
        page(id) {
            return this.domain().page(id);
        }
        domain() {
            const obj = new this.$.$hyoo_sketch_domain();
            return obj;
        }
        plugins() {
            return [
                this.Theme()
            ];
        }
        event() {
            return {
                ...super.event(),
                mousemove: (next) => this.cursor_move(next)
            };
        }
        pages() {
            return [
                this.Projects(),
                this.Project(),
                this.Editor(),
                this.Option_page(),
                this.Palette(),
                this.Person()
            ];
        }
        Demo_page(id) {
            const obj = new this.$.$mol_page();
            obj.title = () => this.demo_page_title(id);
            obj.Head = () => null;
            obj.body = () => [
                this.Demo_page_content(id)
            ];
            return obj;
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        cursor_move(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Projects() {
            const obj = new this.$.$hyoo_sketch_project_list();
            obj.title = () => this.$.$mol_locale.text('$hyoo_sketch_Projects_title');
            obj.person = () => this.user();
            return obj;
        }
        project_opened() {
            const obj = new this.$.$hyoo_sketch_project();
            return obj;
        }
        Project() {
            const obj = new this.$.$hyoo_sketch_project_page();
            obj.project = () => this.project_opened();
            return obj;
        }
        page_opened() {
            const obj = new this.$.$hyoo_sketch_page();
            return obj;
        }
        Options() {
            return this.Editor().Options();
        }
        Element(id) {
            return this.Editor().Element(id);
        }
        Editor() {
            const obj = new this.$.$hyoo_sketch_editor();
            obj.page = () => this.page_opened();
            return obj;
        }
        Option_page() {
            const obj = new this.$.$hyoo_sketch_option_page();
            obj.Options = () => this.Options();
            return obj;
        }
        Palette() {
            const obj = new this.$.$hyoo_sketch_palette();
            obj.page = () => this.page_opened();
            return obj;
        }
        person_opened() {
            const obj = new this.$.$hyoo_sketch_person();
            return obj;
        }
        Person() {
            const obj = new this.$.$hyoo_sketch_person_page();
            obj.person = () => this.person_opened();
            return obj;
        }
        demo_page_title(id) {
            return "";
        }
        demo_page_width(id) {
            return +NaN;
        }
        demo_page_elements(id) {
            return [];
        }
        Demo_page_content(id) {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                width: this.demo_page_width(id)
            });
            obj.sub = () => this.demo_page_elements(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "domain", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch.prototype, "Demo_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "cursor_move", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "Projects", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "project_opened", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "Project", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "page_opened", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "Editor", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "Option_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "Palette", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "person_opened", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "Person", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch.prototype, "Demo_page_content", null);
    $.$hyoo_sketch = $hyoo_sketch;
})($ || ($ = {}));
//hyoo/sketch/-view.tree/sketch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($hyoo_sketch, {
            Projects: {
                flex: {
                    shrink: 0,
                    basis: rem(25),
                },
            },
            Project: {
                flex: {
                    shrink: 0,
                    basis: rem(18),
                },
            },
            Palette: {
                flex: {
                    shrink: 0,
                    basis: rem(9),
                },
            },
            Editor: {
                flex: {
                    shrink: 0,
                    basis: calc('100% - 47rem'),
                },
            },
            Option_page: {
                flex: {
                    shrink: 0,
                    basis: rem(20),
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/sketch.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch extends $.$hyoo_sketch {
            person(id) {
                return this.domain().person(id);
            }
            arg() {
                const dict = this.$.$mol_state_arg.dict();
                return {
                    project: dict.project,
                    page: dict.page,
                    person: dict.person,
                };
            }
            project_opened() {
                return this.domain().project(this.arg().project);
            }
            page_opened() {
                return this.domain().page(this.arg().page);
            }
            person_opened() {
                return this.domain().person(this.arg().person);
            }
            pages() {
                const demo_pages = this.$.$mol_state_arg.value('demo')?.split(',') ?? [];
                if (demo_pages.length) {
                    return demo_pages.map(id => this.Demo_page(id));
                }
                return [
                    this.Projects(),
                    ...this.arg().person ? [this.Person()] : [],
                    ...this.arg().project ? [this.Project()] : [],
                    ...this.arg().page ? [
                        this.Palette(),
                        this.Editor(),
                        this.Option_page(),
                    ] : [],
                ];
            }
            demo_page_title(id) {
                return this.domain().page(id).name();
            }
            demo_page_width(id) {
                return this.domain().page(id).width();
            }
            demo_page_elements(id) {
                const page = this.domain().page(id);
                return page.elements().map(obj => {
                    const element = this.Element(obj.id());
                    element.editing = $mol_const(false);
                    return element.Preview();
                });
            }
        }
        $$.$hyoo_sketch = $hyoo_sketch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/sketch.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_domain extends $mol_object2 {
        static yard() {
            return new this.$.$hyoo_sync_client;
        }
        yard() {
            return $hyoo_sketch_domain.yard();
        }
        user() {
            return this.person(this.yard().peer().id);
        }
        persons() {
            const land = 'prc5a5_vem6li';
            return $hyoo_idea_persons.make({ id: $mol_const(land), domain: $mol_const(this) });
        }
        person(id) {
            return $hyoo_idea_person.make({ id: $mol_const(id), domain: $mol_const(this) });
        }
        post(id) {
            return $hyoo_idea_post.make({ id: $mol_const(id), domain: $mol_const(this) });
        }
        post_add() {
            const land = this.yard().land_grab();
            return this.post(land.id());
        }
        project(id) {
            return $hyoo_idea_project.make({ id: $mol_const(id), domain: $mol_const(this) });
        }
        project_add() {
            const land = this.yard().land_grab();
            return this.post(land.id());
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_domain.prototype, "user", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_domain.prototype, "persons", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_domain.prototype, "person", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_domain.prototype, "post", null);
    __decorate([
        $mol_action
    ], $hyoo_idea_domain.prototype, "post_add", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_domain.prototype, "project", null);
    __decorate([
        $mol_action
    ], $hyoo_idea_domain.prototype, "project_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_domain, "yard", null);
    $.$hyoo_idea_domain = $hyoo_idea_domain;
})($ || ($ = {}));
//hyoo/idea/domain/domain.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_entity extends $mol_object {
        id() {
            return '0_0';
        }
        head() {
            return '0_0';
        }
        domain() {
            throw new Error('Not defined');
        }
        land() {
            return this.domain().yard().land(this.id());
        }
        state() {
            return this.land().node(this.head(), $hyoo_crowd_struct);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_entity.prototype, "land", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_entity.prototype, "state", null);
    $.$hyoo_idea_entity = $hyoo_idea_entity;
})($ || ($ = {}));
//hyoo/idea/entity/entity.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_blob = ($node.buffer?.Blob ?? $mol_dom_context.Blob);
})($ || ($ = {}));
//mol/blob/blob.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_blob extends $hyoo_crowd_list {
        uri() {
            return URL.createObjectURL(this.blob());
        }
        type(next) {
            return this.as($hyoo_crowd_struct).sub('type', $hyoo_crowd_reg).str(next);
        }
        blob(next) {
            if (next) {
                this.buffer(new Uint8Array($mol_wire_sync(next).arrayBuffer()));
                this.type(next.type);
                return next;
            }
            return new $mol_blob(this.list(), {
                type: this.type(),
            });
        }
        buffer(next) {
            if (next) {
                const chunks = [];
                let offset = 0;
                while (offset < next.byteLength) {
                    const cut = offset + 2 ** 15;
                    chunks.push(next.slice(offset, cut));
                    offset = cut;
                }
                this.list(chunks);
                return next;
            }
            else {
                const chunks = this.list();
                const size = chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
                const res = new Uint8Array(size);
                let offset = 0;
                for (const chunk of chunks) {
                    res.set(chunk, offset);
                    offset += chunk.byteLength;
                }
                return res;
            }
        }
    }
    $.$hyoo_crowd_blob = $hyoo_crowd_blob;
})($ || ($ = {}));
//hyoo/crowd/blob/blob.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_post extends $hyoo_idea_entity {
        person(next) {
            const id = this.state().sub('person', $hyoo_crowd_reg).str(next && next.id());
            return this.domain().person(id);
        }
        content(next) {
            return this.state().sub('content', $hyoo_crowd_reg).str(next);
        }
        created_moment(next) {
            return new $mol_time_moment(this.state().land.first_stamp());
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_post.prototype, "person", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post.prototype, "content", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post.prototype, "created_moment", null);
    $.$hyoo_idea_post = $hyoo_idea_post;
})($ || ($ = {}));
//hyoo/idea/post/post.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_project extends $hyoo_idea_entity {
        person(next) {
            const id = this.state().sub('person', $hyoo_crowd_reg).str(next && next.id());
            return this.domain().person($mol_int62_string_ensure(id));
        }
        logo_node() {
            return this.state().yoke('logo', $hyoo_crowd_blob);
        }
        logo() {
            return this.logo_node().uri();
        }
        name(next) {
            return this.state().sub('name', $hyoo_crowd_reg).str(next);
        }
        description_node() {
            return this.state().sub('description', $hyoo_crowd_text);
        }
        description(next) {
            return this.description_node().text(next);
        }
        team_node() {
            return this.state().sub('team', $hyoo_crowd_list);
        }
        team(next) {
            const ids = this.team_node().list(next);
            return ids.map(id => this.domain().person($mol_int62_string_ensure(id)));
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_project.prototype, "person", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project.prototype, "logo_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project.prototype, "logo", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project.prototype, "description_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project.prototype, "description", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project.prototype, "team_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project.prototype, "team", null);
    $.$hyoo_idea_project = $hyoo_idea_project;
})($ || ($ = {}));
//hyoo/idea/project/project.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_persons extends $hyoo_idea_entity {
        list_node() {
            return this.state().sub('list', $hyoo_crowd_list);
        }
        add(obj) {
            this.list_node().add(obj.id());
        }
        list() {
            return this.list_node().list().map(id => this.domain().person(id));
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_persons.prototype, "list_node", null);
    $.$hyoo_idea_persons = $hyoo_idea_persons;
    class $hyoo_idea_person extends $hyoo_idea_entity {
        state() {
            return super.state().yoke('$hyoo_idea', $hyoo_crowd_struct);
        }
        avatar_node() {
            return this.state().yoke('avatar', $hyoo_crowd_blob);
        }
        avatar() {
            if (this.avatar_node().list().length > 0)
                return this.avatar_node().uri();
            return `https://robohash.org/${this.id()}.png`;
        }
        name(next) {
            return this.state().sub('name', $hyoo_crowd_reg).str(next);
        }
        about(next) {
            return this.state().sub('about', $hyoo_crowd_reg).str(next);
        }
        status(next) {
            return this.state().sub('status', $hyoo_crowd_reg).str(next);
        }
        name_user(next) {
            return this.state().sub('name_user', $hyoo_crowd_reg).str(next);
        }
        name_family(next) {
            return this.state().sub('name_family', $hyoo_crowd_reg).str(next);
        }
        name_father(next) {
            return this.state().sub('name_father', $hyoo_crowd_reg).str(next);
        }
        name_short() {
            return this.name() + ' ' + this.name_family();
        }
        sex(next) {
            return this.state().sub('sex', $hyoo_crowd_reg).str(next);
        }
        date_birth(next) {
            const str = this.state().sub('date_birsth', $hyoo_crowd_reg).str(next && next.toString());
            return new $mol_time_moment(str || undefined);
        }
        nationality(next) {
            return this.state().sub('nationality', $hyoo_crowd_reg).str(next);
        }
        country(next) {
            return this.state().sub('country', $hyoo_crowd_reg).str(next);
        }
        city(next) {
            return this.state().sub('city', $hyoo_crowd_reg).str(next);
        }
        phone(next) {
            return this.state().sub('phone', $hyoo_crowd_reg).str(next);
        }
        email(next) {
            return this.state().sub('email', $hyoo_crowd_reg).str(next);
        }
        job_status(next) {
            return this.state().sub('job_status', $hyoo_crowd_reg).str(next);
        }
        skills(next) {
            return this.state().sub('skills', $hyoo_crowd_list).list(next).map(String);
        }
        jobs_node() {
            return this.state().sub('jobs', $hyoo_crowd_list);
        }
        jobs(next) {
            return this.jobs_node().list(next);
        }
        institutions_node() {
            return this.state().sub('institutions', $hyoo_crowd_list);
        }
        institutions(next) {
            return this.institutions_node().list(next);
        }
        registered() {
            return !!this.name() && !!this.name_user() && !!this.name_family();
        }
        posts_node() {
            return this.state().sub('posts', $hyoo_crowd_list);
        }
        posts(next) {
            const ids = this.posts_node().list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().post(id));
        }
        post_add(obj) {
            obj.person(this);
            this.posts_node().add(obj.id());
        }
        post_drop(obj) {
            this.posts_node().drop(obj.id());
        }
        projects_node() {
            return this.state().sub('projects', $hyoo_crowd_list);
        }
        projects(next) {
            const ids = this.projects_node().list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().project($mol_int62_string_ensure(id)));
        }
        project_add(obj) {
            obj.person(this);
            this.projects_node().add(obj.id());
        }
        project_drop(obj) {
            this.posts_node().drop(obj.id());
        }
        pubs(next) {
            const ids = this.state().sub('pubs', $hyoo_crowd_list).list(next && next.map(obj => obj.id()));
            return ids
                .filter(id => $mol_int62_string_ensure(id))
                .map(id => this.domain().person($mol_int62_string_ensure(id)));
        }
        subs(next) {
            const ids = this.state().sub('subs', $hyoo_crowd_list).list(next && next.map(obj => obj.id()));
            return ids
                .filter(id => $mol_int62_string_ensure(id))
                .map(id => this.domain().person($mol_int62_string_ensure(id)));
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "state", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "avatar_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "avatar", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "about", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "status", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "name_user", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "name_family", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "name_father", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "sex", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "date_birth", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "nationality", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "country", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "city", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "phone", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "email", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "job_status", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "skills", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "jobs_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "jobs", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "institutions_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "institutions", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "registered", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "posts_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "posts", null);
    __decorate([
        $mol_action
    ], $hyoo_idea_person.prototype, "post_add", null);
    __decorate([
        $mol_action
    ], $hyoo_idea_person.prototype, "post_drop", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "projects_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "projects", null);
    __decorate([
        $mol_action
    ], $hyoo_idea_person.prototype, "project_add", null);
    __decorate([
        $mol_action
    ], $hyoo_idea_person.prototype, "project_drop", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "pubs", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person.prototype, "subs", null);
    $.$hyoo_idea_person = $hyoo_idea_person;
})($ || ($ = {}));
//hyoo/idea/person/person.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_group extends $mol_view {
    }
    $.$mol_form_group = $mol_form_group;
})($ || ($ = {}));
//mol/form/group/-view.tree/group.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/group/group.view.css", "[mol_form_group] {\n\tflex-wrap: wrap;\n}\n\n[mol_form_group] > * {\n\tflex: 1 1 20rem;\n}\n");
})($ || ($ = {}));
//mol/form/group/-css/group.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_format extends $mol_string {
        allow() {
            return "0123456789";
        }
        hint() {
            return this.mask("0");
        }
        mask(id) {
            return "";
        }
    }
    $.$mol_format = $mol_format;
})($ || ($ = {}));
//mol/format/-view.tree/format.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/format/format.view.css", "[mol_format] {\n\tfont-family: monospace;\n}\n");
})($ || ($ = {}));
//mol/format/-css/format.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_format extends $.$mol_format {
            selection([from, to] = [0, 0]) {
                const prev = $mol_wire_probe(() => this.selection());
                if (!prev)
                    return [0, 100];
                if (from === to) {
                    const allow = this.allow();
                    const mask = this.mask([...this.value_changed()].filter(letter => allow.includes(letter)).join(''));
                    if ((prev?.[0] ?? 0) < from) {
                        while (from && mask[from] && mask[from] !== '_') {
                            ++from;
                            ++to;
                        }
                    }
                }
                return [from, to];
            }
            value_changed(next) {
                const allow = this.allow();
                const normalize = (val) => {
                    val = [...val].filter(letter => allow.includes(letter)).join('');
                    const letters = [...val].reverse();
                    return this.mask(val).replace(/_/gu, () => letters.pop() ?? '_') + letters.reverse().join('');
                };
                if (next !== undefined) {
                    next = normalize(next);
                    if (next.includes('_'))
                        return next;
                }
                return normalize(this.value(next));
            }
            event_change(next) {
                if (!next)
                    return;
                if (next.data && !this.allow().includes(next.data))
                    return;
                super.event_change(next);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_format.prototype, "selection", null);
        __decorate([
            $mol_mem
        ], $mol_format.prototype, "value_changed", null);
        $$.$mol_format = $mol_format;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/format/format.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_sign_up_page extends $mol_page {
        name(next) {
            return this.person().name(next);
        }
        name_family(next) {
            return this.person().name_family(next);
        }
        name_user(next) {
            return this.person().name_user(next);
        }
        person() {
            const obj = new this.$.$hyoo_idea_person();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_idea_sign_up_page_title');
        }
        Head() {
            return null;
        }
        messages() {
            return {
                required: this.$.$mol_locale.text('$hyoo_idea_sign_up_page_messages_required'),
                no_spaces: this.$.$mol_locale.text('$hyoo_idea_sign_up_page_messages_no_spaces'),
                need_less_letters: this.$.$mol_locale.text('$hyoo_idea_sign_up_page_messages_need_less_letters')
            };
        }
        name_user_max_letters_count() {
            return 15;
        }
        body() {
            return [
                this.Logo(),
                this.Form()
            ];
        }
        Logo() {
            const obj = new this.$.$mol_image();
            obj.uri = () => "http://placehold.jp/328x328.png?text=$hyoo_idea";
            return obj;
        }
        name_bid() {
            return "";
        }
        Name_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_sign_up_page_Name_control_hint');
            obj.value = (next) => this.name(next);
            return obj;
        }
        Name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_sign_up_page_Name_field_name');
            obj.bid = () => this.name_bid();
            obj.Content = () => this.Name_control();
            return obj;
        }
        name_family_bid() {
            return "";
        }
        Name_family_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_sign_up_page_Name_family_control_hint');
            obj.value = (next) => this.name_family(next);
            return obj;
        }
        Name_family_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_sign_up_page_Name_family_field_name');
            obj.bid = () => this.name_family_bid();
            obj.Content = () => this.Name_family_control();
            return obj;
        }
        Names() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Name_field(),
                this.Name_family_field()
            ];
            return obj;
        }
        name_user_bid() {
            return "";
        }
        Mask_test_control() {
            const obj = new this.$.$mol_format();
            obj.allow = () => "abcdefghijklmnopqrstuvwxyz0123456789_";
            obj.mask = () => "@";
            obj.value = (next) => this.name_user(next);
            return obj;
        }
        Name_user_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_sign_up_page_Name_user_field_name');
            obj.bid = () => this.name_user_bid();
            obj.Content = () => this.Mask_test_control();
            return obj;
        }
        signup(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Signup() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_sign_up_page_Signup_title');
            obj.click = (next) => this.signup(next);
            obj.enabled = () => this.signup_allowed();
            return obj;
        }
        signup_allowed() {
            return this.Form().submit_allowed();
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.body = () => [
                this.Names(),
                this.Name_user_field()
            ];
            obj.submit = (val) => this.signup(val);
            obj.buttons = () => [
                this.Signup()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "person", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "Logo", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "Name_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "Name_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "Name_family_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "Name_family_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "Names", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "Mask_test_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "Name_user_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "signup", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "Signup", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_sign_up_page.prototype, "Form", null);
    $.$hyoo_idea_sign_up_page = $hyoo_idea_sign_up_page;
})($ || ($ = {}));
//hyoo/idea/sign/up/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($hyoo_idea_sign_up_page, {
            margin: [0, 'auto'],
            flex: {
                basis: rem(30),
                grow: 0,
            },
            Logo: {
                width: rem(30),
                height: rem(15),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/sign/up/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_sign_up_page extends $.$hyoo_idea_sign_up_page {
            signup() {
                this.$.$mol_state_arg.value('signup', null);
            }
            name_bid() {
                return !this.name() ? this.messages().required : '';
            }
            name_family_bid() {
                return !this.name_family() ? this.messages().required : '';
            }
            name_user_bid() {
                const val = this.name_user();
                if (val.includes(' '))
                    return this.messages().no_spaces;
                if (val.length > 15)
                    return this.messages().need_less_letters.replace('{count}', this.name_user_max_letters_count().toString());
                if (!val)
                    return this.messages().required;
                return '';
            }
        }
        $$.$hyoo_idea_sign_up_page = $hyoo_idea_sign_up_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/sign/up/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_person_avatar extends $mol_view {
        sub() {
            return [
                this.Image()
            ];
        }
        uri() {
            return "";
        }
        Image() {
            const obj = new this.$.$mol_image2();
            obj.links = () => [
                this.uri()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_avatar.prototype, "Image", null);
    $.$hyoo_idea_person_avatar = $hyoo_idea_person_avatar;
})($ || ($ = {}));
//hyoo/idea/person/avatar/-view.tree/avatar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        $mol_style_define($hyoo_idea_person_avatar, {
            width: rem(10),
            height: rem(10),
            justifyContent: 'center',
            Image: {
                width: per(100),
                height: per(100),
                border: {
                    radius: per(50),
                },
                box: {
                    shadow: [{
                            x: 0,
                            y: 0,
                            blur: 0,
                            spread: rem(0.15),
                            color: $mol_theme.text,
                        }],
                }
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/person/avatar/avatar.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_plural extends $mol_object2 {
        other() {
            return this.$.$mol_locale.text('$hyoo_idea_plural_other');
        }
        one() {
            return this.$.$mol_locale.text('$hyoo_idea_plural_one');
        }
        two() {
            return this.$.$mol_locale.text('$hyoo_idea_plural_two');
        }
        few() {
            return this.$.$mol_locale.text('$hyoo_idea_plural_few');
        }
        many() {
            return this.$.$mol_locale.text('$hyoo_idea_plural_many');
        }
    }
    $.$hyoo_idea_plural = $hyoo_idea_plural;
})($ || ($ = {}));
//hyoo/idea/plural/-view.tree/plural.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_plural extends $.$hyoo_idea_plural {
            plural_rules() {
                const locale = this.$.$mol_locale.lang();
                return new Intl.PluralRules(locale);
            }
            select(num) {
                const plural = this.plural_rules().select(num);
                return this[plural]();
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_idea_plural.prototype, "plural_rules", null);
        $$.$hyoo_idea_plural = $hyoo_idea_plural;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/plural/plural.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_ago extends $mol_view {
        param_count() {
            return "{count}";
        }
        param_unit() {
            return "{unit}";
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_idea_ago_title');
        }
        now() {
            return this.$.$mol_locale.text('$hyoo_idea_ago_now');
        }
        moment() {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        sub() {
            return [
                this.ago()
            ];
        }
        units() {
            return {
                second: this.second(),
                minute: this.minute(),
                hour: this.hour(),
                day: this.day(),
                month: this.month(),
                year: this.year()
            };
        }
        ago() {
            return "";
        }
        second() {
            const obj = new this.$.$hyoo_idea_plural();
            obj.other = () => this.$.$mol_locale.text('$hyoo_idea_ago_second_other');
            obj.one = () => this.$.$mol_locale.text('$hyoo_idea_ago_second_one');
            obj.two = () => this.$.$mol_locale.text('$hyoo_idea_ago_second_two');
            obj.few = () => this.$.$mol_locale.text('$hyoo_idea_ago_second_few');
            obj.many = () => this.$.$mol_locale.text('$hyoo_idea_ago_second_many');
            return obj;
        }
        minute() {
            const obj = new this.$.$hyoo_idea_plural();
            obj.other = () => this.$.$mol_locale.text('$hyoo_idea_ago_minute_other');
            obj.one = () => this.$.$mol_locale.text('$hyoo_idea_ago_minute_one');
            obj.two = () => this.$.$mol_locale.text('$hyoo_idea_ago_minute_two');
            obj.few = () => this.$.$mol_locale.text('$hyoo_idea_ago_minute_few');
            obj.many = () => this.$.$mol_locale.text('$hyoo_idea_ago_minute_many');
            return obj;
        }
        hour() {
            const obj = new this.$.$hyoo_idea_plural();
            obj.other = () => this.$.$mol_locale.text('$hyoo_idea_ago_hour_other');
            obj.one = () => this.$.$mol_locale.text('$hyoo_idea_ago_hour_one');
            obj.two = () => this.$.$mol_locale.text('$hyoo_idea_ago_hour_two');
            obj.few = () => this.$.$mol_locale.text('$hyoo_idea_ago_hour_few');
            obj.many = () => this.$.$mol_locale.text('$hyoo_idea_ago_hour_many');
            return obj;
        }
        day() {
            const obj = new this.$.$hyoo_idea_plural();
            obj.other = () => this.$.$mol_locale.text('$hyoo_idea_ago_day_other');
            obj.one = () => this.$.$mol_locale.text('$hyoo_idea_ago_day_one');
            obj.two = () => this.$.$mol_locale.text('$hyoo_idea_ago_day_two');
            obj.few = () => this.$.$mol_locale.text('$hyoo_idea_ago_day_few');
            obj.many = () => this.$.$mol_locale.text('$hyoo_idea_ago_day_many');
            return obj;
        }
        month() {
            const obj = new this.$.$hyoo_idea_plural();
            obj.other = () => this.$.$mol_locale.text('$hyoo_idea_ago_month_other');
            obj.one = () => this.$.$mol_locale.text('$hyoo_idea_ago_month_one');
            obj.two = () => this.$.$mol_locale.text('$hyoo_idea_ago_month_two');
            obj.few = () => this.$.$mol_locale.text('$hyoo_idea_ago_month_few');
            obj.many = () => this.$.$mol_locale.text('$hyoo_idea_ago_month_many');
            return obj;
        }
        year() {
            const obj = new this.$.$hyoo_idea_plural();
            obj.other = () => this.$.$mol_locale.text('$hyoo_idea_ago_year_other');
            obj.one = () => this.$.$mol_locale.text('$hyoo_idea_ago_year_one');
            obj.two = () => this.$.$mol_locale.text('$hyoo_idea_ago_year_two');
            obj.few = () => this.$.$mol_locale.text('$hyoo_idea_ago_year_few');
            obj.many = () => this.$.$mol_locale.text('$hyoo_idea_ago_year_many');
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_ago.prototype, "moment", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_ago.prototype, "second", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_ago.prototype, "minute", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_ago.prototype, "hour", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_ago.prototype, "day", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_ago.prototype, "month", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_ago.prototype, "year", null);
    $.$hyoo_idea_ago = $hyoo_idea_ago;
})($ || ($ = {}));
//hyoo/idea/ago/-view.tree/ago.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_ago extends $.$hyoo_idea_ago {
            SECOND = 1000;
            MINUTE = this.SECOND * 60;
            HOUR = this.MINUTE * 60;
            DAY = this.HOUR * 24;
            MONTH = this.DAY * 30;
            YEAR = this.DAY * 365;
            unit(ms) {
                if (ms < this.MINUTE)
                    return 'second';
                if (ms < this.HOUR)
                    return 'minute';
                if (ms < this.DAY)
                    return 'hour';
                if (ms < this.MONTH)
                    return 'day';
                if (ms <= this.YEAR)
                    return 'month';
                return 'year';
            }
            ago() {
                const moment = new $mol_time_moment(this.moment());
                const ms = $mol_state_time.now(10000) - moment.valueOf();
                const duration = new $mol_time_duration(ms);
                const format = { second: 'PT1S', minute: 'PT1M', hour: 'PT1H', day: 'P1DT', month: 'P1MT', year: 'P1YT' };
                const unit = this.unit(ms);
                const value = Math.round(duration.count(format[unit]));
                const now = unit === 'second' && value < 10;
                if (now)
                    return this.now();
                return this.title()
                    .replace(this.param_count(), Math.abs(value).toString())
                    .replace(this.param_unit(), this.units()[unit].select(value));
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_idea_ago.prototype, "ago", null);
        $$.$hyoo_idea_ago = $hyoo_idea_ago;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/ago/ago.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_horizontal extends $mol_icon {
        path() {
            return "M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12Z";
        }
    }
    $.$mol_icon_dots_horizontal = $mol_icon_dots_horizontal;
})($ || ($ = {}));
//mol/icon/dots/horizontal/-view.tree/horizontal.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_lightbulb extends $mol_icon {
        path() {
            return "M12,2C8.13,2 5,5.13 5,9C5,11.38 6.19,13.47 8,14.74V17C8,17.55 8.45,18 9,18H15C15.55,18 16,17.55 16,17V14.74C17.81,13.47 19,11.38 19,9C19,5.13 15.87,2 12,2M9,21C9,21.55 9.45,22 10,22H14C14.55,22 15,21.55 15,21V20H9V21Z";
        }
    }
    $.$mol_icon_lightbulb = $mol_icon_lightbulb;
})($ || ($ = {}));
//mol/icon/lightbulb/-view.tree/lightbulb.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_lightbulb_on extends $mol_icon {
        path() {
            return "M12,6C15.31,6 18,8.69 18,12C18,14.22 16.79,16.16 15,17.2V19C15,19.55 14.55,20 14,20H10C9.45,20 9,19.55 9,19V17.2C7.21,16.16 6,14.22 6,12C6,8.69 8.69,6 12,6M14,21V22C14,22.55 13.55,23 13,23H11C10.45,23 10,22.55 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z";
        }
    }
    $.$mol_icon_lightbulb_on = $mol_icon_lightbulb_on;
})($ || ($ = {}));
//mol/icon/lightbulb/on/-view.tree/on.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_comment extends $mol_icon {
        path() {
            return "M9,22C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V4C2,2.89 2.9,2 4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z";
        }
    }
    $.$mol_icon_comment = $mol_icon_comment;
})($ || ($ = {}));
//mol/icon/comment/-view.tree/comment.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_comment_text extends $mol_icon {
        path() {
            return "M9,22C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V4C2,2.89 2.9,2 4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M5,5V7H19V5H5M5,9V11H13V9H5M5,13V15H15V13H5Z";
        }
    }
    $.$mol_icon_comment_text = $mol_icon_comment_text;
})($ || ($ = {}));
//mol/icon/comment/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_comment_text_multiple extends $mol_icon {
        path() {
            return "M3,15H1V3C1,1.9 1.9,1 3,1H19V3H3V15M12,23C11.45,23 11,22.55 11,22V19H7C5.9,19 5,18.1 5,17V7C5,5.9 5.9,5 7,5H21C22.1,5 23,5.9 23,7V17C23,18.1 22.1,19 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M9,9V11H19V9H9M9,13V15H17V13H9Z";
        }
    }
    $.$mol_icon_comment_text_multiple = $mol_icon_comment_text_multiple;
})($ || ($ = {}));
//mol/icon/comment/text/multiple/-view.tree/multiple.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_share extends $mol_icon {
        path() {
            return "M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z";
        }
    }
    $.$mol_icon_share = $mol_icon_share;
})($ || ($ = {}));
//mol/icon/share/-view.tree/share.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_share_variant extends $mol_icon {
        path() {
            return "M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8C19.66,8 21,6.66 21,5C21,3.34 19.66,2 18,2C16.34,2 15,3.34 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9C4.34,9 3,10.34 3,12C3,13.66 4.34,15 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19C20.92,17.39 19.61,16.08 18,16.08Z";
        }
    }
    $.$mol_icon_share_variant = $mol_icon_share_variant;
})($ || ($ = {}));
//mol/icon/share/variant/-view.tree/variant.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_share extends $mol_button_minor {
        uri() {
            return "";
        }
        capture() {
            return null;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_button_share_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_share_variant();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_share.prototype, "Icon", null);
    $.$mol_button_share = $mol_button_share;
})($ || ($ = {}));
//mol/button/share/-view.tree/share.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_serialize(node) {
        const serializer = new $mol_dom_context.XMLSerializer;
        return serializer.serializeToString(node);
    }
    $.$mol_dom_serialize = $mol_dom_serialize;
})($ || ($ = {}));
//mol/dom/serialize/serialize.ts
;
"use strict";
var $;
(function ($) {
    async function $mol_dom_capture_image(el) {
        function wait_load(el) {
            return new Promise((done, fail) => {
                el.onload = () => done(el);
                el.onerror = fail;
            });
        }
        function restyle(el, styles) {
            for (let i = 0; i < styles.length; ++i) {
                const prop = styles[i];
                el.style[prop] = styles[prop];
            }
        }
        function clone(el) {
            const re = el.cloneNode();
            if (el instanceof HTMLImageElement && !/^(data|blob):/.test(el.src)) {
                const canvas = $mol_jsx("canvas", { width: el.naturalWidth, height: el.naturalHeight });
                const context = canvas.getContext('2d');
                context.drawImage(el, 0, 0);
                try {
                    re['src'] = canvas.toDataURL();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
            }
            const styles = $mol_dom_context.getComputedStyle(el);
            restyle(re, styles);
            const before = $mol_dom_context.getComputedStyle(el, ':before');
            if (before.content !== 'none') {
                const kid = $mol_jsx("span", null, JSON.parse(before.content));
                restyle(kid, before);
                re.appendChild(kid);
            }
            for (const kid of el.childNodes) {
                const dup = (kid.nodeType === kid.ELEMENT_NODE)
                    ? clone(kid)
                    : kid.cloneNode();
                re.appendChild(dup);
            }
            const after = $mol_dom_context.getComputedStyle(el, ':after');
            if (after.content !== 'none') {
                const kid = $mol_jsx("span", null, JSON.parse(after.content));
                restyle(kid, after);
                re.appendChild(kid);
            }
            return re;
        }
        const { width, height } = el.getBoundingClientRect();
        const svg = $mol_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${width} ${height}`, width: String(width), height: String(height) },
            $mol_jsx("foreignObject", { xmlns: "http://www.w3.org/2000/svg", width: String(width), height: String(height) }, clone(el)));
        const xml = $mol_dom_serialize(svg);
        const uri = 'data:image/svg+xml,' + encodeURIComponent(xml);
        const image = $mol_jsx("img", { src: uri });
        await wait_load(image);
        return image;
    }
    $.$mol_dom_capture_image = $mol_dom_capture_image;
    async function $mol_dom_capture_canvas(el) {
        const image = await $mol_dom_capture_image(el);
        const canvas = $mol_jsx("canvas", { width: image.width, height: image.height });
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);
        return canvas;
    }
    $.$mol_dom_capture_canvas = $mol_dom_capture_canvas;
})($ || ($ = {}));
//mol/dom/capture/capture.tsx
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_share extends $.$mol_button_share {
            capture() {
                return this.$.$mol_dom_context.document.body;
            }
            uri() {
                return this.$.$mol_state_arg.href();
            }
            async click() {
                const title = this.title();
                const url = this.uri() ?? undefined;
                const files = [];
                let el = this.capture();
                if (el) {
                    if (el instanceof $mol_view)
                        el = el.dom_tree();
                    const canvas = await $mol_dom_capture_canvas(el);
                    const blob = await new Promise(done => canvas.toBlob(done));
                    const file = new File([blob], title + '.png', { type: blob.type });
                    files.push(file);
                }
                await this.$.$mol_dom_context.navigator.share({ title, files, url });
            }
        }
        $$.$mol_button_share = $mol_button_share;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/share/share.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_post_full extends $mol_list {
        id() {
            return this.post().id();
        }
        content() {
            return this.post().content();
        }
        created_moment() {
            return this.post().created_moment();
        }
        avatar() {
            return this.post().person().avatar();
        }
        post() {
            const obj = new this.$.$hyoo_idea_post();
            return obj;
        }
        rows() {
            return [
                this.Head(),
                this.Content(),
                this.Foot()
            ];
        }
        Avatar() {
            const obj = new this.$.$hyoo_idea_person_avatar();
            obj.uri = () => this.avatar();
            return obj;
        }
        author_name() {
            return "";
        }
        Name() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.author_name();
            return obj;
        }
        Ago() {
            const obj = new this.$.$hyoo_idea_ago();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_post_full_Ago_title');
            obj.moment = () => this.created_moment();
            return obj;
        }
        Name_col() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Name(),
                this.Ago()
            ];
            return obj;
        }
        Menu_icon() {
            const obj = new this.$.$mol_icon_dots_horizontal();
            return obj;
        }
        Menu() {
            const obj = new this.$.$mol_pick();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_post_full_Menu_hint');
            obj.trigger_content = () => [
                this.Menu_icon()
            ];
            obj.bubble_content = () => [
                "comming soon"
            ];
            return obj;
        }
        Head() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Avatar(),
                this.Name_col(),
                this.Menu()
            ];
            return obj;
        }
        Content() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.content();
            return obj;
        }
        Like_icon() {
            const obj = new this.$.$mol_icon_lightbulb_on();
            return obj;
        }
        Like_count() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => "7";
            return obj;
        }
        Like() {
            const obj = new this.$.$mol_check_icon();
            obj.sub = () => [
                this.Like_icon(),
                this.Like_count()
            ];
            return obj;
        }
        Reaction() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Like()
            ];
            return obj;
        }
        Comments_icon() {
            const obj = new this.$.$mol_icon_comment_text_multiple();
            return obj;
        }
        Comments_count() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => "13";
            return obj;
        }
        Comments() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                comments: this.id()
            });
            obj.sub = () => [
                this.Comments_icon(),
                this.Comments_count()
            ];
            return obj;
        }
        Share() {
            const obj = new this.$.$mol_button_share();
            return obj;
        }
        Foot() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Reaction(),
                this.Comments(),
                this.Share()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "post", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Avatar", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Name", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Ago", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Name_col", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Menu_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Like_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Like_count", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Like", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Reaction", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Comments_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Comments_count", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Comments", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Share", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_full.prototype, "Foot", null);
    $.$hyoo_idea_post_full = $hyoo_idea_post_full;
})($ || ($ = {}));
//hyoo/idea/post/full/-view.tree/full.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, per } = $mol_style_unit;
        $mol_style_define($.$hyoo_idea_post_full, {
            width: per(100),
            background: {
                color: $mol_theme.card,
            },
            margin: {
                top: $mol_gap.block,
            },
            border: {
                radius: $mol_gap.round,
            },
            Avatar: {
                width: rem(3),
                height: rem(3),
            },
            Head: {
                alignItems: 'center',
                margin: {
                    bottom: $mol_gap.block,
                },
            },
            Ago: {
                font: {
                    size: rem(0.75),
                },
            },
            Menu: {
                alignSelf: 'flex-start',
                margin: {
                    left: 'auto',
                },
            },
            Foot: {
                margin: {
                    top: $mol_gap.block,
                },
            },
            Share: {
                margin: {
                    left: 'auto',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/post/full/full.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_post_full extends $.$hyoo_idea_post_full {
            author() {
                return this.post().person();
            }
            author_name() {
                return this.author()?.name_short();
            }
        }
        $$.$hyoo_idea_post_full = $hyoo_idea_post_full;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/post/full/full.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_feed_page extends $mol_page {
        person() {
            const obj = new this.$.$hyoo_idea_person();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_idea_feed_page_title');
        }
        body() {
            return [
                this.Posts()
            ];
        }
        post(id) {
            const obj = new this.$.$hyoo_idea_post();
            return obj;
        }
        Post(id) {
            const obj = new this.$.$hyoo_idea_post_full();
            obj.post = () => this.post(id);
            return obj;
        }
        posts() {
            return [
                this.Post("0_0")
            ];
        }
        Posts() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.posts();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_feed_page.prototype, "person", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_feed_page.prototype, "post", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_feed_page.prototype, "Post", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_feed_page.prototype, "Posts", null);
    $.$hyoo_idea_feed_page = $hyoo_idea_feed_page;
})($ || ($ = {}));
//hyoo/idea/feed/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_feed_page extends $.$hyoo_idea_feed_page {
            domain() {
                return this.person().domain();
            }
            posts_all() {
                return this.domain().persons().list().map(obj => obj.posts()).flat();
            }
            posts_sorted() {
                return this.posts_all().sort((a, b) => b.created_moment().valueOf() - a.created_moment().valueOf());
            }
            posts() {
                return this.posts_sorted().map(obj => this.Post(obj));
            }
            post(obj) {
                return obj;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_idea_feed_page.prototype, "posts_all", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_feed_page.prototype, "posts_sorted", null);
        $$.$hyoo_idea_feed_page = $hyoo_idea_feed_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/feed/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_project_form extends $mol_form {
        name(next) {
            return this.project().name(next);
        }
        logo_node() {
            return this.project().logo_node();
        }
        logo() {
            return this.project().logo();
        }
        description_node() {
            return this.project().description_node();
        }
        description(next) {
            return this.project().description(next);
        }
        team(next) {
            return this.project().team(next);
        }
        project() {
            const obj = new this.$.$hyoo_idea_project();
            return obj;
        }
        form_fields() {
            return [
                this.Logo_field(),
                this.Name_field(),
                this.Description_field()
            ];
        }
        Logo() {
            const obj = new this.$.$mol_image2();
            obj.links = () => [
                this.logo()
            ];
            return obj;
        }
        logo_add(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        Logo_upload() {
            const obj = new this.$.$mol_button_open();
            obj.files = (next) => this.logo_add(next);
            obj.multiple = () => false;
            obj.accept = () => "image/*";
            return obj;
        }
        logo_drop(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Logo_drop_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Logo_drop() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_project_form_Logo_drop_hint');
            obj.click = (next) => this.logo_drop(next);
            obj.sub = () => [
                this.Logo_drop_icon()
            ];
            return obj;
        }
        Logo_control() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Logo(),
                this.Logo_upload(),
                this.Logo_drop()
            ];
            return obj;
        }
        Logo_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_project_form_Logo_field_name');
            obj.control = () => this.Logo_control();
            return obj;
        }
        Name_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.name(next);
            return obj;
        }
        Name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_project_form_Name_field_name');
            obj.control = () => this.Name_control();
            return obj;
        }
        description_selection(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        Description_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.description(next);
            obj.selection = (next) => this.description_selection(next);
            return obj;
        }
        Description_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_project_form_Description_field_name');
            obj.control = () => this.Description_control();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "project", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "Logo", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "logo_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "Logo_upload", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "logo_drop", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "Logo_drop_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "Logo_drop", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "Logo_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "Logo_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "Name_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "Name_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "description_selection", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "Description_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_form.prototype, "Description_field", null);
    $.$hyoo_idea_project_form = $hyoo_idea_project_form;
})($ || ($ = {}));
//hyoo/idea/project/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_project_form extends $.$hyoo_idea_project_form {
            domain() {
                return this.project().domain();
            }
            logo_add(next) {
                if (next && next.length)
                    this.logo_node().blob(next[0]);
                return next;
            }
            logo_drop() {
                this.logo_node().list([]);
            }
            description_selection(next) {
                return this.description_node().selection(this.domain().user().id(), next);
            }
        }
        $$.$hyoo_idea_project_form = $hyoo_idea_project_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/project/form/form.vew.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($.$hyoo_idea_project_form, {
            Logo: {
                width: rem(4),
            },
            Logo_control: {
                alignItems: 'center',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/project/form/form.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_pencil extends $mol_icon {
        path() {
            return "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";
        }
    }
    $.$mol_icon_pencil = $mol_icon_pencil;
})($ || ($ = {}));
//mol/icon/pencil/-view.tree/pencil.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_project_page extends $mol_page {
        domain() {
            return this.project().domain();
        }
        logo() {
            return this.project().logo();
        }
        name() {
            return this.project().name();
        }
        project() {
            const obj = new this.$.$hyoo_idea_project();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_idea_project_page_title');
        }
        tools() {
            return [
                this.Edit(),
                this.Close()
            ];
        }
        editing() {
            return false;
        }
        Form() {
            const obj = new this.$.$hyoo_idea_project_form();
            obj.project = () => this.project();
            return obj;
        }
        body() {
            return [
                this.Blocks()
            ];
        }
        Edit_icon() {
            const obj = new this.$.$mol_icon_pencil();
            return obj;
        }
        Edit() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                project_edit: ""
            });
            obj.sub = () => [
                this.Edit_icon()
            ];
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                project: null,
                project_edit: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        Project_logo() {
            const obj = new this.$.$mol_image2();
            obj.links = () => [
                this.logo()
            ];
            return obj;
        }
        Name() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.name();
            return obj;
        }
        Face() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Project_logo(),
                this.Name()
            ];
            return obj;
        }
        blocks() {
            return [
                this.Face()
            ];
        }
        Blocks() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.blocks();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_page.prototype, "project", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_page.prototype, "Form", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_page.prototype, "Edit_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_page.prototype, "Edit", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_page.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_page.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_page.prototype, "Project_logo", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_page.prototype, "Name", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_page.prototype, "Face", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_project_page.prototype, "Blocks", null);
    $.$hyoo_idea_project_page = $hyoo_idea_project_page;
})($ || ($ = {}));
//hyoo/idea/project/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px, per } = $mol_style_unit;
        $mol_style_define($.$hyoo_idea_project_page, {
            flex: {
                basis: rem(40),
                shrink: 0,
            },
            Project_logo: {
                width: rem(8),
                margin: $mol_gap.block,
            },
            Face: {
                alignItems: 'center',
            },
            Name: {
                padding: $mol_gap.text,
                font: {
                    size: rem(1.5),
                },
                line: {
                    height: per(150),
                },
                text: {
                    align: 'center',
                },
                letter: {
                    spacing: px(1),
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/project/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_project_page extends $.$hyoo_idea_project_page {
            editing() {
                return this.project().person().id() === this.domain().user().id() && this.$.$mol_state_arg.value('project_edit') === '';
            }
            body() {
                return this.editing() ? [this.Form()] : super.body();
            }
        }
        $$.$hyoo_idea_project_page = $hyoo_idea_project_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/project/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_phone extends $mol_format {
        mask(id) {
            return "+___ (___) ___-__-__";
        }
        keyboard() {
            return "tel";
        }
    }
    $.$mol_phone = $mol_phone;
})($ || ($ = {}));
//mol/phone/-view.tree/phone.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$mol_phone_formats = {
            '': '+___________',
            '1': '+_ (___) ___-__-__',
            '27': '+__ (__) ___-__-__',
            '212': '+___ (___) __-__-__',
            '253': '+___ (__) __-__-__',
            '254': '+___ (___) __-__-__',
            '30': '+__ (___) ___-__-__',
            '31': '+__ (__) ____ ____',
            '32': '+__ (___) __-__-__',
            '33': '+__ _ __-__-__-__',
            '34': '+__ ___-___-___',
            '36': '+__ __ ___ ___',
            '351': '+___ ___ ___ ___',
            '353': '+___ _____',
            '354': '+___ ___ __ __',
            '358': '+___ (___) _ ___-___',
            '380': '+___ (__) ___ __ __',
            '39': '+__ (___) ___-__-__',
            '40': '+__-___-___-___',
            '41': '+__ (__) ___-__-__',
            '44': '+__ (___) ____ ____',
            '45': '+__ __-__-__-__',
            '46': '+__ ___-___ __ __',
            '47': '+__ __-__-__-__',
            '48': '+__ (____) __-__-__',
            '49': '+__ (__) ___-__-__',
            '52': '+__ ___ ___ ____',
            '60': '+__ (__) ____-____',
            '61': '+__ (___) ___-___',
            '63': '+__ (___) ___-__-__',
            '64': '+__ (__) ___-__-__',
            '65': '+__ ____-____',
            '66': '+__ ____-____',
            '7': '+_ (___) ___-__-__',
            '81': '+__ (__) ___-__-__',
            '82': '+__ (___) ___-__-__',
            '86': '+__ (___) ____-____',
            '90': '+__ (___) ___-__-__',
            '91': '+__ ____-____',
            '92': '+__ (__) ____-____',
            '94': '+__ (___) ___-___',
            '98': '+__ (___) ___-__-__',
        };
        class $mol_phone extends $.$mol_phone {
            mask(val) {
                return $$.$mol_phone_formats[val.slice(0, 3)]
                    || $$.$mol_phone_formats[val.slice(0, 2)]
                    || $$.$mol_phone_formats[val.slice(0, 1)]
                    || $$.$mol_phone_formats[''];
            }
        }
        $$.$mol_phone = $mol_phone;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/phone/phone.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_delete extends $mol_icon {
        path() {
            return "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19C6,20.1 6.9,21 8,21H16C17.1,21 18,20.1 18,19V7H6V19Z";
        }
    }
    $.$mol_icon_delete = $mol_icon_delete;
})($ || ($ = {}));
//mol/icon/delete/-view.tree/delete.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_person_form extends $mol_form {
        avatar() {
            return this.person().avatar();
        }
        name_user(next) {
            return this.person().name_user(next);
        }
        status(next) {
            return this.person().status(next);
        }
        about(next) {
            return this.person().about(next);
        }
        name(next) {
            return this.person().name(next);
        }
        name_family(next) {
            return this.person().name_family(next);
        }
        name_father(next) {
            return this.person().name_father(next);
        }
        sex(next) {
            return this.person().sex(next);
        }
        date_birth(next) {
            return this.person().date_birth(next);
        }
        nationality(next) {
            return this.person().nationality(next);
        }
        country(next) {
            return this.person().country(next);
        }
        city(next) {
            return this.person().city(next);
        }
        phone(next) {
            return this.person().phone(next);
        }
        email(next) {
            return this.person().email(next);
        }
        job_status(next) {
            return this.person().job_status(next);
        }
        skills(next) {
            return this.person().skills(next);
        }
        person() {
            const obj = new this.$.$hyoo_idea_person();
            return obj;
        }
        form_fields() {
            return [
                this.Info()
            ];
        }
        Avatar() {
            const obj = new this.$.$hyoo_idea_person_avatar();
            obj.uri = () => this.avatar();
            return obj;
        }
        avatar_file(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        Avatar_upload() {
            const obj = new this.$.$mol_button_open();
            obj.files = (next) => this.avatar_file(next);
            obj.multiple = () => false;
            obj.accept = () => "image/*";
            return obj;
        }
        avatar_drop(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Avatar_drop_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Avatar_drop() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Avatar_drop_hint');
            obj.click = (next) => this.avatar_drop(next);
            obj.sub = () => [
                this.Avatar_drop_icon()
            ];
            return obj;
        }
        Avatar_control() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Avatar(),
                this.Avatar_upload(),
                this.Avatar_drop()
            ];
            return obj;
        }
        Avatar_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Avatar_field_name');
            obj.control = () => this.Avatar_control();
            return obj;
        }
        Name_user_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Name_user_control_hint');
            obj.value = (next) => this.name_user(next);
            return obj;
        }
        Name_user_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Name_user_field_name');
            obj.control = () => this.Name_user_control();
            return obj;
        }
        Status_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Status_control_hint');
            obj.value = (next) => this.status(next);
            return obj;
        }
        Status_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Status_field_name');
            obj.control = () => this.Status_control();
            return obj;
        }
        About_control() {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_person_form_About_control_hint');
            obj.value = (next) => this.about(next);
            return obj;
        }
        About_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_About_field_name');
            obj.control = () => this.About_control();
            return obj;
        }
        Profile() {
            const obj = new this.$.$mol_form();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Profile_title');
            obj.form_fields = () => [
                this.Avatar_field(),
                this.Name_user_field(),
                this.Status_field(),
                this.About_field()
            ];
            return obj;
        }
        Name_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Name_control_hint');
            obj.value = (next) => this.name(next);
            return obj;
        }
        Name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Name_field_name');
            obj.control = () => this.Name_control();
            return obj;
        }
        Name_family_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Name_family_control_hint');
            obj.value = (next) => this.name_family(next);
            return obj;
        }
        Name_family_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Name_family_field_name');
            obj.control = () => this.Name_family_control();
            return obj;
        }
        Name_father_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.name_father(next);
            return obj;
        }
        Name_father_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Name_father_field_name');
            obj.control = () => this.Name_father_control();
            return obj;
        }
        Name_group() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Name_field(),
                this.Name_family_field(),
                this.Name_father_field()
            ];
            return obj;
        }
        Sex_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.sex(next);
            obj.options = () => ({
                male: this.$.$mol_locale.text('$hyoo_idea_person_form_Sex_control_options_male'),
                female: this.$.$mol_locale.text('$hyoo_idea_person_form_Sex_control_options_female')
            });
            return obj;
        }
        Sex_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Sex_field_name');
            obj.control = () => this.Sex_control();
            return obj;
        }
        Date_birth_control() {
            const obj = new this.$.$mol_date();
            obj.value_moment = (next) => this.date_birth(next);
            return obj;
        }
        Date_birth_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Date_birth_field_name');
            obj.control = () => this.Date_birth_control();
            return obj;
        }
        Body_group() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Sex_field(),
                this.Date_birth_field()
            ];
            return obj;
        }
        Nationality_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.nationality(next);
            return obj;
        }
        Nationality_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Nationality_field_name');
            obj.control = () => this.Nationality_control();
            return obj;
        }
        Personal() {
            const obj = new this.$.$mol_form();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Personal_title');
            obj.form_fields = () => [
                this.Name_group(),
                this.Body_group(),
                this.Nationality_field()
            ];
            return obj;
        }
        Country_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Country_control_hint');
            obj.value = (next) => this.country(next);
            return obj;
        }
        Country_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Country_field_name');
            obj.control = () => this.Country_control();
            return obj;
        }
        City_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_person_form_City_control_hint');
            obj.value = (next) => this.city(next);
            return obj;
        }
        City_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_City_field_name');
            obj.control = () => this.City_control();
            return obj;
        }
        Location() {
            const obj = new this.$.$mol_form();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Location_title');
            obj.form_fields = () => [
                this.Country_field(),
                this.City_field()
            ];
            return obj;
        }
        Phone_control() {
            const obj = new this.$.$mol_phone();
            obj.value = (next) => this.phone(next);
            return obj;
        }
        Phone_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Phone_field_name');
            obj.control = () => this.Phone_control();
            return obj;
        }
        Email_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Email_control_hint');
            obj.value = (next) => this.email(next);
            return obj;
        }
        Email_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Email_field_name');
            obj.control = () => this.Email_control();
            return obj;
        }
        Contacts() {
            const obj = new this.$.$mol_form();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Contacts_title');
            obj.form_fields = () => [
                this.Phone_field(),
                this.Email_field()
            ];
            return obj;
        }
        Job_status_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.job_status(next);
            obj.options = () => ({
                working_for_hire: this.$.$mol_locale.text('$hyoo_idea_person_form_Job_status_control_options_working_for_hire'),
                self_employed: this.$.$mol_locale.text('$hyoo_idea_person_form_Job_status_control_options_self_employed'),
                unemployed: this.$.$mol_locale.text('$hyoo_idea_person_form_Job_status_control_options_unemployed')
            });
            return obj;
        }
        Job_status_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Job_status_field_name');
            obj.control = () => this.Job_status_control();
            return obj;
        }
        skills_dict() {
            return {
                programming: this.$.$mol_locale.text('$hyoo_idea_person_form_skills_dict_programming'),
                design: this.$.$mol_locale.text('$hyoo_idea_person_form_skills_dict_design'),
                managment: this.$.$mol_locale.text('$hyoo_idea_person_form_skills_dict_managment')
            };
        }
        Skills_control() {
            const obj = new this.$.$mol_select_list();
            obj.value = (next) => this.skills(next);
            obj.dictionary = () => this.skills_dict();
            return obj;
        }
        Skills_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Skills_field_name');
            obj.control = () => this.Skills_control();
            return obj;
        }
        jobs_field_name() {
            return this.$.$mol_locale.text('$hyoo_idea_person_form_jobs_field_name');
        }
        Job_add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        job_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Job_add() {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Job_add_icon()
            ];
            obj.click = (next) => this.job_add(next);
            return obj;
        }
        position(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Position_control(id) {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.position(id, next);
            return obj;
        }
        Position_field(id) {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Position_field_name');
            obj.control = () => this.Position_control(id);
            return obj;
        }
        Employer_group(id) {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Position_field(id)
            ];
            return obj;
        }
        date_start(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Date_start_control(id) {
            const obj = new this.$.$mol_date();
            obj.value_moment = (next) => this.date_start(id, next);
            return obj;
        }
        Date_start_field(id) {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Date_start_field_name');
            obj.control = () => this.Date_start_control(id);
            return obj;
        }
        date_end(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Date_end_control(id) {
            const obj = new this.$.$mol_date();
            obj.value_moment = (next) => this.date_end(id, next);
            return obj;
        }
        present(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Up_to_present_control(id) {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Up_to_present_control_title');
            obj.checked = (next) => this.present(id, next);
            return obj;
        }
        Date_end_content(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Date_end_control(id),
                this.Up_to_present_control(id)
            ];
            return obj;
        }
        Date_end_field(id) {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Date_end_field_name');
            obj.Content = () => this.Date_end_content(id);
            return obj;
        }
        Date_group(id) {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Date_start_field(id),
                this.Date_end_field(id)
            ];
            return obj;
        }
        company(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Company_control(id) {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.company(id, next);
            return obj;
        }
        Company_field(id) {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Company_field_name');
            obj.control = () => this.Company_control(id);
            return obj;
        }
        industry(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Industry_contrl(id) {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.industry(id, next);
            return obj;
        }
        Industry_field(id) {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Industry_field_name');
            obj.control = () => this.Industry_contrl(id);
            return obj;
        }
        Company_group(id) {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Company_field(id),
                this.Industry_field(id)
            ];
            return obj;
        }
        functions(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Functions_control(id) {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Functions_control_hint');
            obj.value = (next) => this.functions(id, next);
            return obj;
        }
        Functions_field(id) {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Functions_field_name');
            obj.control = () => this.Functions_control(id);
            return obj;
        }
        Job_drop_icon(id) {
            const obj = new this.$.$mol_icon_delete();
            return obj;
        }
        job_drop(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Job_drop(id) {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Job_drop_icon(id)
            ];
            obj.click = (next) => this.job_drop(id, next);
            return obj;
        }
        Job_drop_row(id) {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Job_drop(id)
            ];
            return obj;
        }
        Job_form(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Employer_group(id),
                this.Date_group(id),
                this.Company_group(id),
                this.Functions_field(id),
                this.Job_drop_row(id)
            ];
            return obj;
        }
        job_rows() {
            return [
                this.Job_form("0")
            ];
        }
        Jobs_content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.job_rows();
            return obj;
        }
        Jobs_field() {
            const obj = new this.$.$mol_form_field();
            obj.label = () => [
                this.jobs_field_name(),
                this.Job_add()
            ];
            obj.Content = () => this.Jobs_content();
            return obj;
        }
        Work() {
            const obj = new this.$.$mol_form();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Work_title');
            obj.form_fields = () => [
                this.Job_status_field(),
                this.Skills_field(),
                this.Jobs_field()
            ];
            return obj;
        }
        institutions_field_name() {
            return this.$.$mol_locale.text('$hyoo_idea_person_form_institutions_field_name');
        }
        Institution_add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        institution_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Institution_add() {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Institution_add_icon()
            ];
            obj.click = (next) => this.institution_add(next);
            return obj;
        }
        specialty(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Specialty_control(id) {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.specialty(id, next);
            return obj;
        }
        Specialty_field(id) {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Specialty_field_name');
            obj.control = () => this.Specialty_control(id);
            return obj;
        }
        degree(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Degree_control(id) {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.degree(id, next);
            return obj;
        }
        Degree_field(id) {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Degree_field_name');
            obj.control = () => this.Degree_control(id);
            return obj;
        }
        Student_group(id) {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Specialty_field(id),
                this.Degree_field(id)
            ];
            return obj;
        }
        date_finish(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Date_finish_control(id) {
            const obj = new this.$.$mol_date();
            obj.value_moment = (next) => this.date_finish(id, next);
            return obj;
        }
        Date_finish(id) {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Date_finish_name');
            obj.control = () => this.Date_finish_control(id);
            return obj;
        }
        institution(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Institution_control(id) {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.institution(id, next);
            return obj;
        }
        Institution_field(id) {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Institution_field_name');
            obj.control = () => this.Institution_control(id);
            return obj;
        }
        department(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Department_control(id) {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.department(id, next);
            return obj;
        }
        Department_field(id) {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Department_field_name');
            obj.control = () => this.Department_control(id);
            return obj;
        }
        Institution_group(id) {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Institution_field(id),
                this.Department_field(id)
            ];
            return obj;
        }
        Institution_drop_icon(id) {
            const obj = new this.$.$mol_icon_delete();
            return obj;
        }
        institution_drop(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Institution_drop(id) {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Institution_drop_icon(id)
            ];
            obj.click = (next) => this.institution_drop(id, next);
            return obj;
        }
        Institution_drop_row(id) {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Institution_drop(id)
            ];
            return obj;
        }
        Institution_form(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Student_group(id),
                this.Date_finish(id),
                this.Institution_group(id),
                this.Institution_drop_row(id)
            ];
            return obj;
        }
        institution_rows() {
            return [
                this.Institution_form("0")
            ];
        }
        Institution_content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.institution_rows();
            return obj;
        }
        Institutions_field() {
            const obj = new this.$.$mol_form_field();
            obj.label = () => [
                this.institutions_field_name(),
                this.Institution_add()
            ];
            obj.Content = () => this.Institution_content();
            return obj;
        }
        Education() {
            const obj = new this.$.$mol_form();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_form_Education_title');
            obj.form_fields = () => [
                this.Institutions_field()
            ];
            return obj;
        }
        Info() {
            const obj = new this.$.$mol_deck();
            obj.items = () => [
                this.Profile(),
                this.Personal(),
                this.Location(),
                this.Contacts(),
                this.Work(),
                this.Education()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "person", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Avatar", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "avatar_file", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Avatar_upload", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "avatar_drop", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Avatar_drop_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Avatar_drop", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Avatar_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Avatar_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Name_user_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Name_user_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Status_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Status_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "About_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "About_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Profile", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Name_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Name_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Name_family_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Name_family_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Name_father_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Name_father_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Name_group", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Sex_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Sex_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Date_birth_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Date_birth_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Body_group", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Nationality_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Nationality_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Personal", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Country_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Country_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "City_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "City_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Location", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Phone_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Phone_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Email_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Email_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Contacts", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Job_status_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Job_status_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Skills_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Skills_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Job_add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "job_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Job_add", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "position", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Position_control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Position_field", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Employer_group", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "date_start", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Date_start_control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Date_start_field", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "date_end", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Date_end_control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "present", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Up_to_present_control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Date_end_content", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Date_end_field", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Date_group", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "company", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Company_control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Company_field", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "industry", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Industry_contrl", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Industry_field", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Company_group", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "functions", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Functions_control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Functions_field", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Job_drop_icon", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "job_drop", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Job_drop", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Job_drop_row", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Job_form", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Jobs_content", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Jobs_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Work", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Institution_add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "institution_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Institution_add", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "specialty", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Specialty_control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Specialty_field", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "degree", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Degree_control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Degree_field", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Student_group", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "date_finish", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Date_finish_control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Date_finish", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "institution", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Institution_control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Institution_field", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "department", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Department_control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Department_field", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Institution_group", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Institution_drop_icon", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "institution_drop", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Institution_drop", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Institution_drop_row", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_form.prototype, "Institution_form", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Institution_content", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Institutions_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Education", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_form.prototype, "Info", null);
    $.$hyoo_idea_person_form = $hyoo_idea_person_form;
})($ || ($ = {}));
//hyoo/idea/person/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        const multy_form = {
            margin: $mol_gap.block,
            padding: {
                bottom: $mol_gap.block,
            },
            border: {
                radius: $mol_gap.round,
            },
            background: {
                color: $mol_theme.card,
            },
            $mol_form_field: {
                padding: {
                    left: $mol_gap.block,
                    right: $mol_gap.block,
                    top: $mol_gap.space,
                    bottom: $mol_gap.space,
                },
            },
        };
        $mol_style_define($.$hyoo_idea_person_form, {
            flex: {
                basis: rem(50),
            },
            Avatar: {
                width: rem(5),
                height: rem(5),
            },
            Avatar_control: {
                alignItems: 'center',
            },
            Job_form: multy_form,
            Jobs_field: {
                Label: {
                    alignItems: 'center',
                },
            },
            Institution_form: multy_form,
            Institutions_field: {
                Label: {
                    alignItems: 'center',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/person/form/form.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_person_form extends $.$hyoo_idea_person_form {
            avatar_file(next) {
                if (next && next.length)
                    this.person().avatar_node().blob(next[0]);
                return next;
            }
            avatar_drop() {
                this.person().avatar_node().list([]);
            }
            job_rows() {
                return this.person().jobs().map((_, id) => this.Job_form(id)).reverse();
            }
            job_add() {
                this.person().jobs_node().add({});
            }
            job_drop(id) {
                this.person().jobs_node().cut(id);
            }
            job({ id, key }, next) {
                const jobs = this.person().jobs();
                const job = jobs[id] ?? {};
                if (next === undefined) {
                    return job[key] ?? (key === 'present' ? false : '');
                }
                this.person().jobs([
                    ...jobs.slice(0, id),
                    { ...job, [key]: next },
                    ...jobs.slice(id + 1),
                ]);
                return next;
            }
            position(id, next) {
                return this.job({ id, key: 'position' }, next);
            }
            date_start(id, next) {
                const str = this.job({ id, key: 'date_start' }, next && next.toString());
                return str ? new $mol_time_moment(str) : null;
            }
            date_end(id, next) {
                const str = this.job({ id, key: 'date_end' }, next && next.toString());
                return str ? new $mol_time_moment(str) : null;
            }
            company(id, next) {
                return this.job({ id, key: 'company' }, next);
            }
            industry(id, next) {
                return this.job({ id, key: 'industry' }, next);
            }
            functions(id, next) {
                return this.job({ id, key: 'functions' }, next);
            }
            present(id, next) {
                return this.job({ id, key: 'present' }, next);
            }
            institution_rows() {
                return this.person().institutions().map((_, id) => this.Institution_form(id)).reverse();
            }
            institution_add() {
                this.person().institutions_node().add({});
            }
            institution_drop(id) {
                this.person().institutions_node().cut(id);
            }
            institution_change({ id, key }, next) {
                const jobs = this.person().institutions();
                const job = jobs[id] ?? {};
                if (next === undefined) {
                    return job[key] ?? '';
                }
                this.person().institutions([
                    ...jobs.slice(0, id),
                    { ...job, [key]: next },
                    ...jobs.slice(id + 1),
                ]);
                return next;
            }
            specialty(id, next) {
                return this.institution_change({ id, key: 'specialty' }, next);
            }
            degree(id, next) {
                return this.institution_change({ id, key: 'degree' }, next);
            }
            institution(id, next) {
                return this.institution_change({ id, key: 'institution' }, next);
            }
            department(id, next) {
                return this.institution_change({ id, key: 'department' }, next);
            }
            date_finish(id, next) {
                const str = this.institution_change({ id, key: 'date_finish' }, next && next.toString());
                return str ? new $mol_time_moment(str) : null;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_idea_person_form.prototype, "avatar_file", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_person_form.prototype, "job_rows", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_idea_person_form.prototype, "job", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_person_form.prototype, "institution_rows", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_idea_person_form.prototype, "institution_change", null);
        $$.$hyoo_idea_person_form = $hyoo_idea_person_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/person/form/form.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_profile_stats extends $mol_view {
    }
    $.$hyoo_idea_profile_stats = $hyoo_idea_profile_stats;
    class $hyoo_idea_profile_stat extends $mol_button_minor {
        sub() {
            return [
                this.Count(),
                this.Label()
            ];
        }
        count() {
            return "";
        }
        Count() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.count();
            return obj;
        }
        label() {
            return "";
        }
        Label() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.label();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_profile_stat.prototype, "Count", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_profile_stat.prototype, "Label", null);
    $.$hyoo_idea_profile_stat = $hyoo_idea_profile_stat;
})($ || ($ = {}));
//hyoo/idea/profile/stats/-view.tree/stats.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, per, px } = $mol_style_unit;
        $mol_style_define($.$hyoo_idea_profile_stats, {
            width: per(100),
            justifyContent: 'space-between',
        });
        $mol_style_define($.$hyoo_idea_profile_stat, {
            flex: {
                direction: 'column',
            },
            letter: {
                spacing: px(1),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/profile/stats/stats.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_profile_block extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.title();
            return obj;
        }
        expanded(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Expander() {
            const obj = new this.$.$mol_check_expand();
            obj.checked = (next) => this.expanded(next);
            return obj;
        }
        Label() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Title(),
                this.Expander()
            ];
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_profile_block.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_profile_block.prototype, "expanded", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_profile_block.prototype, "Expander", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_profile_block.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_profile_block.prototype, "Content", null);
    $.$hyoo_idea_profile_block = $hyoo_idea_profile_block;
})($ || ($ = {}));
//hyoo/idea/profile/block/-view.tree/block.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($.$hyoo_idea_profile_block, {
            Label: {
                alignItems: 'flex-end',
                padding: {
                    bottom: 0,
                },
                font: {
                    weight: 'bold',
                },
                letter: {
                    spacing: px(1),
                },
            },
            Title: {
                margin: {
                    left: rem(0.5),
                },
            },
            Expander: {
                justifyContent: 'center',
                margin: {
                    bottom: 0,
                },
            },
            Content: {
                margin: {
                    top: 0,
                    left: $mol_gap.block,
                    right: $mol_gap.block,
                },
                padding: $mol_gap.block,
                border: {
                    radius: $mol_gap.round,
                },
                background: {
                    color: $mol_theme.card,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/profile/block/block.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_profile_block extends $.$hyoo_idea_profile_block {
            rows() {
                const rows = this.expanded() ? [this.Label(), this.Content()] : [this.Label()];
                return rows.filter(Boolean);
            }
            expanded(next) {
                return this.$.$mol_state_local.value(`${this}.expanded()`, next) ?? super.expanded();
            }
        }
        $$.$hyoo_idea_profile_block = $hyoo_idea_profile_block;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/profile/block/block.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_send extends $mol_icon {
        path() {
            return "M2,21L23,12L2,3V10L17,12L2,14V21Z";
        }
    }
    $.$mol_icon_send = $mol_icon_send;
})($ || ($ = {}));
//mol/icon/send/-view.tree/send.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_post_add extends $mol_bar {
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        sub() {
            return [
                this.Text(),
                this.Submit()
            ];
        }
        text(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Text() {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_post_add_Text_hint');
            obj.value = (next) => this.text(next);
            return obj;
        }
        event_submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Submit_icon() {
            const obj = new this.$.$mol_icon_send();
            return obj;
        }
        Submit() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_post_add_Submit_hint');
            obj.click = (next) => this.event_submit(next);
            obj.sub = () => [
                this.Submit_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_add.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_add.prototype, "text", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_add.prototype, "Text", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_add.prototype, "event_submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_add.prototype, "Submit_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_post_add.prototype, "Submit", null);
    $.$hyoo_idea_post_add = $hyoo_idea_post_add;
})($ || ($ = {}));
//hyoo/idea/post/add/-view.tree/add.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per } = $mol_style_unit;
        $mol_style_define($hyoo_idea_post_add, {
            width: per(100),
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/post/add/add.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_post_add extends $.$hyoo_idea_post_add {
            event_submit() {
                this.submit(this.text());
                this.text('');
            }
        }
        $$.$hyoo_idea_post_add = $hyoo_idea_post_add;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/post/add/add.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_person_page extends $mol_page {
        domain() {
            return this.person().domain();
        }
        avatar() {
            return this.person().avatar();
        }
        name_short() {
            return this.person().name_short();
        }
        status() {
            return this.person().status();
        }
        date_birth() {
            return this.person().date_birth();
        }
        about() {
            return this.person().about();
        }
        phone() {
            return this.person().phone();
        }
        email() {
            return this.person().email();
        }
        person() {
            const obj = new this.$.$hyoo_idea_person();
            return obj;
        }
        self() {
            return false;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_idea_person_page_title');
        }
        msg() {
            return {
                job_present: this.$.$mol_locale.text('$hyoo_idea_person_page_msg_job_present')
            };
        }
        tools() {
            return [
                this.Edit_button()
            ];
        }
        Edit_form() {
            const obj = new this.$.$hyoo_idea_person_form();
            obj.person = () => this.person();
            return obj;
        }
        body() {
            return [
                this.Face(),
                this.Neck(),
                this.Stats(),
                this.About(),
                this.Contacts(),
                this.Jobs(),
                this.Education(),
                this.Posts()
            ];
        }
        Edit_icon() {
            const obj = new this.$.$mol_icon_pencil();
            return obj;
        }
        editing(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Edit_button() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Edit_button_hint');
            obj.Icon = () => this.Edit_icon();
            obj.checked = (next) => this.editing(next);
            return obj;
        }
        Avatar() {
            const obj = new this.$.$hyoo_idea_person_avatar();
            obj.uri = () => this.avatar();
            return obj;
        }
        Name() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.name_short();
            return obj;
        }
        Status() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.status();
            return obj;
        }
        Face_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Name(),
                this.Status()
            ];
            return obj;
        }
        Face() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Avatar(),
                this.Face_list()
            ];
            return obj;
        }
        position() {
            return this.$.$mol_locale.text('$hyoo_idea_person_page_position');
        }
        Position() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.position();
            return obj;
        }
        location() {
            return this.$.$mol_locale.text('$hyoo_idea_person_page_location');
        }
        Location() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.location();
            return obj;
        }
        Age() {
            const obj = new this.$.$hyoo_idea_ago();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Age_title');
            obj.moment = () => this.date_birth();
            return obj;
        }
        summary_rows() {
            return [
                this.Position(),
                this.Location(),
                this.Age()
            ];
        }
        Summary() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.summary_rows();
            return obj;
        }
        Subscribe() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Subscribe_title');
            return obj;
        }
        Message() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Message_title');
            return obj;
        }
        Actions() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Subscribe(),
                this.Message()
            ];
            return obj;
        }
        neck() {
            return [
                this.Summary(),
                this.Actions()
            ];
        }
        Neck() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.neck();
            return obj;
        }
        project_count() {
            return "1";
        }
        Project_count() {
            const obj = new this.$.$hyoo_idea_profile_stat();
            obj.label = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Project_count_label');
            obj.count = () => this.project_count();
            return obj;
        }
        post_count() {
            return "2";
        }
        Post_count() {
            const obj = new this.$.$hyoo_idea_profile_stat();
            obj.label = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Post_count_label');
            obj.count = () => this.post_count();
            return obj;
        }
        pub_count() {
            return "3";
        }
        Pub_count() {
            const obj = new this.$.$hyoo_idea_profile_stat();
            obj.label = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Pub_count_label');
            obj.count = () => this.pub_count();
            return obj;
        }
        sub_count() {
            return "4";
        }
        Sub_count() {
            const obj = new this.$.$hyoo_idea_profile_stat();
            obj.label = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Sub_count_label');
            obj.count = () => this.sub_count();
            return obj;
        }
        Stats_person() {
            const obj = new this.$.$hyoo_idea_profile_stats();
            obj.sub = () => [
                this.Project_count(),
                this.Post_count(),
                this.Pub_count(),
                this.Sub_count()
            ];
            return obj;
        }
        Stats() {
            const obj = new this.$.$hyoo_idea_profile_block();
            obj.Label = () => null;
            obj.expanded = () => true;
            obj.content = () => [
                this.Stats_person()
            ];
            return obj;
        }
        About() {
            const obj = new this.$.$hyoo_idea_profile_block();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_page_About_title');
            obj.content = () => [
                this.about()
            ];
            return obj;
        }
        Phone_label() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Phone_label_title');
            return obj;
        }
        Phone() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.phone();
            return obj;
        }
        Contacts_phone() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Phone_label(),
                this.Phone()
            ];
            return obj;
        }
        Email_label() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Email_label_title');
            return obj;
        }
        Email() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.email();
            return obj;
        }
        Contacts_email() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Email_label(),
                this.Email()
            ];
            return obj;
        }
        Contacts() {
            const obj = new this.$.$hyoo_idea_profile_block();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Contacts_title');
            obj.content = () => [
                this.Contacts_phone(),
                this.Contacts_email()
            ];
            return obj;
        }
        job_position(id) {
            return "";
        }
        Job_position(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.job_position(id);
            return obj;
        }
        job_company(id) {
            return "";
        }
        Job_company(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.job_company(id);
            return obj;
        }
        job_dates(id) {
            return "";
        }
        Job_dates(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.job_dates(id);
            return obj;
        }
        job_functions(id) {
            return "";
        }
        Job_functions(id) {
            const obj = new this.$.$mol_text();
            obj.text = () => this.job_functions(id);
            return obj;
        }
        Job(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Job_position(id),
                this.Job_company(id),
                this.Job_dates(id),
                this.Job_functions(id)
            ];
            return obj;
        }
        jobs() {
            return [
                this.Job("0")
            ];
        }
        Jobs_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.jobs();
            return obj;
        }
        Jobs() {
            const obj = new this.$.$hyoo_idea_profile_block();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Jobs_title');
            obj.content = () => [
                this.Jobs_list()
            ];
            return obj;
        }
        education_head(id) {
            return "";
        }
        Education_head(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.education_head(id);
            return obj;
        }
        education_details(id) {
            return "";
        }
        Education_details(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.education_details(id);
            return obj;
        }
        Education_row(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Education_head(id),
                this.Education_details(id)
            ];
            return obj;
        }
        education() {
            return [
                this.Education_row("0")
            ];
        }
        Education_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.education();
            return obj;
        }
        Education() {
            const obj = new this.$.$hyoo_idea_profile_block();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Education_title');
            obj.content = () => [
                this.Education_list()
            ];
            return obj;
        }
        post_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Post_add() {
            const obj = new this.$.$hyoo_idea_post_add();
            obj.submit = (next) => this.post_add(next);
            return obj;
        }
        post(id) {
            const obj = new this.$.$hyoo_idea_post();
            return obj;
        }
        Post(id) {
            const obj = new this.$.$hyoo_idea_post_full();
            obj.post = () => this.post(id);
            return obj;
        }
        post_list() {
            return [
                this.Post("0_0")
            ];
        }
        Post_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.post_list();
            return obj;
        }
        posts_content() {
            return [
                this.Post_add(),
                this.Post_list()
            ];
        }
        Posts() {
            const obj = new this.$.$hyoo_idea_profile_block();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_person_page_Posts_title');
            obj.Expander = () => null;
            obj.expanded = () => true;
            obj.content = () => this.posts_content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "person", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Edit_form", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Edit_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "editing", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Edit_button", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Avatar", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Name", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Status", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Face_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Face", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Position", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Location", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Age", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Summary", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Subscribe", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Message", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Actions", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Neck", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Project_count", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Post_count", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Pub_count", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Sub_count", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Stats_person", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Stats", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "About", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Phone_label", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Phone", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Contacts_phone", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Email_label", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Email", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Contacts_email", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Contacts", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_page.prototype, "Job_position", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_page.prototype, "Job_company", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_page.prototype, "Job_dates", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_page.prototype, "Job_functions", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_page.prototype, "Job", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Jobs_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Jobs", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_page.prototype, "Education_head", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_page.prototype, "Education_details", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_page.prototype, "Education_row", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Education_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Education", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "post_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Post_add", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_page.prototype, "post", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_idea_person_page.prototype, "Post", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Post_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_person_page.prototype, "Posts", null);
    $.$hyoo_idea_person_page = $hyoo_idea_person_page;
})($ || ($ = {}));
//hyoo/idea/person/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        const list_item = {
            border: {
                bottom: {
                    color: $mol_theme.line,
                    style: 'solid',
                },
            },
            padding: {
                top: rem(1),
                bottom: rem(1),
            },
            ':first-child': {
                padding: {
                    top: 0,
                },
            },
            ':last-child': {
                padding: {
                    bottom: 0,
                },
                border: 'none',
            },
        };
        const list_item_header = {
            font: {
                weight: 'bold',
            },
            letter: {
                spacing: px(1),
            },
        };
        const list_item_muted = {
            font: {
                size: rem(0.75),
            },
            margin: {
                bottom: $mol_gap.block,
            },
            opacity: 0.8,
        };
        $mol_style_define($.$hyoo_idea_person_page, {
            flex: {
                basis: rem(40),
                shrink: 0,
            },
            padding: {
                bottom: $mol_gap.block,
            },
            Face: {
                flex: {
                    wrap: 'nowrap',
                },
            },
            Face_list: {
                flex: {
                    shrink: 1,
                },
            },
            Avatar: {
                width: rem(7),
                height: rem(7),
            },
            Name: {
                font: {
                    size: rem(1.5),
                },
                margin: {
                    bottom: rem(0.5),
                },
                letter: {
                    spacing: px(1),
                },
            },
            Status: {
                opacity: 0.8,
            },
            Summary: {
                padding: {
                    left: $mol_gap.text,
                },
            },
            Neck: {
                alignItems: 'center',
            },
            Stats: {
                Content: {
                    padding: 0
                },
            },
            Actions: {
                margin: {
                    left: 'auto',
                },
            },
            Contacts: {
                Content: {
                    flex: {
                        direction: 'column',
                    },
                },
            },
            Contacts_phone: {
                justifyContent: 'space-between',
                margin: {
                    bottom: $mol_gap.block,
                },
            },
            Contacts_email: {
                justifyContent: 'space-between',
            },
            Job_functions: {
                $mol_paragraph: {
                    padding: 0,
                },
            },
            Job: list_item,
            Job_position: list_item_header,
            Job_dates: list_item_muted,
            Education_row: list_item,
            Education_head: list_item_header,
            Education_details: list_item_muted,
            Posts: {
                Content: {
                    flex: {
                        direction: 'column',
                    },
                    padding: 0,
                    background: {
                        color: 'unset',
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/person/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_person_page extends $.$hyoo_idea_person_page {
            self() {
                return this.person().id() === this.domain().user().id();
            }
            tools() {
                return [
                    ...this.self() ? [this.Edit_button()] : [],
                ];
            }
            body() {
                return this.self() && this.editing() ? [this.Edit_form()] : super.body();
            }
            project_count() {
                return this.person().projects().length.toString();
            }
            post_count() {
                return this.person().posts().length.toString();
            }
            sub_count() {
                return this.person().subs().length.toString();
            }
            pub_count() {
                return this.person().pubs().length.toString();
            }
            job_current() {
                const job = this.person().jobs().find(obj => obj.present && !!obj.position && !!obj.company);
                return job ?? null;
            }
            position() {
                return super.position()
                    .replace('{position}', this.job_current().position)
                    .replace('{company}', this.job_current().company);
            }
            location() {
                return super.location()
                    .replace('{city}', this.person().city());
            }
            summary_rows() {
                return [
                    ...this.job_current() !== null ? [this.Position()] : [],
                    ...!!this.person().city() ? [this.Location()] : [],
                    ...this.person().date_birth() !== null ? [this.Age()] : [],
                ];
            }
            neck() {
                return [
                    this.Summary(),
                    ...this.self() === false ? [this.Actions()] : [],
                ];
            }
            jobs() {
                return this.person().jobs().map((_, index) => this.Job(index));
            }
            job_position(id) {
                return this.person().jobs()[id].position;
            }
            job_company(id) {
                return this.person().jobs()[id].company;
            }
            job_dates(id) {
                const job = this.person().jobs()[id];
                return [
                    new $mol_time_moment(job.date_start).toString('Month YYYY'),
                    job.present ? this.msg().job_present : new $mol_time_moment(job.date_end).toString('Month YYYY')
                ].join(' - ');
            }
            job_functions(id) {
                return this.person().jobs()[id].functions;
            }
            education() {
                return this.person().institutions().map((_, index) => this.Education_row(index));
            }
            education_head(id) {
                const obj = this.person().institutions()[id];
                return [
                    obj.specialty,
                ].join(' - ');
            }
            education_details(id) {
                const obj = this.person().institutions()[id];
                return [
                    obj.institution,
                    ...obj.date_finish ? [new $mol_time_moment(obj.date_finish).toString('YYYY')] : [],
                ].join(', ');
            }
            post(obj) {
                return obj;
            }
            post_list() {
                return this.person().posts()
                    .sort((a, b) => b.created_moment().valueOf() - a.created_moment().valueOf())
                    .map(obj => this.Post(obj));
            }
            post_add(text) {
                const obj = this.domain().post_add();
                obj.content(text);
                obj.person(this.person());
                this.person().post_add(obj);
            }
            posts_content() {
                return [
                    ...this.self() ? [this.Post_add()] : [],
                    this.Post_list(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_idea_person_page.prototype, "job_current", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_person_page.prototype, "position", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_person_page.prototype, "location", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_person_page.prototype, "summary_rows", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_person_page.prototype, "neck", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_person_page.prototype, "jobs", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_person_page.prototype, "education", null);
        $$.$hyoo_idea_person_page = $hyoo_idea_person_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/person/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_idea_app extends $mol_book2 {
        yard() {
            return this.domain().yard();
        }
        user() {
            return this.domain().user();
        }
        domain() {
            const obj = new this.$.$hyoo_idea_domain();
            return obj;
        }
        Online() {
            const obj = new this.$.$hyoo_sync_online();
            obj.yard = () => this.yard();
            return obj;
        }
        pages() {
            return [
                this.Menu(),
                this.Sign_up(),
                this.Feed(),
                this.Project_page(),
                this.Person_page()
            ];
        }
        Placeholder() {
            return null;
        }
        Feed_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "feed"
            });
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_app_Feed_link_title');
            return obj;
        }
        Person_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "person"
            });
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_app_Person_link_title');
            return obj;
        }
        Projects_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "projects"
            });
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_app_Projects_link_title');
            return obj;
        }
        Settings_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "settings"
            });
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_app_Settings_link_title');
            return obj;
        }
        Links() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Feed_link(),
                this.Person_link(),
                this.Projects_link(),
                this.Settings_link()
            ];
            return obj;
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$hyoo_idea_app_Menu_title');
            obj.body = () => [
                this.Links()
            ];
            return obj;
        }
        Sign_up() {
            const obj = new this.$.$hyoo_idea_sign_up_page();
            obj.person = () => this.user();
            return obj;
        }
        Feed() {
            const obj = new this.$.$hyoo_idea_feed_page();
            obj.person = () => this.user();
            return obj;
        }
        project_opened() {
            const obj = new this.$.$hyoo_idea_project();
            return obj;
        }
        Project_page() {
            const obj = new this.$.$hyoo_idea_project_page();
            obj.project = () => this.project_opened();
            return obj;
        }
        person_opened() {
            const obj = new this.$.$hyoo_idea_person();
            return obj;
        }
        Person_page() {
            const obj = new this.$.$hyoo_idea_person_page();
            obj.person = () => this.person_opened();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "domain", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "Online", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "Feed_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "Person_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "Projects_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "Settings_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "Links", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "Sign_up", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "Feed", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "project_opened", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "Project_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "person_opened", null);
    __decorate([
        $mol_mem
    ], $hyoo_idea_app.prototype, "Person_page", null);
    $.$hyoo_idea_app = $hyoo_idea_app;
})($ || ($ = {}));
//hyoo/idea/app/-view.tree/app.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($hyoo_idea_app, {});
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/app/app.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_idea_app extends $.$hyoo_idea_app {
            section(next) {
                return this.$.$mol_state_arg.value('section', next) || 'feed';
            }
            person_opened() {
                const id = this.$.$mol_state_arg.value('person');
                return this.domain().person(this.$.$mol_state_arg.value('person') ?? this.user().id());
            }
            signup_opened() {
                return this.$.$mol_state_arg.value('signup') === '';
            }
            project_opened() {
                const id = $mol_int62_string_ensure(this.$.$mol_state_arg.value('project'));
                return id ? this.domain().project(id) : null;
            }
            signup_open() {
                if (this.user().registered() === false)
                    this.$.$mol_state_arg.value('signup', '');
            }
            pages() {
                this.signup_open();
                if (this.signup_opened())
                    return [this.Sign_up()];
                return [
                    this.Menu(),
                    ...this.section() === 'feed' ? [this.Feed()] : [],
                    ...this.section() === 'person' ? [this.Person_page()] : [],
                    ...this.project_opened() ? [this.Project_page()] : [],
                ];
            }
            sync() {
                this.Online().sub();
            }
            person_register() {
                this.domain().persons().add(this.domain().user());
            }
            auto() {
                this.sync();
                this.person_register();
            }
        }
        __decorate([
            $mol_action
        ], $hyoo_idea_app.prototype, "signup_open", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_app.prototype, "pages", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_app.prototype, "sync", null);
        __decorate([
            $mol_mem
        ], $hyoo_idea_app.prototype, "person_register", null);
        $$.$hyoo_idea_app = $hyoo_idea_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/idea/app/app.view.ts
;
export default $
//# sourceMappingURL=web.esm.js.map