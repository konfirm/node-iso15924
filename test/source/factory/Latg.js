/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Latg - Latin (Gaelic variant)', () => {
		const latg = factory('Latg');

		it('instances are singletons', (next) => {
			const singleton = factory('Latg');
			const upper = factory('LATG');
			const lower = factory('latg');
			const code = factory.code('Latg');
			const numeric = factory.numeric('216');
			const number = factory.numeric(216);
			const instance = new ISO15924('Latg', '216');

			expect(singleton).to.shallow.equal(latg);
			expect(upper).to.shallow.equal(latg);
			expect(lower).to.shallow.equal(latg);
			expect(code).to.shallow.equal(latg);
			expect(numeric).to.shallow.equal(latg);
			expect(number).to.shallow.equal(latg);
			expect(instance).not.to.shallow.equal(latg);
			expect(instance.code).to.equal(latg.code);
			expect(instance.numeric).to.equal(latg.numeric);

			next();
		});

		it('has code "Latg"', (next) => {
			expect(latg.code).to.equal('Latg');

			next();
		});

		it('has numeric "216"', (next) => {
			expect(latg.numeric).to.equal('216');

			next();
		});

		it('implements toString', (next) => {
			expect(latg.toString).to.be.function();
			expect(latg.toString()).to.equal('Latg');
			expect(String(latg)).to.equal('Latg');
			expect(0 + latg).to.equal('0Latg');
			expect('code:' + latg).to.equal('code:Latg');

			next();
		});

		it('implements toJSON', (next) => {
			expect(latg.toJSON).to.be.function();
			expect(latg.toJSON()).to.equal('Latg');
			expect(JSON.stringify(latg)).to.equal('"Latg"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(latg.valueOf).to.be.function();
			expect(latg.valueOf()).to.equal(216);
			expect(Number(latg)).to.equal(216);
			expect(+latg).to.equal(216);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(latg.valueOf).to.be.function();
			expect(latg.valueOf()).to.equal(216);
			expect(Number(latg)).to.equal(216);
			expect(+latg).to.equal(216);

			expect(0 + latg).to.equal('0Latg');
			expect(String(latg)).to.equal('Latg');

			next();
		});
	});
});
