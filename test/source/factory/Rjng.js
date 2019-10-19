/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Rjng - Rejang (Redjang, Kaganga)', () => {
		const rjng = factory('Rjng');

		it('instances are singletons', (next) => {
			const singleton = factory('Rjng');
			const upper = factory('RJNG');
			const lower = factory('rjng');
			const code = factory.code('Rjng');
			const numeric = factory.numeric('363');
			const number = factory.numeric(363);
			const instance = new ISO15924('Rjng', '363');

			expect(singleton).to.shallow.equal(rjng);
			expect(upper).to.shallow.equal(rjng);
			expect(lower).to.shallow.equal(rjng);
			expect(code).to.shallow.equal(rjng);
			expect(numeric).to.shallow.equal(rjng);
			expect(number).to.shallow.equal(rjng);
			expect(instance).not.to.shallow.equal(rjng);
			expect(instance.code).to.equal(rjng.code);
			expect(instance.numeric).to.equal(rjng.numeric);

			next();
		});

		it('has code "Rjng"', (next) => {
			expect(rjng.code).to.equal('Rjng');

			next();
		});

		it('has numeric "363"', (next) => {
			expect(rjng.numeric).to.equal('363');

			next();
		});

		it('implements toString', (next) => {
			expect(rjng.toString).to.be.function();
			expect(rjng.toString()).to.equal('Rjng');
			expect(String(rjng)).to.equal('Rjng');
			expect(0 + rjng).to.equal('0Rjng');
			expect('code:' + rjng).to.equal('code:Rjng');

			next();
		});

		it('implements toJSON', (next) => {
			expect(rjng.toJSON).to.be.function();
			expect(rjng.toJSON()).to.equal('Rjng');
			expect(JSON.stringify(rjng)).to.equal('"Rjng"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(rjng.valueOf).to.be.function();
			expect(rjng.valueOf()).to.equal(363);
			expect(Number(rjng)).to.equal(363);
			expect(+rjng).to.equal(363);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(rjng.valueOf).to.be.function();
			expect(rjng.valueOf()).to.equal(363);
			expect(Number(rjng)).to.equal(363);
			expect(+rjng).to.equal(363);

			expect(0 + rjng).to.equal('0Rjng');
			expect(String(rjng)).to.equal('Rjng');

			next();
		});
	});
});
