/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabr - Codes reserved for private use', () => {
		const qabr = factory('Qabr');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabr');
			const upper = factory('QABR');
			const lower = factory('qabr');
			const code = factory.code('Qabr');
			const numeric = factory.numeric('943');
			const number = factory.numeric(943);
			const instance = new ISO15924('Qabr', '943');

			expect(singleton).to.shallow.equal(qabr);
			expect(upper).to.shallow.equal(qabr);
			expect(lower).to.shallow.equal(qabr);
			expect(code).to.shallow.equal(qabr);
			expect(numeric).to.shallow.equal(qabr);
			expect(number).to.shallow.equal(qabr);
			expect(instance).not.to.shallow.equal(qabr);
			expect(instance.code).to.equal(qabr.code);
			expect(instance.numeric).to.equal(qabr.numeric);

			next();
		});

		it('has code "Qabr"', (next) => {
			expect(qabr.code).to.equal('Qabr');

			next();
		});

		it('has numeric "943"', (next) => {
			expect(qabr.numeric).to.equal('943');

			next();
		});

		it('implements toString', (next) => {
			expect(qabr.toString).to.be.function();
			expect(qabr.toString()).to.equal('Qabr');
			expect(String(qabr)).to.equal('Qabr');
			expect(0 + qabr).to.equal('0Qabr');
			expect('code:' + qabr).to.equal('code:Qabr');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabr.toJSON).to.be.function();
			expect(qabr.toJSON()).to.equal('Qabr');
			expect(JSON.stringify(qabr)).to.equal('"Qabr"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabr.valueOf).to.be.function();
			expect(qabr.valueOf()).to.equal(943);
			expect(Number(qabr)).to.equal(943);
			expect(+qabr).to.equal(943);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabr.valueOf).to.be.function();
			expect(qabr.valueOf()).to.equal(943);
			expect(Number(qabr)).to.equal(943);
			expect(+qabr).to.equal(943);

			expect(0 + qabr).to.equal('0Qabr');
			expect(String(qabr)).to.equal('Qabr');

			next();
		});
	});
});
