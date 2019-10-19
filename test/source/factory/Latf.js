/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Latf - Latin (Fraktur variant)', () => {
		const latf = factory('Latf');

		it('instances are singletons', (next) => {
			const singleton = factory('Latf');
			const upper = factory('LATF');
			const lower = factory('latf');
			const code = factory.code('Latf');
			const numeric = factory.numeric('217');
			const number = factory.numeric(217);
			const instance = new ISO15924('Latf', '217');

			expect(singleton).to.shallow.equal(latf);
			expect(upper).to.shallow.equal(latf);
			expect(lower).to.shallow.equal(latf);
			expect(code).to.shallow.equal(latf);
			expect(numeric).to.shallow.equal(latf);
			expect(number).to.shallow.equal(latf);
			expect(instance).not.to.shallow.equal(latf);
			expect(instance.code).to.equal(latf.code);
			expect(instance.numeric).to.equal(latf.numeric);

			next();
		});

		it('has code "Latf"', (next) => {
			expect(latf.code).to.equal('Latf');

			next();
		});

		it('has numeric "217"', (next) => {
			expect(latf.numeric).to.equal('217');

			next();
		});

		it('implements toString', (next) => {
			expect(latf.toString).to.be.function();
			expect(latf.toString()).to.equal('Latf');
			expect(String(latf)).to.equal('Latf');
			expect(0 + latf).to.equal('0Latf');
			expect('code:' + latf).to.equal('code:Latf');

			next();
		});

		it('implements toJSON', (next) => {
			expect(latf.toJSON).to.be.function();
			expect(latf.toJSON()).to.equal('Latf');
			expect(JSON.stringify(latf)).to.equal('"Latf"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(latf.valueOf).to.be.function();
			expect(latf.valueOf()).to.equal(217);
			expect(Number(latf)).to.equal(217);
			expect(+latf).to.equal(217);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(latf.valueOf).to.be.function();
			expect(latf.valueOf()).to.equal(217);
			expect(Number(latf)).to.equal(217);
			expect(+latf).to.equal(217);

			expect(0 + latf).to.equal('0Latf');
			expect(String(latf)).to.equal('Latf');

			next();
		});
	});
});
