/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabw - Codes reserved for private use', () => {
		const qabw = factory('Qabw');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabw');
			const upper = factory('QABW');
			const lower = factory('qabw');
			const code = factory.code('Qabw');
			const numeric = factory.numeric('948');
			const number = factory.numeric(948);
			const instance = new ISO15924('Qabw', '948');

			expect(singleton).to.shallow.equal(qabw);
			expect(upper).to.shallow.equal(qabw);
			expect(lower).to.shallow.equal(qabw);
			expect(code).to.shallow.equal(qabw);
			expect(numeric).to.shallow.equal(qabw);
			expect(number).to.shallow.equal(qabw);
			expect(instance).not.to.shallow.equal(qabw);
			expect(instance.code).to.equal(qabw.code);
			expect(instance.numeric).to.equal(qabw.numeric);

			next();
		});

		it('has code "Qabw"', (next) => {
			expect(qabw.code).to.equal('Qabw');

			next();
		});

		it('has numeric "948"', (next) => {
			expect(qabw.numeric).to.equal('948');

			next();
		});

		it('implements toString', (next) => {
			expect(qabw.toString).to.be.function();
			expect(qabw.toString()).to.equal('Qabw');
			expect(String(qabw)).to.equal('Qabw');
			expect(0 + qabw).to.equal('0Qabw');
			expect('code:' + qabw).to.equal('code:Qabw');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabw.toJSON).to.be.function();
			expect(qabw.toJSON()).to.equal('Qabw');
			expect(JSON.stringify(qabw)).to.equal('"Qabw"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabw.valueOf).to.be.function();
			expect(qabw.valueOf()).to.equal(948);
			expect(Number(qabw)).to.equal(948);
			expect(+qabw).to.equal(948);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabw.valueOf).to.be.function();
			expect(qabw.valueOf()).to.equal(948);
			expect(Number(qabw)).to.equal(948);
			expect(+qabw).to.equal(948);

			expect(0 + qabw).to.equal('0Qabw');
			expect(String(qabw)).to.equal('Qabw');

			next();
		});
	});
});
