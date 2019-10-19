/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hant - Han (Traditional variant)', () => {
		const hant = factory('Hant');

		it('instances are singletons', (next) => {
			const singleton = factory('Hant');
			const upper = factory('HANT');
			const lower = factory('hant');
			const code = factory.code('Hant');
			const numeric = factory.numeric('502');
			const number = factory.numeric(502);
			const instance = new ISO15924('Hant', '502');

			expect(singleton).to.shallow.equal(hant);
			expect(upper).to.shallow.equal(hant);
			expect(lower).to.shallow.equal(hant);
			expect(code).to.shallow.equal(hant);
			expect(numeric).to.shallow.equal(hant);
			expect(number).to.shallow.equal(hant);
			expect(instance).not.to.shallow.equal(hant);
			expect(instance.code).to.equal(hant.code);
			expect(instance.numeric).to.equal(hant.numeric);

			next();
		});

		it('has code "Hant"', (next) => {
			expect(hant.code).to.equal('Hant');

			next();
		});

		it('has numeric "502"', (next) => {
			expect(hant.numeric).to.equal('502');

			next();
		});

		it('implements toString', (next) => {
			expect(hant.toString).to.be.function();
			expect(hant.toString()).to.equal('Hant');
			expect(String(hant)).to.equal('Hant');
			expect(0 + hant).to.equal('0Hant');
			expect('code:' + hant).to.equal('code:Hant');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hant.toJSON).to.be.function();
			expect(hant.toJSON()).to.equal('Hant');
			expect(JSON.stringify(hant)).to.equal('"Hant"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hant.valueOf).to.be.function();
			expect(hant.valueOf()).to.equal(502);
			expect(Number(hant)).to.equal(502);
			expect(+hant).to.equal(502);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hant.valueOf).to.be.function();
			expect(hant.valueOf()).to.equal(502);
			expect(Number(hant)).to.equal(502);
			expect(+hant).to.equal(502);

			expect(0 + hant).to.equal('0Hant');
			expect(String(hant)).to.equal('Hant');

			next();
		});
	});
});
