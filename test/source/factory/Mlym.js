/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Mlym - Malayalam', () => {
		const mlym = factory('Mlym');

		it('instances are singletons', (next) => {
			const singleton = factory('Mlym');
			const upper = factory('MLYM');
			const lower = factory('mlym');
			const code = factory.code('Mlym');
			const numeric = factory.numeric('347');
			const number = factory.numeric(347);
			const instance = new ISO15924('Mlym', '347');

			expect(singleton).to.shallow.equal(mlym);
			expect(upper).to.shallow.equal(mlym);
			expect(lower).to.shallow.equal(mlym);
			expect(code).to.shallow.equal(mlym);
			expect(numeric).to.shallow.equal(mlym);
			expect(number).to.shallow.equal(mlym);
			expect(instance).not.to.shallow.equal(mlym);
			expect(instance.code).to.equal(mlym.code);
			expect(instance.numeric).to.equal(mlym.numeric);

			next();
		});

		it('has code "Mlym"', (next) => {
			expect(mlym.code).to.equal('Mlym');

			next();
		});

		it('has numeric "347"', (next) => {
			expect(mlym.numeric).to.equal('347');

			next();
		});

		it('implements toString', (next) => {
			expect(mlym.toString).to.be.function();
			expect(mlym.toString()).to.equal('Mlym');
			expect(String(mlym)).to.equal('Mlym');
			expect(0 + mlym).to.equal('0Mlym');
			expect('code:' + mlym).to.equal('code:Mlym');

			next();
		});

		it('implements toJSON', (next) => {
			expect(mlym.toJSON).to.be.function();
			expect(mlym.toJSON()).to.equal('Mlym');
			expect(JSON.stringify(mlym)).to.equal('"Mlym"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(mlym.valueOf).to.be.function();
			expect(mlym.valueOf()).to.equal(347);
			expect(Number(mlym)).to.equal(347);
			expect(+mlym).to.equal(347);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(mlym.valueOf).to.be.function();
			expect(mlym.valueOf()).to.equal(347);
			expect(Number(mlym)).to.equal(347);
			expect(+mlym).to.equal(347);

			expect(0 + mlym).to.equal('0Mlym');
			expect(String(mlym)).to.equal('Mlym');

			next();
		});
	});
});
