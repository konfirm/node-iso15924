/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabo - Codes reserved for private use', () => {
		const qabo = factory('Qabo');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabo');
			const upper = factory('QABO');
			const lower = factory('qabo');
			const code = factory.code('Qabo');
			const numeric = factory.numeric('940');
			const number = factory.numeric(940);
			const instance = new ISO15924('Qabo', '940');

			expect(singleton).to.shallow.equal(qabo);
			expect(upper).to.shallow.equal(qabo);
			expect(lower).to.shallow.equal(qabo);
			expect(code).to.shallow.equal(qabo);
			expect(numeric).to.shallow.equal(qabo);
			expect(number).to.shallow.equal(qabo);
			expect(instance).not.to.shallow.equal(qabo);
			expect(instance.code).to.equal(qabo.code);
			expect(instance.numeric).to.equal(qabo.numeric);

			next();
		});

		it('has code "Qabo"', (next) => {
			expect(qabo.code).to.equal('Qabo');

			next();
		});

		it('has numeric "940"', (next) => {
			expect(qabo.numeric).to.equal('940');

			next();
		});

		it('implements toString', (next) => {
			expect(qabo.toString).to.be.function();
			expect(qabo.toString()).to.equal('Qabo');
			expect(String(qabo)).to.equal('Qabo');
			expect(0 + qabo).to.equal('0Qabo');
			expect('code:' + qabo).to.equal('code:Qabo');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabo.toJSON).to.be.function();
			expect(qabo.toJSON()).to.equal('Qabo');
			expect(JSON.stringify(qabo)).to.equal('"Qabo"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabo.valueOf).to.be.function();
			expect(qabo.valueOf()).to.equal(940);
			expect(Number(qabo)).to.equal(940);
			expect(+qabo).to.equal(940);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabo.valueOf).to.be.function();
			expect(qabo.valueOf()).to.equal(940);
			expect(Number(qabo)).to.equal(940);
			expect(+qabo).to.equal(940);

			expect(0 + qabo).to.equal('0Qabo');
			expect(String(qabo)).to.equal('Qabo');

			next();
		});
	});
});
