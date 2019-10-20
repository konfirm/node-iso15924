const ISO15924 = require('./ValueObject/ISO15924.js');
const UNDEF = (() => {})();
const cache = new Map();
const collection = {
	Adlm: '166',  //  Adlam
	Afak: '439',  //  Afaka
	Aghb: '239',  //  Caucasian Albanian
	Ahom: '338',  //  Ahom, Tai Ahom
	Arab: '160',  //  Arabic
	Aran: '161',  //  Arabic (Nastaliq variant)
	Armi: '124',  //  Imperial Aramaic
	Armn: '230',  //  Armenian
	Avst: '134',  //  Avestan
	Bali: '360',  //  Balinese
	Bamu: '435',  //  Bamum
	Bass: '259',  //  Bassa Vah
	Batk: '365',  //  Batak
	Beng: '325',  //  Bengali (Bangla)
	Bhks: '334',  //  Bhaiksuki
	Blis: '550',  //  Blissymbols
	Bopo: '285',  //  Bopomofo
	Brah: '300',  //  Brahmi
	Brai: '570',  //  Braille
	Bugi: '367',  //  Buginese
	Buhd: '372',  //  Buhid
	Cakm: '349',  //  Chakma
	Cans: '440',  //  Unified Canadian Aboriginal Syllabics
	Cari: '201',  //  Carian
	Cham: '358',  //  Cham
	Cher: '445',  //  Cherokee
	Chrs: '109',  //  Chorasmian
	Cirt: '291',  //  Cirth
	Copt: '204',  //  Coptic
	Cpmn: '402',  //  Cypro-Minoan
	Cprt: '403',  //  Cypriot syllabary
	Cyrl: '220',  //  Cyrillic
	Cyrs: '221',  //  Cyrillic (Old Church Slavonic variant)
	Deva: '315',  //  Devanagari (Nagari)
	Diak: '342',  //  Dives Akuru
	Dogr: '328',  //  Dogra
	Dsrt: '250',  //  Deseret (Mormon)
	Dupl: '755',  //  Duployan shorthand, Duployan stenography
	Egyd: '070',  //  Egyptian demotic
	Egyh: '060',  //  Egyptian hieratic
	Egyp: '050',  //  Egyptian hieroglyphs
	Elba: '226',  //  Elbasan
	Elym: '128',  //  Elymaic
	Ethi: '430',  //  Ethiopic (Geʻez)
	Geok: '241',  //  Khutsuri (Asomtavruli and Nuskhuri)
	Geor: '240',  //  Georgian (Mkhedruli and Mtavruli)
	Glag: '225',  //  Glagolitic
	Gong: '312',  //  Gunjala Gondi
	Gonm: '313',  //  Masaram Gondi
	Goth: '206',  //  Gothic
	Gran: '343',  //  Grantha
	Grek: '200',  //  Greek
	Gujr: '320',  //  Gujarati
	Guru: '310',  //  Gurmukhi
	Hanb: '503',  //  Han with Bopomofo (alias for Han + Bopomofo)
	Hang: '286',  //  Hangul (Hangŭl, Hangeul)
	Hani: '500',  //  Han (Hanzi, Kanji, Hanja)
	Hano: '371',  //  Hanunoo (Hanunóo)
	Hans: '501',  //  Han (Simplified variant)
	Hant: '502',  //  Han (Traditional variant)
	Hatr: '127',  //  Hatran
	Hebr: '125',  //  Hebrew
	Hira: '410',  //  Hiragana
	Hluw: '080',  //  Anatolian Hieroglyphs (Luwian Hieroglyphs, Hittite Hieroglyphs)
	Hmng: '450',  //  Pahawh Hmong
	Hmnp: '451',  //  Nyiakeng Puachue Hmong
	Hrkt: '412',  //  Japanese syllabaries (alias for Hiragana + Katakana)
	Hung: '176',  //  Old Hungarian (Hungarian Runic)
	Inds: '610',  //  Indus (Harappan)
	Ital: '210',  //  Old Italic (Etruscan, Oscan, etc.)
	Jamo: '284',  //  Jamo (alias for Jamo subset of Hangul)
	Java: '361',  //  Javanese
	Jpan: '413',  //  Japanese (alias for Han + Hiragana + Katakana)
	Jurc: '510',  //  Jurchen
	Kali: '357',  //  Kayah Li
	Kana: '411',  //  Katakana
	Khar: '305',  //  Kharoshthi
	Khmr: '355',  //  Khmer
	Khoj: '322',  //  Khojki
	Kitl: '505',  //  Khitan large script
	Kits: '288',  //  Khitan small script
	Knda: '345',  //  Kannada
	Kore: '287',  //  Korean (alias for Hangul + Han)
	Kpel: '436',  //  Kpelle
	Kthi: '317',  //  Kaithi
	Lana: '351',  //  Tai Tham (Lanna)
	Laoo: '356',  //  Lao
	Latf: '217',  //  Latin (Fraktur variant)
	Latg: '216',  //  Latin (Gaelic variant)
	Latn: '215',  //  Latin
	Leke: '364',  //  Leke
	Lepc: '335',  //  Lepcha (Róng)
	Limb: '336',  //  Limbu
	Lina: '400',  //  Linear A
	Linb: '401',  //  Linear B
	Lisu: '399',  //  Lisu (Fraser)
	Loma: '437',  //  Loma
	Lyci: '202',  //  Lycian
	Lydi: '116',  //  Lydian
	Mahj: '314',  //  Mahajani
	Maka: '366',  //  Makasar
	Mand: '140',  //  Mandaic, Mandaean
	Mani: '139',  //  Manichaean
	Marc: '332',  //  Marchen
	Maya: '090',  //  Mayan hieroglyphs
	Medf: '265',  //  Medefaidrin (Oberi Okaime, Oberi Ɔkaimɛ)
	Mend: '438',  //  Mende Kikakui
	Merc: '101',  //  Meroitic Cursive
	Mero: '100',  //  Meroitic Hieroglyphs
	Mlym: '347',  //  Malayalam
	Modi: '324',  //  Modi, Moḍī
	Mong: '145',  //  Mongolian
	Moon: '218',  //  Moon (Moon code, Moon script, Moon type)
	Mroo: '264',  //  Mro, Mru
	Mtei: '337',  //  Meitei Mayek (Meithei, Meetei)
	Mult: '323',  //  Multani
	Mymr: '350',  //  Myanmar (Burmese)
	Nand: '311',  //  Nandinagari
	Narb: '106',  //  Old North Arabian (Ancient North Arabian)
	Nbat: '159',  //  Nabataean
	Newa: '333',  //  Newa, Newar, Newari, Nepāla lipi
	Nkdb: '085',  //  Naxi Dongba (na²¹ɕi³³ to³³ba²¹, Nakhi Tomba)
	Nkgb: '420',  //  Naxi Geba (na²¹ɕi³³ gʌ²¹ba²¹, &#x27;Na-&#x27;Khi ²Ggŏ-¹baw, Nakhi Geba)
	Nkoo: '165',  //  N’Ko
	Nshu: '499',  //  Nüshu
	Ogam: '212',  //  Ogham
	Olck: '261',  //  Ol Chiki (Ol Cemet’, Ol, Santali)
	Orkh: '175',  //  Old Turkic, Orkhon Runic
	Orya: '327',  //  Oriya (Odia)
	Osge: '219',  //  Osage
	Osma: '260',  //  Osmanya
	Palm: '126',  //  Palmyrene
	Pauc: '263',  //  Pau Cin Hau
	Perm: '227',  //  Old Permic
	Phag: '331',  //  Phags-pa
	Phli: '131',  //  Inscriptional Pahlavi
	Phlp: '132',  //  Psalter Pahlavi
	Phlv: '133',  //  Book Pahlavi
	Phnx: '115',  //  Phoenician
	Piqd: '293',  //  Klingon (KLI pIqaD)
	Plrd: '282',  //  Miao (Pollard)
	Prti: '130',  //  Inscriptional Parthian
	Qaaa: '900',  //  Reserved for private use (start)
	Qaab: '901',  //  Codes reserved for private use
	Qaac: '902',  //  Codes reserved for private use
	Qaad: '903',  //  Codes reserved for private use
	Qaae: '904',  //  Codes reserved for private use
	Qaaf: '905',  //  Codes reserved for private use
	Qaag: '906',  //  Codes reserved for private use
	Qaah: '907',  //  Codes reserved for private use
	Qaai: '908',  //  Codes reserved for private use
	Qaaj: '909',  //  Codes reserved for private use
	Qaak: '910',  //  Codes reserved for private use
	Qaal: '911',  //  Codes reserved for private use
	Qaam: '912',  //  Codes reserved for private use
	Qaan: '913',  //  Codes reserved for private use
	Qaao: '914',  //  Codes reserved for private use
	Qaap: '915',  //  Codes reserved for private use
	Qaaq: '916',  //  Codes reserved for private use
	Qaar: '917',  //  Codes reserved for private use
	Qaas: '918',  //  Codes reserved for private use
	Qaat: '919',  //  Codes reserved for private use
	Qaau: '920',  //  Codes reserved for private use
	Qaav: '921',  //  Codes reserved for private use
	Qaaw: '922',  //  Codes reserved for private use
	Qaax: '923',  //  Codes reserved for private use
	Qaay: '924',  //  Codes reserved for private use
	Qaaz: '925',  //  Codes reserved for private use
	Qaba: '926',  //  Codes reserved for private use
	Qabb: '927',  //  Codes reserved for private use
	Qabc: '928',  //  Codes reserved for private use
	Qabd: '929',  //  Codes reserved for private use
	Qabe: '930',  //  Codes reserved for private use
	Qabf: '931',  //  Codes reserved for private use
	Qabg: '932',  //  Codes reserved for private use
	Qabh: '933',  //  Codes reserved for private use
	Qabi: '934',  //  Codes reserved for private use
	Qabj: '935',  //  Codes reserved for private use
	Qabk: '936',  //  Codes reserved for private use
	Qabl: '937',  //  Codes reserved for private use
	Qabm: '938',  //  Codes reserved for private use
	Qabn: '939',  //  Codes reserved for private use
	Qabo: '940',  //  Codes reserved for private use
	Qabp: '941',  //  Codes reserved for private use
	Qabq: '942',  //  Codes reserved for private use
	Qabr: '943',  //  Codes reserved for private use
	Qabs: '944',  //  Codes reserved for private use
	Qabt: '945',  //  Codes reserved for private use
	Qabu: '946',  //  Codes reserved for private use
	Qabv: '947',  //  Codes reserved for private use
	Qabw: '948',  //  Codes reserved for private use
	Qabx: '949',  //  Reserved for private use (end)
	Rjng: '363',  //  Rejang (Redjang, Kaganga)
	Rohg: '167',  //  Hanifi Rohingya
	Root: UNDEF,  //  Reserved for the language-neutral base of the CLDR locale tree
	Roro: '620',  //  Rongorongo
	Runr: '211',  //  Runic
	Samr: '123',  //  Samaritan
	Sara: '292',  //  Sarati
	Sarb: '105',  //  Old South Arabian
	Saur: '344',  //  Saurashtra
	Sgnw: '095',  //  SignWriting
	Shaw: '281',  //  Shavian (Shaw)
	Shrd: '319',  //  Sharada, Śāradā
	Shui: '530',  //  Shuishu
	Sidd: '302',  //  Siddham, Siddhaṃ, Siddhamātṛkā
	Sind: '318',  //  Khudawadi, Sindhi
	Sinh: '348',  //  Sinhala
	Sogd: '141',  //  Sogdian
	Sogo: '142',  //  Old Sogdian
	Sora: '398',  //  Sora Sompeng
	Soyo: '329',  //  Soyombo
	Sund: '362',  //  Sundanese
	Sylo: '316',  //  Syloti Nagri
	Syrc: '135',  //  Syriac
	Syre: '138',  //  Syriac (Estrangelo variant)
	Syrj: '137',  //  Syriac (Western variant)
	Syrn: '136',  //  Syriac (Eastern variant)
	Tagb: '373',  //  Tagbanwa
	Takr: '321',  //  Takri, Ṭākrī, Ṭāṅkrī
	Tale: '353',  //  Tai Le
	Talu: '354',  //  New Tai Lue
	Taml: '346',  //  Tamil
	Tang: '520',  //  Tangut
	Tavt: '359',  //  Tai Viet
	Telu: '340',  //  Telugu
	Teng: '290',  //  Tengwar
	Tfng: '120',  //  Tifinagh (Berber)
	Tglg: '370',  //  Tagalog (Baybayin, Alibata)
	Thaa: '170',  //  Thaana
	Thai: '352',  //  Thai
	Tibt: '330',  //  Tibetan
	Tirh: '326',  //  Tirhuta
	True: UNDEF,  //  Reserved for the boolean value true
	Ugar: '040',  //  Ugaritic
	Vaii: '470',  //  Vai
	Visp: '280',  //  Visible Speech
	Wara: '262',  //  Warang Citi (Varang Kshiti)
	Wcho: '283',  //  Wancho
	Wole: '480',  //  Woleai
	Xpeo: '030',  //  Old Persian
	Xsux: '020',  //  Cuneiform, Sumero-Akkadian
	Yezi: '192',  //  Yezidi
	Yiii: '460',  //  Yi
	Zanb: '339',  //  Zanabazar Square (Zanabazarin Dörböljin Useg, Xewtee Dörböljin Bicig, Horizontal Square Script)
	Zinh: '994',  //  Code for inherited script
	Zmth: '995',  //  Mathematical notation
	Zsye: '993',  //  Symbols (Emoji variant)
	Zsym: '996',  //  Symbols
	Zxxx: '997',  //  Code for unwritten documents
	Zyyy: '998',  //  Code for undetermined script
	Zzzz: '999',  //  Code for uncoded script
};


