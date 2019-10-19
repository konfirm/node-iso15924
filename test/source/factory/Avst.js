/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Avst - Avestan', () => {
		const avst = factory('Avst');

		it('instances are singletons', (next) => {
			const singleton = factory('Avst');
			const upper = factory('AVST');
			const lower = factory('avst');
			const code = factory.code('Avst');
			const numeric = factory.numeric('134');
			const number = factory.numeric(134);
			const instance = new ISO15924('Avst', '134');

			expect(singleton).to.shallow.equal(avst);
			expect(upper).to.shallow.equal(avst);
			expect(lower).to.shallow.equal(avst);
			expect(code).to.shallow.equal(avst);
			expect(numeric).to.shallow.equal(avst);
			expect(number).to.shallow.equal(avst);
			expect(instance).not.to.shallow.equal(avst);
			expect(instance.code).to.equal(avst.code);
			expect(instance.numeric).to.equal(avst.numeric);

			next();
		});

		it('has code "Avst"', (next) => {
			expect(avst.code).to.equal('Avst');

			next();
		});

		it('has numeric "134"', (next) => {
			expect(avst.numeric).to.equal('134');

			next();
		});

		it('implements toString', (next) => {
			expect(avst.toString).to.be.function();
			expect(avst.toString()).to.equal('Avst');
			expect(String(avst)).to.equal('Avst');
			expect(0 + avst).to.equal('0Avst');
			expect('code:' + avst).to.equal('code:Avst');

			next();
		});

		it('implements toJSON', (next) => {
			expect(avst.toJSON).to.be.function();
			expect(avst.toJSON()).to.equal('Avst');
			expect(JSON.stringify(avst)).to.equal('"Avst"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(avst.valueOf).to.be.function();
			expect(avst.valueOf()).to.equal(134);
			expect(Number(avst)).to.equal(134);
			expect(+avst).to.equal(134);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(avst.valueOf).to.be.function();
			expect(avst.valueOf()).to.equal(134);
			expect(Number(avst)).to.equal(134);
			expect(+avst).to.equal(134);

			expect(0 + avst).to.equal('0Avst');
			expect(String(avst)).to.equal('Avst');

			next();
		});
	});
});
