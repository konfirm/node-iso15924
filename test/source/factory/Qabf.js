/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabf - Codes reserved for private use', () => {
		const qabf = factory('Qabf');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabf');
			const upper = factory('QABF');
			const lower = factory('qabf');
			const code = factory.code('Qabf');
			const numeric = factory.numeric('931');
			const number = factory.numeric(931);
			const instance = new ISO15924('Qabf', '931');

			expect(singleton).to.shallow.equal(qabf);
			expect(upper).to.shallow.equal(qabf);
			expect(lower).to.shallow.equal(qabf);
			expect(code).to.shallow.equal(qabf);
			expect(numeric).to.shallow.equal(qabf);
			expect(number).to.shallow.equal(qabf);
			expect(instance).not.to.shallow.equal(qabf);
			expect(instance.code).to.equal(qabf.code);
			expect(instance.numeric).to.equal(qabf.numeric);

			next();
		});

		it('has code "Qabf"', (next) => {
			expect(qabf.code).to.equal('Qabf');

			next();
		});

		it('has numeric "931"', (next) => {
			expect(qabf.numeric).to.equal('931');

			next();
		});

		it('implements toString', (next) => {
			expect(qabf.toString).to.be.function();
			expect(qabf.toString()).to.equal('Qabf');
			expect(String(qabf)).to.equal('Qabf');
			expect(0 + qabf).to.equal('0Qabf');
			expect('code:' + qabf).to.equal('code:Qabf');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabf.toJSON).to.be.function();
			expect(qabf.toJSON()).to.equal('Qabf');
			expect(JSON.stringify(qabf)).to.equal('"Qabf"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabf.valueOf).to.be.function();
			expect(qabf.valueOf()).to.equal(931);
			expect(Number(qabf)).to.equal(931);
			expect(+qabf).to.equal(931);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabf.valueOf).to.be.function();
			expect(qabf.valueOf()).to.equal(931);
			expect(Number(qabf)).to.equal(931);
			expect(+qabf).to.equal(931);

			expect(0 + qabf).to.equal('0Qabf');
			expect(String(qabf)).to.equal('Qabf');

			next();
		});
	});
});
