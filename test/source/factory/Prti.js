/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Prti - Inscriptional Parthian', () => {
		const prti = factory('Prti');

		it('instances are singletons', (next) => {
			const singleton = factory('Prti');
			const upper = factory('PRTI');
			const lower = factory('prti');
			const code = factory.code('Prti');
			const numeric = factory.numeric('130');
			const number = factory.numeric(130);
			const instance = new ISO15924('Prti', '130');

			expect(singleton).to.shallow.equal(prti);
			expect(upper).to.shallow.equal(prti);
			expect(lower).to.shallow.equal(prti);
			expect(code).to.shallow.equal(prti);
			expect(numeric).to.shallow.equal(prti);
			expect(number).to.shallow.equal(prti);
			expect(instance).not.to.shallow.equal(prti);
			expect(instance.code).to.equal(prti.code);
			expect(instance.numeric).to.equal(prti.numeric);

			next();
		});

		it('has code "Prti"', (next) => {
			expect(prti.code).to.equal('Prti');

			next();
		});

		it('has numeric "130"', (next) => {
			expect(prti.numeric).to.equal('130');

			next();
		});

		it('implements toString', (next) => {
			expect(prti.toString).to.be.function();
			expect(prti.toString()).to.equal('Prti');
			expect(String(prti)).to.equal('Prti');
			expect(0 + prti).to.equal('0Prti');
			expect('code:' + prti).to.equal('code:Prti');

			next();
		});

		it('implements toJSON', (next) => {
			expect(prti.toJSON).to.be.function();
			expect(prti.toJSON()).to.equal('Prti');
			expect(JSON.stringify(prti)).to.equal('"Prti"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(prti.valueOf).to.be.function();
			expect(prti.valueOf()).to.equal(130);
			expect(Number(prti)).to.equal(130);
			expect(+prti).to.equal(130);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(prti.valueOf).to.be.function();
			expect(prti.valueOf()).to.equal(130);
			expect(Number(prti)).to.equal(130);
			expect(+prti).to.equal(130);

			expect(0 + prti).to.equal('0Prti');
			expect(String(prti)).to.equal('Prti');

			next();
		});
	});
});
