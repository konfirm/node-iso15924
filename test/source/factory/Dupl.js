/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Dupl - Duployan shorthand, Duployan stenography', () => {
		const dupl = factory('Dupl');

		it('instances are singletons', (next) => {
			const singleton = factory('Dupl');
			const upper = factory('DUPL');
			const lower = factory('dupl');
			const code = factory.code('Dupl');
			const numeric = factory.numeric('755');
			const number = factory.numeric(755);
			const instance = new ISO15924('Dupl', '755');

			expect(singleton).to.shallow.equal(dupl);
			expect(upper).to.shallow.equal(dupl);
			expect(lower).to.shallow.equal(dupl);
			expect(code).to.shallow.equal(dupl);
			expect(numeric).to.shallow.equal(dupl);
			expect(number).to.shallow.equal(dupl);
			expect(instance).not.to.shallow.equal(dupl);
			expect(instance.code).to.equal(dupl.code);
			expect(instance.numeric).to.equal(dupl.numeric);

			next();
		});

		it('has code "Dupl"', (next) => {
			expect(dupl.code).to.equal('Dupl');

			next();
		});

		it('has numeric "755"', (next) => {
			expect(dupl.numeric).to.equal('755');

			next();
		});

		it('implements toString', (next) => {
			expect(dupl.toString).to.be.function();
			expect(dupl.toString()).to.equal('Dupl');
			expect(String(dupl)).to.equal('Dupl');
			expect(0 + dupl).to.equal('0Dupl');
			expect('code:' + dupl).to.equal('code:Dupl');

			next();
		});

		it('implements toJSON', (next) => {
			expect(dupl.toJSON).to.be.function();
			expect(dupl.toJSON()).to.equal('Dupl');
			expect(JSON.stringify(dupl)).to.equal('"Dupl"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(dupl.valueOf).to.be.function();
			expect(dupl.valueOf()).to.equal(755);
			expect(Number(dupl)).to.equal(755);
			expect(+dupl).to.equal(755);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(dupl.valueOf).to.be.function();
			expect(dupl.valueOf()).to.equal(755);
			expect(Number(dupl)).to.equal(755);
			expect(+dupl).to.equal(755);

			expect(0 + dupl).to.equal('0Dupl');
			expect(String(dupl)).to.equal('Dupl');

			next();
		});
	});
});
