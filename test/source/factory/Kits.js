/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Kits - Khitan small script', () => {
		const kits = factory('Kits');

		it('instances are singletons', (next) => {
			const singleton = factory('Kits');
			const upper = factory('KITS');
			const lower = factory('kits');
			const code = factory.code('Kits');
			const numeric = factory.numeric('288');
			const number = factory.numeric(288);
			const instance = new ISO15924('Kits', '288');

			expect(singleton).to.shallow.equal(kits);
			expect(upper).to.shallow.equal(kits);
			expect(lower).to.shallow.equal(kits);
			expect(code).to.shallow.equal(kits);
			expect(numeric).to.shallow.equal(kits);
			expect(number).to.shallow.equal(kits);
			expect(instance).not.to.shallow.equal(kits);
			expect(instance.code).to.equal(kits.code);
			expect(instance.numeric).to.equal(kits.numeric);

			next();
		});

		it('has code "Kits"', (next) => {
			expect(kits.code).to.equal('Kits');

			next();
		});

		it('has numeric "288"', (next) => {
			expect(kits.numeric).to.equal('288');

			next();
		});

		it('implements toString', (next) => {
			expect(kits.toString).to.be.function();
			expect(kits.toString()).to.equal('Kits');
			expect(String(kits)).to.equal('Kits');
			expect(0 + kits).to.equal('0Kits');
			expect('code:' + kits).to.equal('code:Kits');

			next();
		});

		it('implements toJSON', (next) => {
			expect(kits.toJSON).to.be.function();
			expect(kits.toJSON()).to.equal('Kits');
			expect(JSON.stringify(kits)).to.equal('"Kits"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(kits.valueOf).to.be.function();
			expect(kits.valueOf()).to.equal(288);
			expect(Number(kits)).to.equal(288);
			expect(+kits).to.equal(288);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(kits.valueOf).to.be.function();
			expect(kits.valueOf()).to.equal(288);
			expect(Number(kits)).to.equal(288);
			expect(+kits).to.equal(288);

			expect(0 + kits).to.equal('0Kits');
			expect(String(kits)).to.equal('Kits');

			next();
		});
	});
});
