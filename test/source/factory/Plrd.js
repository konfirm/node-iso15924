/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Plrd - Miao (Pollard)', () => {
		const plrd = factory('Plrd');

		it('instances are singletons', (next) => {
			const singleton = factory('Plrd');
			const upper = factory('PLRD');
			const lower = factory('plrd');
			const code = factory.code('Plrd');
			const numeric = factory.numeric('282');
			const number = factory.numeric(282);
			const instance = new ISO15924('Plrd', '282');

			expect(singleton).to.shallow.equal(plrd);
			expect(upper).to.shallow.equal(plrd);
			expect(lower).to.shallow.equal(plrd);
			expect(code).to.shallow.equal(plrd);
			expect(numeric).to.shallow.equal(plrd);
			expect(number).to.shallow.equal(plrd);
			expect(instance).not.to.shallow.equal(plrd);
			expect(instance.code).to.equal(plrd.code);
			expect(instance.numeric).to.equal(plrd.numeric);

			next();
		});

		it('has code "Plrd"', (next) => {
			expect(plrd.code).to.equal('Plrd');

			next();
		});

		it('has numeric "282"', (next) => {
			expect(plrd.numeric).to.equal('282');

			next();
		});

		it('implements toString', (next) => {
			expect(plrd.toString).to.be.function();
			expect(plrd.toString()).to.equal('Plrd');
			expect(String(plrd)).to.equal('Plrd');
			expect(0 + plrd).to.equal('0Plrd');
			expect('code:' + plrd).to.equal('code:Plrd');

			next();
		});

		it('implements toJSON', (next) => {
			expect(plrd.toJSON).to.be.function();
			expect(plrd.toJSON()).to.equal('Plrd');
			expect(JSON.stringify(plrd)).to.equal('"Plrd"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(plrd.valueOf).to.be.function();
			expect(plrd.valueOf()).to.equal(282);
			expect(Number(plrd)).to.equal(282);
			expect(+plrd).to.equal(282);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(plrd.valueOf).to.be.function();
			expect(plrd.valueOf()).to.equal(282);
			expect(Number(plrd)).to.equal(282);
			expect(+plrd).to.equal(282);

			expect(0 + plrd).to.equal('0Plrd');
			expect(String(plrd)).to.equal('Plrd');

			next();
		});
	});
});
