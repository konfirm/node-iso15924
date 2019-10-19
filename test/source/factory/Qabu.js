/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabu - Codes reserved for private use', () => {
		const qabu = factory('Qabu');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabu');
			const upper = factory('QABU');
			const lower = factory('qabu');
			const code = factory.code('Qabu');
			const numeric = factory.numeric('946');
			const number = factory.numeric(946);
			const instance = new ISO15924('Qabu', '946');

			expect(singleton).to.shallow.equal(qabu);
			expect(upper).to.shallow.equal(qabu);
			expect(lower).to.shallow.equal(qabu);
			expect(code).to.shallow.equal(qabu);
			expect(numeric).to.shallow.equal(qabu);
			expect(number).to.shallow.equal(qabu);
			expect(instance).not.to.shallow.equal(qabu);
			expect(instance.code).to.equal(qabu.code);
			expect(instance.numeric).to.equal(qabu.numeric);

			next();
		});

		it('has code "Qabu"', (next) => {
			expect(qabu.code).to.equal('Qabu');

			next();
		});

		it('has numeric "946"', (next) => {
			expect(qabu.numeric).to.equal('946');

			next();
		});

		it('implements toString', (next) => {
			expect(qabu.toString).to.be.function();
			expect(qabu.toString()).to.equal('Qabu');
			expect(String(qabu)).to.equal('Qabu');
			expect(0 + qabu).to.equal('0Qabu');
			expect('code:' + qabu).to.equal('code:Qabu');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabu.toJSON).to.be.function();
			expect(qabu.toJSON()).to.equal('Qabu');
			expect(JSON.stringify(qabu)).to.equal('"Qabu"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabu.valueOf).to.be.function();
			expect(qabu.valueOf()).to.equal(946);
			expect(Number(qabu)).to.equal(946);
			expect(+qabu).to.equal(946);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabu.valueOf).to.be.function();
			expect(qabu.valueOf()).to.equal(946);
			expect(Number(qabu)).to.equal(946);
			expect(+qabu).to.equal(946);

			expect(0 + qabu).to.equal('0Qabu');
			expect(String(qabu)).to.equal('Qabu');

			next();
		});
	});
});
