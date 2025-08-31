//<![CDATA[
var keyboards = {
        'eng': {
                'qwerty': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[<sup>{</sup>', ']<sup>}</sup>', '\\<sup>|</sup>', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';<sup>:</sup>', '\'<sup>"</sup>', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>', '/<sup>?</sup>'],
                'colemak': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Q', 'W', 'F', 'P', 'G', 'J', 'L', 'U', 'Y', ';<sup>:</sup>', '[<sup>{</sup>', ']<sup>}</sup>', '\\<sup>|</sup>', 'A', 'R', 'S', 'T', 'D', 'H', 'N', 'E', 'I', 'O', '\'<sup>"</sup>', 'Z', 'X', 'C', 'V', 'B', 'K', 'M', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>', '/<sup>?</sup>'],
                'workman': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Q', 'D', 'R', 'W', 'B', 'J', 'F', 'U', 'P', ';<sup>:</sup>', '[<sup>{</sup>', ']<sup>}</sup>', '\\<sup>|</sup>', 'A', 'S', 'H', 'T', 'G', 'Y', 'N', 'E', 'O', 'I', '\'<sup>"</sup>', 'Z', 'X', 'M', 'C', 'V', 'K', 'L', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>', '/<sup>?</sup>'],
                'workman_program': ['~<sup>`</sup>', '!<sup>1</sup>', '@<sup>2</sup>', '#<sup>3</sup>', '$<sup>4</sup>', '%<sup>5</sup>', '^<sup>6</sup>', '&amp;<sup>7</sup>', '*<sup>8</sup>', '(<sup>9</sup>', ')<sup>0</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Q', 'D', 'R', 'W', 'B', 'J', 'F', 'U', 'P', ';<sup>:</sup>', '{<sup>[</sup>', '}<sup>]</sup>', '\\<sup>|</sup>', 'A', 'S', 'H', 'T', 'G', 'Y', 'N', 'E', 'O', 'I', '\'<sup>"</sup>', 'Z', 'X', 'M', 'C', 'V', 'K', 'L', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>', '/<sup>?</sup>'],
                'dvorak': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '[<sup><sup>{</sup></sup>', ']<sup>}</sup>', '\'<sup>"</sup>', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>', 'P', 'Y', 'F', 'G', 'C', 'R', 'L', '/<sup>?</sup>', '=<sup>+</sup>', '\\<sup>|</sup>', 'A', 'O', 'E', 'U', 'I', 'D', 'H', 'T', 'N', 'S', '-<sup><sup>_</sup></sup>', ';<sup>:</sup>', 'Q', 'J', 'K', 'X', 'B', 'M', 'W', 'V', 'Z'],
                'dvorak_left': ['`<sup><sup>~</sup></sup>', '[<sup>{</sup>', ']<sup>}</sup>', '/<sup>?</sup>', 'P', 'F', 'M', 'L', 'J', '4<sup>$</sup>', '3<sup>#</sup>', '2<sup>@</sup>', '1<sup>!</sup>', ';<sup>:</sup>', 'Q', 'B', 'Y', 'U', 'R', 'S', 'O', '.<sup>&gt;</sup>', '6<sup>^</sup>', '5<sup>%</sup>', '=<sup>+</sup>', '\\<sup>|</sup>', '-<sup><sup>_</sup></sup>', 'K', 'C', 'D', 'T', 'H', 'E', 'A', 'Z', '8<sup>*</sup>', '7<sup>&amp;</sup>', '\'<sup>"</sup>', 'X', 'G', 'V', 'W', 'N', 'I', ',<sup>&lt;</sup>', '0<sup>)</sup>', '9<sup>(</sup>'],
                'dvorak_right': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', 'J', 'L', 'M', 'F', 'P', '/<sup>?</sup>', '[<sup><sup>{</sup></sup>', ']<sup>}</sup>', '5<sup>%</sup>', '6<sup>^</sup>', 'Q', '.<sup>&gt;</sup>', 'O', 'R', 'S', 'U', 'Y', 'B', ';<sup>:</sup>', '=<sup>+</sup>', '\\<sup>|</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', 'Z', 'A', 'E', 'H', 'T', 'D', 'C', 'K', '-<sup><sup>_</sup></sup>', '9<sup>(</sup>', '0<sup>)</sup>', 'X', ',<sup>&lt;</sup>', 'I', 'N', 'W', 'V', 'G', '\'<sup>"</sup>'],
                'dvorak_program': ['$<sup>~</sup></sup>', '&amp;<sup>%</sup>', '[<sup>7</sup>', '{<sup>5</sup>', '}<sup>3</sup>', '(<sup>1</sup>', '=<sup>9</sup>', '*<sup>0</sup>', ')<sup>2</sup>', '+<sup>4</sup>', ']<sup>6</sup>', '!<sup>8</sup>', '#<sup>`</sup>', ';<sup>:</sup>', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>', 'P', 'Y', 'F', 'G', 'C', 'R', 'L', '/<sup>?</sup>', '@<sup>^</sup>', '\\<sup>|</sup>', 'A', 'O', 'E', 'U', 'I', 'D', 'H', 'T', 'N', 'S', '-<sup><sup>_</sup></sup>', '\'<sup>"</sup>', 'Q', 'J', 'K', 'X', 'B', 'M', 'W', 'V', 'Z'],
                'jcuken': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'J', 'C', 'U', 'K', 'E', 'N', 'G', 'H', 'W', 'Z', '[<sup>{</sup>', ']<sup>}</sup>', '\\<sup>|</sup>', 'F', 'Y', 'V', 'A', 'P', 'R', 'O', 'L', 'D', ';<sup>:</sup>', '\'<sup>"</sup>', 'Q', '/<sup>?</sup>', 'S', 'M', 'I', 'T', 'X', 'B', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>'],
                'jcuken2': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'J', 'C', 'U', 'K', 'E', 'N', 'G', '[<sup>{</sup>', ']<sup>}</sup>', 'Z', 'H', ';<sup>:</sup>', '\\<sup>|</sup>', 'F', 'Y', 'W', 'A', 'P', 'R', 'O', 'L', 'D', 'V', '\'<sup>"</sup>', 'Q', ',<sup>&lt;</sup>', 'S', 'M', 'I', 'T', 'X', 'B', '.<sup>&gt;</sup>', '/<sup>?</sup>'],
                'klausler': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>&lt;</sup>', '0<sup>&gt;</sup>', '{<sup>[</sup>', '}<sup>]</sup>', 'K', ',<sup>(</sup>', 'U', 'Y', 'P', 'W', 'L', 'M', 'F', 'C', '/<sup>?</sup>', '=<sup>+</sup>', '\\<sup>|</sup>', 'O', 'A', 'E', 'I', 'D', 'R', 'N', 'T', 'H', 'S', '-<sup><sup>_</sup></sup>', 'Q', '.<sup>)</sup>', '\'<sup>"</sup>', ';<sup>:</sup>', 'Z', 'X', 'V', 'G', 'B', 'J'],
                'ant': ['\\<sup>_</sup>', '!<sup>9</sup>', '?<sup>7</sup>', '\'<sup>5</sup>', '"<sup>3</sup>', '=<sup>1</sup>', '+<sup>0</sup>', '-<sup>2</sup>', '*<sup>4</sup>', '/<sup>6</sup>', '%<sup>8</sup>', '(<sup>[</sup>', ')<sup>]</sup>', 'W', 'C', 'L', 'D', 'B', 'X', 'U', 'O', 'P', 'J', '{<sup>&lt;</sup>', '}<sup>&gt;</sup>', '@<sup>§</sup>', 'R', 'S', 'T', 'N', 'M', 'I', 'A', 'E', 'H', 'Y', '&amp;<sup>`</sup>', '#<sup>~</sup>', 'V', 'G', 'F', ',<sup>;</sup>', '.<sup>:</sup>', 'K', 'Q', 'Z', '|<sup>^</sup>'],
                'catboard': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[<sup>{</sup>', ']<sup>}</sup>', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';<sup>:</sup>', '\'<sup>"</sup>', '\\<sup>|</sup>', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>', '/<sup>?</sup>'],
                'catboard_jcuken': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'J', 'C', 'U', 'K', 'E', 'N', 'G', 'H', 'V', 'Z', '[<sup>{</sup>', ']<sup>}</sup>', 'F', 'Y', 'W', 'A', 'P', 'R', 'O', 'L', 'D', ';<sup>:</sup>', '\'<sup>"</sup>', '\\<sup>|</sup>', 'Q', '/<sup>?</sup>', 'S', 'M', 'I', 'T', 'X', 'B', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>']
        },
        'deu': {
                'deu.qwerty': ['^<sup><sup>°</sup></sup>', '1<sup>!</sup>', '2<sup>"</sup>', '3<sup>§</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>&amp;</sup>', '7<sup>/</sup>', '8<sup>(</sup>', '9<sup>)</sup>', '0<sup>=</sup>', 'ß<sup><sup>?</sup></sup>', '´<sup>`</sup>', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Ü', '+<sup>*</sup>', '#<sup>\'</sup>', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ö', 'Ä', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',<sup>;</sup>', '.<sup>:</sup>', '-<sup>_</sup>'],
                'deu.qwertz': ['^<sup><sup>°</sup></sup>', '1<sup>!</sup>', '2<sup>"</sup>', '3<sup>§</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>&amp;</sup>', '7<sup>/</sup>', '8<sup>(</sup>', '9<sup>)</sup>', '0<sup>=</sup>', 'ß<sup><sup>?</sup></sup>', '´<sup>`</sup>', 'Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'Ü', '+<sup>*</sup>', '#<sup>\'</sup>', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ö', 'Ä', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', ',<sup>;</sup>', '.<sup>:</sup>', '-<sup>_</sup>']
        },
        'epo': {
                'esperan.to': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Ŝ', 'Ĝ', 'E', 'R', 'T', 'Ŭ', 'U', 'I', 'O', 'P', 'Ĵ', 'Ĥ', '\\<sup>|</sup>', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';<sup>:</sup>', '\'<sup>"</sup>', 'Z', 'Ĉ', 'C', 'V', 'B', 'N', 'M', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>', '/<sup>?</sup>']
        },
        'rus': {
                'йцукен': ['Ё', '1<sup>!</sup>', '2<sup>"</sup>', '3<sup>№</sup>', '4<sup>;</sup>', '5<sup>%</sup>', '6<sup>:</sup>', '7<sup>?</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\<sup>/</sup>', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.<sup>,</sup>'],
                'машинопись': ['|<sup>+</sup>', '№<sup>1</sup>', '-<sup>2</sup>', '/<sup>3</sup>', '"<sup>4</sup>', ':<sup>5</sup>', ',<sup>6</sup>', '.<sup>7</sup>', '_<sup>8</sup>', '?<sup>9</sup>', '%<sup>0</sup>', '!<sup>=</sup>', ';<sup>\\</sup>', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', ')<sup>(</sup>', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'Ё'],
                'фонетическая': ['Ю', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>ё</sup>', '4<sup>Ё</sup>', '5<sup>ъ</sup>', '6<sup>Ъ</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', 'Ч', 'Я', 'В', 'Е', 'Р', 'Т', 'Ы', 'У', 'И', 'О', 'П', 'Ш', 'Щ', 'Э', 'А', 'С', 'Д', 'Ф', 'Г', 'Х', 'Й', 'К', 'Л', ';<sup>:</sup>', '\'<sup>"</sup>', 'З', 'Ь', 'Ц', 'Ж', 'Б', 'Н', 'М', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>', '/<sup>?</sup>'],
                'макинтош': ['&lt;<sup>&gt;</sup>', '1<sup>!</sup>', '2<sup>"</sup>', '3<sup>№</sup>', '4<sup>%</sup>', '5<sup>:</sup>', '6<sup>,</sup>', '7<sup>.</sup>', '8<sup>;</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ё', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/<sup>?</sup>'],
                'диктор': ['Ё', '1<sup>Ъ</sup>', '2<sup>Ь</sup>', '3<sup>№</sup>', '4<sup>%</sup>', '5<sup>:</sup>', '6<sup>;</sup>', '7<sup>-</sup>', '8<sup>"</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '*<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Ц', 'ь<sup>ъ</sup>', 'Я', ',<sup>?</sup>', '.<sup>!</sup>', 'З', 'В', 'К', 'Д', 'Ч', 'Ш', 'Щ', '', 'У', 'И', 'Е', 'О', 'А', 'Л', 'Н', 'Т', 'С', 'Р', 'Й', 'Ф', 'Э', 'Х', 'Ы', 'Ю', 'Б', 'М', 'П', 'Г', 'Ж'],
                'дворак': ['`<sup><sup>~</sup></sup>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&amp;</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '[<sup><sup>{</sup></sup>', ']<sup>}</sup>', '\'<sup>"</sup>', ',<sup>&lt;</sup>', '.<sup>&gt;</sup>', 'П', 'Ы', 'Ф', 'Г', 'Ц<sub>ч</sub>', 'Р', 'Л', '/<sup>?</sup>', '=<sup>+</sup>', '\\<sup>|</sup>', 'А', 'О<sub>Ё</sub>', 'Е<sub>Э</sub>', 'У<sub>Ю</sub>', 'И', 'Д', 'Х', 'Т', 'Н', 'С<sub>Ш</sub>', '-<sup><sup>_</sup></sup>', ';<sup>:</sup>', 'Я', 'Й', 'К', 'Щ', 'Б<sub>Ъ</sub>', 'М', 'В', 'Ь', 'З<sub>Ж</sub>'],
                'рулемак': ['Ё', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>№</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', 'Ъ', 'Я', 'Ж', 'Ф', 'П', 'Г', 'Й', 'Л', 'У', 'Ы', 'Ю', 'Ш', 'Щ', 'Э', 'А', 'Р', 'С', 'Т', 'Д', 'Ч', 'Н', 'Е', 'И', 'О', 'Ь', 'З', 'Х', 'Ц', 'В', 'Б', 'К', 'М', ',<sup>;</sup>', '.<sup>,</sup>', '/<sup>?</sup>'],
                'зубачёв': ['Ё', '1<sup>!</sup>', '2<sup>"</sup>', '3<sup>№</sup>', '4<sup>;</sup>', '5<sup>%</sup>', '6<sup>:</sup>', '7<sup>?</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Ф', 'Ы', 'А', 'Я', ',<sup>Ъ</sup>', 'Й', 'М', 'Р', 'П', 'Х', 'Ц', 'Щ', '\\<sup>/</sup>', 'Г', 'И', 'Е', 'О', 'У', 'Л', 'Т', 'С', 'Н', 'З', 'Ж', 'Ш', 'ь<sup>ъ</sup>', 'Ю', '.<sup>Ь</sup>', 'Э', 'Б', 'Д', 'В', 'К', 'Ч'],
                'скоропи́с': ['*<sup>◦</sup>', '§<sup>▪</sup>', 'Ъ', 'Ё', '?<sup>?</sup>', '!<sup>!</sup>', '-<sup>\u00AD</sup>', '—<sup>–</sup>', '(<sup>)</sup>', '«<sup>»</sup>', '„<sup>“</sup>', '‘<sup>’</sup>', '\u0301<sup>\u0304</sup>', 'Ц', 'Ь', 'Я', ',<sup>;</sup>', '.<sup>:</sup>', 'З', 'В', 'К', 'Д', 'Ч', 'Ш', 'Щ', '\u2026', 'У', 'И', 'Е', 'О', 'А', 'Л', 'Н', 'Т', 'С', 'Р', 'Й', 'Ф', 'Э', 'Х', 'Ы', 'Ю', 'Б', 'М', 'П', 'Г', 'Ж'],
                'ант': ['\\<sup>_</sup>', '!<sup>9</sup>', '?<sup>7</sup>', '\'<sup>5</sup>', '"<sup>3</sup>', '=<sup>1</sup>', '+<sup>0</sup>', '-<sup>2</sup>', '*<sup>4</sup>', '/<sup>6</sup>', '%<sup>8</sup>', '(<sup>«</sup>', ')<sup>»</sup>', 'Г', 'П', 'Р', 'Д', 'М', 'Ы', 'И', 'Я', 'У', 'Х', 'Ц', 'Ж', 'Ч', 'В', 'Н', 'С', 'Т', 'Л', 'Ь', 'О', 'Е', 'А', 'К', 'З', 'Щ', 'Й', 'Ш', 'Б', ',<sup>;</sup>', '.<sup>:</sup>', 'Ю', 'Э', 'Ё', 'Ф'],
                'catboard_йцукен': ['Ё', '1<sup>!</sup>', '2<sup>"</sup>', '3<sup>№</sup>', '4<sup>;</sup>', '5<sup>%</sup>', '6<sup>:</sup>', '7<sup>?</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '\\<sup>/</sup>', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.<sup>,</sup>']
        },
        'ukr': {
                'українська': ['\'<sup>?</sup>', '!<sup>1</sup>', '"<sup>2</sup>', '#<sup>3</sup>', ';<sup>4</sup>', ':<sup>5</sup>', ',<sup>6</sup>', '.<sup>7</sup>', '*<sup>8</sup>', '(<sup>9</sup>', ')<sup>0</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ґ', '/<sup>%</sup>', 'Ф', 'І', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Є', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'Ї'],
                'українська2': ['\'<sup>\'</sup>', '1<sup>!</sup>', '2<sup>"</sup>', '3<sup>№</sup>', '4<sup>;</sup>', '5<sup>%</sup>', '6<sup>:</sup>', '7<sup>?</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '-<sup><sup>_</sup></sup>', '=<sup>+</sup>', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ї', 'Ґ', 'Ф', 'І', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Є', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.<sup>,</sup>']
        }
};

var lentextform = 40;
left_timerVal = 15000; // 15000 или выставть в 100 раз больше, если надо тестировать

var strn=1; // повтор строк
var strI=0; // сколько еще повторов
var strline=''; // прошлая строка набора

var voices; 

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function LoadgetVoices() {
	let n = 0;
	do { 
		voices = window.speechSynthesis.getVoices();
		n++;
		await sleep(10);
	} while( voices.length == 0 || n < 100 );	
}

// function say(m, rate, lng) {	
//   let msg = new SpeechSynthesisUtterance(m);
  
//   if( lng == 'deu') {
// 	msg.voice = voices[1]; // 1-Нем, 2,-амер, 3 - анг. 16 - русский
// 	msg.lang = 'de-DE';
//   }
//   else if( lng == 'eng') {
// 	msg.voice = voices[3]; 
// 	msg.lang = 'en-US';
//   }
//   else {
// 	msg.voice = voices[16];
// 	msg.lang = 'ru-RU';
//   }
   
//   //msg.voiceURI = "native";
//   msg.volume = 1;
//   msg.rate = rate;
//   msg.pitch = 1;
//   msg.text = m;  
  
//   speechSynthesis.cancel();
//   speechSynthesis.speak(msg);
// }


function say(m, rate, lng) {
    // Получаем доступ к списку всех доступных голосов
    let voices = speechSynthesis.getVoices();
    let msg = new SpeechSynthesisUtterance(m);
    
    // Ищем нужный голос по языку (lang)
    let selectedVoice = null;
    
    if (lng == 'deu') {
        // Ищем первый доступный немецкий голос
        selectedVoice = voices.find(voice => voice.lang === 'de-DE' || voice.lang === 'de');
    } else if (lng == 'eng') {
        // Ищем первый доступный американский английский голос
        selectedVoice = voices.find(voice => voice.lang === 'en-US');
    } else {
        // Ищем первый доступный русский голос
        selectedVoice = voices.find(voice => voice.lang === 'ru-RU' || voice.lang === 'ru');
    }
    
    // Если нашли нужный голос - назначаем его
    if (selectedVoice) {
        msg.voice = selectedVoice;
        msg.lang = selectedVoice.lang; // Язык голоса и сообщения должны совпадать
    } else {
        // Если нужного голоса нет, позволяем браузеру выбрать голос по умолчанию для указанного языка
        if (lng == 'deu') msg.lang = 'de-DE';
        else if (lng == 'eng') msg.lang = 'en-US';
        else msg.lang = 'ru-RU';
        console.warn('Желаемый голос не найден. Браузер выберет голос сам для языка', msg.lang);
    }
    
    msg.volume = 1;
    msg.rate = rate;
    msg.pitch = 1;
    
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
}


async function say2(m, lng) {  	
  let mSTR = m.trim();	
  let rate1 = 0.4;
  let rate2 = 1; 
  let letp1;
  if( mSTR.length < 3) letp1 = 1200;
  else if( mSTR.length < 6) letp1 = 1600; 
  else letp1 = 1500 + mSTR.length * 70 / rate1;   
    
  say(mSTR, rate1, lng);    
  await sleep(1000);
  while( speechSynthesis.speaking ) { await sleep(100); }
  say(mSTR, rate2, lng);    
}


async function say3(m, lng) {  	
  let mSTR = m.trim();	
  let rate1 = 0.4;
  let rate2 = 1;
  let rate3 = rate1;  
  let letp1;
  if( mSTR.length < 3) letp1 = 1200;
  else if( mSTR.length < 6) letp1 = 1600; 
  else letp1 = 1500 + mSTR.length * 70 / rate1; 
  let letp2;
  if( mSTR.length < 3) letp2 = 700;
  else if( mSTR.length < 6) letp2 = 1200; 
  else letp2 = 1200 + mSTR.length * 70 / rate2; 
    
  say(mSTR, rate1, lng);  
  //await sleep(letp1);   
  await sleep(1000);
  while( speechSynthesis.speaking ) { await sleep(100); }
  say(mSTR, rate2, lng);  
  await sleep(1200);   
  while( speechSynthesis.speaking ) { await sleep(100); }  
  say(mSTR, rate3, lng);
}


jQuery.cookie = function (name, value, options) {
        if (typeof value != 'undefined') {
                options = options || {};
                if (value === null) {
                        value = '';
                }
				/*
                var date;
                date = new Date();
                date.setTime(date.getTime() + (31 * 24 * 60 * 60 * 1000));
                var expires = '; expires=' + date.toUTCString();				
                document.cookie = [name, '=', encodeURIComponent(value), expires].join('');
				*/
				localStorage.setItem( name, encodeURIComponent(value) );
        } else {
                var cookieValue = null;
				
				/*
                if (document.cookie && document.cookie != '') {
                        var cookies = document.cookie.split(';');
                        for (var i = 0; i < cookies.length; i++) {
                                var cookie = jQuery.trim(cookies[i]);
                                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                                        break;
                                }
                        }
                }
				*/
				
				cookieValue = decodeURIComponent( localStorage.getItem(name) );
				
                return cookieValue;
        }
};

var beep = null;
var blur_timer = null;


$(function () {
        beep = $("#beep").get(0);
		
		LoadgetVoices();
		
		
        $('#error, #speed').click(function () {
                $.cookie('klavarog_speed_error', $('#error .data').is(':visible') ? 'no' : 'yes');
                $('#error .data, #speed .data').fadeToggle();
                $('#intext').focus();
        });
        if ($.cookie('klavarog_speed_error') == 'no') {
                $('#error .data, #speed .data').hide();
        }
        $('div.title, span.title');
        $('#text div').addClass('empty');
        $('#text div.line2').text('Dictonary loading... | Загрузка словаря...');
        $('#time_sel .close').click(function () {
                $('#time_sel').fadeOut();
                $('#intext').focus();
        });
        $('#time a').click(function () {
                intext_notblur();
                $('div.wind_sel').fadeOut();
                $('#time_sel').fadeIn();
                return false;
        });
        $('#dict_sel .close').click(function () {
                $('#dict_sel').fadeOut();
                $('#intext').focus();
        });
        $('#layout_sel .close').click(function () {
                $('#layout_sel').fadeOut();
                $('#intext').focus();
        });
		$('#theme_sel .close').click(function () {
                $('#theme_sel').fadeOut();
                $('#intext').focus();
        });
		$('#strn_sel .close').click(function () {
                $('#strn_sel').fadeOut();
                $('#intext').focus();
        });
		
        $('#logo').click(function () {
                $(document.body).toggleClass('dzen');
                if ((!$(document.body).is('.dzen')) && (!$('#text div.empty').length)) {
                        $('#time').data('time', null);
                        $('#time a').text($('#time').data('minutes'));
                }				
				if( !($('#keyboards').css('display') == 'none') ) {
					$('#show_keyboard')[0].click();
				}
				
				show_keyboard
                $('#intext').focus();
        });
		
		// перехват клавиши ESC и как для $('#logo').click
		document.addEventListener('keydown', function(event) {
			if (event.key == "Escape") {
				$('.tggl-input')[0].click();
				
			}			
		});
		
        $('#dict a').click(function () {
                intext_notblur();
                $('div.wind_sel').fadeOut();
                $('#dict_sel').fadeIn();
                return false;
        });
        $('#layout a').click(function () {
                intext_notblur();
                $('div.wind_sel').fadeOut();
                $('#layout_sel').fadeIn();
                return false;
        });
		$('#theme a').click(function () {
                intext_notblur();
                $('div.wind_sel').fadeOut();
                $('#theme_sel').fadeIn();
                return false;
        });
		$('#strn a').click(function () {
                intext_notblur();
                $('div.wind_sel').fadeOut();
                $('#strn_sel').fadeIn();
                return false;
        });
		
        $('#hide_keyboard').click(function () {
                $.cookie('klavarog_keyboard_hide', 'yes');
                $('#hide_keyboard').hide();
                $('#keyboards').fadeOut();
				$('#block_keyboards').addClass('hidekb');
				$('#handandkeyboard').css('display', 'none');
                $('#show_keyboard').fadeIn();
                $('#intext').focus();
        });
        $('#show_keyboard').click(function () {
                $.cookie('klavarog_keyboard_hide', 'no');
                $('#show_keyboard').hide();
                $('#hide_keyboard').fadeIn();
                $('#keyboards').fadeIn();
				$('#block_keyboards').removeClass('hidekb');
				$('#handandkeyboard').css('display', '');
                $('#intext').data('text', null);
                intext_check();
                $('#intext').focus();
        });
        if ($.cookie('klavarog_keyboard_hide') == 'yes') {
                $('#show_keyboard').show();
                $('#hide_keyboard').hide();
                $('#keyboards').hide();
				$('#block_keyboards').addClass('hidekb');
				$('#handandkeyboard').css('display', 'none');
                $('#show_keyboard').show();
        }
		if ($.cookie('klavarog_keyboard_hide') == 'no') {
                $('#show_keyboard').hide();
                $('#hide_keyboard').show();
                $('#keyboards').show();
				$('#block_keyboards').removeClass('hidekb');
				$('#handandkeyboard').css('display', '');
                $('#intext').data('text', null);
        }
        if ($.cookie('klavarog_hand_hide') == 'yes') {
                $('#hide_hand').hide();
                $('#show_hand').hide();
        }else{			
			$('#show_hand').hide();
                $('#hide_hand').show();
                $('#hands').show();
                $('#intext').data('text', null);
		}
		
		$('#about').click(function () {
                var url = 'about/about.html';
				if( $('#theme').text() == 'Темная' ) {
					url = url + '#dark';
				}
				
				var win=window.open(url, '_blank');
				win.focus();
        });
		
        $('#hide_hand').click(function () {
                $.cookie('klavarog_hand_hide', 'yes');
                $('#hide_hand').hide();
                $('#hands').hide();
                $('#show_hand').fadeIn();
                $('#intext').focus();
        });
        $('#show_hand').click(function () {
                $.cookie('klavarog_hand_hide', '');
                $('#show_hand').hide();
                $('#hide_hand').fadeIn();
                $('#hands').show();
                $('#intext').data('text', null);
                intext_check();
                $('#intext').focus();
        });
        $('#hide_color').click(function () {
                $.cookie('klavarog_color_show', '');
                $('#hide_color').hide();
                $('#keyboard').removeClass('fingers');
				$('#numkeyboard').removeClass('fingers');
                $('#show_color').fadeIn();
                $('#intext').focus();
        });
        $('#show_color').click(function () {
                $.cookie('klavarog_color_show', 'yes');
                $('#show_color').hide();
                $('#hide_color').fadeIn();
                $('#keyboard').addClass('fingers');
				$('#numkeyboard').addClass('fingers');
                $('#intext').data('text', null);
                intext_check();
                $('#intext').focus();
        });
		if ($.cookie('klavarog_color_show') == 'yes') {
                $('#show_color').hide();
                $('#keyboard').addClass('fingers');
				$('#numkeyboard').addClass('fingers');
                $('#hide_color').show();
        }
        $('#hide_sound').click(function () {
                $.cookie('klavarog_sound_show', 'no');
                $('#hide_sound').hide();
                $('#show_sound').fadeIn();
				$('#show_sound').removeClass('onSound');
                $('#intext').focus();
        });
        $('#show_sound').click(function () {
                $.cookie('klavarog_sound_show', 'yes');
                $('#show_sound').hide();
                $('#hide_sound').fadeIn();
                $('#intext').data('text', null);
				$('#show_sound').addClass('onSound');
                intext_check();
                $('#intext').focus();
        });
		if ($.cookie('klavarog_sound_show') == 'no') {
                $('#hide_sound').hide();
                $('#show_sound').show();
				$('#show_sound').removeClass('onSound');
        }
		if ($.cookie('klavarog_sound_show') == 'yes') {
                $('#show_sound').hide();				
                $('#hide_sound').show();
				$('#show_sound').addClass('onSound');
        }
		
		
        if ($.cookie('klavarog_autobackspace') == 'no') {
                $('#hide_autobackspace').hide();
                $('#show_autobackspace').show();
                $('div.keyboard div.backspace').removeClass('off');
        } 
		if ($.cookie('klavarog_autobackspace') == 'yes') {
			$('#show_autobackspace').hide();
			$('#hide_autobackspace').show();
			$('div.keyboard div.backspace').addClass('off');
		}
		
        $('#hide_autobackspace').click(function () {
                $.cookie('klavarog_autobackspace', 'no');
                $('#hide_autobackspace').hide();
                $('#show_autobackspace').fadeIn();
                $('div.keyboard div.backspace').removeClass('off');
                $('#intext').focus();
        });
        $('#show_autobackspace').click(function () {
                $.cookie('klavarog_autobackspace', 'yes');
                $('#show_autobackspace').hide();
                $('#hide_autobackspace').fadeIn();
                $('div.keyboard div.backspace').addClass('off');
                $('#intext').focus();
        });
        if ($.cookie('klavarog_hand_hide') == 'yes') {
                $('#hide_hand').hide();
                $('#hands').hide();
                $('#show_hand').show();
        }
		
		theme_load( $.cookie('klavarog_theme') );
		strn_set( $.cookie('klavarog_strn') );
        
        
        $('#intext').keydown(function (e) {
                var href = $('#refresh').attr('href');
                var type = href.split('_')[1];
                if (e.keyCode == 9 && !e.shiftKey) {
                        // озвучим для иностранного языка (если браузер поддержит звук)
						var href = $('#refresh').attr('href');
						var lang = href.split('_')[0].substring(1);
						var txtP = '';
						var l1 = "";
						var l2 = "";
						var l3 = "";
						var l4 = "";
						var l5 = "";
						
						if( !($('#text div.line1').css('visibility') == 'hidden') ) {
							l1 = $('#text div.line1').text();
						};
						if( !($('#text div.line2').css('visibility') == 'hidden') ) {
							l2 = $('#text div.line2').text();
						};
						if( !($('#text div.line3').css('visibility') == 'hidden') ) {
							l3 = $('#text div.line3').text();
						};
						if( !($('#text div.line4').css('visibility') == 'hidden') ) {
							l4 = $('#text div.line4').text();
						};
						if( !($('#text div.line5').css('visibility') == 'hidden') ) {
							l5 = $('#text div.line5').text();
						};
						
						if( (lang == 'eng' && href.indexOf('code') == -1 ) || href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus' ) {
							if(l1 != '') txtP = txtP + l1;
							if(l2 != '') txtP = txtP + '.\n' +  l2;
							if(l3 != '') txtP = txtP + '.\n' +  l3;
							if(l4 != '') {
								txtP = txtP + '.\n' +  l4;
								if(l5 != '') txtP = txtP + '.\n' +  l5;
							} else {
								if(l5 != '') txtP = txtP + '.\n' +  l5.split('=')[0];
							}
							txtP = txtP.split('=')[0];
							say(txtP.replace(/\s*\[.*?\]\s*/g, ''), 0.8, 'eng');
							
						} else if( lang == 'deu' ) {
							if(l1 != '') txtP = txtP + l1;
							if(l2 != '') txtP = txtP + '.\n' +  l2;
							if(l3 != '') txtP = txtP + '.\n' +  l3;
							if(l4 != '') {
								txtP = txtP + '.\n' +  l4;
								if(l5 != '') txtP = txtP + '.\n' +  l5;
							}
							else {
								if(l5 != '') txtP = txtP + '.\n' +  l5.split('=')[0];								
							}
							txtP = txtP.split('=')[0];
							say(txtP.replace(/\s*\[.*?\]\s*/g, ''), 0.8, 'deu');
						} else if( href == '#rus_dict_eng' || href == '#rus_dict_eng_top2' ) {
							txtP = $('#question').text(); 
							if( $('.line1').is('.WrongChoice') ) txtP = txtP + '.\n' +  l1.split('=')[0];
							else if( $('.line2').is('.WrongChoice') ) txtP = txtP + '.\n' +  l2.split('=')[0];
							else if( $('.line3').is('.WrongChoice') ) txtP = txtP + '.\n' +  l3.split('=')[0];
							else if( $('.line4').is('.WrongChoice') ) txtP = txtP + '.\n' +  l4.split('=')[0];
							else if( $('.line5').is('.WrongChoice') ) txtP = txtP + '.\n' +  l5.split('=')[0];
							txtP = txtP.split('=')[0];
							say(txtP.replace(/\s*\[.*?\]\s*/g, ''), 0.8, 'eng');
							
						}
						
						// если еще не введен ни один символ, то сбросим сбор времени
						if( $('#intext').data('text') == '' ) {
							$('#time').data('time', null);
						}
						return false;
                }
                if ( (e.keyCode == 8 && !(e.shiftKey || e.ctrlKey)) && $('#hide_autobackspace').is(':visible')
					&& !(href == '#rus_dict_eng' || href == '#rus_dict_eng_top2' || href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus' )
				){
                        return false;
                }
        }).keyup(function () {
                intext_check();
        }).blur(function () {
                blur_timer = window.setTimeout(function () {
                        $('#intext').addClass('blur');
                }, 100);
        }).focus(function () {
                intext_notblur();
                $('div.wind_sel').fadeOut();
        });
        if ($.browser.opera) $('#intext').keydown(function () {
                window.setTimeout(intext_check, 10);
        });
        $('#textform').submit(function () {
                $('#intext').val($('#intext').val() + '¶');
                return false;
        });
        $('#dict_sel a').click(function () {
                var href = $(this).attr('href');
                $('#intext').val('');
                return dict_start(href);
        });
        $('#time_sel a').click(function () {
                var href = $(this).attr('href');
                var minutes = parseInt(href.substring(1), 10);
                $.cookie('klavarog_timer', minutes);
                $('#time a').text(minutes);
                $('#time_sel').fadeOut();
                $('#time').data('minutes', minutes);
                $('#intext').focus();
                return false;
        });
		$('#theme_sel a').click(function () {
                var href = $(this).attr('href');
				var nth = href.substring(1);
				theme_load(nth);
                $('#intext').focus();
                return false;
        });
		$('#strn_sel a').click(function () {
                var href = $(this).attr('href');
				var strSN = href.substring(1);
				strn_set(strSN);
                $('#intext').focus();
                return false;
        });
        if ($.cookie('klavarog_timer')) {
                $('#time a').text($.cookie('klavarog_timer'));
        }
        $('#my_dict .close').click(function () {
                $('#my_dict').fadeOut();
                $('#intext').focus();
        });
        $(window).resize(function () {
                kbd_hint_timer_init();
        });
        $('#refresh').click(function () {
                dict_refresh();
                $('#intext').focus();
                return false;
        });
        $('#my_dict_ok').click(function () {
                my_dict();
                return false;
        });
        $('<img src="i/wait.gif">');
        get_location();
        dict_start($('#refresh').attr('href'));
});


function my_dict() {
		$('#strn').css("display", "none");
        $('#refresh').attr('href', '#mydict');
        $.cookie('klavarog_dict', '#mydict');
		
		var sum_speed = 0;
		sum_speed = $.cookie( 'sum_speed' + 'mydict' );
		if( sum_speed == "null" ) sum_speed = 0;
		$('#intext').data('dictloadname', 'mydict');
		if( sum_speed == 0)  {
			$('#sumspeedLast').text('');
		} else {
			$('#sumspeedLast').text( Math.round(sum_speed));
		}
		
        window.location.href = '#mydict';
        $('#dict a').text($('#dict_sel a[href=#mydict]').text());
        var text = $('#dict_data').val();
		$.cookie('klavarog_mydict', text); // по возможности сохранит, возможно <= 5 Mb
        dict_cleardata();
        dict_generate(text);
        intext_check();
        $('#my_dict').fadeOut();
        $('#intext').focus();
}


function intext_notblur() {
        if (blur_timer != null) {
                window.clearTimeout(blur_timer);
                blur_timer = null;
        }
        $('#intext').removeClass('blur');
}


function stat_clear() {
        var href = $('#refresh').attr('href');
        $('#question').removeClass('error');
		$('#text div').removeClass('WrongChoice');
        $('#intext').removeClass('error');
        $('#intext').val('').data('start', null).data('errors', null).data('sum_linelen', 0).data('sum_len', 0).data('sum_errors', null).data('sum_time', null).data('sum_words', 0);
        $('#text').removeClass('error');
        $('#text div').html('').addClass('empty');
        $('#speed .data').html('<span class="nimp">--/--</span>');
        if ($('#question').css('visibility') == 'visible') $('#error .data').html('0%');
        else $('#error .data').html('<span class="nimp">--/--</span>');
}


function layout_sel(a) {
        var href = $(a).attr('href');
        var layout = href.substring(1);
        draw_keyboard(layout);
        $('#layout a').text(layout);
        $('#layout_sel').fadeOut();
        kbd_hint_timer_init();
        $('#intext').focus();
        return false;
}

function theme_sel(a) {
        var href = $(a).attr('href');
        var theme = href.substring(1);
        //draw_keyboard(layout);
        $('#theme a').text(theme);
        $('#theme_sel').fadeOut();
        kbd_hint_timer_init();
        $('#intext').focus();
        return false;
}

function strn_sel(a) {
        var href = $(a).attr('href');
        var strn = href.substring(1);
        $('#strn a').text(strn);
        $('#theme_sel').fadeOut();
        kbd_hint_timer_init();
        $('#intext').focus();
        return false;
}


function text2html(text) {
        return text.replace(/</g, '&lt;');
}

var left_timer = null;

function func_left_timer() {
        var href = $('#refresh').attr('href');
        var type = href.split('_')[1];
        $('#intext').val('').data('line', null);
        if ((!$('#text div.empty').length) || (href == '#numpad') || (type == 'num') || (type == 'basic') || (type == 'begin') || (type == 'speed')) {
                $('#time').data('time', null);
                $('#time a').text($('#time').data('minutes'));
        }
        intext_check();
}


function epo_ikso(intext, line) {
        var last = intext.substring(intext.length - 1).toLowerCase();
        var llast = line.substring(intext.length - 1, intext.length).toLowerCase();
        if ((last == 's' && llast == 'ŝ') || (last == 'g' && llast == 'ĝ') || (last == 'j' && llast == 'ĵ') || (last == 'c' && llast == 'ĉ') || (last == 'h' && llast == 'ĥ') || (last == 'u' && llast == 'ŭ')) {
                return '';
        }
        if (intext.substring(intext.length - 1).toLowerCase() == 'x') {
                var prev = intext.substring(intext.length - 2, intext.length - 1).toLowerCase();
                if (prev == 's' || prev == 'g' || prev == 'j' || prev == 'c' || prev == 'h' || prev == 'u') {
                        prev = intext.substring(intext.length - 2, intext.length - 1);
                        prev = prev.replace('S', 'Ŝ').replace('s', 'ŝ');
                        prev = prev.replace('G', 'Ĝ').replace('g', 'ĝ');
                        prev = prev.replace('J', 'Ĵ').replace('j', 'ĵ');
                        prev = prev.replace('C', 'Ĉ').replace('c', 'ĉ');
                        prev = prev.replace('H', 'Ĥ').replace('h', 'ĥ');
                        prev = prev.replace('U', 'Ŭ').replace('u', 'ŭ');
                        intext = intext.substring(0, intext.length - 2) + prev;
                        $('#intext').val(intext);
                        return intext;
                }
        }
        return intext;
}


function dict_penalt(index, intext, line, type) {
        $('#intext').val('');
        var line_index = $('#question').data('line');
        if (index == $('#question').data('index')) {
                $('#intext').data('errors', 0);
                set_stat(line);								
                text_generate();
				
        } else {
                var error_items = $('#intext').data('error_items');
                if (!error_items) error_items = [];
                for (var i = 0; i < 2; i++) error_items[error_items.length] = line_index;
				var line_index2 = $('#text div.line' + index).data('lineIdx');
				if( line_index2 ) {
					for (var i = 0; i < 2; i++) error_items[error_items.length] = line_index2;
				}
				
				
                $('#intext').data('error_items', error_items);
                $('#intext').data('errors', 1);
                var dline = [];
                if (type == 'dictrev') {
                        dline = [trim(dict[line_index].split('=')[0])];
                } else {
                        dline = dict[line_index].split('=')[1].split(';');
                }
                var tline = $('#text div.line' + $('#question').data('index')).text();
				//var lineErr = $('#text div.line' + index).text();
                $('#text div.line1').text(tline.substring(0, tline.length - 1) + ' ').removeClass('empty');
                $('#text div.line2').text(trim(dline[random(dline.length)]).substring(0, lentextform-1) + ' ').removeClass('empty');
                $('#text div.line3').text(trim(dline[random(dline.length)]).substring(0, lentextform-1) + ' ').removeClass('empty');
                $('#text div.line4').text('').addClass('empty');
				//$('#text div.line5').text('').addClass('empty');
                /*$('#text div.line5').text($('#question').text()).removeClass('empty'); */
				// покажем верный перевод не верно выбранного
				$('#text div.line5').text( $('#text div.line'+index).data('lineAll') );
				$('#text div.line5').addClass('WrongChoice');
				
			
                set_stat(line);
                $('#question').addClass('error').fadeOut('fast', function () {
                        $(this).fadeIn('fast', function () {
                                $(this).fadeOut('fast', function () {
                                        $(this).fadeIn('fast')
                                });
                        });
                });
        }
}


function intext_check() {
		if (left_timer) {
                window.clearTimeout(left_timer);
        }
        left_timer = window.setTimeout(func_left_timer, left_timerVal);
        var href = $('#refresh').attr('href');
        var lang = href.substring(1).split('_')[0];
        var type = href.split('_')[1];
        var intext = $('#intext').val();
		if(intext != "") $('#line6').css('display', 'none');
		else $('#line6').css('display', '');
        var is_change = (intext != $('#intext').data('text'));
        $('#intext').data('text', intext);
        var line1 = $('#text div.line1').text();
		var line1En = line1;
        line1_check = line1.replace(/ /g, ' ');
		if ( (lang == 'eng') && (href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus') ) {
			line1_check = line1_check.split('[')[0];
			line1 = line1.split('[')[0];
		}
        if (href == '#numpad') intext = intext.replace(/,/g, '.');
        if (lang == 'eng') intext = intext.replace(/`/g, "'");
        line1_check = line1_check.replace(/ё/g, "е").replace(/Ё/g, "Е");
        line1_check = line1_check.replace(/[—–]/g, "-");
		if( href == '#rus_dict_eng' || href == '#rus_dict_eng_top2' || href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus' ) {
			line1_check = line1_check.replace(/¶/g, " ");
		}
        
        intext = intext.replace(/ё/g, "е").replace(/Ё/g, "Е");
        intext = intext.replace(/[—–]/g, "-");
		if( href == '#rus_dict_eng' || href == '#rus_dict_eng_top2' || href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus' ) {
			intext = intext.replace(/¶/g, " ");
		}
        
        var is_line1 = false;
        var is_lines = false;
        if (($('#question').css('visibility') == 'visible') && (!$('#question').is('.error'))) {
                for (var i = 1; i <= 5; i++) {
                        var line = $('#text div.line' + i).text();
						if ( (lang == 'eng') && (href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus') ) {
							line = line.split('[')[0];
						}
                        line = line.replace(/ё/g, "е").replace(/Ё/g, "Е");
                        line = line.replace(/[—–]/g, "-");
						if( href == '#rus_dict_eng' || href == '#rus_dict_eng_top2' || href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus' ) {
							line = line.replace(/¶/g, " ");
						}
                        
                        if (lang == 'epo') {
                                var intext2 = intext;
                                intext = epo_ikso(intext, line);
                                if (intext == '') intext = intext2.substring(0, intext2.length - 1);
                        }
                        if (line.indexOf(intext.substring(0, line.length)) == 0) {
                                is_lines = true;
                                break;
                        }
                }
        } else {
                if (lang == 'epo') {
                        var intext2 = intext;
                        intext = epo_ikso(intext, line1_check);
                        if (intext == '') intext = intext2.substring(0, intext2.length - 1);
                }
                if (line1_check.indexOf(intext.substring(0, line1_check.length)) == 0) {
                        is_line1 = true;
                }
        }
        if (intext == '') {
                $('#intext').data('start', null);
                $('#intext').data('errors', 0);
        } else {
                if (!$('#intext').data('start')) {
                        var now = new Date();
                        $('#intext').data('start', now.getTime());
                        $('#intext').data('errors', 0);
                }
                if (!$('#time').data('time')) {
                        var now = new Date();
                        $('#time').data('time', now.getTime());
                }
        }
        var sym_errors = $('#text').data('sym_errors') ? $('#text').data('sym_errors') : [];
        var checked = $('#text div span.checked').eq(0).text();
        var sym = line1_check.substring(checked.length, checked.length + 1).toLowerCase();
        if (line1 == '') {} else if (is_lines) {
                $('#intext').removeClass('error');
                $('#text').removeClass('error');
				$('#text').removeClass('WrongChoice');
                for (var i = 1; i <= 5; i++) {
                        var line = $('#text div.line' + i).text();						
                        var line_check = line.replace(/ /g, ' ');						
						var linelen = line.length;
						if ( (lang == 'eng') && (href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus') ) {
							line_check = line_check.split('[')[0];
							linelen = line.split('[')[0].length;
						}
                        line_check = line_check.replace(/ё/g, "е").replace(/Ё/g, "Е");
                        line_check = line_check.replace(/[—–]/g, "-");
						if( href == '#rus_dict_eng' || href == '#rus_dict_eng_top2' || href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus' ) {
							line_check = line_check.replace(/¶/g, " ");
						}
                        
                        if ((line_check.indexOf(intext.substring(0, line.length)) == 0) && (line != '')) {
                                $('#text div.line' + i).html((intext.length > 0 ? '<span class="checked">' + text2html(line.substring(0, intext.length)) + '</span>' : '') + text2html(line.substring(intext.length)));
                                if (line != '') $('#text div.line' + i).removeClass('empty');
                                else $('#text div.line' + i).addClass('empty');
                                if (intext.length >= linelen) {
                                        dict_penalt(i, intext, line, type);
                                        break;
                                }
                        } else {
                                $('#text div.line' + i).text(line).removeClass('empty'); 
                        }
                }
        } else if (is_line1) {
                $('#intext').removeClass('error');
                $('#text').removeClass('error');
				$('#text').removeClass('WrongChoice');
                if (is_change) {
                        sym_errors[sym] = (sym_errors[sym] ? sym_errors[sym] - 1 : 0);
                        $('#text').data('sym_errors', sym_errors);
                }
				
				
                $('#text div.line1').html(	(intext.length > 0 ? '<span class="checked">' + text2html(line1En.substring(0, intext.length)) + '</span>' 
						: '') 
						+ text2html(line1En.substring(intext.length))	);
				
                line_errors();
                if (intext.length >= line1.length) {
                        set_stat(line1);
                        if (type == 'speed') {
                                $('#question').removeClass('error');
                        }
                        for (var i = 1; i < 5; i++) {
                                $('#text div.line' + i).html($('#text div.line' + (i + 1)).html());
                                if ($('#text div.line' + (i + 1)).is('.empty')) {
                                        $('#text div.line' + i).addClass('empty');
                                } else {
                                        $('#text div.line' + i).removeClass('empty'); 
                                }
								if ($('#text div.line' + (i + 1)).is('.WrongChoice')) {
                                        $('#text div.line' + i).addClass('WrongChoice');
                                } else {
                                        $('#text div.line' + i).removeClass('WrongChoice'); 
                                }
                        }
                        $('#text div.line5').html('').addClass('empty');
                        $('#intext').val(intext.substring(line1.length));
                        if (($('#question').css('visibility') == 'visible') && ($('#text div.line1').text() == '')) {
                                $('#question').removeClass('error');
                        }
                        if (($('#question').css('visibility') != 'visible') || ($('#text div.line1').text() == '')) {
                                text_generate();
                        }
                }
        } else {
                if (beep && (!$('#intext').is('.error')) && ( $('#hide_sound').is(':visible') 
					  || $('#show_sound').is('.onSound') ) 
					) beep.play();
				
                if ((!$('#intext').is('.error')) && (!$('#question').is('.error'))) {
                        if (checked) {
                                //if (!(sym == ' ' || sym == '¶')) {
								if (!(sym == ' ')) {
										if( type == 'basic' ) {
											if( sym_errors[sym] ) {
												if( sym_errors[sym] < 7) sym_errors[sym] = 7;
												else if( sym_errors[sym] < 20) sym_errors[sym] = sym_errors[sym] + 1;
											} else {
												sym_errors[sym] = 7;
											}
										} else {
											if( sym_errors[sym] ) {
												if( sym_errors[sym] < 5) sym_errors[sym] = 5;
												else if( sym_errors[sym] < 20) sym_errors[sym] = sym_errors[sym] + 2;
											} else {
												sym_errors[sym] = 5;
											}
										}
                                }
                                line_errors();
                                $('#text').data('sym_errors', sym_errors);
                                $('#intext').data('errors', $('#intext').data('errors') + 1);
                        }
                        if ((type == 'begin') && checked) {
								if( !(sym == ' ') ) {
									var index = $('#text div.line1 span.checked').text().replace(/ /g, ' ').split(' ').length - 1;
									var word_indexes = $('#text').data('word_indexes');
									var error_indexes = $('#text').data('error_indexes') ? $('#text').data('error_indexes') : [];
									var n = 0;
									var widx = word_indexes[index];
									for (var i = 0; i < error_indexes.length; i++) {
										if( error_indexes[i] == widx ) n++;
										if( n > 7 ) break;
									}
									var rand = 3+random(2);
									if( (n+rand) > 4 ) rand = 4 - n;
									if( rand > 0 ) {
										for (var i = 0; i < rand; i++) {
												error_indexes.push( widx );
										}
										$('#text').data('error_indexes', error_indexes);
									}
								}
                        }
                }
                $('#intext').addClass('error');
                $('#text').addClass('error');
                if (type == 'speed') {
                        $('#question').addClass('error');
                        $('#intext').val('').data('start', null).removeClass('error');
                        $('#text').removeClass('error');
                        $('#text div.line1, #text div.line2, #text div.line3').text($('#text div.line1').text()).removeClass('empty');
                }
                if ( $('#hide_autobackspace').is(':visible') || $('div.keyboard div.backspace').is('.off')  ){
                        window.setTimeout(function () {
                                var intext = $('#intext').val();
                                $('#intext').val(intext.substring(0, checked.length));
                                $('#intext').removeClass('error');
                                $('#text').removeClass('error');
                                kbd_hint_timer_init();
                        }, 200);
                }
        }
        if (is_change) kbd_hint_timer_init();
}


function line_errors() {
        var href = $('#refresh').attr('href');
        var type = href.split('_')[1];
        if ((type != 'speed') && (type != 'begin') && (type != 'dict') && (type != 'dictrev')) {
                var sym_errors = $('#text').data('sym_errors') ? $('#text').data('sym_errors') : [];
                var error_symbols = [];
                for (var i in sym_errors) {
                        error_symbols[i] = sym_errors[i];
                }
                for (var index = 1; index <= 3; index++) {
                        var ret = '';
                        var checked = $('#text div.line' + index + ' span.checked').text();
                        var text = $('#text div.line' + index).text().substring(checked.length);
                        for (var i = 0; i < text.length; i++) {
                                var symbol = text.substring(i, i + 1);
                                if (error_symbols[symbol.toLowerCase()] > 0) {
                                        ret = ret + '<span class="warn">' + text2html(symbol) + '</span>';
                                        error_symbols[symbol.toLowerCase()]--;
                                } else {
                                        ret = ret + text2html(symbol);
                                }
                        }
                        $('#text div.line' + index).html((checked ? '<span class="checked">' + text2html(checked) + '</span>' : '') + ret).removeClass('empty');
                        if ((!checked) && (!ret)) $('#text div.line' + index).addClass('empty');
                }
        } else if ( type == 'begin') {
			var ret1 = '';
			var ret2 = '';
			ret1 = $('#text div.line1 span.checked').text();
			var checked = ret1.replace(/ /g, ' ');
			var text = $('#text div.line1').text().substring(checked.length).replace(/ /g, ' ');
			if(text.trim().length > 0) {
				var p1 = (text.length > 0 && text[0]==' ') || (checked.length > 0 && checked[checked.length-1]==' ') ? true : false;
				var words1 = checked.trim().replace(/ /g, ' ').split(' ');
				var words2 = text.trim().replace(/ /g, ' ').split(' ');
				var word_indexes = $('#text').data('word_indexes') ? $('#text').data('word_indexes') : [];
				var error_indexes = $('#text').data('error_indexes') ? $('#text').data('error_indexes') : [];
				if( p1 && (text.length > 0 && text[0]==' ') ) {
					if( word_indexes.length > 0 && words1.length > 0 && error_indexes.length > 0) {
						var eri = error_indexes.indexOf( word_indexes[ words1.length-1 ] );
						if( eri > -1 ) {
							error_indexes.splice( eri, 1 );
							$('#text').data('error_indexes', error_indexes);
						}
					}
				}
				var wil = word_indexes.length;
				var smi = words1.length;
				if( !p1 ) smi--;
				for(var i=0; i<words2.length; i++) {
					if( i < wil && error_indexes.indexOf( word_indexes[i+smi] ) > -1) {
						ret2 = ret2 + '<span class="warn">' + text2html(words2[i]) + '</span>&nbsp;';
					} else {
						ret2 = ret2 + text2html(words2[i]) + '&nbsp;';
					}
				}
				
				
				if( p1 && !(checked.length > 0 && checked[checked.length-1]==' ') ) ret2 = '&nbsp;' + ret2;
				$('#text div.line1').html( (checked ? '<span class="checked">' + ret1 + '</span>' : '') 
							+ ret2).removeClass('empty');
				
			}
			
		}
}


function set_stat(text) {
        var href = $('#refresh').attr('href');
        var lang = href.split('_')[0].substring(1);
        var type = href.split('_')[1];
        var errors = $('#intext').data('errors');
		text = text.replace(/ /g, ' ');
		if( (lang == 'eng' && href.indexOf('code') == -1 ) || href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus' ) {
			text = text.split('=')[0];
			text = text.replace(/\s*\[.*?\]\s*/g, '');
		}
		
        if (type == 'speed') {
                errors = $('#question').is('.error') ? 1 : 0;
        }
        var len = text.length - 1;
        var words = text.split(' ').length;
        if (text.substring(text.length - 1) == ' ') words--;
        var end = new Date();
        var start = $('#intext').data('start');
        var time = (end.getTime() - start) / 1000;
        var speed = (len / time) * 60;
        if (speed < 3000) {
                var wspeed = (words / time) * 60;
                var sum_time = $('#intext').data('sum_time') ? $('#intext').data('sum_time') + time : time;
                var sum_len = $('#intext').data('sum_len') ? $('#intext').data('sum_len') + len : len;
                var sum_linelen = $('#intext').data('sum_linelen') ? $('#intext').data('sum_linelen') : 0;
                if ((!$('#question').is('.error')) || (type == 'speed')) {
                        sum_linelen++;
                        $('#intext').data('sum_linelen', sum_linelen);
                }
                var sum_words = $('#intext').data('sum_words') ? $('#intext').data('sum_words') + words : words;
                var sum_errors = $('#intext').data('sum_errors') ? $('#intext').data('sum_errors') + errors : errors;
                $('#intext').data('sum_time', sum_time);
                $('#intext').data('sum_len', sum_len);
                $('#intext').data('sum_words', sum_words);
                $('#intext').data('sum_errors', sum_errors);
                $('#intext').data('start', null);
                var sum_speed = (sum_len / sum_time) * 60;
				$.cookie( 'sum_speed' + $('#intext').data('dictloadname'), sum_speed);
				// сохраняем индексы сложных слов для анг. языка
				if( href == '#rus_dict_eng' || href == '#rus_dict_eng_top2' || href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus' ) {
					$.cookie( href.substring(1) + "_error_items", $('#intext').data('error_items'));
				}
				
                var sum_wspeed = (sum_words / sum_time) * 60;
                var error = ((errors / len) * 10000) / 100;
                var sum_error = ((sum_errors / sum_len) * 10000) / 100;
                if (lang == 'rus' || lang == 'ukr') {
                        $('#speed .data').html((sum_len != len ? '<span class="nimp"><span title="Символов в минуту на предыдущей строке">' + Math.round(speed) + '</span> (<span title="Слов в минуту на предыдущей строке">' + Math.round(speed / 5) + '</span>) / </span>' : '') + '<span title="Всего символов в минуту">' + Math.round(sum_speed) + '</span> (<span title="Всего слов в минуту">' + Math.round(sum_speed / 5) + '</span>' + ((href != '#numpad') && (type != 'num') ? (type != 'code' ? '/<span title="Реальных слов в минуту">' + Math.round(sum_wspeed) + '</span>' : '') : '') + ')');
                } else {
                        $('#speed .data').html((sum_len != len ? '<span class="nimp"><span title="Last characters per minute">' + Math.round(speed) + '</span> (<span title="Last words per minute">' + Math.round(speed / 5) + '</span>) / </span>' : '') + '<span title="Characters per minute">' + Math.round(sum_speed) + '</span> (<span title="Words per minute">' + Math.round(sum_speed / 5) + '</span>' + ((href != '#numpad') && (type != 'num') ? (type != 'code' ? '/<span title="Real words per minute">' + Math.round(sum_wspeed) + '</span>' : '') : '') + ')');
                }
                if (($('#question').css('visibility') == 'visible') || (type == 'speed')) {
                        var sum_lineerror = ((sum_errors / sum_linelen) * 10000) / 100;
                        $('#error .data').html('<span title="' + (lang == 'rus' || lang == 'ukr' ? 'Ошибочных ответов' : 'Error answers') + '">' + Math.round(sum_lineerror) + '%</span> (<span title="' + (lang == 'rus' || lang == 'ukr' ? 'Количество ошибок' : 'Count Errors') + '">' + sum_errors + '</span>/<span title="' + (lang == 'rus' || lang == 'ukr' ? 'Количество слов' : 'Count words') + '">' + sum_linelen + '</span>)');
                } else {
                        $('#error .data').html((sum_len != len ? '<span class="nimp"><span title="' + (lang == 'rus' || lang == 'ukr' ? 'Ошибок на предыдущей строке' : 'Errors last') + '">' + error.toFixed(2) + '%</span> / </span>' : '') + '<span title="' + (lang == 'rus' || lang == 'ukr' ? 'Ошибок' : 'Errors') + '">' + sum_error.toFixed(2) + '%</span>');
                }
        }
}
var kbd_hint_timer = null;


function kbd_hint_timer_init() {
        $('div.keyboard:visible div.sel').removeClass('sel');
        $('div.keyboard:visible div.space div').removeClass('sel_left').removeClass('sel_right');
        $('#hands div.hand').hide();
        if (kbd_hint_timer != null) {
                window.clearTimeout(kbd_hint_timer);
        }
        var pause = ($('#hide_hand').is(':visible') ? 0 : 10);
        kbd_hint_timer = window.setTimeout(func_kbd_hint_timer, pause);
}


function func_kbd_hint_timer() {
        var layout = $('#layout_sel').data('layout');
        var href = $('#refresh').attr('href');
        var lang = href.substring(1).split('_')[0];
        var intext = $('#intext').val();
        var line1 = $('#text div.line1').text().replace(/ /g, ' ');
        line1_check = line1.replace(/ /g, ' ');
        if (href == '#numpad') intext = intext.replace(/,/g, '.');
        if (lang == 'eng') intext = intext.replace(/`/g, "'");
        line1_check = line1_check.replace(/ё/g, "е").replace(/Ё/g, "Е");
        line1_check = line1_check.replace(/[—–]/g, "-");
		if( href == '#rus_dict_eng' || href == '#rus_dict_eng_top2' || href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus' ) {
			line1_check = line1_check.replace(/¶/g, " ");
		}
        
        intext = intext.replace(/ё/g, "е").replace(/Ё/g, "Е");
        intext = intext.replace(/[—–]/g, "-");
		if( href == '#rus_dict_eng' || href == '#rus_dict_eng_top2' || href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus' ) {
			intext = intext.replace(/¶/g, " ");
		}
        
        var sym = line1.substring(intext.length, intext.length + 1);
        if ($('#question').not('.error').css('visibility') == 'visible') {
                sym = '';
                for (var i = 1; i <= 5; i++) {
                        var line = $('#text div.line' + i).text();
                        var line_check = line;
                        line_check = line_check.replace(/ё/g, "е").replace(/Ё/g, "Е");
                        line_check = line_check.replace(/[—–]/g, "-");
						if( href == '#rus_dict_eng' || href == '#rus_dict_eng_top2' || href == '#eng_dictrev_rus_top2' || href == '#eng_dictrev_rus' ) {
							line_check = line_check.replace(/¶/g, " ");
						}
                        
						
                        if (line_check.indexOf(intext.substring(0, line.length)) == 0) {
                                if (sym == '') sym = line.substring(intext.length, intext.length + 1);
                                if (line.substring(intext.length, intext.length + 1) != sym) {
                                        sym = '~~';
                                }
                        }
                }
                if (sym == '~~') sym = '';
        }
        if ($('#intext').is('.error')) {
                $('div.keyboard:visible div.keys:visible div.line div.backspace').addClass('sel');				
        } else if (sym != '') {
                if (sym == '¶') {
                        $('div.keyboard:visible div.keys:visible div.line div.enter').addClass('sel');
                } else if (sym == ' ') {
                        var sym_prev = line1.substring(intext.length - 1, intext.length);
                        var pos = $("div.keyboard:visible div.keys:visible div.line div:not(.sys):contains('" + sym_prev.toUpperCase() + "')").prevAll('div').length;						
                        if ($('#klavarog').is(':visible')) {
                                $('div.keyboard:visible div.keys:visible div.line div.space div').addClass('sel_right');
                        } else {
                                $('div.keyboard:visible div.keys:visible div.line div.space div').addClass(pos <= 5 ? 'sel_right' : 'sel_left');
                        }
                } else if (sym == '"') {
                        var $key = $("div.keyboard:visible div.keys:visible div.line div:not(.sys):contains('" + sym + "')");
                        $key.addClass('sel');
                        if ($key.find('sup').is(":contains('" + sym + "')")) {
                                sel_shift($key.prevAll('div').length <= 5);
                        }
                        if ($key.find('sub').is(":contains('" + sym + "')")) {
                                sel_fn($key.prevAll('div').length <= 5);
                        }
                } else if (sym == '(') {
                        var key = ((layout == 'dvorak_program') ? '1' : '9');
                        if (layout == 'ant') key = '[';
                        if (layout == 'ант') key = '«';
                        var $key = $("div.keyboard:visible div.keys:visible div.line div:not(.sys):contains('" + key + "')");
                        if ($('#keyboard #klavarog').is(':visible')) {
                                $('div.keyboard:visible div.keys:visible div.line div.lbrack').addClass('sel');
                                sel_fn($key.prevAll('div').length <= 5);
                        } else {
                                $key.addClass('sel');
                                if ($key.find('sup').text().indexOf(sym) >= 0) {
                                        sel_shift($key.prevAll('div').length <= 5);
                                }
                        }
                } else if (sym == ')') {
                        var key = ((layout == 'dvorak_program') ? '2' : '0');
                        if (layout == 'ant') key = ']';
                        if (layout == 'ант') key = '»';
                        var $key = $("div.keyboard:visible div.keys:visible div.line div:not(.sys):contains('" + key + "')");
                        if ($('#keyboard #klavarog').is(':visible')) {
                                $('div.keyboard:visible div.keys:visible div.line div.rbrack').addClass('sel');
                                sel_fn($key.prevAll('div').length <= 5);
                        } else {
                                $key.addClass('sel');
                                if ($key.find('sup').text().indexOf(sym) >= 0) {
                                        sel_shift($key.prevAll('div').length <= 5);
                                }
                        }
                } else {
                        var $key = $('div.keyboard:visible div.keys:visible div.line div:not(.sys):contains("' + sym + '")');
                        if ($key.length == 0) {
                                $key = $('div.keyboard:visible div.keys:visible div.line div:not(.sys):contains("' + sym.toUpperCase() + '")');
                        }
                        $key.addClass('sel');
                        if ($key.find('sup').is(':contains("' + sym + '")') || (sym != sym.toLowerCase())) {
                                sel_shift($key.prevAll('div').length <= 5);
                        }
                        if ($key.find('sub').is(':contains("' + sym.toUpperCase() + '")')) {
                                sel_fn($key.prevAll('div').length <= 5);
                        }
                }
        }
        $('div.keyboard:visible div.keys:visible div.line div.sel').each(function () {
                var top = $(this).position().top;
                var left = $(this).position().left;
                var pos = $(this).prevAll('div').length;
                var lr = 'r';
                var hnum = 4;
                var is_numpad = $('div.keyboard:visible').is('#numkeyboard');
                var x = 0;
                var line = $(this).parent('div.line').prevAll('div.line').length;
                if (is_numpad) {
                        if (pos == 0) hnum = 1;
                        if (pos == 1) hnum = 2;
                        if (pos == 1 && line == 4) {
                                hnum = 3;
                                top = top - 20;
                        }
                        if (pos == 2) hnum = 3;
                        if (pos == 0 && line == 4) hnum = 0;
                        if (pos == 3 && line == 0) hnum = 4; //3;
                        if (pos == 3 && (line == 1 || line == 3) && !($.browser.msie && $.browser.version >= 7 && $.browser.version < 8)) {
							x = x + 100;
						}
                } else if (layout.split('_')[0] == 'catboard') {
                        if (line != 3 && pos <= 6) lr = 'l';
                        if (line == 4) hnum = 0;
                        else if (line == 3) {
                                if (pos <= 5) lr = 'l';
                                if (pos == 2 || pos == 9) hnum = 3;
                                else if (pos == 3 || pos == 8) hnum = 2;
                                else if (pos >= 4 && pos <= 7) hnum = 1;
                        } else if (pos == 3 || pos == 10) hnum = 3;
                        else if (pos == 4 || pos == 9) hnum = 2;
                        else if (pos >= 5 && pos <= 8) hnum = 1;
                } else {
                        if (pos <= 5) lr = 'l';
                        if (line == 4) hnum = 0;
                        else if (pos == 2 || pos == 9) hnum = 3;
                        else if (pos == 3 || pos == 8) hnum = 2;
                        else if (pos >= 4 && pos <= 7) hnum = 1;
                }

                
                if (lr == 'l') {
                        x = x - 44 + 11 * hnum + 17;
                } else {
                        x = x - 14 + 44 - 11 * hnum - 11;
                }
                var y = 25;
                if (hnum == 2) y = 35;
                if (hnum == 3) y = 30;
                if (hnum == 4) y = 15;
                if (hnum == 0) y = 0;
                
                if( window.getComputedStyle(document.body).zoom != 1 ) {
                        let k = window.getComputedStyle(document.body).zoom;                        
                        $('#' + lr + 'hand' + hnum).css({
                                top: ((top + y)/k)+5,
                                left: ((left + x)/k)
                        }).show();
                }
                else {
                        $('#' + lr + 'hand' + hnum).css({
                                top: top + y,
                                left: left + x
                        }).show();
                }

                
        });
        $('div.keyboard:visible div.keys:visible div.line div.space div.sel_left, div.keyboard:visible div.keys:visible div.line div.space div.sel_right').each(function () {
                var top = $(this).position().top;
                var left = $(this).position().left;
                var hnum = 0;
                var lr = $(this).is('.sel_left') ? 'l' : 'r';
                left_plus = (lr == 'l' ? -30 : 167);
                
				if ($('#keyboard #klavarog').is(':visible')) {
                        lr = 'r';
                        left_plus = 20;
                }
                
                if( window.getComputedStyle(document.body).zoom != 1 ) {
                        let k = window.getComputedStyle(document.body).zoom;                        
                        $('#' + lr + 'hand' + hnum).css({
                                top: (top - 5)/k,
                                left: (left + left_plus)/k
                        }).show();
                }
                else {
                        $('#' + lr + 'hand' + hnum).css({
                                top: top - 5,
                                left: left + left_plus
                        }).show();
                }
        });
}


function sel_shift(is_right) {
        if (is_right) {
                $('div.keyboard:visible div.keys:visible div.rshift').addClass('sel');
        } else {
                $('div.keyboard:visible div.keys:visible div.lshift').addClass('sel');
        }
}


function sel_fn(is_right) {
        if (is_right) {
                $('div.keyboard:visible div.keys:visible div.rfn').addClass('sel');
        } else {
                $('div.keyboard:visible div.keys:visible div.lfn').addClass('sel');
        }
}


function get_location() {
        var location = document.location.href;
        var href = $('#refresh').attr('href');
        if (location.indexOf('#') >= 0) {
                href = location.substring(location.indexOf('#'));
        } else if ($.cookie('klavarog_dict')) {
                href = $.cookie('klavarog_dict');
        } else {
                href = '#rus_basic';
        }
		if( href == "null") href = '#rus_basic';        
		$('#refresh').attr('href', href);
		$.cookie('klavarog_dict', href);
		document.location.href = location + href;
        var minutes = parseInt($('#time a').text(), 10);
        $('#time').data('minutes', minutes);
}


function rss_load(name) {
        $('#dict').removeClass('error').addClass('wait');
		
		dict_load( name );
		
		
		/*
        $.ajax({
                url: 'https://typerun.top/rss/?name=' + name,
                success: function (text) {
                        $('#dict').removeClass('wait');
                        dict_generate(text);
                },
                error: function () {
                        $('#dict').removeClass('wait').addClass('error');
                        dict = [];
                        draw_keyboard('');
                        intext_check();
                }
        });
		*/
		
		
}


function dict_start(href) {
        var lang = href.substring(1).split('_')[0];
        var type = href.split('_')[1];
        $('#intext').val('').data('text', ' ');
        $('#time').data('time', null);
        $('#time a').text($('#time').data('minutes'));
        if (href == '#lang_select') {
                $('#dict_sel').show();
                return false;
        } else if (href == '#mydict') {
                dict_mytext();
                return false;
        } else if (lang == 'rss') {
                $('#question').text('');
                var text = ($('#dict_sel a[href=' + href + ']').parent('div').find('span').length ? $('#dict_sel a[href=' + href + ']').parent('div').find('span').eq(0).text() : '') + $('#dict_sel a[href=' + href + ']').text();
                if (!text) text = 'Ошибка';
                $('#dict a').text(text);
                $('#refresh').attr('href', href);
                $.cookie('klavarog_dict', href);
                $('#dict_sel').fadeOut();
                stat_clear();
                rss_load(type);
                $('#intext').focus();
                return true;
        } else if (href == '#numpad') {
                $(document.body).removeClass('dict');
                var text = ($('#dict_sel a[href=' + href + ']').parent('div').find('span').length ? $('#dict_sel a[href=' + href + ']').parent('div').find('span').eq(0).text() : '') + $('#dict_sel a[href=' + href + ']').text();
                $('#dict a').text(text);
                $('#refresh').attr('href', href);
                $.cookie('klavarog_dict', href);
                $('#dict_sel').fadeOut();
                dict_cleardata();
                stat_clear();
				var sum_speed = 0;
				sum_speed = $.cookie( 'sum_speed' + "numpad" );
				if( sum_speed == "null" ) sum_speed = 0;
				$('#intext').data('dictloadname', "numpad");
				if( sum_speed == 0)  {
					$('#sumspeedLast').text('');
				} else {
					$('#sumspeedLast').text( Math.round(sum_speed));
				}
                dict_numpad();
                $('#intext').focus();
                return true;
        } else if (type == 'num') {
                $(document.body).removeClass('dict');
                var text = ($('#dict_sel a[href=' + href + ']').parent('div').find('span').length ? $('#dict_sel a[href=' + href + ']').parent('div').find('span').eq(0).text() : '') + $('#dict_sel a[href=' + href + ']').text();
                if (!text) text = 'Ошибка';
                $('#dict a').text(text);
                $('#refresh').attr('href', href);
                $.cookie('klavarog_dict', href);
                $('#dict_sel').fadeOut();
                dict_cleardata();
                stat_clear();
                dict_num();
                $('#intext').focus();
                return true;
        } else {
                $('#question').text('');
                var text = ($('#dict_sel a[href=' + href + ']').parent('div').find('span').length ? $('#dict_sel a[href=' + href + ']').parent('div').find('span').eq(0).text() : '') + $('#dict_sel a[href=' + href + ']').text();
                if (!text) text = 'Ошибка';
                $('#dict a').text(text);
                $('#refresh').attr('href', href);
                $.cookie('klavarog_dict', href);
                $('#dict_sel').fadeOut();
                stat_clear();
                if (type == 'dictrev') {
                        var hrefs = href.substring(1).split('_');
                        //href = '#' + hrefs[2] + '_dict_' + hrefs[0] + (hrefs[3] ? '_' + hrefs[3] : '');
                }
                if (type == 'speed') {
                        //var hrefs = href.substring(1).split('_');
                        //href = '#' + hrefs[0] + '_begin';
                }
                if (type == 'basic') {
                        //var hrefs = href.substring(1).split('_');
                        //href = '#' + hrefs[0] + '_begin';
                }
                dict_load(href.substring(1));
                $('#intext').focus();
                return true;
        }
}


function dict_cleardata() {
        $('#question').text('').css('visibility', 'hidden');
        $('#hands div.hand').hide();
        $('#dict').removeClass('error');
        $('#keyboard').hide();
        $('#text').removeClass('penalt').data('sym_errors', null);
        $('#text').data('error_indexes', null);
        $('#text div').html('').addClass('empty');
		$('#text div').removeClass('WrongChoice');
        $('#text').data('line', null).data('index', null).data('index_line', 0);
		$('#line6').text("");
}


function dict_refresh() {
		strI = strn;
		strline = "";
        $('#intext').val('').data('text', ' ');	
		$('#text div').removeClass('WrongChoice');		
        var href = $('#refresh').attr('href');
        var lang = href.substring(1).split('_')[0];
        var type = href.split('_')[1];
        $('#time').data('time', null);
        $('#time a').text($('#time').data('minutes'));
        if (href == '#mydict') {
                $('#question').text('').removeClass('error');
                $('#intext').val('');
                for (var i = 1; i < 5; i++) {
                        $('#text div.line' + i).html($('#text div.line' + (i + 1)).html());
                        if ($('#text div.line' + (i + 1)).is('.empty')) $('#text div.line' + i).addClass('empty');
                        else $('#text div.line' + i).removeClass('empty');
                }
                $('#text div.line5').html('').addClass('empty');
                text_generate();
                $('#intext').hide().fadeIn();
                $('#text').hide().fadeIn();
                $('#intext').focus();
                return false;
        } else if (href == '#numpad') {
                $('#intext').val('');
                dict_numpad();
                $('#intext').focus();
                return true;
        } else if (type == 'num') {
                $('#intext').val('');
                dict_num();
                $('#intext').focus();
                return true;
        } else {
                if (!dict.length) {
                        dict_load(href.substring(1));
                        return true;
                } else {
                        $('#question').text('').removeClass('error');
                        $('#intext').val('');
                        $('#text').data('line', '').data('index', null);
                        $('#text div').html('').addClass('empty');
						if( type == 'begin') $('#text').data('error_indexes', []);
						text_generate();
                        $('#intext').hide().fadeIn();
                        $('#text').hide().fadeIn();
                        $('#intext').focus();
                        return true;
                }
        }
}


function dict_mytext() {
        $('#dict_sel').fadeOut();
        $('#my_dict').fadeIn(function () {
                $('#dict_data').focus();
				$('#dict_data').val( $.cookie('klavarog_mydict') );
        });
}


function dict_numpad() {
		strI = strn;
		strline = '';
        $('#strn').css("display", "none");
        dict_cleardata();
        $('#text div.line1').html(numpad_random()).removeClass('empty');
        $('#numkeyboard').fadeIn();
        $('#show_autobackspace').hide();
        $('#hide_autobackspace').show();
        intext_check();
        $('#intext').val('').hide().fadeIn(function () {
                $(this).focus();
        });
        $('#text').hide().fadeIn();
}


function dict_num() {
        dict_cleardata();
        $('#text div.line1').html(num_random()).removeClass('empty');
        $('#numkeyboard').hide();
        show_keyboard();
        $('#keyboard').fadeIn();
        intext_check();
        $('#intext').val('').hide().fadeIn(function () {
                $(this).focus();
        });
        $('#text').hide().fadeIn();
}


function random(num) {
        return Math.floor(Math.random() * num);
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function numpad_random() {
	$('#strn').css("display", "");
	var str = '';
	if( strI == 0 || strline == '' ) {
		var aop = ['/', '*', '-', '+', '+'];
		var aopCM = false;
		var aopC = '';
		while (str.length < lentextform-8) {
				if (str != '') {					
						aopC = aop[random(aop.length)];
						str = str + aopC;
				}
				var len = random(5) + 3;
				var num = (random(9) + 1).toString();
				for (var i = 1; i < len; i++) {
						var rand = random(13);
						if (rand > 9) rand = 0;
						num = num + rand.toString();
				}
				if (random(3) == 0) {
						num = num + '.';
						var len = random(3);
						for (var i = 0; i < len; i++) {
								var rand = random(10);
								num = num + rand.toString();
						}
						num = num + (random(9) + 1).toString();
				}
				str = str + num;
		}

		
		strline = str;
		strI = strn;
	} else {
		str = strline;
		if(strI > 0) strI--;
	}
	
	
	return str + '¶';
}


function num_random() {
        var str = '';
        while (str.length < 70) {
                if (str != '') {
                        str = str + ' ';
                }
                var len = random(5) + 3;
                var num = (random(9) + 1).toString();
                for (var i = 1; i < len; i++) {
                        var rand = random(13);
                        if (rand > 9) rand = 0;
                        num = num + rand.toString();
                }
                if (random(3) == 0) {
                        num = num + '.';
                        var len = random(3);
                        for (var i = 0; i < len; i++) {
                                var rand = random(10);
                                num = num + rand.toString();
                        }
                        num = num + (random(9) + 1).toString();
                }
                str = str + num;
        }
        return str + '¶';
}


function dict_load(name) {
		strI = strn;
		strline = '';
        var lang = name.split('_')[0].substring(1);
        var type = name.split('_')[1];
		if( (type == 'basic') || (type == 'begin') || (type == 'speed') || (name == 'num_begin') ) {
			$('#strn').css("display", "");
		} else {
			$('#strn').css("display", "none");
		}
        $('#dict').removeClass('error').addClass('wait');
		$('#line6').text("");
		var sum_speed = 0;
		sum_speed = $.cookie( 'sum_speed' + name );
		if( sum_speed == "null" ) sum_speed = 0;
		$('#intext').data('dictloadname', name);
		if( sum_speed == 0)  {
			$('#sumspeedLast').text('');
		} else {
			$('#sumspeedLast').text( Math.round(sum_speed));
		}
		
		// загружаем индексы сложных слов для анг. языка		
		if( name == 'rus_dict_eng' || name == 'rus_dict_eng_top2' || name == 'eng_dictrev_rus_top2' || name == 'eng_dictrev_rus' ) {
			var erit = $.cookie( name + "_error_items").split(',');
			if( erit == "" ) $('#intext').data('error_items', '');
			else $('#intext').data('error_items', erit);
		}
		
		
		$('#dict').removeClass('wait');
		var text = dictMap.get(name);
		if( text == "" ) { // Если некоторые пустые будут, то замена их
				if( (name == "rus_basic") || (name == "rus_speed") ) text = dictMap.get("rus_begin");
				else if( (name == "eng_basic") || (name == "eng_speed") ) text = dictMap.get("eng_begin"); 
				else if( (name == "deu_basic") || (name == "deu_speed") ) text = dictMap.get("deu_begin");
				else if( (name == "ukr_basic") || (name == "ukr_speed") ) text = dictMap.get("ukr_begin");
				else if( (name == "eng_dictrev_rus") ) text = dictMap.get("rus_dict_eng");
				else if( (name == "eng_dictrev_rus_top2") ) text = dictMap.get("rus_dict_eng_top2");
		}
		
		if( !(text == undefined) ) {
			dict_generate( text );
		} else {
			$('#dict').removeClass('wait').addClass('error');
			dict = [];
			draw_keyboard('');
			intext_check();			
		}
}

var dict = [];

function dict_generate(text) {
        dict_cleardata();
        var href = $('#refresh').attr('href');
        var lang = href.split('_')[0].substring(1);
        var type = href.split('_')[1];
        if ((type == 'dict') || (type == 'dictrev')) $(document.body).addClass('dict');
        else $(document.body).removeClass('dict');
        $('#numkeyboard').hide();
        show_keyboard();
        $('#keyboard').fadeIn();
		text = text.replace(/[’’]/g, "'").replace(/\r/g, "\n").replace(/\n{2,}/g, "\n").replace(/\t/g, ' ').replace(/ {2,}/g, ' ').replace(/^ +/g, "").replace(/\n +/g, "\n").replace(/ +$/g, "").replace(/ +\n/g, "\n").replace(/`/g, '').replace(/^\n/, '').replace(/[«»„“]/g, '"').replace(/[-—]/g, '-').replace(/[…]/g, '...');
		if( (type == 'begin') ) { //&& (name != 'num_begin') )
			text = text.replace(/\n/g, " ").replace(/ +$/g, "");
			dict = text.split(' ');
		} else {
			dict = text.split("\n");
		}
        
        text_generate();
        $('#intext').hide().fadeIn(function () {
                $(this).focus();
        });
        $('#text').hide().fadeIn();
}


function dict_next() {
        $('#text div').html('').addClass('empty');
        $('#time a').text($('#time').data('minutes'));
        $('#time').data('time', null);
        text_generate();
        $('#intext').focus();
        return false;
}


function show_relax() {
        $('#text div').html('').addClass('empty');
        show_relax_text(3);
}


function show_relax_text(num) {
        var href = $('#refresh').attr('href');
        var lang = href.split('_')[0].substring(1);
        if (lang == 'rus' || lang == 'ukr') {
                $('#text div.line' + num).html('Отдохните сейчас. <a href="#next" class="link" onclick="return dict_next();">Продолжить</a>').removeClass('empty');
        } else if (lang == 'epo') {
                $('#text div.line' + num).html('Ripozu nun. <a href="#next" class="link" onclick="return dict_next();">Daŭrigi</a>').removeClass('empty');
        } else {
                $('#text div.line' + num).html('Relax now. <a href="#next" class="link" onclick="return dict_next();">Continue</a>').removeClass('empty');
        }
}


function trim(str) {
        return str.replace(/(^\s+)|(\s+$)/g, '');
}


function text_generate() {
		$('#text div').removeClass('WrongChoice');
        var href = $('#refresh').attr('href');
        var lang = href.split('_')[0].substring(1);
        var type = href.split('_')[1];
		
        var end = new Date();
        var minutes = $('#time').data('minutes');
        var mperiod = 0;
        if ($('#time').data('time')) {
                var timer = $('#time').data('time');
                var mperiod = ((end.getTime() - timer) / 1000) / 60;
                mperiod = Math.floor(mperiod);
                if (mperiod > minutes) mperiod = minutes;
        }
        $('#time a').text(minutes - mperiod);
        var is_timeend = ((mperiod >= minutes) && ((!$(document.body).is('.dict')) || (!$(document.body).is('.dzen')) || ($('#text div.empty').length > 1)));
        var sum_linelen = $('#intext').data('sum_linelen') ? $('#intext').data('sum_linelen') : 0;
        if ((href == '#numpad') && is_timeend) {
                $('#text div.line1').html('').addClass('empty');
                $('#text div.line3').html('Relax now. <a href="#next" class="link" onclick="return dict_next();">Continue</a>').removeClass('empty');
        } else if (href == '#numpad') {
                $('#text div.line1').html(numpad_random()).removeClass('empty');
        } else if ((type == 'num') && is_timeend) {
                $('#text div.line1').html('').addClass('empty');
                show_relax();
        } else if (type == 'num') {
                $('#text div.line1').html(num_random()).removeClass('empty');
        } else if (((type == 'dict') || (type == 'dictrev')) && ((sum_linelen > 0) && ((sum_linelen % 100) == 0) && $('#text div:not(.empty)').length) && (!$(document.body).is('.dzen'))) {
                $('#question').html('');
                $('#text').removeClass('penalt');
                show_relax();
        } else if ((type == 'dict') && (!$('#question').is('.error'))) {
                var index = rand_dict('');
                var error_items = $('#intext').data('error_items');
				var rnd20 = random(20);
                if (error_items && (error_items.length != 0) && (rnd20 < error_items.length)) {
                        var i = random(error_items.length);
						if( error_items[i] != "null" ) {
							index = error_items[i];
							error_items.splice(i, 1);
							$('#intext').data('error_items', error_items);
						}
                } else if( href == '#rus_dict_eng_top2' || href == '#eng_dictrev_rus_top2' ) {
					// выбор для rus_dict_eng_top2 особо
					var rnd14 = random(100);
					if( rnd14 < 40 ) index = getRandomArbitrary(0, 300);
					else if( rnd14 < 70 ) index = getRandomArbitrary(300, 1000);
					else if( rnd14 < 90 ) index = getRandomArbitrary(1000, 2000);
					else index = getRandomArbitrary(2000, dict.length);
					
					if( index < 0 || index > dict.length-1 ) index = 0;
				}
				
                var line = dict[index];
				if( $('#question').data('dictLineQuestion') != "" && $('#question').data('dictLineQuestion') != line ) {
					$('#line6').text( $('#question').data('dictLineQuestion') );
				} else {
					$('#line6').text("");
				}
				$('#question').data('dictLineQuestion', line);
                $('#text div').css('visibility', 'visible').html('').addClass('empty');
                var eq = line.split('=');
                var pos = random($('#text div').length) + 1;
                $('#question').hide().text(trim(eq[0])).fadeIn().css('visibility', 'visible').data('index', pos).data('line', index);
                var ans = eq[1].split(';');
                $('#text div.line' + pos).text(trim(ans[random(ans.length)]) + ' ').removeClass('empty'); 
                var tword = trim(eq[0]);
                var notin = '|' + index + '|';
                while ($('#text div.empty').length > 0) {
                        var index = rand_dict(notin);
                        if (href.split('_')[2] == 'epo') {
                                var word = trim(dict[index].split('=')[0]);
                                var start = index;
                                var tl = tword.substring(tword.length - 1);
                                while (word.substring(word.length - 1) != tl || (notin.indexOf('|' + index + '|') >= 0)) {
                                        index++;
                                        if (index >= dict.length) index = 0;
                                        word = trim(dict[index].split('=')[0]);
                                        if (index == start) break;
                                }
                        }
                        notin = notin + '|' + index + '|';
                        var line = dict[index];
                        var eq = line.split('=');
                        var ans = eq[1].split(';');
                        var text = trim(ans[random(ans.length)]);
                        if (text.length > 2*lentextform) {
                                var pos = line.substring(0, 2*lentextform-1).lastIndexOf(' ');
                                if (pos >= 0) {
                                        text = text.substring(0, pos + 1);
                                } else {
                                        text = text.substring(0, 2*lentextform-1);
                                }
                        }
                        //$('#text div.empty').eq(0).text(text + '¶').removeClass('empty');
						$('#text div.empty').eq(0).text(text + ' ').removeClass('empty').data('lineAll', line).data('lineIdx', index); 						
                }
        } else if ((type == 'dictrev') && (!$('#question').is('.error'))) {
                var index = rand_dict('');
                var error_items = $('#intext').data('error_items');
				var rnd20 = random(20);
                if (error_items && (error_items.length != 0) && (rnd20 < error_items.length)) {
                        var i = random(error_items.length);
						if( error_items[i] != "null" ) {
							index = error_items[i];
							error_items.splice(i, 1);
							$('#intext').data('error_items', error_items);
						}
                } else if( href == '#rus_dict_eng_top2' || href == '#eng_dictrev_rus_top2' ) {
					// выбор для rus_dict_eng_top2 особо
					var rnd14 = random(100);
					if( rnd14 < 40 ) index = getRandomArbitrary(0, 300);
					else if( rnd14 < 70 ) index = getRandomArbitrary(300, 1000);
					else if( rnd14 < 90 ) index = getRandomArbitrary(1000, 2000);
					else index = getRandomArbitrary(2000, dict.length);
					
					if( index < 0 || index > dict.length-1 ) index = 0;
				}
				
				
                var line = dict[index];
				if( $('#question').data('dictLineQuestion') != "" && $('#question').data('dictLineQuestion') != line ) {
					$('#line6').text( $('#question').data('dictLineQuestion') );
				} else {
					$('#line6').text("");
				}
				$('#question').data('dictLineQuestion', line);
				
				
                $('#text div').css('visibility', 'visible').html('').addClass('empty');
				var eq = line.split('=');
                var ans = eq[1].split(';');
                var pos = random($('#text div').length) + 1;
                $('#question').hide().text(trim(ans[random(ans.length)])).fadeIn().css('visibility', 'visible').data('index', pos).data('line', index);
                $('#text div.line' + pos).text(trim(eq[0]) + ' ').removeClass('empty'); 
                var tword = trim(eq[0]);
                var notin = '|' + index + '|';
                while ($('#text div.empty').length > 0) {
                        var index = rand_dict(notin);
                        if (lang == 'epo') {
                                var word = trim(dict[index].split('=')[0]);
                                var start = index;
                                var tl = tword.substring(tword.length - 1);
                                while (word.substring(word.length - 1) != tl || (notin.indexOf('|' + index + '|') >= 0)) {
                                        index++;
                                        if (index >= dict.length) index = 0;
                                        word = trim(dict[index].split('=')[0]);
                                        if (index == start) break;
                                }
                        }
                        notin = notin + '|' + index + '|';
                        var line = dict[index];
                        var eq = line.split('=');
                        var text = trim(eq[0]);
                        if (text.length > 2*lentextform) {
                                var pos = line.substring(0, 2*lentextform-1).lastIndexOf(' ');
                                if (pos >= 0) {
                                        text = text.substring(0, pos + 1);
                                } else {
                                        text = text.substring(0, 2*lentextform-1);
                                }
                        }
						//$('#text div.empty').eq(0).text(text + '¶').removeClass('empty').
                        $('#text div.empty').eq(0).text(text + ' ').removeClass('empty').data('lineAll', line).data('lineIdx', index);						
                }
        } else if ((type == 'speed') && is_timeend && ($('#text div.empty').length >= 5)) {
                $('#text').removeClass('penalt');
                show_relax();
        } else if ((type == 'speed') && ($('#text div.empty').length >= 5)) {
                $('#question').text('').css('visibility', 'hidden').removeClass('error');
                $('#text div.line4, #text div.line5').html('').addClass('empty').css('visibility', 'hidden');
				var word = '';
				if( strI == 0 || strline == '' ) {
					var index = rand_dict('');
					var words = dict[index].split(' ');
					word = words[ random(words.length) ];
					if (random(10) == 0) word = word + ',';
					else if (random(30) == 0) word = word + '.';
					else if (random(60) == 0) word = word + ':';
					else if (random(60) == 0) word = word + ';';
					else if (random(100) == 0) word = word + '!';
					else if (random(100) == 0) word = word + '?';
					word = word + ' ';
					strline = word;
					strI = strn;
				} else {
					word = strline;
					if(strI > 0) strI--;
				}
				$('#text div.line1, #text div.line2, #text div.line3').removeClass('empty').text(word);
				
        } else if (type == 'speed') {
		}
		else if ((type == 'begin' || type == 'basic') && is_timeend) {
                $('#text').removeClass('penalt');
                show_relax();
        } else if (is_timeend) {
                if ($('#text div.empty').length < 2) {
                        var line = $('#text').data('line') ? $('#text').data('line') : '';
                        $('#text').data('line', $('#text div.line3').text() + $('#text div.line4').text() + $('#text div.line5').text() + line);
                        $('#text div.line3').html('').addClass('empty');
                        $('#text div.line4').html('').addClass('empty');
                        show_relax_text(5);
                }
        } else if (type == 'basic') {				
                $('#question').text('').css('visibility', 'hidden');
                $('#text div').html('').addClass('empty');
                $('#text').removeClass('penalt');
                var line = '';
                var word = '';
				if( strI == 0 || strline == '' ) {
					while (line.length < lentextform) {
							if (word == '') {
									var index = random(dict.length);
									var words = dict[index].split(' ');
									word = words[random(words.length)];
									if (word.length > 8) word = '';
							}
							if (word != '') line = line + word + ' ';
					}
					strline = line;
					strI = strn;
				} else {
					line = strline;
					if(strI > 0) strI--;
				}
				
                line = line.substring(0, line.lastIndexOf(' ', lentextform-1)) + ' ';
                $('#text div.line1').text(line.replace(/ /g, ' ')).removeClass('empty');
        } else if (type == 'begin') {
                $('#question').text('').css('visibility', 'hidden');
                $('#text div').html('').addClass('empty');
                $('#text').removeClass('penalt');
                var line = '';
                var error_indexes = $('#text').data('error_indexes') ? $('#text').data('error_indexes') : [];
                var word_indexes = [];
				
				if( strI == 0 || strline == '' ) {
					while (line.length < lentextform) {
							var index = 0;
							if (error_indexes.length) {
									index = error_indexes[0];
							} else {
									index = random(dict.length);
							}
							var word = dict[ index ];
							if (word != '') {
									
									if (error_indexes.length) {
											error_indexes = error_indexes.slice(1);
											$('#text').addClass('penalt');
									}
									
									word_indexes.push( index );
									line = line + word + ' ';
							}
					}
					strline = line;
					strI = strn;
					//$('#text').data('word_indexes', word_indexes).data('error_indexes', error_indexes);
					$('#text').data('word_indexes', word_indexes);
				} else {
					line = strline;
					if(strI > 0) strI--;
				}
				
                
                line = line.substring(0, line.lastIndexOf(' ', lentextform-1)) + ' ';
                $('#text div.line1').text(line.replace(/ /g, ' ')).removeClass('empty');
        } else {
                $('#question').text('').css('visibility', 'hidden');
                $('#text div.line4, #text div.line5').css('visibility', 'hidden');
                var notin = '';
                var line = '';
                while ($('#text div:empty').length && dict[0]) {
                        line = '';
                        if ($('#text').data('line')) {
                                line = $('#text').data('line');
                                var index_enter = line.indexOf('¶');
                                if (index_enter >= 0) {
                                        $('#text').data('line', line.substring(index_enter + 1));
                                        line = line.substring(0, index_enter);
                                } else {
                                        $('#text').data('line', null);
                                }
                        } else if (href == '#mydict') {
                                var index = $('#text').data('index_line');
                                if (index >= dict.length) index = 0;
                                $('#text').data('index_line', index + 1);
                                line = dict[index];
                        } else if (lang == 'rss') {
                                var index = random(dict.length);
                                line = dict[index];
                                var index_enter = line.indexOf('¶');
                                if (index_enter >= 0) {
                                        $('#text').data('line', line.substring(index_enter + 1));
                                        line = line.substring(0, index_enter);
                                }
                        } else if (type == 'code') {
                                var index = $('#text').data('index') ? $('#text').data('index') - 1 : rand_dict(notin);
                                notin = notin + '|' + index + '|';
                                if (index >= dict.length) index = 0;
                                $('#text').data('index', index + 2);
                                line = dict[index];
                        } else {
                                var index = rand_dict(notin);
                                notin = notin + '|' + index + '|';
                                line = dict[index];
                        }
                        while (line.length > 0) {
                                if (line.length > lentextform) {
                                        var pos = line.substring(0, lentextform-1).lastIndexOf(' ');
                                        if (pos >= 0) {
                                                $('#text div.empty').eq(0).text(line.substring(0, pos + 1)).removeClass('empty');
                                                line = line.substring(pos + 1);
                                        } else {
                                                $('#text div.empty').eq(0).text(line.substring(0, lentextform-1)).removeClass('empty');
                                                line = line.substring(lentextform-1);
                                        }
                                        if (!$('#text div.empty').length) {
                                                $('#text').data('line', line);
                                                line = '';
                                        }
                                } else {
                                        $('#text div.empty').eq(0).text(line + '¶').removeClass('empty');
                                        line = '';
                                }
                        }
                }
        }
        intext_check();
}


function rand_dict(notin) {
        if (!dict.length) return -1;
        var index = random(dict.length);
        var end = index;
        while ((dict[index].length < 5) || (notin.indexOf('|' + index + '|') >= 0)) {
                index++;
                if (index >= dict.length) index = 0;
                if (index == end) break;
        }
        return index;
}


function show_keyboard() {
        var href = $('#refresh').attr('href');
        var lang = href.split('_')[0].substring(1);
        var kbd = href.split('_')[0].substring(1);
        if (!keyboards[kbd]) kbd = '';
        var layout = $.cookie('klavarog_layout_' + kbd);
        if (layout == 'виндовс') layout = 'йцукен';
        $('#layout_sel div.list').html('');
        if (kbd == '') {
                for (kbd in keyboards) {
                        for (keyb in keyboards[kbd]) {
                                if (!layout) layout = keyb;
                                var html = '<div><a href="#' + keyb + '" class="link" onclick="return layout_sel(this);">' + keyb + '</a></div>';
                                $('#layout_sel div.list').append(html);
                        }
                }
        } else {
                for (keyb in keyboards[kbd]) {
                        if (!layout) layout = keyb;
                        var html = '<div><a href="#' + keyb + '" class="link" onclick="return layout_sel(this);">' + keyb + '</a>';
                        if ((lang == 'epo') && (keyb == 'esperanto')) {
                                html = html + '&nbsp;&nbsp;&nbsp;(<a href="http://klava.org/layout/esperanto.zip">setup.exe</a>)';
                        }
                        if ((lang == 'rus') && (keyb == 'скоропи́с')) if ((lang == 'rus') && (keyb == 'рулемак')) if ((lang == 'eng') && (keyb == 'jcuken')) {
                                html = html + '&nbsp;&nbsp;&nbsp;(<a href="http://klava.org/layout/jcuken.zip">setup.exe</a>)';
                        }
                        if ((lang == 'eng') && (keyb == 'jcuken2')) {
                                html = html + '&nbsp;&nbsp;&nbsp;(<a href="http://klava.org/layout/jcuken2.zip">setup.exe</a>)';
                        }
                        html = html + '</div>';
                        $('#layout_sel div.list').append(html);
                }
        }
        draw_keyboard(layout);
}


function draw_keyboard(layout) {
        $('#layout_sel').data('layout', layout);
        var href = $('#refresh').attr('href');
        var lang = href.split('_')[0].substring(1);
        $('#layout a').text(layout);
        var kbd = href.split('_')[0].substring(1);
        if (!keyboards[kbd]) kbd = '';
        $.cookie('klavarog_layout_' + kbd, layout);
        var keyboard = null;
        if (kbd == '') {
                for (kbd in keyboards) {
                        if (keyboards[kbd] && keyboards[kbd][layout]) {
                                keyboard = keyboards[kbd][layout];
                                break;
                        }
                }
        } else {
                keyboard = keyboards[kbd][layout];
        }
        if (!keyboard) {
                $('div.keyboard').hide();
                return;
        }
        if (layout.split('_')[0] == 'catboard') {
                $('#keyboard #standart').hide();
                $('#keyboard #klavarog').show();
                $('#keyboard #klavarog div.line:eq(0) div:not(.blank):not(.sys)').each(function (i) {
                        $(this).html(keyboard[i]);
                });
                $('#keyboard #klavarog div.line:eq(1) div:not(.blank):not(.sys)').each(function (i) {
                        $(this).html(keyboard[i + 13]);
                });
                $('#keyboard #klavarog div.line:eq(2) div:not(.blank):not(.sys)').each(function (i) {
                        $(this).html(keyboard[i + 25]);
                });
                $('#keyboard #klavarog div.line:eq(3) div:not(.blank):not(.sys)').each(function (i) {
                        $(this).html(keyboard[i + 37]);
                });
        } else {
                $('#keyboard #klavarog').hide();
                $('#keyboard #standart').show();
                $('#keyboard #standart div.line:eq(0) div').each(function (i) {
                        if (i < 13) $(this).html(keyboard[i]);
                });
                $('#keyboard #standart div.line:eq(1) div:not(.sys)').each(function (i) {
                        $(this).html(keyboard[i + 13]);
                });
                $('#keyboard #standart div.line:eq(2) div:not(.sys)').each(function (i) {
                        $(this).html(keyboard[i + 26]);
                });
                $('#keyboard #standart div.line:eq(3) div:not(.sys)').each(function (i) {
                        $(this).html(keyboard[i + 37]);
                });
        }
}

function theme_load(nth) {
	$.cookie('klavarog_theme', nth);
	if(nth=="Светлая") {
		$('.theme0').removeClass('dark').addClass('light');
		$('.theme1').removeClass('dark').addClass('light');
		$('.theme2').removeClass('dark').addClass('light');
		$('#theme .link-2').text(nth);
	} else if(nth=="Темная") {
		$('.theme0').removeClass('light').addClass('dark');
		$('.theme1').removeClass('light').addClass('dark');
		$('.theme2').removeClass('light').addClass('dark');
		$('#theme .link-2').text(nth);
	}
}

function strn_set(strSN) {
	$.cookie('klavarog_strn', strSN);
	$('#strn .link-2').text(strSN);
	switch(strSN) {
		case "Без повтора":
			strn=0;
			break;
		case "Повторить":
			strn=1;
			break;
		case "Повтор-2":
			strn=2;
			break;
		case "Повтор-3":
			strn=3;
			break;
		case "Повтор-4":
			strn=4;
			break;
		case "Повтор-5":
			strn=5;
			break;
		case "Повтор-6":
			strn=6;
			break;
		case "Повтор-7":
			strn=7;
			break;
		case "Повтор-8":
			strn=8;
			break;
		case "Повтор-9":
			strn=9;
			break;
		case "Повтор-10":
			strn=10;
			break;
		default:
			strn=1;
			$('#strn .link-2').text('Повторить');
	}
	
	strI = strn;
}
//]]>