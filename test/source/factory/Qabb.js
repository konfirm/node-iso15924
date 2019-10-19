/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabb - Codes reserved for private use', () => {
		const qabb = factory('Qabb');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabb');
			const upper = factory('QABB');
			const lower = factory('qabb');
			const code = factory.code('Qabb');
			const numeric = factory.numeric('927');
			const number = factory.numeric(927);
			const instance = new ISO15924('Qabb', '927');

			expect(singleton).to.shallow.equal(qabb);
			expect(upper).to.shallow.equal(qabb);
			expect(lower).to.shallow.equal(qabb);
			expect(code).to.shallow.equal(qabb);
			expect(numeric).to.shallow.equal(qabb);
			expect(number).to.shallow.equal(qabb);
			expect(instance).not.to.shallow.equal(qabb);
			expect(instance.code).to.equal(qabb.code);
			expect(instance.numeric).to.equal(qabb.numeric);

			next();
		});

		it('has code "Qabb"', (next) => {
			expect(qabb.code).to.equal('Qabb');

			next();
		});

		it('has numeric "927"', (next) => {
			expect(qabb.numeric).to.equal('927');

			next();
		});

		it('implements toString', (next) => {
			expect(qabb.toString).to.be.function();
			expect(qabb.toString()).to.equal('Qabb');
			expect(String(qabb)).to.equal('Qabb');
			expect(0 + qabb).to.equal('0Qabb');
			expect('code:' + qabb).to.equal('code:Qabb');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabb.toJSON).to.be.function();
			expect(qabb.toJSON()).to.equal('Qabb');
			expect(JSON.stringify(qabb)).to.equal('"Qabb"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabb.valueOf).to.be.function();
			expect(qabb.valueOf()).to.equal(927);
			expect(Number(qabb)).to.equal(927);
			expect(+qabb).to.equal(927);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabb.valueOf).to.be.function();
			expect(qabb.valueOf()).to.equal(927);
			expect(Number(qabb)).to.equal(927);
			expect(+qabb).to.equal(927);

			expect(0 + qabb).to.equal('0Qabb');
			expect(String(qabb)).to.equal('Qabb');

			next();
		});
	});
});
