/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Zsym - Symbols', () => {
		const zsym = factory('Zsym');

		it('instances are singletons', (next) => {
			const singleton = factory('Zsym');
			const upper = factory('ZSYM');
			const lower = factory('zsym');
			const code = factory.code('Zsym');
			const numeric = factory.numeric('996');
			const number = factory.numeric(996);
			const instance = new ISO15924('Zsym', '996');

			expect(singleton).to.shallow.equal(zsym);
			expect(upper).to.shallow.equal(zsym);
			expect(lower).to.shallow.equal(zsym);
			expect(code).to.shallow.equal(zsym);
			expect(numeric).to.shallow.equal(zsym);
			expect(number).to.shallow.equal(zsym);
			expect(instance).not.to.shallow.equal(zsym);
			expect(instance.code).to.equal(zsym.code);
			expect(instance.numeric).to.equal(zsym.numeric);

			next();
		});

		it('has code "Zsym"', (next) => {
			expect(zsym.code).to.equal('Zsym');

			next();
		});

		it('has numeric "996"', (next) => {
			expect(zsym.numeric).to.equal('996');

			next();
		});

		it('implements toString', (next) => {
			expect(zsym.toString).to.be.function();
			expect(zsym.toString()).to.equal('Zsym');
			expect(String(zsym)).to.equal('Zsym');
			expect(0 + zsym).to.equal('0Zsym');
			expect('code:' + zsym).to.equal('code:Zsym');

			next();
		});

		it('implements toJSON', (next) => {
			expect(zsym.toJSON).to.be.function();
			expect(zsym.toJSON()).to.equal('Zsym');
			expect(JSON.stringify(zsym)).to.equal('"Zsym"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(zsym.valueOf).to.be.function();
			expect(zsym.valueOf()).to.equal(996);
			expect(Number(zsym)).to.equal(996);
			expect(+zsym).to.equal(996);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(zsym.valueOf).to.be.function();
			expect(zsym.valueOf()).to.equal(996);
			expect(Number(zsym)).to.equal(996);
			expect(+zsym).to.equal(996);

			expect(0 + zsym).to.equal('0Zsym');
			expect(String(zsym)).to.equal('Zsym');

			next();
		});
	});
});
