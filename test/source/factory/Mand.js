/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Mand - Mandaic, Mandaean', () => {
		const mand = factory('Mand');

		it('instances are singletons', (next) => {
			const singleton = factory('Mand');
			const upper = factory('MAND');
			const lower = factory('mand');
			const code = factory.code('Mand');
			const numeric = factory.numeric('140');
			const number = factory.numeric(140);
			const instance = new ISO15924('Mand', '140');

			expect(singleton).to.shallow.equal(mand);
			expect(upper).to.shallow.equal(mand);
			expect(lower).to.shallow.equal(mand);
			expect(code).to.shallow.equal(mand);
			expect(numeric).to.shallow.equal(mand);
			expect(number).to.shallow.equal(mand);
			expect(instance).not.to.shallow.equal(mand);
			expect(instance.code).to.equal(mand.code);
			expect(instance.numeric).to.equal(mand.numeric);

			next();
		});

		it('has code "Mand"', (next) => {
			expect(mand.code).to.equal('Mand');

			next();
		});

		it('has numeric "140"', (next) => {
			expect(mand.numeric).to.equal('140');

			next();
		});

		it('implements toString', (next) => {
			expect(mand.toString).to.be.function();
			expect(mand.toString()).to.equal('Mand');
			expect(String(mand)).to.equal('Mand');
			expect(0 + mand).to.equal('0Mand');
			expect('code:' + mand).to.equal('code:Mand');

			next();
		});

		it('implements toJSON', (next) => {
			expect(mand.toJSON).to.be.function();
			expect(mand.toJSON()).to.equal('Mand');
			expect(JSON.stringify(mand)).to.equal('"Mand"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(mand.valueOf).to.be.function();
			expect(mand.valueOf()).to.equal(140);
			expect(Number(mand)).to.equal(140);
			expect(+mand).to.equal(140);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(mand.valueOf).to.be.function();
			expect(mand.valueOf()).to.equal(140);
			expect(Number(mand)).to.equal(140);
			expect(+mand).to.equal(140);

			expect(0 + mand).to.equal('0Mand');
			expect(String(mand)).to.equal('Mand');

			next();
		});
	});
});
