/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Sora - Sora Sompeng', () => {
		const sora = factory('Sora');

		it('instances are singletons', (next) => {
			const singleton = factory('Sora');
			const upper = factory('SORA');
			const lower = factory('sora');
			const code = factory.code('Sora');
			const numeric = factory.numeric('398');
			const number = factory.numeric(398);
			const instance = new ISO15924('Sora', '398');

			expect(singleton).to.shallow.equal(sora);
			expect(upper).to.shallow.equal(sora);
			expect(lower).to.shallow.equal(sora);
			expect(code).to.shallow.equal(sora);
			expect(numeric).to.shallow.equal(sora);
			expect(number).to.shallow.equal(sora);
			expect(instance).not.to.shallow.equal(sora);
			expect(instance.code).to.equal(sora.code);
			expect(instance.numeric).to.equal(sora.numeric);

			next();
		});

		it('has code "Sora"', (next) => {
			expect(sora.code).to.equal('Sora');

			next();
		});

		it('has numeric "398"', (next) => {
			expect(sora.numeric).to.equal('398');

			next();
		});

		it('implements toString', (next) => {
			expect(sora.toString).to.be.function();
			expect(sora.toString()).to.equal('Sora');
			expect(String(sora)).to.equal('Sora');
			expect(0 + sora).to.equal('0Sora');
			expect('code:' + sora).to.equal('code:Sora');

			next();
		});

		it('implements toJSON', (next) => {
			expect(sora.toJSON).to.be.function();
			expect(sora.toJSON()).to.equal('Sora');
			expect(JSON.stringify(sora)).to.equal('"Sora"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(sora.valueOf).to.be.function();
			expect(sora.valueOf()).to.equal(398);
			expect(Number(sora)).to.equal(398);
			expect(+sora).to.equal(398);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(sora.valueOf).to.be.function();
			expect(sora.valueOf()).to.equal(398);
			expect(Number(sora)).to.equal(398);
			expect(+sora).to.equal(398);

			expect(0 + sora).to.equal('0Sora');
			expect(String(sora)).to.equal('Sora');

			next();
		});
	});
});
