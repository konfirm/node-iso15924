/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Shui - Shuishu', () => {
		const shui = factory('Shui');

		it('instances are singletons', (next) => {
			const singleton = factory('Shui');
			const upper = factory('SHUI');
			const lower = factory('shui');
			const code = factory.code('Shui');
			const numeric = factory.numeric('530');
			const number = factory.numeric(530);
			const instance = new ISO15924('Shui', '530');

			expect(singleton).to.shallow.equal(shui);
			expect(upper).to.shallow.equal(shui);
			expect(lower).to.shallow.equal(shui);
			expect(code).to.shallow.equal(shui);
			expect(numeric).to.shallow.equal(shui);
			expect(number).to.shallow.equal(shui);
			expect(instance).not.to.shallow.equal(shui);
			expect(instance.code).to.equal(shui.code);
			expect(instance.numeric).to.equal(shui.numeric);

			next();
		});

		it('has code "Shui"', (next) => {
			expect(shui.code).to.equal('Shui');

			next();
		});

		it('has numeric "530"', (next) => {
			expect(shui.numeric).to.equal('530');

			next();
		});

		it('implements toString', (next) => {
			expect(shui.toString).to.be.function();
			expect(shui.toString()).to.equal('Shui');
			expect(String(shui)).to.equal('Shui');
			expect(0 + shui).to.equal('0Shui');
			expect('code:' + shui).to.equal('code:Shui');

			next();
		});

		it('implements toJSON', (next) => {
			expect(shui.toJSON).to.be.function();
			expect(shui.toJSON()).to.equal('Shui');
			expect(JSON.stringify(shui)).to.equal('"Shui"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(shui.valueOf).to.be.function();
			expect(shui.valueOf()).to.equal(530);
			expect(Number(shui)).to.equal(530);
			expect(+shui).to.equal(530);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(shui.valueOf).to.be.function();
			expect(shui.valueOf()).to.equal(530);
			expect(Number(shui)).to.equal(530);
			expect(+shui).to.equal(530);

			expect(0 + shui).to.equal('0Shui');
			expect(String(shui)).to.equal('Shui');

			next();
		});
	});
});
