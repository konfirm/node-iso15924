/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Armn - Armenian', () => {
		const armn = factory('Armn');

		it('instances are singletons', (next) => {
			const singleton = factory('Armn');
			const upper = factory('ARMN');
			const lower = factory('armn');
			const code = factory.code('Armn');
			const numeric = factory.numeric('230');
			const number = factory.numeric(230);
			const instance = new ISO15924('Armn', '230');

			expect(singleton).to.shallow.equal(armn);
			expect(upper).to.shallow.equal(armn);
			expect(lower).to.shallow.equal(armn);
			expect(code).to.shallow.equal(armn);
			expect(numeric).to.shallow.equal(armn);
			expect(number).to.shallow.equal(armn);
			expect(instance).not.to.shallow.equal(armn);
			expect(instance.code).to.equal(armn.code);
			expect(instance.numeric).to.equal(armn.numeric);

			next();
		});

		it('has code "Armn"', (next) => {
			expect(armn.code).to.equal('Armn');

			next();
		});

		it('has numeric "230"', (next) => {
			expect(armn.numeric).to.equal('230');

			next();
		});

		it('implements toString', (next) => {
			expect(armn.toString).to.be.function();
			expect(armn.toString()).to.equal('Armn');
			expect(String(armn)).to.equal('Armn');
			expect(0 + armn).to.equal('0Armn');
			expect('code:' + armn).to.equal('code:Armn');

			next();
		});

		it('implements toJSON', (next) => {
			expect(armn.toJSON).to.be.function();
			expect(armn.toJSON()).to.equal('Armn');
			expect(JSON.stringify(armn)).to.equal('"Armn"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(armn.valueOf).to.be.function();
			expect(armn.valueOf()).to.equal(230);
			expect(Number(armn)).to.equal(230);
			expect(+armn).to.equal(230);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(armn.valueOf).to.be.function();
			expect(armn.valueOf()).to.equal(230);
			expect(Number(armn)).to.equal(230);
			expect(+armn).to.equal(230);

			expect(0 + armn).to.equal('0Armn');
			expect(String(armn)).to.equal('Armn');

			next();
		});
	});
});
