/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Telu - Telugu', () => {
		const telu = factory('Telu');

		it('instances are singletons', (next) => {
			const singleton = factory('Telu');
			const upper = factory('TELU');
			const lower = factory('telu');
			const code = factory.code('Telu');
			const numeric = factory.numeric('340');
			const number = factory.numeric(340);
			const instance = new ISO15924('Telu', '340');

			expect(singleton).to.shallow.equal(telu);
			expect(upper).to.shallow.equal(telu);
			expect(lower).to.shallow.equal(telu);
			expect(code).to.shallow.equal(telu);
			expect(numeric).to.shallow.equal(telu);
			expect(number).to.shallow.equal(telu);
			expect(instance).not.to.shallow.equal(telu);
			expect(instance.code).to.equal(telu.code);
			expect(instance.numeric).to.equal(telu.numeric);

			next();
		});

		it('has code "Telu"', (next) => {
			expect(telu.code).to.equal('Telu');

			next();
		});

		it('has numeric "340"', (next) => {
			expect(telu.numeric).to.equal('340');

			next();
		});

		it('implements toString', (next) => {
			expect(telu.toString).to.be.function();
			expect(telu.toString()).to.equal('Telu');
			expect(String(telu)).to.equal('Telu');
			expect(0 + telu).to.equal('0Telu');
			expect('code:' + telu).to.equal('code:Telu');

			next();
		});

		it('implements toJSON', (next) => {
			expect(telu.toJSON).to.be.function();
			expect(telu.toJSON()).to.equal('Telu');
			expect(JSON.stringify(telu)).to.equal('"Telu"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(telu.valueOf).to.be.function();
			expect(telu.valueOf()).to.equal(340);
			expect(Number(telu)).to.equal(340);
			expect(+telu).to.equal(340);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(telu.valueOf).to.be.function();
			expect(telu.valueOf()).to.equal(340);
			expect(Number(telu)).to.equal(340);
			expect(+telu).to.equal(340);

			expect(0 + telu).to.equal('0Telu');
			expect(String(telu)).to.equal('Telu');

			next();
		});
	});
});
