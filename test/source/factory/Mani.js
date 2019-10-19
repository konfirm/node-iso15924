/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Mani - Manichaean', () => {
		const mani = factory('Mani');

		it('instances are singletons', (next) => {
			const singleton = factory('Mani');
			const upper = factory('MANI');
			const lower = factory('mani');
			const code = factory.code('Mani');
			const numeric = factory.numeric('139');
			const number = factory.numeric(139);
			const instance = new ISO15924('Mani', '139');

			expect(singleton).to.shallow.equal(mani);
			expect(upper).to.shallow.equal(mani);
			expect(lower).to.shallow.equal(mani);
			expect(code).to.shallow.equal(mani);
			expect(numeric).to.shallow.equal(mani);
			expect(number).to.shallow.equal(mani);
			expect(instance).not.to.shallow.equal(mani);
			expect(instance.code).to.equal(mani.code);
			expect(instance.numeric).to.equal(mani.numeric);

			next();
		});

		it('has code "Mani"', (next) => {
			expect(mani.code).to.equal('Mani');

			next();
		});

		it('has numeric "139"', (next) => {
			expect(mani.numeric).to.equal('139');

			next();
		});

		it('implements toString', (next) => {
			expect(mani.toString).to.be.function();
			expect(mani.toString()).to.equal('Mani');
			expect(String(mani)).to.equal('Mani');
			expect(0 + mani).to.equal('0Mani');
			expect('code:' + mani).to.equal('code:Mani');

			next();
		});

		it('implements toJSON', (next) => {
			expect(mani.toJSON).to.be.function();
			expect(mani.toJSON()).to.equal('Mani');
			expect(JSON.stringify(mani)).to.equal('"Mani"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(mani.valueOf).to.be.function();
			expect(mani.valueOf()).to.equal(139);
			expect(Number(mani)).to.equal(139);
			expect(+mani).to.equal(139);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(mani.valueOf).to.be.function();
			expect(mani.valueOf()).to.equal(139);
			expect(Number(mani)).to.equal(139);
			expect(+mani).to.equal(139);

			expect(0 + mani).to.equal('0Mani');
			expect(String(mani)).to.equal('Mani');

			next();
		});
	});
});
