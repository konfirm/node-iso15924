/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Gujr - Gujarati', () => {
		const gujr = factory('Gujr');

		it('instances are singletons', (next) => {
			const singleton = factory('Gujr');
			const upper = factory('GUJR');
			const lower = factory('gujr');
			const code = factory.code('Gujr');
			const numeric = factory.numeric('320');
			const number = factory.numeric(320);
			const instance = new ISO15924('Gujr', '320');

			expect(singleton).to.shallow.equal(gujr);
			expect(upper).to.shallow.equal(gujr);
			expect(lower).to.shallow.equal(gujr);
			expect(code).to.shallow.equal(gujr);
			expect(numeric).to.shallow.equal(gujr);
			expect(number).to.shallow.equal(gujr);
			expect(instance).not.to.shallow.equal(gujr);
			expect(instance.code).to.equal(gujr.code);
			expect(instance.numeric).to.equal(gujr.numeric);

			next();
		});

		it('has code "Gujr"', (next) => {
			expect(gujr.code).to.equal('Gujr');

			next();
		});

		it('has numeric "320"', (next) => {
			expect(gujr.numeric).to.equal('320');

			next();
		});

		it('implements toString', (next) => {
			expect(gujr.toString).to.be.function();
			expect(gujr.toString()).to.equal('Gujr');
			expect(String(gujr)).to.equal('Gujr');
			expect(0 + gujr).to.equal('0Gujr');
			expect('code:' + gujr).to.equal('code:Gujr');

			next();
		});

		it('implements toJSON', (next) => {
			expect(gujr.toJSON).to.be.function();
			expect(gujr.toJSON()).to.equal('Gujr');
			expect(JSON.stringify(gujr)).to.equal('"Gujr"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(gujr.valueOf).to.be.function();
			expect(gujr.valueOf()).to.equal(320);
			expect(Number(gujr)).to.equal(320);
			expect(+gujr).to.equal(320);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(gujr.valueOf).to.be.function();
			expect(gujr.valueOf()).to.equal(320);
			expect(Number(gujr)).to.equal(320);
			expect(+gujr).to.equal(320);

			expect(0 + gujr).to.equal('0Gujr');
			expect(String(gujr)).to.equal('Gujr');

			next();
		});
	});
});