/**
 * Handle unknown normalized codes
 *
 * @param {string} normalized
 * @throws Error
 */
function unknown(normalized) {
	throw new Error(`Unknown ISO15924 code "${normalized}"`);
}

/**
 * Factory to create singleton instances based on the ISO15924 code
 *
 * @param {*} code
 * @return {ISO15924} instance
 */
function byCode(code) {
	const string = String(code);
	const normal = string[0].toUpperCase() + string.slice(1, 4).toLowerCase();

	if (!cache.has(normal)) {
		if (!(normal in collection)) {
			unknown(normal);
		}

		const { [normal]: numeric } = collection;

		cache.set(code, new ISO15924(normal, numeric));
	}

	return cache.get(normal);
}

/**
 * Factory to create singleton instanced based on the ISO15924 numeric code
 *
 * @param {string|number} code
 * @return {ISO15924} instance
 */
function byNumeric(numeric = '') {
	const string = String(numeric);
	const normal = `000${numeric}`.slice(-Math.max(3, string.length));
	const [code] = Object.keys(collection).filter(
		(key) => collection[key] === normal
	);

	if (!code) {
		unknown(normal);
	}

	return byCode(code);
}

/**
 * The exported function, with additional properties
 */
function factory(value) {
	return byCode(value);
}
//  Attache the ISO15924 class as member
factory.ISO15924 = ISO15924;
//  Attache the byCode function as member
factory.code = byCode;
//  Attache the byCode function as member
factory.numeric = byNumeric;

module.exports = factory;
