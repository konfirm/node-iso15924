/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hrkt - Japanese syllabaries (alias for Hiragana + Katakana)', () => {
		const hrkt = factory('Hrkt');

		it('instances are singletons', (next) => {
			const singleton = factory('Hrkt');
			const upper = factory('HRKT');
			const lower = factory('hrkt');
			const code = factory.code('Hrkt');
			const numeric = factory.numeric('412');
			const number = factory.numeric(412);
			const instance = new ISO15924('Hrkt', '412');

			expect(singleton).to.shallow.equal(hrkt);
			expect(upper).to.shallow.equal(hrkt);
			expect(lower).to.shallow.equal(hrkt);
			expect(code).to.shallow.equal(hrkt);
			expect(numeric).to.shallow.equal(hrkt);
			expect(number).to.shallow.equal(hrkt);
			expect(instance).not.to.shallow.equal(hrkt);
			expect(instance.code).to.equal(hrkt.code);
			expect(instance.numeric).to.equal(hrkt.numeric);

			next();
		});

		it('has code "Hrkt"', (next) => {
			expect(hrkt.code).to.equal('Hrkt');

			next();
		});

		it('has numeric "412"', (next) => {
			expect(hrkt.numeric).to.equal('412');

			next();
		});

		it('implements toString', (next) => {
			expect(hrkt.toString).to.be.function();
			expect(hrkt.toString()).to.equal('Hrkt');
			expect(String(hrkt)).to.equal('Hrkt');
			expect(0 + hrkt).to.equal('0Hrkt');
			expect('code:' + hrkt).to.equal('code:Hrkt');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hrkt.toJSON).to.be.function();
			expect(hrkt.toJSON()).to.equal('Hrkt');
			expect(JSON.stringify(hrkt)).to.equal('"Hrkt"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hrkt.valueOf).to.be.function();
			expect(hrkt.valueOf()).to.equal(412);
			expect(Number(hrkt)).to.equal(412);
			expect(+hrkt).to.equal(412);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hrkt.valueOf).to.be.function();
			expect(hrkt.valueOf()).to.equal(412);
			expect(Number(hrkt)).to.equal(412);
			expect(+hrkt).to.equal(412);

			expect(0 + hrkt).to.equal('0Hrkt');
			expect(String(hrkt)).to.equal('Hrkt');

			next();
		});
	});
});
