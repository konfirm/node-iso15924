/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hira - Hiragana', () => {
		const hira = factory('Hira');

		it('instances are singletons', (next) => {
			const singleton = factory('Hira');
			const upper = factory('HIRA');
			const lower = factory('hira');
			const code = factory.code('Hira');
			const numeric = factory.numeric('410');
			const number = factory.numeric(410);
			const instance = new ISO15924('Hira', '410');

			expect(singleton).to.shallow.equal(hira);
			expect(upper).to.shallow.equal(hira);
			expect(lower).to.shallow.equal(hira);
			expect(code).to.shallow.equal(hira);
			expect(numeric).to.shallow.equal(hira);
			expect(number).to.shallow.equal(hira);
			expect(instance).not.to.shallow.equal(hira);
			expect(instance.code).to.equal(hira.code);
			expect(instance.numeric).to.equal(hira.numeric);

			next();
		});

		it('has code "Hira"', (next) => {
			expect(hira.code).to.equal('Hira');

			next();
		});

		it('has numeric "410"', (next) => {
			expect(hira.numeric).to.equal('410');

			next();
		});

		it('implements toString', (next) => {
			expect(hira.toString).to.be.function();
			expect(hira.toString()).to.equal('Hira');
			expect(String(hira)).to.equal('Hira');
			expect(0 + hira).to.equal('0Hira');
			expect('code:' + hira).to.equal('code:Hira');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hira.toJSON).to.be.function();
			expect(hira.toJSON()).to.equal('Hira');
			expect(JSON.stringify(hira)).to.equal('"Hira"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hira.valueOf).to.be.function();
			expect(hira.valueOf()).to.equal(410);
			expect(Number(hira)).to.equal(410);
			expect(+hira).to.equal(410);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hira.valueOf).to.be.function();
			expect(hira.valueOf()).to.equal(410);
			expect(Number(hira)).to.equal(410);
			expect(+hira).to.equal(410);

			expect(0 + hira).to.equal('0Hira');
			expect(String(hira)).to.equal('Hira');

			next();
		});
	});
});
