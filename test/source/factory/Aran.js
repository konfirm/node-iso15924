/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Aran - Arabic (Nastaliq variant)', () => {
		const aran = factory('Aran');

		it('instances are singletons', (next) => {
			const singleton = factory('Aran');
			const upper = factory('ARAN');
			const lower = factory('aran');
			const code = factory.code('Aran');
			const numeric = factory.numeric('161');
			const number = factory.numeric(161);
			const instance = new ISO15924('Aran', '161');

			expect(singleton).to.shallow.equal(aran);
			expect(upper).to.shallow.equal(aran);
			expect(lower).to.shallow.equal(aran);
			expect(code).to.shallow.equal(aran);
			expect(numeric).to.shallow.equal(aran);
			expect(number).to.shallow.equal(aran);
			expect(instance).not.to.shallow.equal(aran);
			expect(instance.code).to.equal(aran.code);
			expect(instance.numeric).to.equal(aran.numeric);

			next();
		});

		it('has code "Aran"', (next) => {
			expect(aran.code).to.equal('Aran');

			next();
		});

		it('has numeric "161"', (next) => {
			expect(aran.numeric).to.equal('161');

			next();
		});

		it('implements toString', (next) => {
			expect(aran.toString).to.be.function();
			expect(aran.toString()).to.equal('Aran');
			expect(String(aran)).to.equal('Aran');
			expect(0 + aran).to.equal('0Aran');
			expect('code:' + aran).to.equal('code:Aran');

			next();
		});

		it('implements toJSON', (next) => {
			expect(aran.toJSON).to.be.function();
			expect(aran.toJSON()).to.equal('Aran');
			expect(JSON.stringify(aran)).to.equal('"Aran"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(aran.valueOf).to.be.function();
			expect(aran.valueOf()).to.equal(161);
			expect(Number(aran)).to.equal(161);
			expect(+aran).to.equal(161);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(aran.valueOf).to.be.function();
			expect(aran.valueOf()).to.equal(161);
			expect(Number(aran)).to.equal(161);
			expect(+aran).to.equal(161);

			expect(0 + aran).to.equal('0Aran');
			expect(String(aran)).to.equal('Aran');

			next();
		});
	});
});
