/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaan - Codes reserved for private use', () => {
		const qaan = factory('Qaan');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaan');
			const upper = factory('QAAN');
			const lower = factory('qaan');
			const code = factory.code('Qaan');
			const numeric = factory.numeric('913');
			const number = factory.numeric(913);
			const instance = new ISO15924('Qaan', '913');

			expect(singleton).to.shallow.equal(qaan);
			expect(upper).to.shallow.equal(qaan);
			expect(lower).to.shallow.equal(qaan);
			expect(code).to.shallow.equal(qaan);
			expect(numeric).to.shallow.equal(qaan);
			expect(number).to.shallow.equal(qaan);
			expect(instance).not.to.shallow.equal(qaan);
			expect(instance.code).to.equal(qaan.code);
			expect(instance.numeric).to.equal(qaan.numeric);

			next();
		});

		it('has code "Qaan"', (next) => {
			expect(qaan.code).to.equal('Qaan');

			next();
		});

		it('has numeric "913"', (next) => {
			expect(qaan.numeric).to.equal('913');

			next();
		});

		it('implements toString', (next) => {
			expect(qaan.toString).to.be.function();
			expect(qaan.toString()).to.equal('Qaan');
			expect(String(qaan)).to.equal('Qaan');
			expect(0 + qaan).to.equal('0Qaan');
			expect('code:' + qaan).to.equal('code:Qaan');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaan.toJSON).to.be.function();
			expect(qaan.toJSON()).to.equal('Qaan');
			expect(JSON.stringify(qaan)).to.equal('"Qaan"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaan.valueOf).to.be.function();
			expect(qaan.valueOf()).to.equal(913);
			expect(Number(qaan)).to.equal(913);
			expect(+qaan).to.equal(913);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaan.valueOf).to.be.function();
			expect(qaan.valueOf()).to.equal(913);
			expect(Number(qaan)).to.equal(913);
			expect(+qaan).to.equal(913);

			expect(0 + qaan).to.equal('0Qaan');
			expect(String(qaan)).to.equal('Qaan');

			next();
		});
	});
});
