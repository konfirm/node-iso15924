/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaaj - Codes reserved for private use', () => {
		const qaaj = factory('Qaaj');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaaj');
			const upper = factory('QAAJ');
			const lower = factory('qaaj');
			const code = factory.code('Qaaj');
			const numeric = factory.numeric('909');
			const number = factory.numeric(909);
			const instance = new ISO15924('Qaaj', '909');

			expect(singleton).to.shallow.equal(qaaj);
			expect(upper).to.shallow.equal(qaaj);
			expect(lower).to.shallow.equal(qaaj);
			expect(code).to.shallow.equal(qaaj);
			expect(numeric).to.shallow.equal(qaaj);
			expect(number).to.shallow.equal(qaaj);
			expect(instance).not.to.shallow.equal(qaaj);
			expect(instance.code).to.equal(qaaj.code);
			expect(instance.numeric).to.equal(qaaj.numeric);

			next();
		});

		it('has code "Qaaj"', (next) => {
			expect(qaaj.code).to.equal('Qaaj');

			next();
		});

		it('has numeric "909"', (next) => {
			expect(qaaj.numeric).to.equal('909');

			next();
		});

		it('implements toString', (next) => {
			expect(qaaj.toString).to.be.function();
			expect(qaaj.toString()).to.equal('Qaaj');
			expect(String(qaaj)).to.equal('Qaaj');
			expect(0 + qaaj).to.equal('0Qaaj');
			expect('code:' + qaaj).to.equal('code:Qaaj');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaaj.toJSON).to.be.function();
			expect(qaaj.toJSON()).to.equal('Qaaj');
			expect(JSON.stringify(qaaj)).to.equal('"Qaaj"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaaj.valueOf).to.be.function();
			expect(qaaj.valueOf()).to.equal(909);
			expect(Number(qaaj)).to.equal(909);
			expect(+qaaj).to.equal(909);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaaj.valueOf).to.be.function();
			expect(qaaj.valueOf()).to.equal(909);
			expect(Number(qaaj)).to.equal(909);
			expect(+qaaj).to.equal(909);

			expect(0 + qaaj).to.equal('0Qaaj');
			expect(String(qaaj)).to.equal('Qaaj');

			next();
		});
	});
});
