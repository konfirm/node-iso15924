/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hmnp - Nyiakeng Puachue Hmong', () => {
		const hmnp = factory('Hmnp');

		it('instances are singletons', (next) => {
			const singleton = factory('Hmnp');
			const upper = factory('HMNP');
			const lower = factory('hmnp');
			const code = factory.code('Hmnp');
			const numeric = factory.numeric('451');
			const number = factory.numeric(451);
			const instance = new ISO15924('Hmnp', '451');

			expect(singleton).to.shallow.equal(hmnp);
			expect(upper).to.shallow.equal(hmnp);
			expect(lower).to.shallow.equal(hmnp);
			expect(code).to.shallow.equal(hmnp);
			expect(numeric).to.shallow.equal(hmnp);
			expect(number).to.shallow.equal(hmnp);
			expect(instance).not.to.shallow.equal(hmnp);
			expect(instance.code).to.equal(hmnp.code);
			expect(instance.numeric).to.equal(hmnp.numeric);

			next();
		});

		it('has code "Hmnp"', (next) => {
			expect(hmnp.code).to.equal('Hmnp');

			next();
		});

		it('has numeric "451"', (next) => {
			expect(hmnp.numeric).to.equal('451');

			next();
		});

		it('implements toString', (next) => {
			expect(hmnp.toString).to.be.function();
			expect(hmnp.toString()).to.equal('Hmnp');
			expect(String(hmnp)).to.equal('Hmnp');
			expect(0 + hmnp).to.equal('0Hmnp');
			expect('code:' + hmnp).to.equal('code:Hmnp');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hmnp.toJSON).to.be.function();
			expect(hmnp.toJSON()).to.equal('Hmnp');
			expect(JSON.stringify(hmnp)).to.equal('"Hmnp"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hmnp.valueOf).to.be.function();
			expect(hmnp.valueOf()).to.equal(451);
			expect(Number(hmnp)).to.equal(451);
			expect(+hmnp).to.equal(451);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hmnp.valueOf).to.be.function();
			expect(hmnp.valueOf()).to.equal(451);
			expect(Number(hmnp)).to.equal(451);
			expect(+hmnp).to.equal(451);

			expect(0 + hmnp).to.equal('0Hmnp');
			expect(String(hmnp)).to.equal('Hmnp');

			next();
		});
	});
});
