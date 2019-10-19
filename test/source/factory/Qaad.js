/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaad - Codes reserved for private use', () => {
		const qaad = factory('Qaad');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaad');
			const upper = factory('QAAD');
			const lower = factory('qaad');
			const code = factory.code('Qaad');
			const numeric = factory.numeric('903');
			const number = factory.numeric(903);
			const instance = new ISO15924('Qaad', '903');

			expect(singleton).to.shallow.equal(qaad);
			expect(upper).to.shallow.equal(qaad);
			expect(lower).to.shallow.equal(qaad);
			expect(code).to.shallow.equal(qaad);
			expect(numeric).to.shallow.equal(qaad);
			expect(number).to.shallow.equal(qaad);
			expect(instance).not.to.shallow.equal(qaad);
			expect(instance.code).to.equal(qaad.code);
			expect(instance.numeric).to.equal(qaad.numeric);

			next();
		});

		it('has code "Qaad"', (next) => {
			expect(qaad.code).to.equal('Qaad');

			next();
		});

		it('has numeric "903"', (next) => {
			expect(qaad.numeric).to.equal('903');

			next();
		});

		it('implements toString', (next) => {
			expect(qaad.toString).to.be.function();
			expect(qaad.toString()).to.equal('Qaad');
			expect(String(qaad)).to.equal('Qaad');
			expect(0 + qaad).to.equal('0Qaad');
			expect('code:' + qaad).to.equal('code:Qaad');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaad.toJSON).to.be.function();
			expect(qaad.toJSON()).to.equal('Qaad');
			expect(JSON.stringify(qaad)).to.equal('"Qaad"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaad.valueOf).to.be.function();
			expect(qaad.valueOf()).to.equal(903);
			expect(Number(qaad)).to.equal(903);
			expect(+qaad).to.equal(903);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaad.valueOf).to.be.function();
			expect(qaad.valueOf()).to.equal(903);
			expect(Number(qaad)).to.equal(903);
			expect(+qaad).to.equal(903);

			expect(0 + qaad).to.equal('0Qaad');
			expect(String(qaad)).to.equal('Qaad');

			next();
		});
	});
});
