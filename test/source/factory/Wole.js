/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Wole - Woleai', () => {
		const wole = factory('Wole');

		it('instances are singletons', (next) => {
			const singleton = factory('Wole');
			const upper = factory('WOLE');
			const lower = factory('wole');
			const code = factory.code('Wole');
			const numeric = factory.numeric('480');
			const number = factory.numeric(480);
			const instance = new ISO15924('Wole', '480');

			expect(singleton).to.shallow.equal(wole);
			expect(upper).to.shallow.equal(wole);
			expect(lower).to.shallow.equal(wole);
			expect(code).to.shallow.equal(wole);
			expect(numeric).to.shallow.equal(wole);
			expect(number).to.shallow.equal(wole);
			expect(instance).not.to.shallow.equal(wole);
			expect(instance.code).to.equal(wole.code);
			expect(instance.numeric).to.equal(wole.numeric);

			next();
		});

		it('has code "Wole"', (next) => {
			expect(wole.code).to.equal('Wole');

			next();
		});

		it('has numeric "480"', (next) => {
			expect(wole.numeric).to.equal('480');

			next();
		});

		it('implements toString', (next) => {
			expect(wole.toString).to.be.function();
			expect(wole.toString()).to.equal('Wole');
			expect(String(wole)).to.equal('Wole');
			expect(0 + wole).to.equal('0Wole');
			expect('code:' + wole).to.equal('code:Wole');

			next();
		});

		it('implements toJSON', (next) => {
			expect(wole.toJSON).to.be.function();
			expect(wole.toJSON()).to.equal('Wole');
			expect(JSON.stringify(wole)).to.equal('"Wole"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(wole.valueOf).to.be.function();
			expect(wole.valueOf()).to.equal(480);
			expect(Number(wole)).to.equal(480);
			expect(+wole).to.equal(480);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(wole.valueOf).to.be.function();
			expect(wole.valueOf()).to.equal(480);
			expect(Number(wole)).to.equal(480);
			expect(+wole).to.equal(480);

			expect(0 + wole).to.equal('0Wole');
			expect(String(wole)).to.equal('Wole');

			next();
		});
	});
});
