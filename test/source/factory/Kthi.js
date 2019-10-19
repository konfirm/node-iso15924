/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Kthi - Kaithi', () => {
		const kthi = factory('Kthi');

		it('instances are singletons', (next) => {
			const singleton = factory('Kthi');
			const upper = factory('KTHI');
			const lower = factory('kthi');
			const code = factory.code('Kthi');
			const numeric = factory.numeric('317');
			const number = factory.numeric(317);
			const instance = new ISO15924('Kthi', '317');

			expect(singleton).to.shallow.equal(kthi);
			expect(upper).to.shallow.equal(kthi);
			expect(lower).to.shallow.equal(kthi);
			expect(code).to.shallow.equal(kthi);
			expect(numeric).to.shallow.equal(kthi);
			expect(number).to.shallow.equal(kthi);
			expect(instance).not.to.shallow.equal(kthi);
			expect(instance.code).to.equal(kthi.code);
			expect(instance.numeric).to.equal(kthi.numeric);

			next();
		});

		it('has code "Kthi"', (next) => {
			expect(kthi.code).to.equal('Kthi');

			next();
		});

		it('has numeric "317"', (next) => {
			expect(kthi.numeric).to.equal('317');

			next();
		});

		it('implements toString', (next) => {
			expect(kthi.toString).to.be.function();
			expect(kthi.toString()).to.equal('Kthi');
			expect(String(kthi)).to.equal('Kthi');
			expect(0 + kthi).to.equal('0Kthi');
			expect('code:' + kthi).to.equal('code:Kthi');

			next();
		});

		it('implements toJSON', (next) => {
			expect(kthi.toJSON).to.be.function();
			expect(kthi.toJSON()).to.equal('Kthi');
			expect(JSON.stringify(kthi)).to.equal('"Kthi"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(kthi.valueOf).to.be.function();
			expect(kthi.valueOf()).to.equal(317);
			expect(Number(kthi)).to.equal(317);
			expect(+kthi).to.equal(317);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(kthi.valueOf).to.be.function();
			expect(kthi.valueOf()).to.equal(317);
			expect(Number(kthi)).to.equal(317);
			expect(+kthi).to.equal(317);

			expect(0 + kthi).to.equal('0Kthi');
			expect(String(kthi)).to.equal('Kthi');

			next();
		});
	});
});
