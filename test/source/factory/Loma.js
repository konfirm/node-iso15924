/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Loma - Loma', () => {
		const loma = factory('Loma');

		it('instances are singletons', (next) => {
			const singleton = factory('Loma');
			const upper = factory('LOMA');
			const lower = factory('loma');
			const code = factory.code('Loma');
			const numeric = factory.numeric('437');
			const number = factory.numeric(437);
			const instance = new ISO15924('Loma', '437');

			expect(singleton).to.shallow.equal(loma);
			expect(upper).to.shallow.equal(loma);
			expect(lower).to.shallow.equal(loma);
			expect(code).to.shallow.equal(loma);
			expect(numeric).to.shallow.equal(loma);
			expect(number).to.shallow.equal(loma);
			expect(instance).not.to.shallow.equal(loma);
			expect(instance.code).to.equal(loma.code);
			expect(instance.numeric).to.equal(loma.numeric);

			next();
		});

		it('has code "Loma"', (next) => {
			expect(loma.code).to.equal('Loma');

			next();
		});

		it('has numeric "437"', (next) => {
			expect(loma.numeric).to.equal('437');

			next();
		});

		it('implements toString', (next) => {
			expect(loma.toString).to.be.function();
			expect(loma.toString()).to.equal('Loma');
			expect(String(loma)).to.equal('Loma');
			expect(0 + loma).to.equal('0Loma');
			expect('code:' + loma).to.equal('code:Loma');

			next();
		});

		it('implements toJSON', (next) => {
			expect(loma.toJSON).to.be.function();
			expect(loma.toJSON()).to.equal('Loma');
			expect(JSON.stringify(loma)).to.equal('"Loma"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(loma.valueOf).to.be.function();
			expect(loma.valueOf()).to.equal(437);
			expect(Number(loma)).to.equal(437);
			expect(+loma).to.equal(437);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(loma.valueOf).to.be.function();
			expect(loma.valueOf()).to.equal(437);
			expect(Number(loma)).to.equal(437);
			expect(+loma).to.equal(437);

			expect(0 + loma).to.equal('0Loma');
			expect(String(loma)).to.equal('Loma');

			next();
		});
	});
});
