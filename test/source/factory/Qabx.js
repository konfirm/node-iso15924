/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabx - Reserved for private use (end)', () => {
		const qabx = factory('Qabx');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabx');
			const upper = factory('QABX');
			const lower = factory('qabx');
			const code = factory.code('Qabx');
			const numeric = factory.numeric('949');
			const number = factory.numeric(949);
			const instance = new ISO15924('Qabx', '949');

			expect(singleton).to.shallow.equal(qabx);
			expect(upper).to.shallow.equal(qabx);
			expect(lower).to.shallow.equal(qabx);
			expect(code).to.shallow.equal(qabx);
			expect(numeric).to.shallow.equal(qabx);
			expect(number).to.shallow.equal(qabx);
			expect(instance).not.to.shallow.equal(qabx);
			expect(instance.code).to.equal(qabx.code);
			expect(instance.numeric).to.equal(qabx.numeric);

			next();
		});

		it('has code "Qabx"', (next) => {
			expect(qabx.code).to.equal('Qabx');

			next();
		});

		it('has numeric "949"', (next) => {
			expect(qabx.numeric).to.equal('949');

			next();
		});

		it('implements toString', (next) => {
			expect(qabx.toString).to.be.function();
			expect(qabx.toString()).to.equal('Qabx');
			expect(String(qabx)).to.equal('Qabx');
			expect(0 + qabx).to.equal('0Qabx');
			expect('code:' + qabx).to.equal('code:Qabx');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabx.toJSON).to.be.function();
			expect(qabx.toJSON()).to.equal('Qabx');
			expect(JSON.stringify(qabx)).to.equal('"Qabx"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabx.valueOf).to.be.function();
			expect(qabx.valueOf()).to.equal(949);
			expect(Number(qabx)).to.equal(949);
			expect(+qabx).to.equal(949);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabx.valueOf).to.be.function();
			expect(qabx.valueOf()).to.equal(949);
			expect(Number(qabx)).to.equal(949);
			expect(+qabx).to.equal(949);

			expect(0 + qabx).to.equal('0Qabx');
			expect(String(qabx)).to.equal('Qabx');

			next();
		});
	});
});
